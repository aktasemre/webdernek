'use client';

import { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard/ProjectCard';
import projectsData from '@/data/projeler.data.json';
import styles from './ProjectList.module.scss';

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterProjects = (status) => {
    setActiveFilter(status);
  };

  const filteredProjects = projectsData.projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.status === activeFilter;
  });

  return (
    <section className={styles.projectList}>
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
