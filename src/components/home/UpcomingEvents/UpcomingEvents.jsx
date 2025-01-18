'use client';

import Link from 'next/link';
import { FaClock, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import eventsData from '@/data/events.data.json';
import styles from './UpcomingEvents.module.scss';
import PropTypes from 'prop-types';

export default function UpcomingEvents() {
  const upcomingEvents = eventsData.events
    .filter(event => event.isUpcoming)
    .slice(0, 3);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('tr-TR', { month: 'long' })
    };
  };

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <section className={styles.upcomingEvents}>
      <h2>Yaklaşan Etkinlikler</h2>

      <div className={styles.eventList}>
        {upcomingEvents.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <div className={styles.dateBox}>
              <span className={styles.day}>{formatDate(event.date).day}</span>
              <span className={styles.month}>{formatDate(event.date).month}</span>
            </div>
            
            <div className={styles.content}>
              <h3>{event.title}</h3>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <FaClock />
                  <span>{event.time}</span>
                </div>
                <div className={styles.detail}>
                  <FaMapMarkerAlt />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <Link href={`/events/${event.id}`} className={styles.katilButton}>
              Katıl
            </Link>
          </div>
        ))}

        <Link href="/events" className={styles.viewAllButton}>
          Tüm Etkinlikleri Görüntüle <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}

UpcomingEvents.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}; 