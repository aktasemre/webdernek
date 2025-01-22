'use client';

import Link from 'next/link';
import {
  FaLandmark,
  FaComments,
  FaQuoteRight,
  FaUsers,
  FaRegCalendarAlt,
  FaNewspaper,
  FaImages
} from 'react-icons/fa';
import {
  FaHandshakeSimple,
  FaHeart,
  FaPeopleGroup,
  FaGraduationCap
} from 'react-icons/fa6';
import styles from './Features.module.scss';

const features = [
  {
    icon: <FaLandmark />,
    title: 'Kültürel Miras',
    description: 'Köyümüzün zengin tarihini ve kültürünü yaşatıyoruz',
    link: '/culture',
    color: '#2C5F2D',
  },
  {
    icon: <FaComments />,
    title: 'Yerel Kelimeler',
    description: 'Köyümüze özgü kelimeler ve anlamları',
    link: '/culture/words',
    color: '#3498db',
  },
  {
    icon: <FaQuoteRight />,
    title: 'Atasözleri',
    description: 'Yöresel atasözleri ve deyimler',
    link: '/culture/proverbs',
    color: '#34495e',
  },
  {
    icon: <FaUsers />,
    title: 'Üyelerimiz',
    description: 'Güçlü üye ağımız ile birlikte çalışıyoruz',
    link: '/about/members',
    color: '#2980b9',
  },
  {
    icon: <FaHandshakeSimple />,
    title: 'Dayanışma',
    description: 'Köyümüz ve derneğimiz arasında güçlü bir dayanışma ruhu',
    link: '/about',
    color: '#27ae60',
  },
  {
    icon: <FaHeart />,
    title: 'Yardımlaşma',
    description: 'İhtiyaç sahiplerine destek ve yardım faaliyetleri',
    link: '/donation',
    color: '#e74c3c',
  },
  {
    icon: <FaPeopleGroup />,
    title: 'Birlik',
    description: 'Köylülerimiz arasında birlik ve beraberlik',
    link: '/about/board',
    color: '#f39c12',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Eğitim',
    description: 'Gençlerimize eğitim desteği ve burs imkanları',
    link: '/education',
    color: '#8e44ad',
  },
  {
    icon: <FaRegCalendarAlt />,
    title: 'Etkinlikler',
    description: 'Dernek ve köy etkinliklerimiz',
    link: '/events',
    color: '#27ae60',
  },
  {
    icon: <FaNewspaper />,
    title: 'Haberler',
    description: 'En güncel dernek ve köy haberlerimiz',
    link: '/news',
    color: '#3498db',
  },
  {
    icon: <FaImages />,
    title: 'Galeri',
    description: 'Köyümüzden fotoğraflar ve videolar',
    link: '/gallery',
    color: '#9b59b6',
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>Değerlerimiz ve Hizmetlerimiz</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className={styles.feature}>
              <div className={styles.iconWrapper} style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
