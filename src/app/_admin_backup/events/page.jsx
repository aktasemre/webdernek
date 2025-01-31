'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaEdit, FaTrash, FaEye, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { eventService } from '@/services/api';
import styles from './events.module.scss';

export default function EventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventService.getAll();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Bu etkinliği silmek istediğinize emin misiniz?')) {
      try {
        await eventService.delete(id);
        setEvents(events.filter(event => event.id !== id));
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <div className={styles.eventsPage}>
      <div className={styles.header}>
        <h1>Etkinlikler</h1>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/admin/events/create')}
        >
          <FaPlus /> Etkinlik Ekle
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {loading ? (
        <div className={styles.loading}>Yükleniyor...</div>
      ) : (
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <FaCalendar />
                    <span>
                      {new Date(event.startDate).toLocaleString('tr-TR')}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <FaMapMarkerAlt />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className={styles.participants}>
                  <span>Katılımcı: {event.currentParticipants}/{event.maxParticipants}</span>
                </div>
                <div className={styles.actions}>
                  <button 
                    onClick={() => router.push(`/admin/events/view/${event.id}`)}
                    className={styles.viewButton}
                  >
                    <FaEye /> Görüntüle
                  </button>
                  <button 
                    onClick={() => router.push(`/admin/events/edit/${event.id}`)}
                    className={styles.editButton}
                  >
                    <FaEdit /> Düzenle
                  </button>
                  <button 
                    onClick={() => handleDelete(event.id)}
                    className={styles.deleteButton}
                  >
                    <FaTrash /> Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 