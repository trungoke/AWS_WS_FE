'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DebugAuthPage() {
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [userJson, setUserJson] = useState('');

  useEffect(() => {
    if (user) {
      setUserJson(JSON.stringify(user, null, 2));
    }
  }, [user]);

  const testRedirect = () => {
    if (!user) {
      alert('No user found! Please login first.');
      return;
    }

    console.log('Current user:', user);
    console.log('User role:', user.role);
    console.log('User role type:', typeof user.role);

    switch (user.role) {
      case 'ADMIN':
        router.push('/dashboard/admin');
        break;
      case 'GYM_STAFF':
        router.push('/dashboard/gym-staff');
        break;
      case 'PT_USER':
        router.push('/dashboard/pt');
        break;
      case 'CLIENT_USER':
        router.push('/dashboard');
        break;
      default:
        alert(`Unknown role: ${user.role}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary-500">🔍 AUTH DEBUG PAGE</h1>

        <div className="space-y-6">
          {/* Authentication Status */}
          <div className="glass-card p-6 rounded-xl border border-primary-600/30">
            <h2 className="text-2xl font-bold mb-4">Authentication Status</h2>
            <div className="space-y-2">
              <p><strong>Is Authenticated:</strong> {isAuthenticated ? '✅ YES' : '❌ NO'}</p>
              <p><strong>Has User Object:</strong> {user ? '✅ YES' : '❌ NO'}</p>
            </div>
          </div>

          {/* User Object */}
          {user && (
            <div className="glass-card p-6 rounded-xl border border-primary-600/30">
              <h2 className="text-2xl font-bold mb-4">User Object</h2>
              <div className="space-y-3">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p className="text-2xl">
                  <strong>Role:</strong>
                  <span className="ml-2 px-4 py-2 bg-primary-600 rounded-lg font-black">
                    {user.role}
                  </span>
                </p>
                <p><strong>Role Type:</strong> {typeof user.role}</p>
              </div>
            </div>
          )}

          {/* Expected Redirect */}
          {user && (
            <div className="glass-card p-6 rounded-xl border border-yellow-600/30">
              <h2 className="text-2xl font-bold mb-4">Expected Redirect</h2>
              <div className="space-y-2">
                {user.role === 'ADMIN' && (
                  <p className="text-xl">✅ Should redirect to: <strong className="text-green-500">/dashboard/admin</strong></p>
                )}
                {user.role === 'GYM_STAFF' && (
                  <p className="text-xl">✅ Should redirect to: <strong className="text-green-500">/dashboard/gym-staff</strong></p>
                )}
                {user.role === 'PT_USER' && (
                  <p className="text-xl">✅ Should redirect to: <strong className="text-green-500">/dashboard/pt</strong></p>
                )}
                {user.role === 'CLIENT_USER' && (
                  <p className="text-xl">✅ Should redirect to: <strong className="text-green-500">/dashboard</strong></p>
                )}
                {!['ADMIN', 'GYM_STAFF', 'PT_USER', 'CLIENT_USER'].includes(user.role) && (
                  <p className="text-xl text-red-500">❌ Unknown role: {user.role}</p>
                )}
              </div>
            </div>
          )}

          {/* Raw JSON */}
          {user && (
            <div className="glass-card p-6 rounded-xl border border-primary-600/30">
              <h2 className="text-2xl font-bold mb-4">Raw User JSON</h2>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-sm">
                {userJson}
              </pre>
            </div>
          )}

          {/* LocalStorage Check */}
          <div className="glass-card p-6 rounded-xl border border-primary-600/30">
            <h2 className="text-2xl font-bold mb-4">LocalStorage Check</h2>
            <button
              onClick={() => {
                const authState = localStorage.getItem('auth-storage');
                if (authState) {
                  const parsed = JSON.parse(authState);
                  alert('Found in localStorage:\n\n' + JSON.stringify(parsed, null, 2));
                  console.log('Auth from localStorage:', parsed);
                } else {
                  alert('No auth-storage found in localStorage');
                }
              }}
              className="btn-primary"
            >
              Check LocalStorage
            </button>
          </div>

          {/* Test Redirect Button */}
          {user && (
            <div className="glass-card p-6 rounded-xl border border-green-600/30">
              <h2 className="text-2xl font-bold mb-4">Test Redirect</h2>
              <button
                onClick={testRedirect}
                className="btn-primary text-lg px-8 py-4"
              >
                🚀 Test Redirect Now
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="glass-card p-6 rounded-xl border border-primary-600/30">
            <h2 className="text-2xl font-bold mb-4">Manual Navigation</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => router.push('/auth/login')}
                className="btn-outline"
              >
                Go to Login
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                className="btn-outline"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => router.push('/dashboard/admin')}
                className="btn-outline"
              >
                Go to Admin Dashboard
              </button>
              <button
                onClick={() => router.push('/dashboard/gym-staff')}
                className="btn-outline"
              >
                Go to Gym Staff Dashboard
              </button>
              <button
                onClick={() => router.push('/dashboard/pt')}
                className="btn-outline"
              >
                Go to PT Dashboard
              </button>
              <button
                onClick={() => router.push('/')}
                className="btn-outline"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

