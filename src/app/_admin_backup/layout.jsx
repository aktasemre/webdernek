'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/Sidebar';
import styles from './admin.module.scss';

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if (!token || !user.role || user.role !== 'ROLE_ADMIN') {
      router.push('/auth/login');
    }
  }, [router]);

  return (
    <div className={styles.adminLayout}>
      <AdminSidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
} 