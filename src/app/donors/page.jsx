import styles from './donors.module.scss';

export const metadata = {
  title: 'Bağışcılarımız | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği bağışçıları ve destekçileri hakkında bilgiler.',
  keywords: ['bağışcılar', 'destekçiler', 'bağış', 'yardım'],
};

const donors = [
  { name: 'Veysel Yılmaz', contribution: '300 Mark' },
  { name: 'Aziz Yılmaz', contribution: '250 Mark' },
  { name: 'Naim Yılmaz', contribution: '1000 Mark' },
  { name: 'Cengiz Oksuz', contribution: '800 Mark' },
  { name: 'Kerim Kurt', contribution: '200 Mark' },
  { name: 'Mehmet Ustun', contribution: '700 Mark' },
  { name: 'Yehmi Ustun', contribution: '700 Mark' },
  { name: 'Rahmi Yılmaz', contribution: '200 Mark' },
  { name: 'Hanefi Yılmaz', contribution: '200 Mark' },
  { name: 'Şaban Yılmaz', contribution: '200 Mark' },
  { name: 'Derviş Aktaş', contribution: '200 Mark' },
  { name: 'Veysel Koglu', contribution: '200 Mark' },
  { name: 'Rahmi Emirali', contribution: '200 Mark' },
  { name: 'Mecnun Koglu', contribution: '200 Mark' },
  { name: 'İkram E. Ali', contribution: '200 Mark' },
  { name: 'Abdullah E. Ali', contribution: '200 Mark' },
  { name: 'Zeynel Oksuz', contribution: '200 Mark' },
  { name: 'Hacı Koglu', contribution: '200 Mark' },
  { name: 'Şükrü Üstün', contribution: '200 Mark' },
  { name: 'Ahnat Yıldırım', contribution: '700 Mark' },
  { name: 'Ali Yıldırım', contribution: '600 Mark' },
  { name: 'Osman Öz', contribution: '500 Mark' },
  { name: 'İbrahim Pala', contribution: '500 Mark' },
  { name: 'Salim Emirali', contribution: '500 Mark' },
  { name: 'Mail Oksuz', contribution: '500 Mark' },
  { name: 'Bekir Kurt', contribution: '500 Mark' },
  { name: 'Musa Ustun', contribution: '500 Mark' },
  { name: 'Mehmet Ata', contribution: '500 Mark' },
  { name: 'Karabey Ata', contribution: '500 Mark' },
  { name: 'Salim Yıldırım', contribution: '500 Mark' },
  { name: 'Osman Oğlu', contribution: '500 Mark' },
  { name: 'Necati Ata', contribution: '500 Mark' },
  { name: 'Salahattin Ata', contribution: '500 Mark' },
  { name: 'Halit Oksuz', contribution: '500 Mark' },
  { name: 'İhsan Koglu', contribution: '500 Mark' },
  { name: 'Bilal Oksuz', contribution: '500 Mark' },
  { name: 'Mustafa Koglu', contribution: '500 Mark' },
  { name: 'Recep Koglu', contribution: '500 Mark' },
  { name: 'Ferit Koglu', contribution: '500 Mark' },
  { name: 'Yüksel Oksuz', contribution: '500 Mark' },
  { name: 'Ismail Oksuz', contribution: '500 Mark' },
  { name: 'Mustafa Ata', contribution: '500 Mark' },
  { name: 'Salih Ata', contribution: '500 Mark' },
  { name: 'Hasan Yıldırım', contribution: '500 Mark' },
  { name: 'Rasim Koglu', contribution: '500 Mark' },
  { name: 'İsa Oksuz', contribution: '500 Mark' },
  { name: 'Mehmet Öz', contribution: '500 Mark' },
  { name: 'Nizamettin Yıldırım', contribution: '500 Mark' },
  { name: 'Musa Yıldırım', contribution: '500 Mark' },
  { name: 'Derviş Miralı', contribution: '100 Euro' },
  { name: 'Kenan Koglu', contribution: '400 Mark' },
  { name: 'Canan Koglu', contribution: '350 Mark' },
  { name: 'Burhan Yılmaz', contribution: '350 Mark' },
  { name: 'Ali Oksuz', contribution: '350 Mark' },
  { name: 'Halis Koglu', contribution: '350 Mark' },
  { name: 'Ercan Koglu', contribution: '350 Mark' },
  { name: 'Remzi Koglu', contribution: '350 Mark' },
  { name: 'Yusuf Yıldırım', contribution: '350 Mark' },
  { name: 'Ali Yılmaz', contribution: '350 Mark' },
  { name: 'İsa Ustun', contribution: '350 Mark' },
  { name: 'Naci Koglu', contribution: '350 Mark' },
  { name: 'Salahattin Oksuz', contribution: '350 Mark' },
  { name: 'Asıys Yılmaz', contribution: '350 Mark' },
  { name: 'Necmi Yılmaz', contribution: '350 Mark' },
  { name: 'Memet Oğlu', contribution: '350 Mark' },
  { name: 'Arip Korkmaz', contribution: '350 Mark' },
  { name: 'İsmail B. Ali', contribution: '350 Mark' },
  { name: 'Bahri Kurt', contribution: '350 Mark' },
  { name: 'Salman Yılmaz', contribution: '350 Mark' },
  { name: 'Yaşar Ustun', contribution: '350 Mark' },
];

export default function DonorsPage() {
  return (
    <main className={styles.donorsPage}>
      <h1>Bağışcılarımız</h1>
      <section className={styles.donorsList}>
        {donors.map((donor, index) => (
          <div key={index} className={styles.donorCard}>
            <h2>{donor.name}</h2>
            <p><strong>Bağış Miktarı:</strong> {donor.contribution}</p>
          </div>
        ))}
      </section>
    </main>
  );
} 