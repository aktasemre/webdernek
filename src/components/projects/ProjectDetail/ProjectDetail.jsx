'use client';

import Image from 'next/image';
import styles from './ProjectDetail.module.scss';

const ProjectDetail = ({ project }) => {
  const renderDetails = () => {
    if (!project.details) return null;
    
    const detailItems = [];
    if (project.details.features) {
      detailItems.push(...project.details.features);
    }
    if (project.details.scope) {
      detailItems.push(...project.details.scope);
    }
    
    return detailItems.length > 0 ? (
      <div className={styles.details}>
        <h2>Proje Detayları</h2>
        <ul>
          {detailItems.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    ) : null;
  };

  return (
    <div className={styles.projectDetail}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={400}
            className={styles.heroImage}
            priority
          />
          <h1>{project.title}</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.mainInfo}>
            <div className={styles.description}>
              <h2>Proje Açıklaması</h2>
              <p>{project.description}</p>
            </div>
            
            {renderDetails()}
            
            {project.progress !== undefined && (
              <div className={styles.progress}>
                <h2>İlerleme Durumu</h2>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{width: `${project.progress}%`}}
                  />
                </div>
                <span>{project.progress}% Tamamlandı</span>
              </div>
            )}
          </div>
          
          <div className={styles.sidebar}>
            <div className={styles.infoBox}>
              <h2>Proje Bilgileri</h2>
              <div className={styles.infoItem}>
                <strong>Başlangıç:</strong>
                <span>{project.startDate}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Bitiş:</strong>
                <span>{project.endDate}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Durum:</strong>
                <span>{project.status}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Bütçe:</strong>
                <span>{project.budget}</span>
              </div>
            </div>

            {project.details?.team && (
              <div className={styles.teamBox}>
                <h2>Proje Ekibi</h2>
                {project.details.team.map((member, index) => (
                  <div key={index} className={styles.teamMember}>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </div>
                ))}
              </div>
            )}

            {project.details?.timeline && (
              <div className={styles.timelineBox}>
                <h2>Proje Takvimi</h2>
                <div className={styles.timeline}>
                  {project.details.timeline.map((item, index) => (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 