import styles from './ProgressBar.module.scss';

const ProgressBar = ({ value }) => {
  return (
    <div className={styles.progressBar}>
      <div 
        className={styles.progress} 
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar; 