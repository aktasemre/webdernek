import styles from './NewsSection.module.scss';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Köy Meydanı Yenileniyor',
      content: 'Köy meydanı yenileme çalışmaları başladı. Yeni düzenleme ile modern bir görünüme kavuşacak.',
      date: '15 Kasım 2023',
      image: '/images/news/meydan.jpg'
    },
    {
      id: 2,
      title: 'Sulama Projesi Tamamlandı',
      content: 'Modern sulama sistemi projemiz başarıyla tamamlandı. Artık tarım arazilerimiz daha verimli.',
      date: '10 Kasım 2023',
      image: '/images/news/sulama.jpg'
    },
    {
      id: 3,
      title: 'Gençlik Merkezi Açılıyor',
      content: 'Gençlerimiz için hazırladığımız merkez önümüzdeki ay hizmete açılıyor.',
      date: '5 Kasım 2023',
      image: '/images/news/genclik.jpg'
    }
  ];

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2>Son Gelişmeler</h2>
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <div key={item.id} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <span className={styles.date}>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 