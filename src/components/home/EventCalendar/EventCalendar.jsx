'use client';

import { FaCalendarAlt } from 'react-icons/fa';
import styles from './EventCalendar.module.scss';
import PropTypes from 'prop-types';

const EventCalendar = ({ events = [] }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (time) => {
    return time;
  };

  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className={styles.calendar}>
      {sortedEvents.map((event) => (
        <div key={event.id} className={styles.event}>
          <div className={styles.icon}>
            <FaCalendarAlt />
          </div>
          <div className={styles.details}>
            <h3>{event.title}</h3>
            <p className={styles.date}>{formatDate(event.date)}</p>
            <p className={styles.time}>{formatTime(event.time)}</p>
            <p className={styles.location}>{event.location}</p>
          </div>
        </div>
      ))}
    </div>
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
