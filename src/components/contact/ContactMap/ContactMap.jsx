'use client';

import styles from './ContactMap.module.scss';

const ContactMap = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <h2>Konum</h2>
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7!2d40.2!3d40.3!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE4JzAwLjAiTiA0MMKwMTInMDAuMCJF!5e0!3m2!1str!2str!4v1234567890!5m2!1str!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap; 