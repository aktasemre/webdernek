'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/api';
import { FaEdit, FaTrash, FaUserPlus, FaSearch, FaEye, FaMoneyBill, FaClock } from 'react-icons/fa';
import styles from './members.module.scss';

export default function MembersPage() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Tüm Üyeler');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await userService.getAllUsers();
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

  const handleEdit = (member) => {
    router.push(`/admin/members/edit/${member.id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Bu üyeyi silmek istediğinizden emin misiniz?')) {
      try {
        await userService.delete(id);
        setMembers(members.filter(member => member.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className={styles.loading}>Yükleniyor...</div>;
  if (error) return <div className={styles.error}>Hata: {error}</div>;

  const filteredMembers = members.filter(member => {
    const searchMatch = 
      member.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'Tüm Üyeler') return searchMatch;
    return searchMatch && member.role === filterType;
  });

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('tr-TR');
  };

  return (
    <div className={styles.membersPage}>
      <div className={styles.searchBar}>
        <div className={styles.filterGroup}>
          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="ALL">Tüm Üyeler</option>
            <option value="ROLE_USER">Üye</option>
            <option value="ROLE_ADMIN">Yönetici</option>
          </select>
          <div className={styles.searchInput}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Ad, soyad veya email ile ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button 
          className={styles.addButton}
          onClick={() => router.push('/admin/members/create')}
        >
          <FaUserPlus /> Yeni Üye Ekle
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.membersTable}>
          <thead>
            <tr>
              <th>Ad Soyad</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Rol</th>
              <th>Durum</th>
              <th>Aidat Durumu</th>
              <th>Kayıt Tarihi</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.firstName} {member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber || '-'}</td>
                <td>
                  <span className={`${styles.roleTag} ${styles[member.role?.toLowerCase()]}`}>
                    {member.role === 'ROLE_ADMIN' ? 'Yönetici' : 
                     member.role === 'ROLE_USER' ? 'Üye' : member.role}
                  </span>
                </td>
                <td>
                  <span className={`${styles.status} ${member.active ? styles.active : styles.inactive}`}>
                    {member.status === 'ACTIVE' ? 'Aktif' : 
                     member.status === 'PENDING' ? 'Onay Bekliyor' : 
                     member.status === 'SUSPENDED' ? 'Askıya Alındı' : 'Pasif'}
                  </span>
                </td>
                <td>
                  <span className={`${styles.duesStatus} ${member.duesPaid ? styles.paid : styles.unpaid}`}>
                    <FaMoneyBill />
                    {member.duesPaid ? 'Ödendi' : 'Ödenmedi'}
                  </span>
                </td>
                <td>
                  <span className={styles.dateInfo}>
                    <FaClock />
                    {formatDate(member.createdDate)}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button 
                      className={styles.viewButton}
                      onClick={() => router.push(`/admin/members/view/${member.id}`)}
                      title="Detayları Görüntüle"
                    >
                      <FaEye /> Detay
                    </button>
                    <button 
                      className={styles.editButton}
                      onClick={() => handleEdit(member)}
                      title="Düzenle"
                    >
                      <FaEdit /> Düzenle
                    </button>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => handleDelete(member.id)}
                      title="Sil"
                    >
                      <FaTrash /> Sil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 