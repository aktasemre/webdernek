'use client';

import Image from 'next/image';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';
import styles from './ProjectDetail.module.scss';
import ProjectHero from './ProjectHero';
import ProjectInfo from './ProjectInfo';
import ProjectProgress from './ProjectProgress';
import ProjectDetails from './ProjectDetails';
import ProjectTeam from './ProjectTeam';
import ProjectTimeline from './ProjectTimeline';

const ProjectDetail = ({ id }) => {
  // Gerçek uygulamada bu veri API'den gelecek
  const project = {
    id: 1,
    title: 'Köy Meydanı Yenileme',
    description: 'Modern ve ferah bir köy meydanı için kapsamlı yenileme çalışması. Projemiz kapsamında yeşil alanlar, oturma bankları, çocuk parkı ve etkinlik alanı yer alacaktır.',
    status: 'ongoing',
    image: '/images/projects/meydan.jpg',
    startDate: 'Ocak 2024',
    endDate: 'Haziran 2024',
    budget: '1.5M TL',
    progress: 35,
    team: [
      { name: 'Ahmet Yılmaz', role: 'Proje Yöneticisi' },
      { name: 'Mehmet Demir', role: 'Mimar' },
      { name: 'Ayşe Kaya', role: 'Peyzaj Mimarı' }
    ],
    timeline: [
      { date: 'Ocak 2024', event: 'Proje Başlangıcı' },
      { date: 'Şubat 2024', event: 'Zemin Hazırlığı' },
      { date: 'Mart 2024', event: 'Altyapı Çalışmaları' },
      { date: 'Nisan 2024', event: 'Peyzaj Düzenlemesi' },
      { date: 'Mayıs 2024', event: 'Mobilya Yerleşimi' },
      { date: 'Haziran 2024', event: 'Proje Tamamlanması' }
    ],
    details: [
      'Toplam Alan: 2500m²',
      'Yeşil Alan: 1000m²',
      'Oturma Alanları: 20 Bank',
      'Çocuk Parkı: 200m²',
      'Aydınlatma: 30 LED Direk'
    ]
  };

  return (
    <div className={styles.projectDetail}>
      <ProjectHero project={project} />

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <ProjectInfo project={project} />
          <ProjectProgress project={project} />
          <ProjectDetails project={project} />
        </div>

        <div className={styles.sidebar}>
          <ProjectTeam project={project} />
          <ProjectTimeline project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 