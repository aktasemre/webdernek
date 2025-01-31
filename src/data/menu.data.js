const menuItems = {
  mainMenu: [
    {
      title: 'Anasayfa',
      path: '/',
    },
    {
      title: 'Köyümüz',
      path: '/about/village',
      submenu: [
        { title: 'Tarihçe', path: '/about/village/history' },
        { title: 'Coğrafya', path: '/about/village/geography' },
        { title: 'Nüfus', path: '/about/village/population' },
        { title: 'Eğitim', path: '/about/village/education' },
        { title: 'Ekonomi', path: '/about/village/economy' },
        { title: 'Önemli Yerler', path: '/about/village/places' },
      ],
    },
    {
      title: 'Derneğimiz',
      path: '/about',
      submenu: [
        { title: 'Derneğimizin Tarihçesi', path: '/about/history' },
        { title: 'Derneğimizin Tüzüğü', path: '/about/statute' },
        { title: 'Yönetim Kurulu', path: '/about/board' },
        { title: 'Denetleme Kurulu', path: '/about/supervisory' },
        { title: 'Kurucularımız', path: '/about/founders' },
        { title: 'Üyelerimiz', path: '/about/members' },
        { title: 'Banka Hesaplarımız', path: '/about/bank-accounts' },
        { title: 'Yazarlarımız', path: '/about/writers' },
        { title: 'Kan Bankası', path: '/about/blood-bank' },
      ],
    },
    {
      title: 'Haberler',
      path: '/news',
    },
    {
      title: 'Projeler',
      path: '/projects',
    },
    {
      title: 'Etkinlikler',
      path: '/events',
    },
    {
      title: 'Galeri',
      path: '/gallery',
    },
    {
      title: 'İletişim',
      path: '/contact',
    },
  ],
};

export default menuItems; 