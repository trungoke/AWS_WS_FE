import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles with 3D effects
          'inline-flex items-center justify-center rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden',
          'transform-3d hover:scale-105 active:scale-95',

          // Variant styles
          {
            'bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white shadow-glow hover:shadow-neon hover:from-primary-500 hover:via-primary-600 hover:to-primary-700':
              variant === 'default',
            'bg-gradient-to-r from-red-600 to-red-800 text-white shadow-glow hover:shadow-neon-lg':
              variant === 'destructive',
            'border-2 border-primary-600/80 text-primary-400 shadow-glow-sm backdrop-blur-sm hover:bg-primary-600 hover:text-white hover:shadow-neon':
              variant === 'outline',
            'bg-dark-800/80 backdrop-blur-md text-white hover:bg-dark-700/90 border-2 border-dark-700 hover:border-primary-600/50 shadow-3d hover:shadow-glow':
              variant === 'secondary',
            'text-gray-300 hover:bg-white/5 hover:text-white backdrop-blur-sm':
              variant === 'ghost',
            'text-primary-500 underline-offset-4 hover:underline': variant === 'link',
          },

          // Size styles
          {
            'h-12 px-8 py-3': size === 'default',
            'h-10 px-6 text-xs rounded-lg': size === 'sm',
            'h-16 px-12 text-base rounded-2xl': size === 'lg',
            'h-12 w-12': size === 'icon',
          },

          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };

