import React from 'react';
import styles from './Card.module.css';

const Card = ({ dailyElementFull, name, code, tint, luminosity, name_type, major_color, secondary_color }) => {
    return (
    <div className={styles.card}>
      <div className={styles.colorBox} style={{ backgroundColor: code }}>
        {name}
      </div>
      <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.tint === tint ? "#00FF00" : "#FF0000" }}>
        <span className={styles.attributeName}>{tint}</span>
      </div>
      <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.luminosity === luminosity ? "#00FF00" : "#FF0000" }}>
        <span className={styles.attributeName}>{luminosity}</span>
      </div>
      <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.name_type === name_type ? "#00FF00" : "#FF0000" }}>
        <span className={styles.attributeName}>{name_type}</span>
      </div>
      <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.major_color === major_color ? "#00FF00" : "#FF0000" }}>
        <span className={styles.attributeName}>{major_color}</span>
      </div>
      <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.secondary_color === secondary_color ? "#00FF00" : "#FF0000" }}>
        <span className={styles.attributeName}>{secondary_color}</span>
      </div>
    </div>
  );
};

export default Card;
