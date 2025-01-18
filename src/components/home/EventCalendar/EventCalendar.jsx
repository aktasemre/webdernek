'use client';

import styles from './EventCalendar.module.scss';
import PropTypes from 'prop-types';

const EventCalendar = ({ events = [] }) => {
  return (
    <section className={styles.eventCalendar}>
      <div className={styles.container}>
        <div className={styles.eventList}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.dateBox}>
                <span className={styles.date}>
                  {event.date.includes('-')
                    ? new Date(event.date).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                      })
                    : event.date}
                </span>
                <span className={styles.time}>{event.time}</span>
              </div>
              <div className={styles.details}>
                <h3>{event.title}</h3>
                <p>{event.description || event.location}</p>
              </div>
              <button className={styles.joinButton}>Katıl</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

EventCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string,
    }),
  ),
};

export default EventCalendar;
