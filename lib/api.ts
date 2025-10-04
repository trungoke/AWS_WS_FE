import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Types for API responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
}

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('auth_token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle common errors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
            window.location.href = '/auth/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic request methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.post(url, data, config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.put(url, data, config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.client.delete(url, config);
      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      return this.handleError(error);
    }
  }

  private handleError(error: any): ApiResponse<any> {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    return {
      success: false,
      error: message,
    };
  }
}

const apiClient = new ApiClient();

// 🔐 Authentication API
export const authApi = {
  register: (data: any) => apiClient.post('/auth/register', data),
  me: () => apiClient.get('/auth/me'),
};

// 🏢 Gym API
export const gymApi = {
  create: (data: any) => apiClient.post('/gyms', data),
  update: (gymId: string, data: any) => apiClient.put(`/gyms/${gymId}`, data),
  getById: (gymId: string) => apiClient.get(`/gyms/${gymId}`),
  getAll: (params?: any) => apiClient.get('/gyms', { params }),
  search: (params: any) => apiClient.get('/gyms/search', { params }),
  assignPT: (gymId: string, ptUserId: string) =>
    apiClient.post(`/gyms/${gymId}/assign-pt`, { ptUserId }),
  getPTAssociations: (gymId: string) =>
    apiClient.get(`/gyms/${gymId}/pt-associations`),
  approvePTAssociation: (id: string) =>
    apiClient.put(`/gyms/pt-associations/${id}/approve`),
  rejectPTAssociation: (id: string) =>
    apiClient.put(`/gyms/pt-associations/${id}/reject`),
};

// 💪 PT User API
export const ptUserApi = {
  create: (data: any) => apiClient.post('/pt-users', data),
  update: (ptUserId: string, data: any) => apiClient.put(`/pt-users/${ptUserId}`, data),
  getById: (ptUserId: string) => apiClient.get(`/pt-users/${ptUserId}`),
  getAll: (params?: any) => apiClient.get('/pt-users', { params }),
  getGymAssociations: (ptUserId: string) =>
    apiClient.get(`/pt-users/${ptUserId}/gym-associations`),
};

// 🎯 Offer API
export const offerApi = {
  create: (data: any) => apiClient.post('/offers', data),
  update: (offerId: string, data: any) => apiClient.put(`/offers/${offerId}`, data),
  getById: (offerId: string) => apiClient.get(`/offers/${offerId}`),
};

// 🔍 Search API
export const searchApi = {
  searchOffers: (data: any) => apiClient.post('/search/offers', data),
  searchOffersQuery: (params: any) => apiClient.get('/search/offers', { params }),
};

// ⭐ Rating API
export const ratingApi = {
  create: (data: any) => apiClient.post('/ratings', data),
  getByOffer: (offerId: string, params?: any) =>
    apiClient.get(`/ratings/offer/${offerId}`, { params }),
};

// 🚩 Report API
export const reportApi = {
  create: (data: any) => apiClient.post('/reports', data),
};

// 👨‍💼 Admin API
export const adminApi = {
  getPendingOffers: (params?: any) =>
    apiClient.get('/admin/offers/pending', { params }),
  moderateOffer: (offerId: string, data: { decision: 'approve' | 'reject', reason?: string }) =>
    apiClient.put(`/admin/offers/${offerId}/moderate`, data),
  getPendingReports: (params?: any) =>
    apiClient.get('/admin/reports/pending', { params }),
  getReportsByStatus: (params?: any) =>
    apiClient.get('/admin/reports', { params }),
  resolveReport: (reportId: string, data?: any) =>
    apiClient.put(`/admin/reports/${reportId}/resolve`, data),
  dismissReport: (reportId: string, data?: any) =>
    apiClient.put(`/admin/reports/${reportId}/dismiss`, data),
  getPendingPTAssociations: (params?: any) =>
    apiClient.get('/admin/pt-associations/pending', { params }),
};

// 📸 Media API
export const mediaApi = {
  getPresignedUrl: (folder: string, fileExtension: string) =>
    apiClient.get('/media/presigned-url', {
      params: { folder, fileExtension }
    }),
};

// Export unified API object
export const api = {
  auth: authApi,
  gyms: gymApi,
  ptUsers: ptUserApi,
  offers: offerApi,
  search: searchApi,
  ratings: ratingApi,
  reports: reportApi,
  admin: adminApi,
  media: mediaApi,
};

export default api;
