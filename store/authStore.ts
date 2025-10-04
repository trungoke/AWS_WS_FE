import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, UserRole } from '@/types';
import { cognito } from '@/lib/cognito';
import { api } from '@/lib/api';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
  confirmSignUp: (email: string, code: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (email: string, code: string, newPassword: string) => Promise<void>;
  hasRole: (role: UserRole) => boolean;
  hasAnyRole: (roles: UserRole[]) => boolean;
  initializeAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user,
        error: null 
      }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const result = await cognito.signIn(email, password);
          
          if (result.success && result.data) {
            // Register user in backend if not already registered
            try {
              await api.auth.register({
                email: result.data.user.email,
                firstName: result.data.user.firstName,
                lastName: result.data.user.lastName,
                phoneNumber: result.data.user.phoneNumber,
                role: result.data.user.role,
                profileImageUrl: result.data.user.profileImageUrl,
              });
            } catch (error) {
              // User might already be registered, continue
              console.log('User registration check:', error);
            }
            
            set({ 
              user: result.data.user, 
              isAuthenticated: true, 
              isLoading: false 
            });
          } else {
            throw new Error(result.error || 'Login failed');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false 
          });
        }
      },

      logout: async () => {
        try {
          await cognito.signOut();
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          set({ 
            user: null, 
            isAuthenticated: false, 
            error: null 
          });
        }
      },

      register: async (userData: any) => {
        set({ isLoading: true, error: null });
        try {
          const result = await cognito.signUp(userData.email, userData.password, {
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            role: userData.role,
          });
          
          if (result.success) {
            set({ 
              isLoading: false,
              error: null
            });
            // User needs to confirm email before being authenticated
          } else {
            throw new Error(result.error || 'Registration failed');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Registration failed',
            isLoading: false 
          });
        }
      },

      confirmSignUp: async (email: string, code: string) => {
        set({ isLoading: true, error: null });
        try {
          const result = await cognito.confirmSignUp(email, code);
          
          if (result.success) {
            set({ 
              isLoading: false,
              error: null
            });
          } else {
            throw new Error(result.error || 'Confirmation failed');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Confirmation failed',
            isLoading: false 
          });
        }
      },

      forgotPassword: async (email: string) => {
        set({ isLoading: true, error: null });
        try {
          const result = await cognito.forgotPassword(email);
          
          if (result.success) {
            set({ 
              isLoading: false,
              error: null
            });
          } else {
            throw new Error(result.error || 'Forgot password failed');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Forgot password failed',
            isLoading: false 
          });
        }
      },

      resetPassword: async (email: string, code: string, newPassword: string) => {
        set({ isLoading: true, error: null });
        try {
          const result = await cognito.resetPassword(email, code, newPassword);
          
          if (result.success) {
            set({ 
              isLoading: false,
              error: null
            });
          } else {
            throw new Error(result.error || 'Reset password failed');
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Reset password failed',
            isLoading: false 
          });
        }
      },

      initializeAuth: async () => {
        set({ isLoading: true });
        try {
          const user = await cognito.getCurrentUser();
          if (user) {
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false 
            });
          } else {
            set({ 
              user: null, 
              isAuthenticated: false, 
              isLoading: false 
            });
          }
        } catch (error) {
          set({ 
            user: null, 
            isAuthenticated: false, 
            isLoading: false 
          });
        }
      },

      hasRole: (role: UserRole) => {
        const { user } = get();
        return user?.role === role;
      },

      hasAnyRole: (roles: UserRole[]) => {
        const { user } = get();
        return user ? roles.includes(user.role) : false;
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);
