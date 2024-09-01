import React, { useState, useEffect } from "react";
import data from '../../data.json';
import Game from "./Game";

const EnhancedGame = ({chosenElement, mod, setMod, ...props}) => {

    const [showPopup, setShowPopup] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = data.map(({ id, name, picture_url, most_stream_game, average_viewer, banned, date_birth, creation_date }) => ({
        value: id,
        label: name,
        picture_url,
        most_stream_game,
        average_viewer,
        banned,
        date_birth,
        creation_date
    }));

    const handleChange = (selectedOption) => {
        const updatedOptions = [selectedOption, ...selectedOptions];
        setSelectedOptions(updatedOptions);
        if (mod === 'daily') {
            localStorage.setItem('selectedOptions', JSON.stringify(updatedOptions));
        }

        if (selectedOption.value === chosenElement) {
            setShowPopup(true);
            setIsCorrect(true);
        }
    };

    const handleCopyResults = () => {
        const streamer = data.find(item => item.id === chosenElement);
        
        const attempts = selectedOptions.map(option => {
            const resultRow = [
                option.most_stream_game === streamer.most_stream_game ? '🟩' : '🟥',
                option.average_viewer === streamer.average_viewer ? '🟩' : '🟥',
                option.banned === streamer.banned ? '🟩' : '🟥',
                option.date_birth === streamer.date_birth ? '🟩' : '🟥',
                option.creation_date === streamer.creation_date ? '🟩' : '🟥'
            ].join('');
            return resultRow;
        });

        return `J'ai deviné le streamer du jour sur #Streamerdle en ${selectedOptions.length} essai(s)! 🕵️🔎🔄\n\n${attempts.join('\n')}\n\nJouez sur https://streamerdle.fr 🎮!`;

    };

    useEffect(() => {
        switch (mod) {
            case "daily":
                const savedCards = JSON.parse(localStorage.getItem('selectedOptions'));
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
            options={options}
            {...props} 
        />
    );
};

export default EnhancedGame;