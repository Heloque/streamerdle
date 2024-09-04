import React from 'react';
import styles from './Hint.module.css';


const Hint = ({
  chosenElementFull,
  isUnlock,
  hintDisplayed,
  setHintDisplayed
}) => {


  return (
    <div>
      {hintDisplayed===0 && (
        <button onClick={() => setHintDisplayed(1)}>
          Indices
        </button>
      )}

      {hintDisplayed>0 && (
        <div className="tabs">

            <button 
              disabled={!isUnlock.hint1}
              className={`tab-button ${isUnlock.hint1 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(1)}
            >
            <p>
              Indice 1
            </p>
            </button>

            <button 
              disabled={!isUnlock.hint2} 
              className={`tab-button ${isUnlock.hint2 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(2)}
            >
            <p>
              Indice 2
            </p>
            </button>

            <button 
              disabled={!isUnlock.hint3}
              className={`tab-button ${isUnlock.hint3 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(3)}
            >
            <p>
              Indice 3
            </p>
            </button>
        </div>
        )}

        {hintDisplayed===1 && (
          <p>Voix</p>
        )}

        {hintDisplayed===2 && (
          <div>
            <p>Première lettre</p>
            <p>{chosenElementFull.name.charAt(0)}</p>
          </div>
        )}

        {hintDisplayed===3 && (
          <div> 
            <p>Photo floutée</p>
            <img src={chosenElementFull.picture_url} className={styles.blurredImage}/>
          </div>
        )}
    </div>
  );
};

export default Hint;
