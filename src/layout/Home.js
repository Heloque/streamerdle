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

    const options = data.map(({ id, name, picture_url, most_stream_game, average_viewer, zevent, date_birth, creation_date }) => ({
        value: id,
        label: name,
        picture_url,
        most_stream_game,
        average_viewer,
        zevent,
        date_birth,
        creation_date
    }));

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            textAlign: 'center',
        }),
        singleValue: (provided, state) => ({
            ...provided,
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
                option.most_stream_game === dailyColor.most_stream_game ? '🟩' : '🟥',
                option.average_viewer === dailyColor.average_viewer ? '🟩' : '🟥',
                option.zevent === dailyColor.zevent ? '🟩' : '🟥',
                option.date_birth === dailyColor.date_birth ? '🟩' : '🟥',
                option.creation_date === dailyColor.creation_date ? '🟩' : '🟥'
            ].join('');
            return resultRow;
        });

        const resultText = `J'ai deviné le streamer du jour sur #Streamerdle en ${selectedOptions.length} essai(s)! 🕵️🔎🔄\n\n${attempts.join('\n')}\n\nJouez sur https://streamerdle.fr 🎮!`;

        navigator.clipboard.writeText(resultText).then(() => {
            alert('Résultats copiés dans le presse-papiers!');
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.selectorContainer}>
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
                        picture_url={option.picture_url}
                        most_stream_game={option.most_stream_game}
                        average_viewer={option.average_viewer}
                        zevent={option.zevent}
                        date_birth={option.date_birth}
                        creation_date={option.creation_date}
                    />
                ))}
            </div>
            {showPopup && (
                <>
                    <div className={styles.overlay}></div>
                    <div className={styles.popup}>
                        <h2>Félicitations!</h2>
                        <p>Tu as deviné la couleur du jour!</p>
                        <div className={styles['button-container']}>
                            <button onClick={handleCopyResults}>Copier le résultat</button>
                            <button onClick={() => setShowPopup(false)}>Fermer</button>
                        </div>
                    </div>
                </>            
            )}
        </div>
    );
};

export default Home;
