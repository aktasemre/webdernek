'use client';

import { useState } from 'react';
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: null, // 'success' veya 'error'
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Form gönderme işlemi burada yapılacak
      // Örnek olarak bir gecikme ekliyoruz
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Başarılı sonuç
      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.container}>
        <h2>İletişim Formu</h2>
        <p>Bizimle iletişime geçmek için aşağıdaki formu doldurun.</p>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Adınız ve soyadınız"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="E-posta adresiniz"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Konu</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Mesajınızın konusu"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              disabled={isSubmitting}
              placeholder="Mesajınızı buraya yazın..."
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            <FaPaperPlane />
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>

        {status.type === 'success' && (
          <div className={styles.successMessage}>
            <FaCheck />
            {status.message}
          </div>
        )}

        {status.type === 'error' && (
          <div className={styles.errorMessage}>
            <FaExclamationTriangle />
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm; 