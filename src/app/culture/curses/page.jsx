'use client';

import React from 'react';
import styles from './page.module.scss';

const CursesPage = () => {
  const curses = [
    {
      curse: "Ocağın batasıca",
      meaning: "Evin yıkılsın, ailenin düzeni bozulsun anlamında kullanılır"
    },
    {
      curse: "Gözün kör olasıca",
      meaning: "Göremez olasın anlamında kullanılır"
    },
    {
      curse: "Dilin tutulasıca",
      meaning: "Konuşamaz olasın anlamında kullanılır"
    },
    {
      curse: "Ellerin kurusun",
      meaning: "İş yapamaz hale gelesin anlamında kullanılır"
    },
    {
      curse: "Yerin dibine giresice",
      meaning: "Ortadan kaybolasın anlamında kullanılır"
    },
    {
      curse: "Boyun devrilsin",
      meaning: "Yıkılıp kalkamayasın anlamında kullanılır"
    },
    {
      curse: "Adın batasıca",
      meaning: "İsmin anılmaz olsun anlamında kullanılır"
    },
    {
      curse: "Ciğerin yanasıca",
      meaning: "Büyük acı çekesin anlamında kullanılır"
    },
    {
      curse: "Yüzün gülmeyesice",
      meaning: "Mutlu olamayasın anlamında kullanılır"
    },
    {
      curse: "Kapın kitlensin",
      meaning: "Evin kapansın, misafir alamayasın anlamında kullanılır"
    }
  ];

  return (
    <div className={styles.cursesPage}>
      <div className={styles.container}>
        <h1>Yöresel Beddualar</h1>
        <p className={styles.intro}>
          Anadolu kültürünün önemli bir parçası olan beddualar, halk dilinde yaşayan ve kuşaktan kuşağa aktarılan sözlü kültür öğeleridir. 
          Aşağıda köyümüzde sıkça kullanılan beddualar ve anlamları listelenmiştir.
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
            Not: Bu beddualar kültürel miras olarak derlenmiştir. 
            Derneğimiz hiçbir şekilde kötü dilek ve bedduaları desteklememektedir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursesPage; 