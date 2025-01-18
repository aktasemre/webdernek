import Image from 'next/image';
import styles from './HistoryContent.module.scss';

const timelineEvents = [
  {
    year: '2010',
    title: 'Derneğin Kuruluş Fikri',
    description: 'Köyümüzün gelişimi ve dayanışması için dernek kurma fikri ortaya çıktı.'
  },
  {
    year: '2011',
    title: 'Resmi Kuruluş',
    description: 'Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği resmi olarak kuruldu.'
  },
  {
    year: '2012',
    title: 'İlk Projeler',
    description: 'Köy meydanı düzenleme ve çevre temizliği projeleri başlatıldı.'
  },
  {
    year: '2015',
    title: 'Sosyal Faaliyetler',
    description: 'Köy şenlikleri ve kültürel etkinlikler düzenlenmeye başlandı.'
  },
  {
    year: '2018',
    title: 'Eğitim Destekleri',
    description: 'Köyümüzün öğrencilerine burs ve eğitim destekleri verilmeye başlandı.'
  },
  {
    year: '2020',
    title: 'Dijital Dönüşüm',
    description: 'Web sitesi kuruldu ve sosyal medya platformlarında aktif olmaya başladık.'
  },
  {
    year: '2023',
    title: 'Yeni Dönem',
    description: 'Modern projeler ve yenilikçi yaklaşımlarla çalışmalarımıza devam ediyoruz.'
  }
];

export default function HistoryContent() {
  return (
    <div className={styles.historyContent}>
      <h1>Derneğimizin Tarihçesi</h1>
      
      <div className={styles.introduction}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/manzara1.jpg"
            alt="Dernek Binası"
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
        <p>
          Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği, 2011 yılında köyümüzün gelişimi
          ve köylülerimiz arasındaki dayanışmayı güçlendirmek amacıyla kurulmuştur. Kuruluşundan
          bu yana geçen sürede, köyümüzün altyapısından sosyal yaşamına kadar birçok alanda önemli
          projelere imza atmış bulunmaktayız.
        </p>
      </div>

      <div className={styles.timeline}>
        <h2>Tarihsel Gelişim</h2>
        {timelineEvents.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineYear}>
              <span>{event.year}</span>
            </div>
            <div className={styles.timelineContent}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mission}>
        <h2>Misyonumuz</h2>
        <p>
          Köyümüzün kalkınması, gelişmesi ve köylülerimizin yaşam standardının yükseltilmesi için
          çalışmak, köy halkı arasındaki dayanışmayı güçlendirmek ve kültürel değerlerimizi
          yaşatmak temel misyonumuzdur.
        </p>
      </div>

      <div className={styles.vision}>
        <h2>Vizyonumuz</h2>
        <p>
          Modern ve gelişmiş bir köy yapısı oluşturmak, genç nesillere yaşanabilir bir gelecek
          bırakmak ve köyümüzü bölgenin örnek köylerinden biri haline getirmek için çalışmaya
          devam edeceğiz.
        </p>
      </div>
    </div>
  );
} 