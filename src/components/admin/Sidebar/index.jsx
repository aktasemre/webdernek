'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  FaNewspaper, 
  FaCalendar, 
  FaUsers, 
  FaDonate,
  FaCog,
  FaSignOutAlt 
} from 'react-icons/fa';
import styles from './Sidebar.module.scss';
import { authService } from '@/services/api';

const menuItems = [
  { icon: FaNewspaper, label: 'Haberler', path: '/admin/news' },
  { icon: FaCalendar, label: 'Etkinlikler', path: '/admin/events' },
  { icon: FaUsers, label: 'Üyeler', path: '/admin/members' },
  { icon: FaDonate, label: 'Bağışlar', path: '/admin/donations' },
  { icon: FaCog, label: 'Ayarlar', path: '/admin/settings' },
];

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    authService.logout();
    router.push('/auth/login');
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2>Admin Panel</h2>
      </div>
      
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}
          >
            <item.icon />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <button className={styles.logoutButton} onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Çıkış Yap</span>
      </button>
    </aside>
  );
} 