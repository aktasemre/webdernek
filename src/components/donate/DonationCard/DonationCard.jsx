'use client';

import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import styles from './DonationCard.module.scss';

const DonationCard = ({ bankAccount }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(bankAccount.iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('IBAN kopyalanamadı:', err);
    }
  };

  return (
    <div className={styles.donationCard}>
      <div className={styles.bankInfo}>
        <h3>{bankAccount.bankName}</h3>
        <p className={styles.description}>{bankAccount.description}</p>
      </div>

      <div className={styles.accountInfo}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Hesap Sahibi:</span>
          <span className={styles.value}>{bankAccount.accountHolder}</span>
        </div>

        <div className={styles.ibanContainer}>
          <div className={styles.ibanRow}>
            <span className={styles.label}>IBAN:</span>
            <span className={styles.value}>{bankAccount.iban}</span>
          </div>
          <button
            onClick={handleCopyIban}
            className={styles.copyButton}
            aria-label="IBAN'ı Kopyala"
          >
            {copied ? <FaCheck className={styles.checkIcon} /> : <FaCopy />}
          </button>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Şube Kodu:</span>
          <span className={styles.value}>{bankAccount.branchCode}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.label}>Hesap No:</span>
          <span className={styles.value}>{bankAccount.accountNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
