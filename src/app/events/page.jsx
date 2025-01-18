'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import eventsData from '@/data/events.data.json';
import styles from './events.module.scss';

export default function EventsPage() {
  const [filter, setFilter] = useState('all');
  const events = eventsData.events;

  const filteredEvents =
    filter === 'all' ? events : events.filter((event) => event.type === filter);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Etkinlikler</h1>
        <p>Derneğimizin düzenlediği tüm etkinlikleri buradan takip edebilirsiniz.</p>
      </header>

      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          Tümü
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'meeting' ? styles.active : ''}`}
          onClick={() => setFilter('meeting')}
        >
          Toplantılar
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'festival' ? styles.active : ''}`}
          onClick={() => setFilter('festival')}
        >
          Festivaller
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'dinner' ? styles.active : ''}`}
          onClick={() => setFilter('dinner')}
        >
          Yemekler
        </button>
      </div>

      <div className={styles.eventGrid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.imageContainer}>
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={250}
                className={styles.image}
              />
              {event.isUpcoming && <span className={styles.upcomingBadge}>Yaklaşan Etkinlik</span>}
            </div>
            <div className={styles.content}>
              <h3>{event.title}</h3>
              <p className={styles.description}>{event.description}</p>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <FaCalendarAlt />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className={styles.detail}>
                  <FaClock />
                  <span>{event.time}</span>
                </div>
                <div className={styles.detail}>
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className={styles.joinButton}>Katıl</button>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className={styles.noEvents}>
          <p>Bu kategoride etkinlik bulunmamaktadır.</p>
        </div>
      )}
    </div>
  );
}
