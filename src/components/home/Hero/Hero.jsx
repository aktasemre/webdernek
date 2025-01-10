import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/manzara1.jpg"
          alt="Arslandede Köyü Manzarası"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <h1>Arslandede Köyü Derneği</h1>
        <p>Birlik ve beraberlik içinde, köyümüzün gelişimi için çalışıyoruz</p>
        <div className={styles.buttons}>
          <Link href="/about" className={styles.primaryButton}>
            Derneğimizi Tanıyın
          </Link>
          <Link href="/projects" className={styles.secondaryButton}>
            Projelerimiz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 