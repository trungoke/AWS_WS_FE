import React from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  children: React.ReactNode;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        'input',
        error && 'border-red-500 focus-visible:ring-red-500',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
