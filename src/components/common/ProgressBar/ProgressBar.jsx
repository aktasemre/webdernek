import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ value, max = 100, color = 'primary' }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={styles.progressBar}>
      <div
        className={`${styles.progress} ${styles[color]}`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
};

export default ProgressBar;
