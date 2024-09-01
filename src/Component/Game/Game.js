import React, { useState } from 'react';
import Select from 'react-select';
import Card from './Card'; 
import CardHeader from './CardHeader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarDays,faInfinity } from "@fortawesome/free-solid-svg-icons";
import { getRandomElement } from '../../utils/elementGetter.js';
import styles from './Game.module.css';

const selectorComponent = ({ innerRef, innerProps, data, isFocused }) => (
    <div ref={innerRef} {...innerProps} className={`${styles.option} ${isFocused ? styles.optionFocused : ''}`}>
        <img src={data.picture_url} alt={data.label} className={styles.optionImage} />
        <span className={styles.optionLabel}>{data.label}</span>
    </div>
);

const Game = ({
    chosenElement,
    setChosenElement,
    mod,
    setMod,
    isCorrect,
    setIsCorrect,
    handleChange,
    handleCopyResults,
    showPopup,
    selectedOptions,
    setSelectedOptions,
    options,
}) => {
    const [selectedValue, setSelectedValue] = useState(null);
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
                            setSelectedValue(selectedOption);
                        }}
                        value={selectedValue}
                        isDisabled={isCorrect}
                        classNames={{
                            control: () => styles.selectControl,
                            option: () => styles.selectOption,
                            singleValue: () => styles.selectSingleValue,
                        }}
                        components={{ Option: selectorComponent }}
                    />
                </div>
                <button className={styles.modeButton}>
                    <FontAwesomeIcon icon={mod === 'daily' ? faCalendarDays : faInfinity} fixedWidth />
                </button>
            </div>
            {mod === 'infinite' && isCorrect && (
                <button
                    className={styles.replay}
                    onClick={() => {
                        setChosenElement(getRandomElement());
                        setIsCorrect(false);
                        setSelectedOptions([]);
                        setSelectedValue(null);
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
                        creation_date={option.creation_date}
                    />
                ))}
            </div>
        </div>
    );
};

export default Game;
