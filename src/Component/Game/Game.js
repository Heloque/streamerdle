import React from 'react';
import Select from 'react-select';
import Card from './Card'; 
import CardHeader from './CardHeader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarDays,faInfinity } from "@fortawesome/free-solid-svg-icons";
import styles from './Game.module.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import Hint from './Hint';

const selectorComponent = ({ innerRef, innerProps, data, isFocused }) => (
    <div ref={innerRef} {...innerProps} className={`${styles.option} ${isFocused ? styles.optionFocused : ''}`}>
        <img src={data.picture_url} alt={data.label} className={styles.optionImage} />
        <span className={styles.optionLabel}>{data.label}</span>
    </div>
);

const Game = ({
    chosenElement,
    mod,
    setMod,
    isCorrect,
    handleChange,
    handleCopyResults,
    showPopup,
    selectedOptions,
    selectedValue,
    hintDisplayed,
    setHintDisplayed,
    options,
    customStyles,
    resetGame,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.selectorContainer}>
                <button className={styles.homeButton} onClick={() => setMod("home")}>
                    <FontAwesomeIcon icon={faHouse} fixedWidth />
                </button>
                <div className={styles.selectContainer}>
                    <Select
                        options={options}
                        onChange={(selectedOption) => {
                            handleChange(selectedOption);
                        }}
                        value={selectedValue}
                        isDisabled={isCorrect}
                        styles={customStyles}
                        components={{
                            Option: selectorComponent,
                            DropdownIndicator: () => null,
                            IndicatorSeparator: () => null
                        }}
                    />
                </div>
                <Tippy
                    content={mod === 'daily' ? 'Mode de jeu : streamer du jour' : 'Mode de jeu : jeu infini'}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <button className={styles.modeButton}>
                        <FontAwesomeIcon icon={mod === 'daily' ? faCalendarDays : faInfinity} fixedWidth />
                    </button>
                </Tippy>
            </div>
            {mod === 'infinite' && isCorrect && (
                <button
                    className={styles.replay}
                    onClick={() => {
                        resetGame();
                    }}
                >
                    Rejouer
                </button>
            )}
            {showPopup && mod === 'daily' && (
                <div className={styles.card}>
                    <h2>Félicitations!</h2>
                    <p>Tu as deviné le streamer du jour!</p>
                    <div className={styles.resultContainer}>
                        <pre>{handleCopyResults()}</pre>
                    </div>
                    <div className={styles['button-container']}>
                        <button onClick={() => {
                            const resultText = handleCopyResults();
                            navigator.clipboard.writeText(resultText).then(() => {
                                alert('Résultats copiés dans le presse-papiers!');
                            });
                        }}>
                            Copier le résultat
                        </button>
                    </div>
                </div>
            )}
            <Hint chosenElement={chosenElement} selectedOptions={selectedOptions} hintDisplayed={hintDisplayed} setHintDisplayed={setHintDisplayed}/>
            <div className={styles.cardContainer}>
                <CardHeader/>
            </div>
            <div className={styles.cardContainer}>
                {selectedOptions.map((option, index) => (
                    <Card
                        key={index}
                        chosenElement={chosenElement}
                        name={option.label}
                        picture_url={option.picture_url}
                        most_stream_game={option.most_stream_game}
                        average_viewer={option.average_viewer}
                        banned={option.banned}
                        date_birth={option.date_birth}
                        sexe={option.sexe}
                        creation_date={option.creation_date}
                    />
                ))}
            </div>
        </div>
    );
};

export default Game;
