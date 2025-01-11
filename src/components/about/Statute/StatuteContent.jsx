import styles from './StatuteContent.module.scss';

const statuteItems = [
  {
    title: 'Madde 1: Derneğin Adı ve Merkezi',
    content: `Derneğin adı "Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği"dir. Derneğin merkezi Bayburt'tur. Dernek, yurt içinde ve yurt dışında şube açabilir.`
  },
  {
    title: 'Madde 2: Derneğin Amacı',
    content: `Derneğimizin temel amacı, Arslandede Köyü'nün kalkınmasına katkıda bulunmak, köy halkının sosyal ve kültürel gelişimine destek olmak, köy halkı arasındaki dayanışmayı güçlendirmek ve köyün geleneksel değerlerini korumaktır.`
  },
  {
    title: 'Madde 3: Derneğin Faaliyet Alanları',
    content: [
      'Köyün altyapı ve üstyapı ihtiyaçlarının karşılanmasına yardımcı olmak',
      'Eğitim faaliyetlerini desteklemek ve burs imkanları sağlamak',
      'Sosyal ve kültürel etkinlikler düzenlemek',
      'Köyün tanıtımına katkıda bulunmak',
      'Çevre düzenlemesi ve koruma çalışmaları yapmak',
      'Köy halkının sağlık hizmetlerine erişimini kolaylaştırmak'
    ]
  },
  {
    title: 'Madde 4: Üyelik Koşulları',
    content: `Derneğe üye olabilmek için aşağıdaki şartlar aranır:
    - Medeni haklara sahip ve 18 yaşını bitirmiş olmak
    - Dernek amaçlarını benimsemek
    - Üyelik başvuru formunu doldurmak
    - Yönetim kurulu kararıyla üyeliğe kabul edilmek`
  },
  {
    title: 'Madde 5: Dernek Organları',
    content: [
      'Genel Kurul',
      'Yönetim Kurulu',
      'Denetim Kurulu'
    ]
  },
  {
    title: 'Madde 6: Gelir Kaynakları',
    content: [
      'Üyelik aidatları',
      'Bağış ve yardımlar',
      'Dernek faaliyetlerinden elde edilen gelirler',
      'Mal varlığından elde edilen gelirler'
    ]
  }
];

const StatuteContent = () => {
  return (
    <div className={styles.statuteContent}>
      <h1>Derneğimizin Tüzüğü</h1>
      
      <div className={styles.introduction}>
        <p>
          Bu tüzük, Bayburt Arslandede Köyü Yardımlaşma ve Dayanışma Derneği'nin
          kuruluş amacını, çalışma şeklini, organlarını ve işleyişini düzenleyen
          temel belgedir.
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
          Bu tüzük özeti bilgilendirme amaçlıdır. Derneğimizin tam tüzük metnine
          ulaşmak için <a href="/documents/tuzuk.pdf" target="_blank" rel="noopener noreferrer" className={styles.pdfLink}>buraya tıklayınız</a>.
        </p>
      </div>
    </div>
  );
};

export default StatuteContent; 