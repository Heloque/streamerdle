import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import data from '../data.json';
import Card from '../Component/Card'; 
import styles from './Home.module.css';
import CardHeader from '../Component/CardHeader';

const Home = ({ dailyElement }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const savedCards = JSON.parse(localStorage.getItem('selectedOptions'));

        if (savedCards) {
            setSelectedOptions(savedCards);
            if (savedCards[0].value === dailyElement){
                setIsCorrect(true);
                setShowPopup(true);
            } else {
                setIsCorrect(false);
                setShowPopup(false);
            }
        } else {
            setIsCorrect(false);
            setShowPopup(false);
        }
    }, [dailyElement]);

    const options = data.map(({ id, name, code, tint, luminosity, name_type, major_color, secondary_color }) => ({
        value: id,
        label: name,
        code,
        tint,
        luminosity,
        name_type,
        major_color,
        secondary_color
    }));

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.data.code,
            color: '#fff',
            textAlign: 'center',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: state.data.code,
            textAlign: 'center',
            width: '100%',
        }),
        control: (provided) => ({
            ...provided,
            textAlign: 'center', 
            justifyContent: 'center',
        }),
    };

    const handleChange = (selectedOption) => {
        const updatedOptions = [selectedOption, ...selectedOptions];
        setSelectedOptions(updatedOptions);
        localStorage.setItem('selectedOptions', JSON.stringify(updatedOptions));

        if (selectedOption.value === dailyElement) {
            setShowPopup(true);
            setIsCorrect(true);
        }
    };

    const handleCopyResults = () => {
        const dailyColor = data.find(item => item.id === dailyElement);
        
        const attempts = selectedOptions.map(option => {
            const resultRow = [
                option.tint === dailyColor.tint ? '🟩' : '🟥',
                option.luminosity === dailyColor.luminosity ? '🟩' : '🟥',
                option.name_type === dailyColor.name_type ? '🟩' : '🟥',
                option.major_color === dailyColor.major_color ? '🟩' : '🟥',
                option.secondary_color === dailyColor.secondary_color ? '🟩' : '🟥'
            ].join('');
            return resultRow;
        });

        const resultText = `J'ai deviné la couleur du jour sur #Colordle en ${selectedOptions.length} essais! 🕵️🔎🔄\n\n${attempts.join('\n')}\n\nJouez sur https://heloisesuat.github.io/colordle/ 🎮!`;

        navigator.clipboard.writeText(resultText).then(() => {
            alert('Résultats copiés dans le presse-papiers!');
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.selectorContainer}>
                <div className={styles.title}>
                    Guess the color of the day!
                </div>
                <Select
                    options={options}
                    styles={customStyles}
                    onChange={handleChange}
                    isDisabled={isCorrect}
                />
            </div>
            <div className={styles.cardContainer}>
                <CardHeader/>
            </div>
            <div className={styles.cardContainer}>
                {selectedOptions.map((option, index) => (
                    <Card
                        key={index}
                        dailyElement={dailyElement}
                        name={option.label}
                        code={option.code}
                        tint={option.tint}
                        luminosity={option.luminosity}
                        name_type={option.name_type}
                        major_color={option.major_color}
                        secondary_color={option.secondary_color}
                    />
                ))}
            </div>
            {showPopup && (
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.popup}>
                        <h2>Congratulations!</h2>
                        <p>You guessed the color of the day!</p>
                        <div className={styles['button-container']}>
                            <button onClick={handleCopyResults}>Copy Results</button>
                            <button onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </>            
            )}
        </div>
    );
};

export default Home;
