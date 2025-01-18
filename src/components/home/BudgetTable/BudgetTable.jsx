'use client';

import styles from './BudgetTable.module.scss';

export default function BudgetTable() {
  return (
    <section className={styles.budgetSection}>
      <h2>Dernek Bütçesi</h2>
      <div className={styles.tableWrapper}>
        <iframe
          title="Dernek Bütçe Tablosu"
          src="https://docs.google.com/spreadsheets/d/e/your-spreadsheet-id/pubhtml?widget=true&amp;headers=false"
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <div className={styles.note}>
        <p>* Bütçe tablosu her ay düzenli olarak güncellenmektedir.</p>
      </div>
    </section>
  );
} 