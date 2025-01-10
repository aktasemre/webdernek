import React from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/AboutDistrict.module.css';

const AboutDistrict = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>İlçemiz Hakkında</h1>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img 
              src="/images/district/district-main.jpg" 
              alt="İlçe Genel Görünüm"
              className={styles.mainImage}
            />
          </div>

          <div className={styles.infoSection}>
            <h2>İlçemizin Tarihi</h2>
            <p>İlçemizin tarihi ve genel bilgileri buraya gelecek...</p>

            <h2>Coğrafi Konum</h2>
            <p>İlçemizin coğrafi konumu ve özellikleri...</p>

            <h2>Nüfus ve Demografik Yapı</h2>
            <p>İlçe nüfusu ve demografik bilgiler...</p>

            <h2>Ekonomik Yapı</h2>
            <p>İlçenin ekonomik faaliyetleri ve geçim kaynakları...</p>
          </div>

          <div className={styles.gallerySection}>
            <h2>Fotoğraf Galerisi</h2>
            <div className={styles.gallery}>
              {/* Fotoğraf galerisi grid yapısı */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDistrict; 