import styles from './ProjectHero.module.scss';
import projectsData from '@/data/projeler.data.json';

const ProjectHero = () => {
  const stats = {
    completed: projectsData.projects.filter((p) => p.status === 'completed').length,
    ongoing: projectsData.projects.filter((p) => p.status === 'ongoing').length,
    planned: projectsData.projects.filter((p) => p.status === 'planned').length,
  };

  return (
    <section className={styles.projectHero}>
      <div className={styles.container}>
        <h1>Projelerimiz</h1>
        <p>Köyümüzün gelişimi için yürüttüğümüz çalışmalar ve gelecek planlarımız</p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.number}>{stats.completed}</span>
            <span className={styles.label}>Tamamlanan Proje</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>{stats.ongoing}</span>
            <span className={styles.label}>Devam Eden</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>{stats.planned}</span>
            <span className={styles.label}>Planlanan</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>{projectsData.projects.length}</span>
            <span className={styles.label}>Toplam Proje</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
