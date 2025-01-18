'use client';

import styles from './BudgetTable.module.scss';

export default function BudgetTable() {
  return (
    <section className={styles.budgetSection}>
      <h2>Dernek Bütçesi</h2>
      <div className={styles.tableWrapper}>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXbZvnYQGGQi_fjbXA9_tUzVYWCpXAp5S9N5_Z_tuxW7qnK3TjKXGpEJ_xcJ_jtg/pubhtml?widget=true&amp;headers=false"
          width="100%"
          height="500"
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