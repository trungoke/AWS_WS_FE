'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function ForceLogoutPage() {
  const router = useRouter();
  const { logout } = useAuthStore();

  useEffect(() => {
    const clearEverything = async () => {
      // 1. Logout from store
      await logout();

      // 2. Clear all storage
      if (typeof window !== 'undefined') {
        localStorage.clear();
        sessionStorage.clear();

        // 3. Clear all cookies
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
      }

      // 4. Wait a bit
      await new Promise(resolve => setTimeout(resolve, 500));

      // 5. Redirect to login
      alert('✅ Đã xóa toàn bộ dữ liệu cũ!\n\nBạn sẽ được chuyển đến trang đăng nhập.\n\nHãy login lại với:\n- Email: admin@easybody.com\n- Password: Password123');
      router.push('/auth/login');
    };

    clearEverything();
  }, [logout, router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">Đang xóa dữ liệu cũ...</h1>
        <p className="text-gray-400">Vui lòng đợi...</p>
      </div>
    </div>
  );
}

