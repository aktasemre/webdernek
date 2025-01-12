'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import styles from './page.module.scss';

// Site içi arama fonksiyonu
const searchContent = async (query) => {
  // Aranacak içerik kategorileri
  const searchableContent = [
    {
      type: 'pages',
      title: 'Sayfalar',
      items: [
        { 
          id: 'about-village',
          title: 'Köyümüz Hakkında',
          url: '/about/village',
          content: 'Arslandedede Köyü (eski adı Kan), Bayburt ilinin merkez ilçesine bağlıdır. Köyün tarihi, coğrafi yapısı, nüfusu, ekonomisi, eğitim ve kültür hayatı hakkında bilgiler. Köy muhtarımız ve yönetimi. 1959 yılında ismi değiştirilmiştir.'
        },
        {
          id: 'village-history',
          title: 'Köy Tarihçesi',
          url: '/about/village/history',
          content: 'Arslandedede Köyünün tarihi geçmişi, eski kiliseden dönüştürülen cami, 1960 yılında yeniden inşa edilen cami, köyün eski adı Kan, 1959 yılında isim değişikliği, tarihi yapılar ve kültürel miras.'
        },
        {
          id: 'village-economy',
          title: 'Köy Ekonomisi',
          url: '/about/village/economy',
          content: 'Köyün ekonomik faaliyetleri: Tarım (buğday, arpa, fasulye, domates, kabak, patates, soğan, sarımsak, biber, salatalık, marul), hayvancılık (büyükbaş, küçükbaş), seracılık, arıcılık. Süt ve süt ürünleri üretimi, yün ve yapağı üretimi. Yayla hayvancılığı ve sebzeciliği.'
        },
        {
          id: 'village-culture',
          title: 'Köy Kültürü',
          url: '/about/village/culture',
          content: 'Yöresel mutfak: lor dolması, galacoş, su böreği, yalancı dolma, erişte, tel helva. Halk oyunları, düğün gelenekleri, bayram ve şenlikler, davul-zurna.'
        },
        {
          id: 'village-geography',
          title: 'Coğrafi Yapı',
          url: '/about/village/geography',
          content: 'Dağlık ve yüksek rakımlı bölge, yaylalar, karasal iklim, uzun ve soğuk kışlar, ılıman yazlar. Doğal güzellikler ve iklim özellikleri.'
        },
        {
          id: 'board',
          title: 'Yönetim Kurulu',
          url: '/about/board',
          content: 'Derneğimizin yönetim kurulu üyeleri, başkan ve yönetim kurulu üyelerimiz, görevleri ve iletişim bilgileri. Dernek yönetimi ve idari yapı.'
        },
        {
          id: 'village-management',
          title: 'Köy Yönetimi',
          url: '/about/village/management',
          content: 'Köyümüzün muhtarı, azalar ve köy yönetimi hakkında bilgiler. Muhtar: Ahmet Yılmaz, İletişim: 0555-XXX-XXXX'
        },
        {
          id: 'statute',
          title: 'Dernek Tüzüğü',
          url: '/about/statute',
          content: 'Derneğimizin tüzüğü, amaçları, çalışma konuları, yönetim yapısı ve üyelik şartları. Dernek yönetim organları ve görevleri.'
        },
        {
          id: 'management-reports',
          title: 'Yönetim Raporları',
          url: '/about/reports',
          content: 'Dernek yönetim kurulu faaliyet raporları, denetim raporları ve mali raporlar. Yönetim kurulu kararları.'
        },
        {
          id: 'village-projects',
          title: 'Köy Projeleri',
          url: '/projects',
          content: 'Muhtarlık ve dernek yönetimimiz tarafından yürütülen köy kalkınma projeleri, altyapı çalışmaları.'
        },
        {
          id: 'contact',
          title: 'İletişim',
          url: '/contact',
          content: 'Dernek yönetimi, muhtar ve köy yetkilileri ile iletişim bilgileri. Telefon numaraları ve e-posta adresleri.'
        }
      ]
    },
    {
      type: 'news',
      title: 'Haberler',
      items: [
        {
          id: 'news-1',
          title: 'Yeni Yönetim Kurulu Seçildi',
          url: '/news/new-board',
          content: '2023-2025 dönemi dernek yönetim kurulu üyeleri belirlendi. Yeni başkan ve yönetim kurulu üyeleri göreve başladı.'
        },
        {
          id: 'news-2',
          title: 'Muhtar ve Dernek Yönetimi Toplantısı',
          url: '/news/management-meeting',
          content: 'Köy muhtarımız ve dernek yönetimimiz köyün gelişimi için ortak projeler konusunda toplantı düzenledi.'
        },
        {
          id: 'news-3',
          title: 'Köy Yönetimi Projesi',
          url: '/news/village-project',
          content: 'Muhtarlık ve dernek işbirliğiyle köyümüzde yeni projeler hayata geçiriliyor.'
        }
      ]
    },
    {
      type: 'events',
      title: 'Etkinlikler',
      items: [
        {
          id: 'event-1',
          title: 'Köy Festivali',
          url: '/events/village-festival',
          content: 'Geleneksel köy festivalimiz bu yıl 15-16 Temmuz tarihlerinde düzenlenecek.'
        },
        {
          id: 'event-2',
          title: 'Yardım Kampanyası',
          url: '/events/charity',
          content: 'İhtiyaç sahibi ailelere yardım kampanyası düzenliyoruz. Bağış ve destek çağrısı.'
        }
      ]
    },
    {
      type: 'gallery',
      title: 'Galeri',
      items: [
        {
          id: 'gallery-1',
          title: 'Köy Fotoğrafları',
          url: '/gallery/photos',
          content: 'Köyümüzün doğal güzellikleri, tarihi yapıları ve günlük yaşamından kareler.'
        },
        {
          id: 'gallery-2',
          title: 'Etkinlik Görüntüleri',
          url: '/gallery/events',
          content: 'Dernek etkinliklerimiz, toplantılar ve sosyal faaliyetlerden fotoğraflar.'
        }
      ]
    }
  ];

  // Arama sorgusu boşsa sonuç döndürme
  if (!query) return [];

  const searchTerms = query.toLowerCase().split(' ');

  // Her kategori için arama yap
  const results = searchableContent.map(category => {
    const matchedItems = category.items.filter(item => {
      const itemText = `${item.title} ${item.content}`.toLowerCase();
      // Tüm arama terimlerini kontrol et
      return searchTerms.every(term => itemText.includes(term));
    });

    return {
      type: category.type,
      title: category.title,
      items: matchedItems
    };
  }).filter(category => category.items.length > 0);

  return results;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true);
      const searchResults = await searchContent(query);
      setResults(searchResults);
      setIsLoading(false);
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <main className={styles.searchPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            <FaSearch className={styles.icon} />
            Arama Sonuçları
          </h1>
          {query && <p>"{query}" için arama sonuçları</p>}
        </div>

        {isLoading ? (
          <div className={styles.loading}>Aranıyor...</div>
        ) : (
          <>
            {results.length === 0 ? (
              <div className={styles.noResults}>
                <p>Aramanızla eşleşen sonuç bulunamadı.</p>
                <ul>
                  <li>Farklı anahtar kelimeler deneyin</li>
                  <li>Daha genel terimler kullanın</li>
                  <li>Yazım hatası olmadığından emin olun</li>
                </ul>
              </div>
            ) : (
              <div className={styles.results}>
                {results.map((category, index) => (
                  <div key={index} className={styles.category}>
                    <h2>{category.title}</h2>
                    <div className={styles.items}>
                      {category.items.map((item) => (
                        <Link key={item.id} href={item.url} className={styles.resultItem}>
                          <h3>{item.title}</h3>
                          <p>{item.content}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}