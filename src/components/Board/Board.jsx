'use client';

import PropTypes from 'prop-types';
import styles from './Board.module.scss';

const Board = ({ items, status }) => {
  return (
    <div className={styles.board}>
      <div className={styles.boardHeader}>
        <h2>{status}</h2>
      </div>
      <div className={styles.boardContent}>
        {items.map((item) => (
          <div key={item.id} className={styles.boardItem}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.image && (
              <div className={styles.itemImage}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
            )}
            {item.tags && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  status: PropTypes.string.isRequired
};

export default Board; 