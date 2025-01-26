'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaEye, FaMoneyBill } from 'react-icons/fa';
import { userService } from '@/services/api';
import MemberModal from '@/components/admin/MemberModal';
import styles from './members.module.scss';

const roleLabels = {
  ROLE_USER: 'Üye',
  ROLE_ADMIN: 'Yönetici',
  ROLE_EMPLOYEE: 'Çalışan',
  ROLE_CUSTOMER: 'Müşteri',
  ROLE_PARTNER: 'Ortak',
  ROLE_MANAGER: 'Müdür',
  ROLE_SUPERADMIN: 'Süper Yönetici'
};

const duesStatusLabels = {
  PENDING: 'Beklemede',
  PAID: 'Ödendi',
  OVERDUE: 'Gecikmiş',
  CANCELLED: 'İptal'
};

export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filters] = useState({
    status: 'all',
    search: ''
  });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        setError('');

        // Token kontrolü
        const token = sessionStorage.getItem('token');
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');

        if (!token || !user.role || user.role !== 'ROLE_ADMIN') {
          router.push('/auth/login');
          return;
        }

        const data = await userService.getAll(filters);
        console.log('Fetched members:', data);
        setMembers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching members:', error);
        setError(error.message);
        if (error.message.includes('yetkiniz yok')) {
          router.push('/auth/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [router]); // router'ı dependency olarak ekle

  // Üye ekle/güncelle
  const handleSubmit = async (formData) => {
    try {
      if (selectedMember) {
        await userService.update(selectedMember.id, formData);
      } else {
        await userService.create(formData);
      }
      fetchMembers();
      setModalOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  // Üye sil
  const handleDelete = async (id) => {
    if (window.confirm('Bu üyeyi silmek istediğinize emin misiniz?')) {
      try {
        setLoading(true);
        await userService.delete(id);
        setMembers(members.filter(member => member.id !== id));
        setError('');
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Kullanıcı durumunu değiştir
  const handleStatusChange = async (id, currentStatus) => {
    try {
      setLoading(true);
      const action = currentStatus === 'ACTIVE' ? 'deactivate' : 'activate';
      await userService.changeStatus(id, action);
      
      // Durumu güncelle
      setMembers(members.map(member => {
        if (member.id === id) {
          return {
            ...member,
            status: currentStatus === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE'
          };
        }
        return member;
      }));
      
      setError('');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Düzenleme modalını aç
  const handleEdit = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Üyeler yükleniyor...</p>
    </div>
  );

  return (
    <div className={styles.membersPage}>
      <div className={styles.header}>
        <h1>Üyeler ({members.length})</h1>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/admin/members/create')}
        >
          <FaPlus /> Yeni Üye Ekle
        </button>
      </div>

      <div className={styles.filters}>
        <select 
          value={filters.status}
          onChange={(e) => setFilters({...filters, status: e.target.value})}
          className={styles.filterSelect}
        >
          <option value="all">Tüm Üyeler</option>
          <option value="active">Aktif Üyeler</option>
          <option value="pending">Onay Bekleyenler</option>
          <option value="inactive">Pasif Üyeler</option>
        </select>
        
        <input 
          type="search"
          placeholder="Üye Ara..."
          value={filters.search}
          onChange={(e) => setFilters({...filters, search: e.target.value})}
          className={styles.searchInput}
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.tableContainer}>
        <table className={styles.membersTable}>
          <thead>
            <tr>
              <th>Ad Soyad</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Durum</th>
              <th>Aidat Durumu</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="5" className={styles.noData}>
                  Üye bulunamadı
                </td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.id}>
                  <td>{member.firstName} {member.lastName}</td>
                  <td>{member.email}</td>
                  <td>{member.phoneNumber || '-'}</td>
                  <td>
                    <button
                      className={`${styles.statusButton} ${styles[member.status?.toLowerCase()]}`}
                      onClick={() => handleStatusChange(member.id, member.status)}
                    >
                      {member.status === 'ACTIVE' ? <FaCheck /> : <FaTimes />}
                      {member.status === 'ACTIVE' ? 'Aktif' : 'Pasif'}
                    </button>
                  </td>
                  <td>
                    <span className={`${styles.duesStatus} ${styles[member.duesStatus?.toLowerCase()]}`}>
                      <FaMoneyBill />
                      {duesStatusLabels[member.duesStatus] || 'Belirsiz'}
                    </span>
                  </td>
                  <td className={styles.actions}>
                    <button 
                      className={styles.viewButton}
                      onClick={() => router.push(`/admin/members/view/${member.id}`)}
                    >
                      <FaEye /> Görüntüle
                    </button>
                    <button 
                      className={styles.editButton}
                      onClick={() => router.push(`/admin/members/edit/${member.id}`)}
                    >
                      <FaEdit /> Düzenle
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(member.id)}
                      disabled={loading}
                    >
                      <FaTrash /> Sil
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <MemberModal 
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedMember(null);
        }}
        member={selectedMember}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 