import React, { useState, useEffect } from "react";
import data from '../../data.json';
import Game from "./Game";

const EnhancedGame = ({chosenElement, mod, setMod, ...props}) => {

    const [showPopup, setShowPopup] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);

    const [options, setOptions] = useState(data.map(({ id, name, picture_url, most_stream_game, average_viewer, banned, date_birth, sexe, creation_date }) => ({
        value: id,
        label: name,
        picture_url,
        most_stream_game,
        average_viewer,
        banned,
        date_birth,
        sexe,
        creation_date
    })));

    const handleChange = (selectedOption) => {
        const updatedOptions = [selectedOption, ...selectedOptions];
        setSelectedOptions(updatedOptions);

        const filteredOptions = options.filter(option => option.value !== selectedOption.value);
        setOptions(filteredOptions);

        if (mod === 'daily') {
            localStorage.setItem('updatedOptions', JSON.stringify(updatedOptions));
        }

        if (selectedOption.value === chosenElement) {
            setShowPopup(true);
            setIsCorrect(true);
            setSelectedValue(selectedOption);
        }
    };

    const handleCopyResults = () => {
        const streamer = data.find(item => item.id === chosenElement);
        
        const attempts = selectedOptions.map(option => {
            const resultRow = [
                arraysEqual(option.most_stream_game, streamer.most_stream_game) ? '🟩' : '🟥',
                option.average_viewer === streamer.average_viewer ? '🟩' : '🟥',
                option.banned === streamer.banned ? '🟩' : '🟥',
                option.date_birth === streamer.date_birth ? '🟩' : '🟥',
                option.sexe === streamer.sexe ? '🟩' : '🟥',
                option.creation_date === streamer.creation_date ? '🟩' : '🟥'
            ].join('');
            return resultRow;
        });

        return `J'ai deviné le streamer du jour sur #Streamerdle\nen ${selectedOptions.length} essai(s)! 🕵️🔎🔄\n\n${attempts.join('\n')}\n\nJouez sur https://streamerdle.fr 🎮!`;
    };

    const arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    };

    useEffect(() => {
        switch (mod) {
            case "daily":
                const savedCards = JSON.parse(localStorage.getItem('updatedOptions'));
                if (savedCards) {
                    setSelectedOptions(savedCards);
                    if (savedCards[0].value === chosenElement){
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
                break;
                
            case "infinite":
                setSelectedOptions([]);
                break;
            default:
                break;
        }
      
        
    }, [chosenElement, mod]);

    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '13rem',
        }),
        placeholder: (provided) => ({
            ...provided,
            textAlign: 'left',
            width: '100%',
        }),
        singleValue: (provided) => ({
            ...provided,
            textAlign: 'left',
            width: '100%',
        }),
        option: (provided) => ({
            ...provided,
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
        }),
    };

    return (
        <Game
            chosenElement={chosenElement}
            mod={mod}
            setMod={setMod}
            isCorrect={isCorrect}
            setIsCorrect={setIsCorrect}
            handleChange={handleChange}
            handleCopyResults={handleCopyResults}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            options={options}
            customStyles={customStyles}
            {...props} 
        />
    );
};

export default EnhancedGame;