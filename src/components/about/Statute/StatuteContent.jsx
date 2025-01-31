import styles from './StatuteContent.module.scss';

const statuteItems = [
  {
    title: 'Madde 1: Derneğin Adı ve Merkezi',
    content:
      'Derneğin adı "Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği"dir. Derneğin merkezi Bayburt\'tur.',
  },
  {
    title: 'Madde 2: Derneğin Amacı',
    content: [
      'Köyün kalkınmasına katkıda bulunmak',
      'Köy halkının sosyal ve kültürel gelişimine destek olmak',
      'Köy halkı arasındaki dayanışmayı güçlendirmek',
      'Köyün geleneksel değerlerini korumak ve yaşatmak',
      'Köyün altyapı ve üstyapı ihtiyaçlarının karşılanmasına yardımcı olmak',
      'Köy halkının eğitim ve sağlık hizmetlerine erişimini kolaylaştırmak',
    ],
  },
  {
    title: 'Madde 3: Derneğin Faaliyet Alanları',
    content: [
      'Köyün altyapı ve üstyapı ihtiyaçlarının karşılanması için projeler geliştirmek',
      'Eğitim faaliyetlerini desteklemek ve öğrencilere burs imkanları sağlamak',
      'Sosyal ve kültürel etkinlikler düzenlemek',
      'Köyün tanıtımına katkıda bulunmak',
      'Çevre düzenlemesi ve koruma çalışmaları yapmak',
      'Sağlık hizmetlerine erişimi kolaylaştırmak için çalışmalar yapmak',
      'Köy halkının ekonomik kalkınmasına destek olmak',
    ],
  },
  {
    title: 'Madde 4: Üyelik Koşulları',
    content: [
      'Medeni haklara sahip ve 18 yaşını bitirmiş olmak',
      'Dernek amaçlarını benimsemek ve bu doğrultuda çalışmayı kabul etmek',
      'Derneğe giriş aidatını ve yıllık aidatı ödemeyi taahhüt etmek',
      'Yönetim kurulu kararıyla üyeliğe kabul edilmek',
    ],
  },
  {
    title: 'Madde 5: Dernek Organları',
    content: ['Genel Kurul', 'Yönetim Kurulu', 'Denetim Kurulu'],
  },
  {
    title: 'Madde 6: Genel Kurul',
    content:
      'Genel kurul, derneğin en yetkili karar organıdır. Genel kurul, derneğe kayıtlı üyelerden oluşur. Olağan genel kurul toplantısı 3 yılda bir yapılır.',
  },
  {
    title: 'Madde 7: Yönetim Kurulu',
    content:
      'Yönetim kurulu, 5 asıl ve 5 yedek üyeden oluşur. Yönetim kurulu üyeleri genel kurulda gizli oyla seçilir. Görev süresi 3 yıldır.',
  },
  {
    title: 'Madde 8: Denetim Kurulu',
    content:
      'Denetim kurulu, 3 asıl ve 3 yedek üyeden oluşur. Denetim kurulu üyeleri genel kurulda gizli oyla seçilir. Görev süresi 3 yıldır.',
  },
  {
    title: 'Madde 9: Derneğin Gelir Kaynakları',
    content: [
      'Üyelik aidatları',
      'Bağış ve yardımlar',
      'Dernek faaliyetlerinden elde edilen gelirler',
      'Mal varlığından elde edilen gelirler',
    ],
  },
];

const StatuteContent = () => {
  return (
    <div className={styles.statuteContent}>
      <h1>Derneğimizin Tüzüğü</h1>

      <div className={styles.introduction}>
        <p>
          Bu tüzük, Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği'nin kuruluş amacını,
          çalışma şeklini, organlarını ve işleyişini düzenleyen temel belgedir.
        </p>
      </div>

      <div className={styles.articles}>
        {statuteItems.map((item, index) => (
          <div key={index} className={styles.article}>
            <h2>{item.title}</h2>
            {Array.isArray(item.content) ? (
              <ul>
                {item.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <h3>Not:</h3>
        <p>
          Bu tüzük özeti bilgilendirme amaçlıdır. Derneğimizin tam tüzük metnine ulaşmak için{' '}
          <a
            href="/documents/tuzuk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pdfLink}
          >
            buraya tıklayınız
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default StatuteContent;
