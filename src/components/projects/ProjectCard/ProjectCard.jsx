'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';
import styles from './ProjectCard.module.scss';
import PropTypes from 'prop-types';

const statusLabels = {
  ongoing: 'Devam Ediyor',
  completed: 'Tamamlandı',
  planned: 'Planlanan'
};

const statusColors = {
  ongoing: '#FFB800',
  completed: '#2C5F2D',
  planned: '#666666'
};

const ProjectCard = ({ project }) => {
  const { id, title, description, status, image, startDate, endDate, budget, progress } = project;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
        />
        <span 
          className={styles.status}
          style={{ backgroundColor: statusColors[status] }}
        >
          {statusLabels[status]}
        </span>
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.progress}>
          <ProgressBar value={progress} />
          <span>{progress}% Tamamlandı</span>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.label}>Başlangıç:</span>
            <span>{startDate}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Bitiş:</span>
            <span>{endDate}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.label}>Bütçe:</span>
            <span>{budget}</span>
          </div>
        </div>

        <Link href={`/projects/${id}`} className={styles.detailButton}>
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    budget: PropTypes.string,
    progress: PropTypes.number
  }).isRequired
};

export default ProjectCard; 