import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

// Configure AWS SDK
AWS.config.update({
  region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

export class S3Service {
  private bucketName: string;

  constructor() {
    this.bucketName = process.env.NEXT_PUBLIC_S3_BUCKET || '';
  }

  // Generate signed URL for uploading
  async generateUploadUrl(
    fileType: string,
    folder: string = 'uploads'
  ): Promise<{ uploadUrl: string; key: string }> {
    const key = `${folder}/${uuidv4()}.${fileType.split('/')[1]}`;
    
    const params = {
      Bucket: this.bucketName,
      Key: key,
      ContentType: fileType,
      Expires: 300, // 5 minutes
    };

    try {
      const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
      return { uploadUrl, key };
    } catch (error) {
      throw new Error(`Failed to generate upload URL: ${error}`);
    }
  }

  // Generate signed URL for viewing/downloading
  async generateViewUrl(key: string, expiresIn: number = 3600): Promise<string> {
    const params = {
      Bucket: this.bucketName,
      Key: key,
      Expires: expiresIn,
    };

    try {
      return await s3.getSignedUrlPromise('getObject', params);
    } catch (error) {
      throw new Error(`Failed to generate view URL: ${error}`);
    }
  }

  // Upload file directly to S3
  async uploadFile(
    file: File,
    folder: string = 'uploads',
    onProgress?: (progress: number) => void
  ): Promise<{ key: string; url: string }> {
    const key = `${folder}/${uuidv4()}.${file.name.split('.').pop()}`;
    
    const params = {
      Bucket: this.bucketName,
      Key: key,
      Body: file,
      ContentType: file.type,
    };

    try {
      const upload = s3.upload(params);
      
      if (onProgress) {
        upload.on('httpUploadProgress', (progress) => {
          const percentCompleted = Math.round((progress.loaded / progress.total) * 100);
          onProgress(percentCompleted);
        });
      }

      const result = await upload.promise();
      return {
        key: result.Key,
        url: result.Location,
      };
    } catch (error) {
      throw new Error(`Failed to upload file: ${error}`);
    }
  }

  // Delete file from S3
  async deleteFile(key: string): Promise<void> {
    const params = {
      Bucket: this.bucketName,
      Key: key,
    };

    try {
      await s3.deleteObject(params).promise();
    } catch (error) {
      throw new Error(`Failed to delete file: ${error}`);
    }
  }

  // Get file metadata
  async getFileMetadata(key: string): Promise<any> {
    const params = {
      Bucket: this.bucketName,
      Key: key,
    };

    try {
      const result = await s3.headObject(params).promise();
      return {
        size: result.ContentLength,
        lastModified: result.LastModified,
        contentType: result.ContentType,
        etag: result.ETag,
      };
    } catch (error) {
      throw new Error(`Failed to get file metadata: ${error}`);
    }
  }

  // List files in a folder
  async listFiles(prefix: string = '', maxKeys: number = 1000): Promise<string[]> {
    const params = {
      Bucket: this.bucketName,
      Prefix: prefix,
      MaxKeys: maxKeys,
    };

    try {
      const result = await s3.listObjectsV2(params).promise();
      return result.Contents?.map(obj => obj.Key || '') || [];
    } catch (error) {
      throw new Error(`Failed to list files: ${error}`);
    }
  }
}

// Create singleton instance
export const s3Service = new S3Service();

// Utility functions for common use cases
export const mediaUtils = {
  // Generate image URL with proper sizing
  getImageUrl: (key: string, width?: number, height?: number): string => {
    const baseUrl = `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`;
    let url = `${baseUrl}/${key}`;
    
    if (width || height) {
      // Note: This assumes you have CloudFront or Lambda@Edge for image resizing
      // For now, we'll return the original URL
      url += `?w=${width || ''}&h=${height || ''}`;
    }
    
    return url;
  },

  // Generate thumbnail URL
  getThumbnailUrl: (key: string, size: number = 200): string => {
    return mediaUtils.getImageUrl(key, size, size);
  },

  // Check if file is an image
  isImage: (file: File): boolean => {
    return file.type.startsWith('image/');
  },

  // Check if file is a video
  isVideo: (file: File): boolean => {
    return file.type.startsWith('video/');
  },

  // Get file size in human readable format
  formatFileSize: (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  // Validate file type
  validateFileType: (file: File, allowedTypes: string[]): boolean => {
    return allowedTypes.includes(file.type);
  },

  // Validate file size
  validateFileSize: (file: File, maxSizeInMB: number): boolean => {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  },
};
