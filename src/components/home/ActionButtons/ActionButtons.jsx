'use client';

import Link from 'next/link';
import { FaCalendarAlt, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import styles from './ActionButtons.module.scss';

const actions = [
  {
    icon: <FaCalendarAlt />,
    title: 'Etkinlikler',
    description: 'Yaklaşan etkinliklerimizi görüntüleyin',
    link: '/events',
  },
  {
    icon: <FaUsers />,
    title: 'Üyelik',
    description: 'Derneğimize üye olun',
    link: '/about/members',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Bağış Yap',
    description: 'Köyümüzün gelişimine katkıda bulunun',
    link: '/donate',
  }
];

export default function ActionButtons() {
  return (
    <div className={styles.actionButtons}>
      {actions.map((action, index) => (
        <Link href={action.link} key={index} className={styles.actionButton}>
          <span className={styles.icon}>{action.icon}</span>
          <h3>{action.title}</h3>
          <p>{action.description}</p>
        </Link>
      ))}
    </div>
  );
} 