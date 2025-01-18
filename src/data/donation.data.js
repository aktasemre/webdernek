export const donationData = {
  bankAccounts: [
    {
      bankName: 'Ziraat Bankası',
      accountHolder: 'Arslandede Köyü Derneği',
      iban: 'TR12 3456 7890 1234 5678 9012 34',
      branchCode: '1234',
      accountNumber: '12345678',
      description: 'Derneğimizin resmi banka hesabı',
    },
  ],
  campaigns: [
    {
      title: 'Ağaçlandırma Kampanyası',
      description:
        'Köyümüzün yeşil dokusunu korumak ve geliştirmek için başlattığımız ağaçlandırma kampanyasına destek olabilirsiniz.',
      image: '/images/bagis_kampanya/agaclandirma.jpg',
      targetAmount: 50000,
      currentAmount: 25000,
    },
    {
      id: 1,
      title: 'Dar Gelirli Ailelere Yardım Kampanyası',
      description:
        'Dar gelirli ailelerimize destek olmak için başlattığımız yardım kampanyasına destek olabilirsiniz.',
      image: '/images/bagis_kampanya/kumanya.jpg',
      targetAmount: 50000,
      currentAmount: 15000,
      deadline: '2024-06-01',
      status: 'active',
    },
    {
      id: 3,
      title: 'Eğitim Bursu',
      description: 'Köyümüzün başarılı öğrencilerine eğitim bursu desteği sağlıyoruz.',
      image: '/images/bagis_kampanya/egitim.jpg',
      targetAmount: 100000,
      currentAmount: 45000,
      status: 'active',
    },
    {
      id: 2,
      title: 'Mezarlık Yeri Alma Kampanyası',
      description:
        'Köyümüz için mezarlık yeri almak amacıyla başlattığımız kampanyaya destek olabilirsiniz.',
      image: '/images/bagis_kampanya/mezarlik.jpg',
      targetAmount: 100000,
      currentAmount: 35000,
      deadline: '2024-08-01',
      status: 'active',
    },
  ],
};

export default donationData;
