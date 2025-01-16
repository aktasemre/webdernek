'use client';

import { useState } from 'react';
import styles from './EventCalendar.module.scss';

const EventCalendar = ({ events = [] }) => {
  const [mounted, setMounted] = useState(false);

  // Eğer events prop'u boşsa varsayılan etkinlikleri göster
  const displayEvents = events.length > 0 ? events : [
    {
      id: 1,
      date: '20 Kasım',
      title: 'Köy Toplantısı',
      description: 'Köy konağında genel değerlendirme toplantısı yapılacaktır.',
      time: '14:00'
    },
    {
      id: 2,
      date: '25 Kasım',
      title: 'Tarım Semineri',
      description: 'Modern tarım teknikleri hakkında bilgilendirme semineri.',
      time: '15:30'
    },
    {
      id: 3,
      date: '1 Aralık',
      title: 'Gençlik Merkezi Açılışı',
      description: 'Yeni gençlik merkezimizin resmi açılış töreni.',
      time: '10:00'
    }
  ];

  return (
    <section className={styles.eventCalendar}>
      <div className={styles.container}>
        <div className={styles.eventList}>
          {displayEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.dateBox}>
                <span className={styles.date}>
                  {event.date.includes('-') 
                    ? new Date(event.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })
                    : event.date
                  }
                </span>
                <span className={styles.time}>{event.time}</span>
              </div>
              <div className={styles.details}>
                <h3>{event.title}</h3>
                <p>{event.description || event.location}</p>
              </div>
              <button className={styles.joinButton}>
                Katıl
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCalendar; 