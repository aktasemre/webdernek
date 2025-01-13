import DonationCard from '@/components/donate/DonationCard/DonationCard';
import { donationData } from '@/data/donation.data';
import styles from './page.module.scss';

export const metadata = {
  title: 'Bağış Yap | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği bağış sayfası. Ağaçlandırma, ramazan kumanyası, eğitim bursu ve cami yardımları için bağış yapabilirsiniz.',
  keywords: ['bağış', 'yardım', 'ağaçlandırma', 'kumanya', 'eğitim bursu', 'cami yardımı'],
};

const DonatePage = () => {
  return (
    <main className={styles.donatePage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Bağış Yap</h1>
          <p>
            Köyümüzün gelişimi ve ihtiyaçları için başlattığımız kampanyalara destek olabilirsiniz.
            Tüm bağışlarınız derneğimiz tarafından kayıt altına alınmakta ve amacına uygun olarak kullanılmaktadır.
          </p>
        </div>

        <div className={styles.bankAccounts}>
          <h2>Banka Hesaplarımız</h2>
          <div className={styles.accountCards}>
            {donationData.bankAccounts.map((account, index) => (
              <DonationCard key={index} bankAccount={account} />
            ))}
          </div>
        </div>

        <div className={styles.campaigns}>
          <h2>Bağış Kampanyalarımız</h2>
          <div className={styles.campaignGrid}>
            {donationData.campaigns.map((campaign, index) => (
              <div key={index} className={styles.campaignCard}>
                <div className={styles.imageContainer}>
                  <img src={campaign.image} alt={campaign.title} />
                </div>
                <div className={styles.content}>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.description}</p>
                  <div className={styles.progress}>
                    <div 
                      className={styles.progressBar} 
                      style={{ width: `${(campaign.currentAmount / campaign.targetAmount) * 100}%` }}
                    />
                  </div>
                  <div className={styles.amounts}>
                    <span>Toplanan: {campaign.currentAmount.toLocaleString()} ₺</span>
                    <span>Hedef: {campaign.targetAmount.toLocaleString()} ₺</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonatePage; 