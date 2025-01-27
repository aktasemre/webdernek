'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { userService } from '@/services/api';
import { 
  FaArrowLeft, 
  FaEdit, 
  FaUserCog, 
  FaMoneyBill,
  // ... diğer importlar
} from 'react-icons/fa';
import styles from './view.module.scss';

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  birthDate: string;
  gender: string;
  status: string;
  role: string;
  createdDate: string;
  lastModifiedDate: string;
  duesStatus: string;
  lastDuesDate: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function MemberViewPage({ params }: PageProps) {
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [editForm, setEditForm] = useState<HTMLFormElement | null>(null);
  const [roleModalOpen, setRoleModalOpen] = useState<boolean>(false);

  // ... diğer kodlar aynı kalacak

  const handleRoleChange = async (newRole: string) => {
    try {
      setLoading(true);
      await userService.changeRole(params.id, newRole);
      
      if (member) {
        setMember({
          ...member,
          role: newRole
        });
      }
      
      setRoleModalOpen(false);
      setError('');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // ... diğer kodlar
} 