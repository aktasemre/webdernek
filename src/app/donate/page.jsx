'use client';

import Image from 'next/image';
import DonationCard from '@/components/donate/DonationCard/DonationCard';
import { donationData } from '@/data/donation.data';
import styles from './donate.module.scss';

const DonatePage = () => {
  return (
    <main className={styles.donatePage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Bağış Yapabileceğiniz Hesaplar</h1>
          <p>Derneğimize yapacağınız bağışlar için aşağıdaki banka hesaplarını kullanabilirsiniz.</p>
        </header>

        <div className={styles.bankAccounts}>
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
                  <Image 
                    src={campaign.image} 
                    alt={campaign.title}
                    width={400}
                    height={200}
                    className={styles.image}
                  />
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