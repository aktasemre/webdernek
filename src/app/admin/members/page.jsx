'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { userService } from '@/services/api';
import styles from './members.module.scss';

const roleLabels = {
  ROLE_USER: 'Üye',
  ROLE_ADMIN: 'Yönetici'
};

export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await userService.getAllUsers();
        console.log('Users response:', response); // Debug için
        setMembers(response);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // Üye ekle/güncelle
  const handleSubmit = async (formData) => {
    try {
      if (selectedMember) {
        await userService.update(selectedMember.id, formData);
      } else {
        await userService.create(formData);
      }
      loadUsers();
      setModalOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  // Üye sil
  const handleDelete = async (id) => {
    if (window.confirm('Bu üyeyi silmek istediğinize emin misiniz?')) {
      try {
        await userService.delete(id);
        setMembers(members.filter(member => member.id !== id));
      } catch (err) {
        setError(err.message);
      }
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

  if (error) return <div className={styles.error}>{error}</div>;

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
          type="text"
          placeholder="Üye ara..."
          value={filters.search}
          onChange={(e) => setFilters({...filters, search: e.target.value})}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.membersList}>
        {members.map((member) => (
          <div key={member.id} className={styles.memberCard}>
            <h3>{member.firstName} {member.lastName}</h3>
            <p>Email: {member.email}</p>
            <p>Telefon: {member.phoneNumber}</p>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(member)}>
                <FaEdit /> Düzenle
              </button>
              <button onClick={() => handleDelete(member.id)}>
                <FaTrash /> Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 