'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaEdit, 
  FaUserCog, 
  FaMoneyBill, 
  FaCheck, 
  FaTimes,
  FaUser,
  FaCalendar,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaVenusMars
} from 'react-icons/fa';
import { userService } from '@/services/api';
import styles from './view.module.scss';

const roleLabels = {
  ROLE_USER: { label: 'Üye', color: '#60a5fa' },
  ROLE_ADMIN: { label: 'Yönetici', color: '#f59e0b' },
  ROLE_EMPLOYEE: { label: 'Çalışan', color: '#10b981' },
  ROLE_CUSTOMER: { label: 'Müşteri', color: '#8b5cf6' },
  ROLE_PARTNER: { label: 'Ortak', color: '#ec4899' },
  ROLE_MANAGER: { label: 'Müdür', color: '#6366f1' },
  ROLE_SUPERADMIN: { label: 'Süper Yönetici', color: '#ef4444' }
};

const duesStatusLabels = {
  PENDING: { label: 'Beklemede', color: '#f59e0b' },
  PAID: { label: 'Ödendi', color: '#10b981' },
  OVERDUE: { label: 'Gecikmiş', color: '#ef4444' },
  CANCELLED: { label: 'İptal', color: '#6b7280' }
};

export default function ViewMemberPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const data = await userService.getById(id);
        setMember(data);
        setEditForm({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber || '',
          address: data.address || '',
          birthDate: data.birthDate ? data.birthDate.split('T')[0] : '',
          gender: data.gender
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  const handleRoleChange = async (newRole) => {
    try {
      setLoading(true);
      setError('');
      await userService.changeRole(id, newRole);
      
      // Üye bilgilerini güncelle
      const updatedMember = await userService.getById(id);
      setMember(updatedMember);
      
      setRoleModalOpen(false);
      setSuccess('Rol başarıyla güncellendi');
      
      // 3 saniye sonra başarı mesajını kaldır
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await userService.update(id, editForm);
      
      // Güncel bilgileri getir
      const updatedMember = await userService.getById(id);
      setMember(updatedMember);
      
      setSuccess('Üye bilgileri başarıyla güncellendi');
      setIsEditing(false);
      
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Üye bilgileri yükleniyor...</p>
    </div>
  );

  if (error) return <div className={styles.error}>{error}</div>;
  if (!member) return <div className={styles.error}>Üye bulunamadı</div>;

  return (
    <div className={styles.viewPage}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button 
            className={styles.backButton}
            onClick={() => router.back()}
          >
            <FaArrowLeft /> Geri
          </button>
          <h1>{member.firstName} {member.lastName}</h1>
        </div>
        <div className={styles.headerRight}>
          <button 
            className={styles.editButton}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Vazgeç' : <><FaEdit /> Düzenle</>}
          </button>
        </div>
      </div>

      {success && <div className={styles.success}>{success}</div>}
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.statusSection}>
            <div className={styles.roleInfo}>
              <h3>Üyelik Rolü</h3>
              <div className={styles.roleCard} style={{ backgroundColor: roleLabels[member.role]?.color + '15' }}>
                <div className={styles.roleHeader}>
                  <span className={styles.roleIcon}>
                    <FaUserCog style={{ color: roleLabels[member.role]?.color }} />
                  </span>
                  <span className={styles.roleLabel} style={{ color: roleLabels[member.role]?.color }}>
                    {roleLabels[member.role]?.label}
                  </span>
                </div>
                <button
                  className={styles.changeRoleButton}
                  onClick={() => setRoleModalOpen(true)}
                  style={{ borderColor: roleLabels[member.role]?.color }}
                >
                  Rol Değiştir
                </button>
              </div>
            </div>

            <div className={styles.duesInfo}>
              <h3>Aidat Durumu</h3>
              <div className={styles.duesCard} style={{ backgroundColor: duesStatusLabels[member.duesStatus]?.color + '15' }}>
                <div className={styles.duesHeader}>
                  <span className={styles.duesIcon}>
                    <FaMoneyBill style={{ color: duesStatusLabels[member.duesStatus]?.color }} />
                  </span>
                  <span className={styles.duesLabel} style={{ color: duesStatusLabels[member.duesStatus]?.color }}>
                    {duesStatusLabels[member.duesStatus]?.label || 'Belirsiz'}
                  </span>
                </div>
                <p className={styles.duesDate}>
                  Son Ödeme: {member.lastDuesDate ? new Date(member.lastDuesDate).toLocaleDateString('tr-TR') : '-'}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.personalInfo}>
            <h3>Kişisel Bilgiler</h3>
            {isEditing ? (
              <form onSubmit={handleUpdate} className={styles.editForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">
                      <FaUser /> Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">
                      <FaUser /> Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      maxLength={50}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      <FaEnvelope /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={editForm.email}
                      disabled
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phoneNumber">
                      <FaPhone /> Telefon
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={editForm.phoneNumber}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      placeholder="5XXXXXXXXX"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="address">
                      <FaMapMarkerAlt /> Adres
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={editForm.address}
                      onChange={handleInputChange}
                      maxLength={255}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="birthDate">
                      <FaCalendar /> Doğum Tarihi
                    </label>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={editForm.birthDate}
                      onChange={handleInputChange}
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="gender">
                      <FaVenusMars /> Cinsiyet
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={editForm.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="MALE">Erkek</option>
                      <option value="FEMALE">Kadın</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button 
                    type="button" 
                    className={styles.cancelButton}
                    onClick={() => setIsEditing(false)}
                  >
                    İptal
                  </button>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                </div>
              </form>
            ) : (
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <FaUser />
                  <div>
                    <label>Ad Soyad</label>
                    <p>{member.firstName} {member.lastName}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaEnvelope />
                  <div>
                    <label>Email</label>
                    <p>{member.email}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaPhone />
                  <div>
                    <label>Telefon</label>
                    <p>{member.phoneNumber || '-'}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaMapMarkerAlt />
                  <div>
                    <label>Adres</label>
                    <p>{member.address || '-'}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaCalendar />
                  <div>
                    <label>Doğum Tarihi</label>
                    <p>{member.birthDate ? new Date(member.birthDate).toLocaleDateString('tr-TR') : '-'}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FaVenusMars />
                  <div>
                    <label>Cinsiyet</label>
                    <p>{member.gender === 'MALE' ? 'Erkek' : 'Kadın'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.accountInfo}>
            <h3>Hesap Bilgileri</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <div>
                  <label>Hesap Durumu</label>
                  <span className={`${styles.status} ${styles[member.status?.toLowerCase()]}`}>
                    {member.status === 'ACTIVE' ? <FaCheck /> : <FaTimes />}
                    {member.status === 'ACTIVE' ? 'Aktif' : 'Pasif'}
                  </span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <label>Kayıt Tarihi</label>
                  <p>{new Date(member.createdDate).toLocaleString('tr-TR')}</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div>
                  <label>Son Güncelleme</label>
                  <p>{new Date(member.lastModifiedDate).toLocaleString('tr-TR')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {roleModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Rol Değiştir</h2>
            <div className={styles.roleButtons}>
              {Object.entries(roleLabels).map(([role, { label, color }]) => (
                <button
                  key={role}
                  onClick={() => handleRoleChange(role)}
                  disabled={loading || role === member.role}
                  className={`${styles.roleButton} ${role === member.role ? styles.currentRole : ''}`}
                  style={{ 
                    backgroundColor: role === member.role ? color + '30' : 'white',
                    borderColor: color,
                    color: color
                  }}
                >
                  <FaUserCog />
                  {label}
                  {role === member.role && <span className={styles.currentLabel}>(Mevcut)</span>}
                </button>
              ))}
            </div>
            <button 
              className={styles.cancelButton}
              onClick={() => setRoleModalOpen(false)}
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 