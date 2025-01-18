'use client';

import React from 'react';
import styles from './page.module.scss';

const CursesPage = () => {
  const curses = [
    {
      curse: 'Gorbagor olasın',
      meaning: 'Toprağa karışıp yok olasın (mezara girip çürüyüp kaybolasın) anlamında kullanılır.',
    },
    {
      curse: 'Tezekle ısınasın, ışığa hasret kalasın',
      meaning: 'Modern imkânlardan yoksun, zor şartlarda yaşam sürme dileğini ifade eder.',
    },
    {
      curse: 'Ne yüzün gülsün ne kapında soğuş (söğüş) eksilsin',
      meaning:
        'Hem insanın yüzünün gülmemesini hem de evinin kapısının dertle dolu olmasını istemek anlamında kullanılır.',
    },
    {
      curse: 'Kara kışta odunsuz, ocaksız kalasın',
      meaning:
        'Isınma imkânından yoksun kalarak zorlu kış şartlarını yaşa şeklinde bir olumsuz dilektir.',
    },
    {
      curse: 'Gözün doymadan gözün toprak doysun',
      meaning:
        'Açgözlülükle ilişkilendirilir; kişi dünya nimetlerine doymadan ölsün anlamında kullanılır.',
    },
    {
      curse: 'Ocağından aşı, kapından kuşu eksik olmasın, ama sana nasip olmasın',
      meaning: 'Evde bolluk, bereket olsa da o kişiye hiç yarar getirmesin temennisini ifade eder.',
    },
    {
      curse: 'Tutunduğun dal kopsun, dayandığın dağ yansın',
      meaning: 'Tüm desteklerin çökmesi, kişinin sığınacak yer bulamaması dileğidir.',
    },
    {
      curse: 'Elin kalkmasın, dilin tutulmasın ama lafın geçmesin',
      meaning: 'Konuşabilsin ama sözlerine kimse önem vermesin, etkisi olmasın dileğini anlatır.',
    },
    {
      curse: 'Evinde yufka yoğrulsun, sana nasip olmasın',
      meaning: 'Evde her türlü rızkın pişmesi ama kişinin ondan faydalanamaması dileğidir.',
    },
    {
      curse: 'Yastığın düz, uykun haram olsun',
      meaning:
        'Fiziksel olarak rahat ortam bulsa da iç huzurdan yoksun kalsın, rahat uyuyamasın dileğini anlatır.',
    },
    {
      curse: 'Dünyan dar olsun, ahretin de dar olsun',
      meaning: 'Hem bu dünyada hem ahirette sıkıntı çekme temennisidir.',
    },
    {
      curse: 'Kapın kitlensin',
      meaning:
        'Evin kapansın, kimseye kapı açamaz hâle gel (misafir alamayasın) anlamında kullanılır.',
    },
    {
      curse: 'Gafil avlansın, düşmanın senden önce duysun',
      meaning:
        'Her işinde hazırlıksız kal, düşmanların senden önce haber alsın anlamında bedduadır.',
    },
    {
      curse: 'Elin var olsun, işin olmasın',
      meaning: 'Çalışma gücün olsa bile ekmek kapın olmasın, iş tutama anlamında kullanılır.',
    },
    {
      curse: 'Evin barkın olsun, içinde huzurun olmasın',
      meaning: 'Maddi imkâna sahip olup aile saadetinden yoksun kalma dileğidir.',
    },
    {
      curse: 'Tarlanın sürülü, harmanın yığılı dursun, ama sana yaramasın',
      meaning: 'Emek verilmiş mahsul olsa da kişiye fayda getirmesin anlamında kullanılır.',
    },
    {
      curse: 'Sofran kurulu dursun, elin yesin, sen seyret',
      meaning: 'Ziyafet ortamı olsun, fakat kişi nasiplenemesin temennisini ifade eder.',
    },
    {
      curse: 'Gittiğin yolda iz, tuttuğun işte kazanç bulunmasın',
      meaning: 'Her yolun sonuçsuz, her girişimin faydasız kalması dileğidir.',
    },
    {
      curse: 'Derdin çok olsun, dermana kavuşmadan bir yenisi doğsun',
      meaning: 'Sorunlar bitmeden sürekli yenilerinin eklenmesi dileğinde bulunur.',
    },
    {
      curse: 'Elin ekmek tutsun, dişin yiyemesin',
      meaning: 'Kişi gelir elde etse dahi ondan faydalanamasın, yiyemesin dileğini anlatır.',
    },
    {
      curse: 'Yılan gölgesi, fare nefesi eksilmesin kapından',
      meaning:
        'Devamlı çeşitli belalarla uğraş, evin zararlı hayvanlardan kurtulamasın anlamında kullanılır.',
    },
    {
      curse: 'Uykudan uyan, uyanınca dertle uyan',
      meaning:
        'Rahatın yalnızca uyku sırasında kalsın, uyanır uyanmaz belalara düş anlamında bir bedduadır.',
    },
    {
      curse: 'Bahtın kapansın, kapıların hep sana dert olsun',
      meaning: 'Talihin dönmesin ve her girdiğin iş, her çaldığın kapı dert getirsin temennisidir.',
    },
    {
      curse: 'Hanın, hamamın dolsun, umudun hiç dolmasın',
      meaning: 'Zengin ve varlıklı olsan da mutluluğu bulamama, huzursuz olma dileğidir.',
    },
    {
      curse: 'Tek muradın mezara girmek olsun',
      meaning:
        'Hiçbir isteğine kavuşamayarak ölümü tek çare olarak görmek anlamında ağır bir bedduadır.',
    },
    {
      curse: 'Dileğin tutulsun, hayrını göremeyesin',
      meaning: 'İstediği şey gerçekleşse bile o kişiye faydası dokunmasın anlamında kullanılır.',
    },
  ];

  return (
    <div className={styles.cursesPage}>
      <div className={styles.container}>
        <h1>Yöresel Beddualar</h1>
        <p className={styles.intro}>
          Anadolu kültürünün önemli bir parçası olan beddualar, halk dilinde yaşayan ve kuşaktan
          kuşağa aktarılan sözlü kültür öğeleridir. Aşağıda köyümüzde sıkça kullanılan beddualar ve
          anlamları listelenmiştir.
        </p>

        <div className={styles.cursesList}>
          {curses.map((item, index) => (
            <div key={index} className={styles.curseItem}>
              <h3>{item.curse}</h3>
              <p>{item.meaning}</p>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            Not: Bu beddualar kültürel miras olarak derlenmiştir. Derneğimiz hiçbir şekilde kötü
            dilek ve bedduaları desteklememektedir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursesPage;
