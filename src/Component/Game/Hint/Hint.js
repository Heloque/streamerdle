import React from 'react';
import styles from './Hint.module.css';


const Hint = ({
  chosenElementFull,
  isUnlock,
  hintDisplayed,
  setHintDisplayed,
  bluredPicture
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
              Indice 1
            </button>

            <button 
              disabled={!isUnlock.hint2} 
              className={`tab-button ${isUnlock.hint2 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(2)}
            >
          
              Indice 2
            
            </button>

            <button 
              disabled={!isUnlock.hint3}
              className={`tab-button ${isUnlock.hint3 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(3)}
            >
              Indice 3
            </button>
            <button 
              className={`tab-button ${isUnlock.hint3 ? 'unlocked' : 'locked'}`}
              onClick={() => setHintDisplayed(0)}
            >
              -
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
            <canvas ref={bluredPicture} width={200} height={200}/>
          </div>
        )}
    </div>
  );
};

export default Hint;
