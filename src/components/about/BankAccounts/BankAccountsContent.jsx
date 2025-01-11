'use client';

import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import BackButton from '@/components/common/BackButton';
import styles from './BankAccountsContent.module.scss';

const bankAccounts = [
  {
    bank: 'Ziraat Bankası',
    branch: 'Bayburt Şubesi',
    accountName: 'Arslandede Köyü Derneği',
    iban: 'TR12 3456 7890 1234 5678 9012 34',
    accountType: 'TL Hesabı',
    description: 'Aidat ödemeleri ve bağışlar için'
  },
  {
    bank: 'Halk Bankası',
    branch: 'Bayburt Şubesi',
    accountName: 'Arslandede Köyü Derneği',
    iban: 'TR98 7654 3210 9876 5432 1098 76',
    accountType: 'TL Hesabı',
    description: 'Proje ve etkinlik ödemeleri için'
  },
  {
    bank: 'Vakıfbank',
    branch: 'Bayburt Şubesi',
    accountName: 'Arslandede Köyü Derneği',
    iban: 'TR45 6789 0123 4567 8901 2345 67',
    accountType: 'TL Hesabı',
    description: 'Genel bağış ve yardımlar için'
  }
];

const paymentInfo = {
  title: 'Ödeme Bilgileri',
  items: [
    'Aidat ödemelerinizi yaparken açıklama kısmına TC kimlik numaranızı yazınız.',
    'EFT/Havale işlemlerinde gönderen kısmına adınızı ve soyadınızı yazınız.',
    'Bağış ve yardımlarınız için makbuz talep edebilirsiniz.',
    'Online ödeme sistemimiz yakında hizmetinizde olacaktır.'
  ]
};

const BankAccountsContent = () => {
  const [copiedIban, setCopiedIban] = useState('');

  const copyToClipboard = (iban) => {
    navigator.clipboard.writeText(iban);
    setCopiedIban(iban);
    setTimeout(() => setCopiedIban(''), 2000);
  };

  return (
    <div className={styles.bankAccountsContent}>
      <h1>Banka Hesaplarımız</h1>
      
      <div className={styles.introduction}>
        <p>
          Derneğimize yapacağınız aidat ödemeleri, bağışlar ve diğer ödemeler için
          aşağıdaki banka hesaplarımızı kullanabilirsiniz.
        </p>
      </div>

      <div className={styles.accountsGrid}>
        {bankAccounts.map((account, index) => (
          <div key={index} className={styles.accountCard}>
            <h2>{account.bank}</h2>
            <div className={styles.accountInfo}>
              <div className={styles.infoRow}>
                <span className={styles.label}>Şube:</span>
                <span className={styles.value}>{account.branch}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Hesap Adı:</span>
                <span className={styles.value}>{account.accountName}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.label}>Hesap Türü:</span>
                <span className={styles.value}>{account.accountType}</span>
              </div>
              <div className={styles.ibanRow}>
                <span className={styles.label}>IBAN:</span>
                <span className={styles.value}>{account.iban}</span>
                <button
                  className={styles.copyButton}
                  onClick={() => copyToClipboard(account.iban)}
                >
                  <FaCopy />
                  {copiedIban === account.iban && <span className={styles.tooltip}>Kopyalandı!</span>}
                </button>
              </div>
              <div className={styles.description}>
                {account.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.paymentInfo}>
        <h2>{paymentInfo.title}</h2>
        <ul>
          {paymentInfo.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.note}>
        <h3>Önemli Not</h3>
        <p>
          Derneğimiz adına para toplama yetkisi olmayan kişilere itibar etmeyiniz.
          Tüm ödemelerinizi yukarıda belirtilen resmi hesaplarımıza yapınız.
        </p>
      </div>
    </div>
  );
};

export default BankAccountsContent; 