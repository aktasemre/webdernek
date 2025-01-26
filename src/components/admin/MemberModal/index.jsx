'use client';

import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './MemberModal.module.scss';

export default function MemberModal({ isOpen, onClose, member = null, onSubmit }) {
  const [formData, setFormData] = useState({
    ad: '',
    email: '',
    telefon: '',
    durum: 'aktif',
    adres: '',
    dogumTarihi: '',
    kanGrubu: '',
    meslek: ''
  });

  useEffect(() => {
    if (member) {
      setFormData(member);
    }
  }, [member]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Form gönderme hatası:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{member ? 'Üye Düzenle' : 'Yeni Üye'}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="ad">Ad Soyad</label>
            <input
              type="text"
              id="ad"
              value={formData.ad}
              onChange={(e) => setFormData({...formData, ad: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="telefon">Telefon</label>
            <input
              type="tel"
              id="telefon"
              value={formData.telefon}
              onChange={(e) => setFormData({...formData, telefon: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="durum">Durum</label>
            <select
              id="durum"
              value={formData.durum}
              onChange={(e) => setFormData({...formData, durum: e.target.value})}
            >
              <option value="aktif">Aktif</option>
              <option value="pasif">Pasif</option>
              <option value="beklemede">Onay Bekliyor</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              İptal
            </button>
            <button type="submit" className={styles.submitButton}>
              {member ? 'Güncelle' : 'Ekle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 