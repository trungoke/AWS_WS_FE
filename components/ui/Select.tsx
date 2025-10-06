import React, { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          // Premium select with glassmorphism
          'flex h-14 w-full rounded-xl border-2 border-dark-700/50 px-5 py-4 text-base text-white ring-offset-black',
          'bg-dark-800/50 backdrop-blur-xl shadow-inner',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:border-primary-600/50',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'transition-all duration-300 cursor-pointer',
          // Focus and hover effects
          'focus:shadow-glow focus:bg-dark-800/70',
          'hover:border-dark-600/50 hover:bg-dark-800/60',
          // Custom select arrow
          "appearance-none bg-[url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%23dc2626%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat",
          className
        )}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';

export { Select };

