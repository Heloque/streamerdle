import React from 'react';
import styles from './Card.module.css';

const Card = ({
  chosenElementFull,
  chosenAge,
  name,
  picture_url,
  most_stream_game,
  average_viewer,
  banned,
  age,
  creation_date,
  determineMostStreamGameBg,
  determineArrowStyle
}) => {
  
  const mostStreamGameBg = determineMostStreamGameBg(chosenElementFull.most_stream_game, most_stream_game);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.colorBox}>
          <img src={picture_url} alt={name} />
          <p>{name}</p>
        </div>
        <div 
          className={styles.colorBox} 
          style={{ backgroundColor: mostStreamGameBg}}
        >
          <span className={styles.attributeName}>
            {most_stream_game.map((game, index) => (
              <div key={index} className={styles.gameItem}>
                {game}
                {chosenElementFull.most_stream_game.includes(game) && ' ✅'}
              </div>
            ))}
          </span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(chosenElementFull.average_viewer, average_viewer)}>
          <span className={styles.attributeName}>{Intl.NumberFormat('fr-FR').format(average_viewer)}</span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: chosenElementFull.banned === banned ? "#108910" : "#D42D2D" }}>
          <span className={styles.attributeName}>{banned ? "Oui" : "Non"}</span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(chosenAge, age)}>
          <span className={styles.attributeName}>{age} ans</span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(chosenElementFull.creation_date, creation_date)}>
          <span className={styles.attributeName}>{creation_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
