import styles from './ProjectHero.module.scss';

const ProjectHero = () => {
  return (
    <section className={styles.projectHero}>
      <div className={styles.container}>
        <h1>Projelerimiz</h1>
        <p>Köyümüzün gelişimi için yürüttüğümüz çalışmalar ve gelecek planlarımız</p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.number}>12</span>
            <span className={styles.label}>Tamamlanan Proje</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>4</span>
            <span className={styles.label}>Devam Eden</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.number}>5</span>
            <span className={styles.label}>Planlanan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero; 