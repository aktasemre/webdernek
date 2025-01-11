import Image from 'next/image';
import styles from './EconomyContent.module.scss';

const economicSectors = {
  agriculture: {
    title: 'Tarım',
    description: 'Köyümüzün temel geçim kaynağı olan tarım sektöründe başlıca ürünler:',
    products: [
      {
        name: 'Tahıllar',
        items: ['Buğday', 'Arpa', 'Çavdar', 'Yulaf'],
        area: '1200 dönüm'
      },
      {
        name: 'Baklagiller',
        items: ['Fasulye', 'Nohut', 'Mercimek'],
        area: '400 dönüm'
      },
      {
        name: 'Sebzeler',
        items: ['Patates', 'Soğan', 'Domates', 'Biber'],
        area: '300 dönüm'
      },
      {
        name: 'Meyveler',
        items: ['Elma', 'Armut', 'Erik', 'Ceviz'],
        area: '100 dönüm'
      }
    ],
    image: '/images/manzara1.jpg'
  },
  livestock: {
    title: 'Hayvancılık',
    description: 'Modern ve geleneksel yöntemlerle sürdürülen hayvancılık faaliyetleri:',
    categories: [
      {
        type: 'Büyükbaş',
        count: 450,
        details: 'Holstein ve Simental ırkı inekler'
      },
      {
        type: 'Küçükbaş',
        count: 1200,
        details: 'Karaman ve Merinos koyunları'
      },
      {
        type: 'Kümes Hayvanları',
        count: 3000,
        details: 'Tavuk ve hindi yetiştiriciliği'
      }
    ],
    products: ['Süt', 'Peynir', 'Yoğurt', 'Tereyağı', 'Et', 'Yumurta'],
    image: '/images/manzara2.jpg'
  }
};

const employmentData = {
  sectors: [
    { name: 'Tarım ve Hayvancılık', percentage: 45 },
    { name: 'Kamu Sektörü', percentage: 20 },
    { name: 'Özel Sektör', percentage: 25 },
    { name: 'Emekli', percentage: 10 }
  ],
  income: {
    average: '4500 TL',
    sources: [
      'Tarımsal Üretim',
      'Hayvancılık Gelirleri',
      'Maaş ve Ücretler',
      'Emekli Maaşları'
    ]
  }
};

const infrastructure = {
  agricultural: [
    'Modern sulama sistemleri',
    'Tarım makineleri parkı',
    'Soğuk hava deposu',
    'Süt toplama merkezi'
  ],
  commercial: [
    'Köy bakkalı',
    'Tarım kooperatifi',
    'Hayvan pazarı',
    'Yem deposu'
  ]
};

const EconomyContent = () => {
  return (
    <div className={styles.economyContent}>
      <h1>Ekonomik Yapı</h1>
      
      <div className={styles.introduction}>
        <p>
          Arslandede köyü, tarım ve hayvancılık temelli ekonomik yapısını modern
          üretim yöntemleriyle birleştirerek sürdürülebilir bir ekonomik model
          oluşturmuştur.
        </p>
      </div>

      {Object.entries(economicSectors).map(([key, sector]) => (
        <div key={key} className={styles.sector}>
          <h2>{sector.title}</h2>
          <div className={styles.sectorContent}>
            <div className={styles.imageContainer}>
              <Image
                src={sector.image}
                alt={sector.title}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.details}>
              <p>{sector.description}</p>
              {sector.products && (
                <div className={styles.products}>
                  {sector.products.map((product, index) => (
                    <div key={index} className={styles.productCard}>
                      <h3>{product.name}</h3>
                      <ul>
                        {product.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      {product.area && (
                        <div className={styles.area}>
                          Ekim Alanı: {product.area}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {sector.categories && (
                <div className={styles.categories}>
                  {sector.categories.map((category, index) => (
                    <div key={index} className={styles.categoryCard}>
                      <h3>{category.type}</h3>
                      <div className={styles.count}>{category.count} adet</div>
                      <p>{category.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className={styles.employment}>
        <h2>İstihdam ve Gelir Durumu</h2>
        <div className={styles.employmentContent}>
          <div className={styles.sectorDistribution}>
            <h3>Sektörel Dağılım</h3>
            <div className={styles.bars}>
              {employmentData.sectors.map((sector, index) => (
                <div key={index} className={styles.bar}>
                  <div className={styles.label}>{sector.name}</div>
                  <div className={styles.barContainer}>
                    <div 
                      className={styles.barFill}
                      style={{ width: `${sector.percentage}%` }}
                    />
                  </div>
                  <div className={styles.percentage}>{sector.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.income}>
            <h3>Gelir Kaynakları</h3>
            <div className={styles.average}>
              Ortalama Aylık Gelir: {employmentData.income.average}
            </div>
            <ul>
              {employmentData.income.sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.infrastructure}>
        <h2>Ekonomik Altyapı</h2>
        <div className={styles.infrastructureContent}>
          <div className={styles.agricultural}>
            <h3>Tarımsal Altyapı</h3>
            <ul>
              {infrastructure.agricultural.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.commercial}>
            <h3>Ticari Altyapı</h3>
            <ul>
              {infrastructure.commercial.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomyContent; 