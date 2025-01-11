import Link from 'next/link';
import styles from './SideMenu.module.scss';

const menuItems = [
  {
    title: 'Köyümüz Hakkında',
    subItems: [
      { title: 'Köyümüzün Tarihi', path: '/about/village/history' },
      { title: 'Coğrafi Yapı ve İklim', path: '/about/village/geography' },
      { title: 'Nüfus ve Yerleşim', path: '/about/village/population' },
      { title: 'Ekonomik Yapı', path: '/about/village/economy' },
      { title: 'Eğitim ve Kültür', path: '/about/village/education' },
      { title: 'Gezilecek Yerler', path: '/about/village/places' }
    ]
  },
  {
    title: 'Derneğimiz Hakkında',
    subItems: [
      { title: 'Derneğimizin Tarihçesi', path: '/about/history' },
      { title: 'Derneğimizin Tüzüğü', path: '/about/statute' },
      { title: 'Yönetim Kurulu', path: '/about/board' },
      { title: 'Denetleme Kurulu', path: '/about/supervisory' },
      { title: 'Kurucularımız', path: '/about/founders' },
      { title: 'Üyelerimiz', path: '/about/members' },
      { title: 'Banka Hesaplarımız', path: '/about/bank-accounts' },
      { title: 'Yazarlarımız', path: '/about/writers' },
      { title: 'Kan Bankası', path: '/about/blood-bank' }
    ]
  }
];

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      {menuItems.map((item, index) => (
        <div key={index} className={styles.menuSection}>
          <h3 className={styles.sectionTitle}>{item.title}</h3>
          <ul className={styles.subItems}>
            {item.subItems.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link href={subItem.path}>
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideMenu; 