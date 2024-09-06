import React from 'react';
import styles from './Hint.module.css';

const Hint = ({
  chosenElementFull,
  isUnlock,
  hintDisplayed,
  setHintDisplayed,
  bluredPicture,
  showTemporaryMessage,
  handleHintToggle,
}) => {
  return (
    <div className={styles.card}>
      {showTemporaryMessage && (
        <p className={styles.temporaryMessage}>
          Indices disponibles après respectivement 4, 6 et 8 essais
        </p>
      )}
      <div className={styles.closedCard}>
        {hintDisplayed === 0 && (
          <span className={styles.hintTextClosed}>Indices</span>
        )}

        <button 
          className={styles.toggleButton} 
          onClick={handleHintToggle}
        >
          {hintDisplayed === 0 ? '+' : '-'}
        </button>
      </div>
      {hintDisplayed > 0 && (
        <div className={styles.buttonContainer}>
          <button
            disabled={!isUnlock.hint1}
            className={`${styles.tabButton} ${isUnlock.hint1 ? styles.unlocked : styles.locked}`}
            onClick={() => setHintDisplayed(1)}
          >
            Indice 1
          </button>
          <button
            disabled={!isUnlock.hint2}
            className={`${styles.tabButton} ${isUnlock.hint2 ? styles.unlocked : styles.locked}`}
            onClick={() => setHintDisplayed(2)}
          >
            Indice 2
          </button>
          <button
            disabled={!isUnlock.hint3}
            className={`${styles.tabButton} ${isUnlock.hint3 ? styles.unlocked : styles.locked}`}
            onClick={() => setHintDisplayed(3)}
          >
            Indice 3
          </button>
        </div>
      )}

      {hintDisplayed === 1 && (
        <div className={styles.hintContent}>
          <p className={styles.hintText}>Indice vocal</p>
          <audio controls className={styles.audioPlayer}>
            <source src={chosenElementFull.voice_url} type="audio/mpeg" />
          </audio>
        </div>
      )}
      {hintDisplayed === 2 && (
        <div className={styles.hintContent}>
          <p className={styles.hintText}>Première lettre</p>
          <p className={styles.hintLetter}>{chosenElementFull.name.charAt(0)}</p>
        </div>
      )}
      {hintDisplayed === 3 && (
        <div className={styles.hintContent}>
          <p className={styles.hintText}>Photo de profil floutée</p>
          <canvas ref={bluredPicture} width={200} height={200} />
        </div>
      )}
    </div>
  );
};

export default Hint;
