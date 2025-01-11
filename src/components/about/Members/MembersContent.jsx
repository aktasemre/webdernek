'use client';

import { useState } from 'react';
import styles from './MembersContent.module.scss';

const memberCategories = [
  {
    id: 'active',
    title: 'Aktif Üyeler',
    description: 'Derneğimizin faaliyetlerine düzenli olarak katılan ve aidat ödemelerini aksatmayan üyelerimiz.',
    count: 150
  },
  {
    id: 'honorary',
    title: 'Onursal Üyeler',
    description: 'Derneğimize ve köyümüze önemli katkılarda bulunmuş, onursal üyelik statüsü verilmiş değerli büyüklerimiz.',
    count: 15
  },
  {
    id: 'youth',
    title: 'Genç Üyeler',
    description: 'Derneğimizin geleceğini oluşturan, 18-30 yaş arası genç üyelerimiz.',
    count: 45
  }
];

const membershipInfo = {
  requirements: [
    'Arslandede Köyü\'nde doğmuş olmak veya köy ile bağlantısı bulunmak',
    '18 yaşını doldurmuş olmak',
    'Medeni haklarını kullanma ehliyetine sahip olmak',
    'Dernek tüzüğünü kabul etmek',
    'Yıllık aidat ödemeyi taahhüt etmek'
  ],
  benefits: [
    'Dernek faaliyetlerine katılım hakkı',
    'Genel kurulda oy kullanma hakkı',
    'Dernek tesislerinden yararlanma imkanı',
    'Sosyal etkinliklere öncelikli katılım',
    'Dernek yayınlarından ücretsiz yararlanma'
  ],
  duties: [
    'Dernek tüzüğüne uymak',
    'Yıllık aidatı zamanında ödemek',
    'Dernek faaliyetlerine katkıda bulunmak',
    'Genel kurul toplantılarına katılmak',
    'Derneğin amaçlarına uygun davranmak'
  ]
};

const MembersContent = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  return (
    <div className={styles.membersContent}>
      <h1>Üyelerimiz</h1>
      
      <div className={styles.introduction}>
        <p>
          Arslandede Köyü Derneği olarak, köyümüzün gelişimi ve dayanışması için
          çalışan üyelerimizle birlikte güçlü bir topluluk oluşturuyoruz.
        </p>
      </div>

      <div className={styles.categories}>
        {memberCategories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <h2>{category.title}</h2>
            <div className={styles.count}>{category.count}</div>
            <p>{category.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.membershipInfo}>
        <h2>Üyelik Bilgileri</h2>
        
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'requirements' ? styles.active : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            Üyelik Şartları
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'benefits' ? styles.active : ''}`}
            onClick={() => setActiveTab('benefits')}
          >
            Üyelik Avantajları
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'duties' ? styles.active : ''}`}
            onClick={() => setActiveTab('duties')}
          >
            Üyelik Görevleri
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'requirements' && (
            <ul>
              {membershipInfo.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {activeTab === 'benefits' && (
            <ul>
              {membershipInfo.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {activeTab === 'duties' && (
            <ul>
              {membershipInfo.duties.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={styles.applicationInfo}>
        <h2>Üyelik Başvurusu</h2>
        <p>
          Derneğimize üye olmak için aşağıdaki belgelerle birlikte dernek merkezimize
          başvurabilir veya online başvuru formunu doldurabilirsiniz:
        </p>
        <ul>
          <li>Nüfus cüzdanı fotokopisi</li>
          <li>İkametgah belgesi</li>
          <li>2 adet fotoğraf</li>
          <li>Üyelik başvuru formu</li>
        </ul>
        <button className={styles.applyButton}>
          Online Başvuru Yap
        </button>
      </div>
    </div>
  );
};

export default MembersContent; 