import React from 'react';
import ProjectHero from '@/components/projects/ProjectHero/ProjectHero';
import ProjectList from '@/components/projects/ProjectList/ProjectList';
import projectsData from '@/data/projeler.data.json';
import styles from './page.module.scss';

export const metadata = {
  title: 'Projeler | Arslandede Köyü',
  description:
    'Arslandede Köyü projeleri, devam eden ve tamamlanan altyapı, sosyal ve kültürel projelerimiz.',
  keywords: ['projeler', 'köy projeleri', 'altyapı projeleri', 'sosyal projeler'],
};

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPage}>
      <ProjectHero />

      <div className={styles.container}>
        <section className={styles.categories}>
          <h2>Proje Kategorileri</h2>
          <div className={styles.categoryGrid}>
            {projectsData.categories.map((category) => (
              <div key={category.id} className={styles.categoryCard}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.projectsList}>
          <h2>Tüm Projelerimiz</h2>
          <ProjectList />
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
