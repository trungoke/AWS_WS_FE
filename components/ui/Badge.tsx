import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base premium badge styles
          "inline-flex items-center rounded-full border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300",
          "backdrop-blur-sm shadow-glow-sm hover:scale-110",

          // Variant styles with neon effects
          {
            "border-primary-600/50 bg-primary-600/10 text-primary-400 hover:bg-primary-600/20 hover:shadow-glow": variant === 'default',
            "border-dark-600 bg-dark-700/50 text-gray-300 hover:bg-dark-600/50": variant === 'secondary',
            "border-red-600/50 bg-red-600/10 text-red-400 hover:bg-red-600/20 hover:shadow-glow": variant === 'destructive',
            "border-primary-600 bg-transparent text-primary-400 hover:bg-primary-600/10": variant === 'outline',
            "border-green-600/50 bg-green-600/10 text-green-400 hover:bg-green-600/20 hover:shadow-glow": variant === 'success',
            "border-yellow-600/50 bg-yellow-600/10 text-yellow-400 hover:bg-yellow-600/20 hover:shadow-glow": variant === 'warning',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };

