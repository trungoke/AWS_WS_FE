import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'input',
        error && 'border-red-500 focus-visible:ring-red-500',
        className
      )}
      {...props}
    />
  );
}
