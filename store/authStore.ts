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
          // Call Backend API instead of Cognito
          const response = await api.auth.login(email, password);

          if (response.success && response.data) {
            const { user, token } = response.data as any;

            // Save token to localStorage
            if (typeof window !== 'undefined') {
              localStorage.setItem('auth_token', token);
            }
            
            // Set user in store
            set({
              user: {
                id: user.id.toString(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                role: user.role, // This will be ADMIN, GYM_STAFF, PT_USER, or CLIENT_USER
                profileImageUrl: user.profileImageUrl,
                createdAt: user.createdAt || new Date().toISOString(),
                updatedAt: user.updatedAt || new Date().toISOString(),
              },
              isAuthenticated: true,
              isLoading: false 
            });

            console.log('✅ Login successful! User role:', user.role);
          } else {
            throw new Error(response.error || 'Login failed');
          }
        } catch (error) {
          console.error('❌ Login error:', error);
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false 
          });
          throw error;
        }
      },

      logout: async () => {
        try {
          await cognito.signOut();
        } catch (error) {
          console.error('Logout error:', error);
        } finally {
          // Clear token from localStorage
          if (typeof window !== 'undefined') {
            localStorage.removeItem('auth_token');
          }

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
          // Call Backend API to register
          const response = await api.auth.register({
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            role: userData.role,
          });
          
          if (response.success && response.data) {
            const data = response.data as any;

            // Check if backend returns token
            if (data.token) {
              // Backend returns token - save directly
              const { user, token } = data;

              if (typeof window !== 'undefined') {
                localStorage.setItem('auth_token', token);
              }

              set({
                user: {
                  id: user.id.toString(),
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  phoneNumber: user.phoneNumber,
                  role: user.role,
                  profileImageUrl: user.profileImageUrl,
                  createdAt: user.createdAt || new Date().toISOString(),
                  updatedAt: user.updatedAt || new Date().toISOString(),
                },
                isAuthenticated: true,
                isLoading: false
              });

              console.log('✅ Registration successful! User role:', user.role);
            } else {
              // Backend doesn't return token - auto login
              console.log('⚠️ Token not returned, auto-logging in...');

              // Call login API
              const loginResponse = await api.auth.login(userData.email, userData.password);

              if (loginResponse.success && loginResponse.data) {
                const { user, token } = loginResponse.data as any;

                if (typeof window !== 'undefined') {
                  localStorage.setItem('auth_token', token);
                }

                set({
                  user: {
                    id: user.id.toString(),
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    role: user.role,
                    profileImageUrl: user.profileImageUrl,
                    createdAt: user.createdAt || new Date().toISOString(),
                    updatedAt: user.updatedAt || new Date().toISOString(),
                  },
                  isAuthenticated: true,
                  isLoading: false
                });

                console.log('✅ Auto-login successful! User role:', user.role);
              } else {
                throw new Error('Auto-login failed after registration');
              }
            }
          } else {
            throw new Error(response.error || 'Registration failed');
          }
        } catch (error) {
          console.error('❌ Registration error:', error);
          set({
            error: error instanceof Error ? error.message : 'Registration failed',
            isLoading: false 
          });
          throw error;
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
          const result = await cognito.forgotPasswordSubmit(email, code, newPassword);

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
          // Check if we have a token in localStorage
          if (typeof window !== 'undefined') {
            const token = localStorage.getItem('auth_token');

            if (token) {
              // Try to get current user from persisted state
              const { user } = get();

              if (user) {
                console.log('✅ Restored auth from localStorage:', user.role);
                set({
                  user,
                  isAuthenticated: true,
                  isLoading: false
                });
                return;
              }
            }
          }

          // No valid auth found
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false
          });
        } catch (error) {
          console.error('Auth initialization error:', error);
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
