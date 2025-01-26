'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaUsers, FaNewspaper, FaCalendar, FaDonate,
  FaUserPlus, FaPlus, FaMoneyBill, FaChartBar 
} from 'react-icons/fa';
import styles from './admin.module.scss';

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (!userData.role || userData.role !== 'ROLE_ADMIN') {
      router.push('/auth/login');
      return;
    }
    setUser(userData);
  }, [router]);

  const stats = [
    {
      icon: FaUsers,
      title: 'Üyeler',
      count: '150 Kayıtlı',
      path: '/admin/members',
      color: '#60a5fa'
    },
    {
      icon: FaNewspaper,
      title: 'Haberler',
      count: '12 Aktif',
      path: '/admin/news',
      color: '#10b981'
    },
    {
      icon: FaCalendar,
      title: 'Etkinlikler',
      count: '5 Yaklaşan',
      path: '/admin/events',
      color: '#f59e0b'
    },
    {
      icon: FaDonate,
      title: 'Bağışlar',
      count: '₺25,000',
      path: '/admin/donations',
      color: '#8b5cf6'
    }
  ];

  const quickActions = [
    {
      label: 'Üye Ekle',
      icon: <FaUserPlus />,
      path: '/admin/members/create',
      color: '#60a5fa'
    },
    {
      label: 'Haber Ekle',
      icon: <FaNewspaper />,
      path: '/admin/news/create',
      color: '#10b981'
    },
    {
      label: 'Etkinlik Ekle',
      icon: <FaCalendar />,
      path: '/admin/events/create',
      color: '#f59e0b'
    },
    {
      label: 'Bağış Kaydet',
      icon: <FaDonate />,
      path: '/admin/donations/create',
      color: '#8b5cf6'
    },
    {
      label: 'Aidat Yönetimi',
      icon: <FaMoneyBill />,
      path: '/admin/dues',
      color: '#ec4899'
    },
    {
      label: 'İstatistikler',
      icon: <FaChartBar />,
      path: '/admin/statistics',
      color: '#6366f1'
    }
  ];

  if (!user) return null;

  return (
    <div className={styles.adminPage}>
      <h1>Yönetim Paneli</h1>
      
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div 
            key={stat.title} 
            className={styles.statCard}
            onClick={() => router.push(stat.path)}
            style={{ '--card-color': stat.color }}
          >
            <stat.icon className={styles.icon} />
            <h3>{stat.title}</h3>
            <p>{stat.count}</p>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <h2>Hızlı İşlemler</h2>
        <div className={styles.actionButtons}>
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => router.push(action.path)}
              className={styles.actionButton}
              style={{ '--button-color': action.color }}
            >
              {action.icon}
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 