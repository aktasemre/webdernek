'use client';

import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './NewsModal.module.scss';

export default function NewsModal({ isOpen, onClose, haber = null }) {
  const [formData, setFormData] = useState(haber || {
    baslik: '',
    icerik: '',
    resim: '',
    durum: 'taslak'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemleri
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{haber ? 'Haber Düzenle' : 'Yeni Haber'}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="baslik">Başlık</label>
            <input
              type="text"
              id="baslik"
              value={formData.baslik}
              onChange={(e) => setFormData({...formData, baslik: e.target.value})}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="icerik">İçerik</label>
            <textarea
              id="icerik"
              value={formData.icerik}
              onChange={(e) => setFormData({...formData, icerik: e.target.value})}
              required
              rows={5}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="resim">Resim URL</label>
            <input
              type="text"
              id="resim"
              value={formData.resim}
              onChange={(e) => setFormData({...formData, resim: e.target.value})}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="durum">Durum</label>
            <select
              id="durum"
              value={formData.durum}
              onChange={(e) => setFormData({...formData, durum: e.target.value})}
            >
              <option value="taslak">Taslak</option>
              <option value="aktif">Aktif</option>
              <option value="pasif">Pasif</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              İptal
            </button>
            <button type="submit" className={styles.submitButton}>
              {haber ? 'Güncelle' : 'Ekle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 