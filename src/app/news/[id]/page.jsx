import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.scss';
import haberlerData from '@/data/haberler.data.json';
import PropTypes from 'prop-types';

export async function generateMetadata({ params }) {
  const haber = haberlerData.haberler.find(
    (h) => h.id.toString() === params.id
  );

  if (!haber) {
    return {
      title: 'Haber Bulunamadı',
      description: 'Aradığınız haber bulunamadı.'
    };
  }

  return {
    title: `${haber.title} | Arslandede Köyü Derneği`,
    description: haber.summary,
    openGraph: {
      title: haber.title,
      description: haber.summary,
      images: [{ url: haber.image }],
    },
  };
}

export async function generateStaticParams() {
  const haberler = haberlerData.haberler || [];
  return haberler.map((haber) => ({
    id: haber.id.toString(),
  }));
}

export default function NewsDetail({ params }) {
  const haber = haberlerData.haberler.find(
    (h) => h.id.toString() === params.id
  );

  if (!haber) {
    notFound();
  }

  return (
    <article className={styles.newsDetail}>
      <div className={styles.container}>
        {haber.image && (
          <div className={styles.imageContainer}>
            <Image
              src={haber.image}
              alt={haber.title}
              width={800}
              height={400}
              className={styles.image}
            />
          </div>
        )}
        
        <h1>{haber.title}</h1>
        
        <div className={styles.meta}>
          <time dateTime={haber.date}>
            {new Date(haber.date).toLocaleDateString('tr-TR')}
          </time>
          <span className={styles.category}>{haber.category}</span>
          {haber.author && <span className={styles.author}>{haber.author}</span>}
        </div>

        <div className={styles.content} dangerouslySetInnerHTML={{ __html: haber.content }} />
        
        {haber.tags && haber.tags.length > 0 && (
          <div className={styles.tags}>
            {haber.tags.map((tag) => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

NewsDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}; 