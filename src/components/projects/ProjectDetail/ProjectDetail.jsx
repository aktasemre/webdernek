'use client';

import Image from 'next/image';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';
import styles from './ProjectDetail.module.scss';

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
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1>{project.title}</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.description}>
            <h2>Proje Hakkında</h2>
            <p>{project.description}</p>
          </div>

          <div className={styles.progress}>
            <h3>Proje İlerlemesi</h3>
            <ProgressBar value={project.progress} />
            <span>{project.progress}% Tamamlandı</span>
          </div>

          <div className={styles.details}>
            <h3>Teknik Detaylar</h3>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.infoCard}>
            <h3>Proje Bilgileri</h3>
            <div className={styles.infoItem}>
              <span>Başlangıç</span>
              <strong>{project.startDate}</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Bitiş</span>
              <strong>{project.endDate}</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Bütçe</span>
              <strong>{project.budget}</strong>
            </div>
          </div>

          <div className={styles.teamCard}>
            <h3>Proje Ekibi</h3>
            {project.team.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            ))}
          </div>

          <div className={styles.timelineCard}>
            <h3>Zaman Çizelgesi</h3>
            <div className={styles.timeline}>
              {project.timeline.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineContent}>
                    <strong>{item.date}</strong>
                    <span>{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 