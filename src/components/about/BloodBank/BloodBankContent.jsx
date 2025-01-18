'use client';

import { useState } from 'react';
import { FaHeart, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import styles from './BloodBankContent.module.scss';
import BackButton from '@/components/common/BackButton/BackButton';

const bloodGroups = [
  { type: 'A Rh+', donors: 45, needed: false },
  { type: 'A Rh-', donors: 12, needed: true },
  { type: 'B Rh+', donors: 28, needed: false },
  { type: 'B Rh-', donors: 8, needed: true },
  { type: '0 Rh+', donors: 52, needed: false },
  { type: '0 Rh-', donors: 15, needed: true },
  { type: 'AB Rh+', donors: 18, needed: false },
  { type: 'AB Rh-', donors: 5, needed: true },
];

const statistics = [
  {
    icon: <FaHeart />,
    title: 'Toplam Bağışçı',
    count: 183,
    description: 'Kayıtlı kan bağışçısı',
  },
  {
    icon: <FaUsers />,
    title: 'Acil İhtiyaç',
    count: 12,
    description: 'Acil kan ihtiyacı',
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Başarılı Eşleşme',
    count: 156,
    description: 'Tamamlanan bağış',
  },
];

const BloodBankContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    phone: '',
    email: '',
    isEmergency: false,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  return (
    <div className={styles.bloodBankContent}>
      <BackButton />
      <h1>Kan Bankası</h1>

      <div className={styles.introduction}>
        <p>
          Derneğimizin kan bankası sistemi, köyümüz ve çevre köylerdeki kan ihtiyaçlarını karşılamak
          için gönüllü bağışçılarla ihtiyaç sahiplerini bir araya getirmektedir.
        </p>
      </div>

      <div className={styles.statistics}>
        {statistics.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.icon}>{stat.icon}</div>
            <h2>{stat.title}</h2>
            <div className={styles.count}>{stat.count}</div>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.bloodGroups}>
        <h2>Kan Grupları ve Bağışçı Sayıları</h2>
        <div className={styles.groupsGrid}>
          {bloodGroups.map((group, index) => (
            <div key={index} className={`${styles.groupCard} ${group.needed ? styles.needed : ''}`}>
              <h3>{group.type}</h3>
              <div className={styles.donorCount}>{group.donors}</div>
              <p>Kayıtlı Bağışçı</p>
              {group.needed && <div className={styles.needBadge}>İhtiyaç Var</div>}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.requestForm}>
        <h2>Kan Talebi / Bağışçı Formu</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bloodType">Kan Grubu</label>
            <select
              id="bloodType"
              name="bloodType"
              value={formData.bloodType}
              onChange={handleInputChange}
              required
            >
              <option value="">Seçiniz</option>
              {bloodGroups.map((group, index) => (
                <option key={index} value={group.type}>
                  {group.type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="isEmergency"
                checked={formData.isEmergency}
                onChange={handleInputChange}
              />
              Acil İhtiyaç
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Gönder
          </button>
        </form>
      </div>

      <div className={styles.info}>
        <h2>Önemli Bilgiler</h2>
        <ul>
          <li>Kan bağışı yapmak için en az 50 kg ağırlığında olmalısınız.</li>
          <li>Son 3 ay içinde kan bağışı yapmamış olmalısınız.</li>
          <li>18-65 yaş aralığında olmalısınız.</li>
          <li>Kronik bir hastalığınız olmamalıdır.</li>
          <li>Acil durumlarda 7/24 kan bankası koordinatörümüze ulaşabilirsiniz.</li>
        </ul>
      </div>
    </div>
  );
};

export default BloodBankContent;
