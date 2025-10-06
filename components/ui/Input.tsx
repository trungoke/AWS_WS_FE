import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Premium input with glassmorphism
          'flex h-14 w-full rounded-xl border-2 border-dark-700/50 px-5 py-4 text-base text-white ring-offset-black',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-gray-500 placeholder:font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600/50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-all duration-300',
          // Glassmorphism background
          'bg-dark-800/50 backdrop-blur-xl shadow-inner',
          // Focus effects
          'focus:shadow-glow focus:bg-dark-800/70',
          // Hover effects
          'hover:border-dark-600/50 hover:bg-dark-800/60',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };

