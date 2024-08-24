import React from 'react';
import styles from './Card.module.css';

const Card = ({ dailyElementFull, name, picture_url, most_stream_game, average_viewer, zevent, date_birth, age, date_created }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.colorBox}>
          <img src={picture_url} alt={name} />
          {/* {name} */}
        </div>
        <div 
          className={styles.colorBox} 
          style={{ backgroundColor: dailyElementFull.most_stream_game === most_stream_game ? "#00FF00" : "#FF0000" }}
        >
          <span className={styles.attributeName}>
            {most_stream_game.map((game, index) => (
              <div key={index}>{game}</div>
            ))}
          </span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.average_viewer === average_viewer ? "#00FF00" : "#FF0000" }}>
          <span className={styles.attributeName}>{average_viewer}</span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.zevent === zevent ? "#00FF00" : "#FF0000" }}>
          <span className={styles.attributeName}>{zevent ? "Oui" : "Non"}</span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.date_birth === date_birth ? "#00FF00" : "#FF0000" }}>
          <span className={styles.attributeName}>{age} ans</span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.date_created === date_created ? "#00FF00" : "#FF0000" }}>
          <span className={styles.attributeName}>{date_created}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
