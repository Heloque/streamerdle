import React from 'react';
import styles from './Card.module.css';

const determineMostStreamGameBg = (dailyGames, mostGames) => {
  const matchingGamesCount = mostGames.filter(game => dailyGames.includes(game)).length;

  if (matchingGamesCount === 0) {
    return '#D42D2D';
  } else if (matchingGamesCount < mostGames.length) {
    return '#F28111';
  } else {
    return '#108910';
  }
};

const determineArrowStyle = (dailyAverage, viewerAverage) => {
  const isEqual = dailyAverage === viewerAverage;
  const backgroundColor = isEqual ? '#108910' : '#D42D2D';

  let backgroundImage = '';

  if (dailyAverage > viewerAverage) {
    backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 width=%22100%25%22 height=%22100%25%22 fill=%22black%22 fill-opacity=%220.2%22><path d=%22M12 2l6 6h-4v10h-4V8H6z%22/></svg>')";
  } else if (dailyAverage < viewerAverage) {
    backgroundImage = "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 width=%22100%25%22 height=%22100%25%22 fill=%22black%22 fill-opacity=%220.2%22><path d=%22M12 22l-6-6h4V6h4v10h4z%22/></svg>')";
  }

  return {
    backgroundColor: backgroundColor,
    backgroundImage: backgroundImage,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
};

const Card = ({ dailyElementFull, dailyAge, name, picture_url, most_stream_game, average_viewer, banned, age, creation_date }) => {
  
  const mostStreamGameBg = determineMostStreamGameBg(dailyElementFull.most_stream_game, most_stream_game);

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
              </div>
            ))}
          </span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(dailyElementFull.average_viewer, average_viewer)}>
          <span className={styles.attributeName}>{average_viewer}</span>
        </div>
        <div className={styles.colorBox} style={{ backgroundColor: dailyElementFull.banned === banned ? "#108910" : "#D42D2D" }}>
          <span className={styles.attributeName}>{banned ? "Oui" : "Non"}</span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(dailyAge, age)}>
          <span className={styles.attributeName}>{age} ans</span>
        </div>
        <div className={styles.colorBox} style={determineArrowStyle(dailyElementFull.creation_date, creation_date)}>
          <span className={styles.attributeName}>{creation_date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
