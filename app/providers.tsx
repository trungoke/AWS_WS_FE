'use client';

import { ReactNode, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    // Initialize auth state from localStorage on app mount
    const initAuth = async () => {
      try {
        // Access the store directly to avoid dependency issues
        const store = useAuthStore.getState();
        await store.initializeAuth();
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      }
    };

    initAuth();
  }, []); // Empty dependency array - only run once on mount

  return (
    <>
      {children}
    </>
  );
}
