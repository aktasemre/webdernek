'use client';

import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectList.module.scss';

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Köy Meydanı Yenileme',
      description: 'Modern ve ferah bir köy meydanı için kapsamlı yenileme çalışması.',
      status: 'ongoing',
      image: '/images/projects/meydan.jpg',
      startDate: 'Ocak 2024',
      endDate: 'Haziran 2024',
      budget: '1.5M TL',
      progress: 35
    },
    {
      id: 2,
      title: 'Sulama Sistemi Modernizasyonu',
      description: 'Tarım arazilerinin verimini artıracak modern sulama sistemi kurulumu.',
      status: 'completed',
      image: '/images/projects/sulama.jpg',
      startDate: 'Mart 2023',
      endDate: 'Ekim 2023',
      budget: '2.8M TL',
      progress: 100
    },
    {
      id: 3,
      title: 'Gençlik Merkezi',
      description: 'Gençlerin eğitim ve sosyal aktiviteleri için modern bir merkez.',
      status: 'planned',
      image: '/images/projects/genclik.jpg',
      startDate: 'Temmuz 2024',
      endDate: 'Aralık 2024',
      budget: '3.2M TL',
      progress: 0
    },
    {
      id: 4,
      title: 'Köy Yolları İyileştirme',
      description: 'Ana yolların asfaltlanması ve tali yolların düzenlenmesi.',
      status: 'ongoing',
      image: '/images/projects/yol.jpg',
      startDate: 'Nisan 2024',
      endDate: 'Ağustos 2024',
      budget: '2.1M TL',
      progress: 15
    }
  ];

  const filterProjects = (status) => {
    setActiveFilter(status);
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.status === activeFilter;
  });

  return (
    <section className={styles.projectList}>
      <div className={styles.container}>
        <div className={styles.filters}>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => filterProjects('all')}
          >
            Tümü
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'ongoing' ? styles.active : ''}`}
            onClick={() => filterProjects('ongoing')}
          >
            Devam Eden
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'completed' ? styles.active : ''}`}
            onClick={() => filterProjects('completed')}
          >
            Tamamlanan
          </button>
          <button 
            className={`${styles.filterButton} ${activeFilter === 'planned' ? styles.active : ''}`}
            onClick={() => filterProjects('planned')}
          >
            Planlanan
          </button>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList; 