import React from 'react';
import styles from './page.module.scss';

const VillageHistory = () => {
  return (
    <div className={styles.container}>
      <h1>Arslandedede Köyü Tarihçesi</h1>
      
      <section className={styles.section}>
        <h2>Konum ve Ulaşım</h2>
        <p>Arslandedede Köyü, Bayburt ilinin merkez ilçesine bağlıdır. Köye Bayburt şehir merkezinden kara yoluyla ulaşılabilir. Bazı günler düzenlenen minibüs seferleri veya özel araç kullanımı yaygındır.</p>
      </section>

      <section className={styles.section}>
        <h2>Tarihi Geçmiş</h2>
        <p>Köyün eski adı "Kan" olup, 1959 yılında resmi olarak "Arslandedede" olarak değiştirilmiştir. Cumhuriyet döneminde birçok köyün adı değiştirilirken bu köy de yeni ismini almıştır.</p>
        
        <h3>Tarihi Cami</h3>
        <p>Köydeki ibadethane, eskiden bir kilise olarak hizmet vermekteydi. Zamanla camiye dönüştürülerek Müslüman cemaatin kullanımına açılmıştır. Artan nüfus ve yapının yetersizliği sebebiyle 1960 yılında cami yeniden inşa edilmiş olup, bugün kullanılan yapı 1960'ta yapılan bu camidir.</p>
      </section>

      <section className={styles.section}>
        <h2>Nüfus ve Demografi</h2>
        <p>Köyün nüfusu mevsimlere göre değişkenlik gösterir. Yaz aylarında gurbetçilerin gelişiyle nüfus artarken, kış aylarında azalır. Genç nüfusun bir kısmı, iş ve eğitim imkânları nedeniyle Bayburt merkez veya daha büyük şehirlere göç etmiştir.</p>
      </section>

      <section className={styles.section}>
        <h2>Ekonomik Faaliyetler</h2>
        <ul>
          <li>Tarım: Aile tipi küçük ölçekli tarım yaygındır; arpa ve buğday gibi tahıllar yetiştirilir.</li>
          <li>Hayvancılık: Koyun, keçi ve büyükbaş yetiştiriciliği önemli bir geçim kaynağıdır.</li>
          <li>Seracılık: Özellikle iklim koşullarının elverdiği dönemlerde örtü altı üretimi yapılır.</li>
          <li>Arıcılık: Yüksek rakım ve zengin yayla bitki örtüsü sayesinde arıcılık da yapılmaktadır.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Kültür ve Gelenekler</h2>
        <p>Bayburt'un genelinde bilinen lor dolması, galacoş, su böreği, yalancı dolma, erişte ve tel helva gibi lezzetler köyde de yapılmaktadır. Düğün, bayram ve şenliklerde davul-zurna eşliğinde yerel halk oyunları icra edilir.</p>
      </section>

      <section className={styles.section}>
        <h2>Doğal Özellikler ve İklim</h2>
        <p>Arslandedede Köyü, Bayburt'un genel karakterini yansıtan dağlık ve yüksek rakımlı bir bölgededir; yaylalarıyla ünlüdür. Kışlar uzun, soğuk ve karlı; yazlar ılıman ve serin geçer. Karasal iklim etkileri belirgindir.</p>
      </section>

      <section className={styles.section}>
        <h2>Sosyal ve İdari Yapı</h2>
        <ul>
          <li>Köy muhtarlık tarafından idare edilmektedir.</li>
          <li>Eğitim taşımalı sistem ile sağlanmaktadır.</li>
          <li>Köyde bir sağlık ocağı bulunmaktadır.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Geleceğe Yönelik Potansiyel</h2>
        <ul>
          <li>Kırsal Turizm: Yaylalar, doğa yürüyüşleri ve kamp etkinlikleri</li>
          <li>Kooperatifçilik ve Kalkınma Projeleri</li>
          <li>Kültürel Mirasın Korunması</li>
        </ul>
      </section>
    </div>
  );
};

export default VillageHistory; 