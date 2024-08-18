import React from 'react';
import styles from './CardHeader.module.css';

const CardHeader = () => {
    return (
    <div className={styles.card}>
      <div className={styles.colorBox}>
        Couleur
      </div>
      <div className={styles.colorBox}>
        <span className={styles.attributeName}>Teinte</span>
      </div>
      <div className={styles.colorBox}>
        <span className={styles.attributeName}>Luminosité</span>
      </div>
      <div className={styles.colorBox}>
        <span className={styles.attributeName}>Type</span>
      </div>
      <div className={styles.colorBox}>
        <span className={styles.attributeName}>Couleur principale</span>
      </div>
      <div className={styles.colorBox}>
        <span className={styles.attributeName}>Couleur secondaire</span>
      </div>
    </div>
  );
};

export default CardHeader;
