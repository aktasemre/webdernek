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

const ProjectDetail = ({ project }) => {
  return (
    <div className={styles.projectDetail}>
      <div className={styles.container}>
        <h1>{project.title}</h1>
        <div className={styles.content}>
          <div className={styles.mainInfo}>
            <div className={styles.description}>
              <h2>Proje Açıklaması</h2>
              <p>{project.description}</p>
            </div>
            
            <div className={styles.details}>
              <h2>Proje Detayları</h2>
              <ul>
                <li><strong>Başlangıç:</strong> {project.startDate}</li>
                <li><strong>Durum:</strong> {project.status}</li>
                <li><strong>Bütçe:</strong> {project.budget}</li>
              </ul>
            </div>
            
            {project.progress && (
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
          
          {project.team && (
            <div className={styles.team}>
              <h2>Proje Ekibi</h2>
              <ul>
                {project.team.map((member, index) => (
                  <li key={index}>
                    <strong>{member.role}:</strong> {member.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail; 