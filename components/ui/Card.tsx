import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Premium card with 3D effects
        'rounded-2xl border border-dark-700/50 text-white shadow-3d-lg overflow-hidden transition-all duration-500',
        'bg-gradient-to-br from-dark-800/95 to-dark-900/95 backdrop-blur-md',
        'hover:shadow-glow hover:border-primary-900/50 hover:scale-[1.02] hover:-translate-y-1',
        'transform-3d relative',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-2 p-8 border-b border-dark-700/50',
        'bg-gradient-to-r from-primary-600/5 via-transparent to-primary-800/5',
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-3xl font-black leading-none tracking-tight text-white',
        'hover:text-gradient transition-all duration-300',
        // Add text shadow for depth
        'drop-shadow-[0_2px_10px_rgba(220,38,38,0.3)]',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        'text-base text-gray-400 leading-relaxed',
        'hover:text-gray-300 transition-colors duration-300',
        className
      )}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-8', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center p-8 pt-0 border-t border-dark-700/50',
        'bg-gradient-to-r from-transparent via-primary-600/5 to-transparent',
        className
      )}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

