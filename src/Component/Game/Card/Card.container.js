import React from "react";
import Card from "./Card";
import data from '../../../data.json';

const EnhancedCard = ({chosenElement, date_birth, ...props}) => {
    const chosenElementFull = data.find(item => item.id === chosenElement);
    console.log(chosenElementFull.name);
    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
    
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        }
    
        return age;
    };

    const determineMostStreamGameBg = (chosenGames, mostGames) => {
        const matchingGamesCount = mostGames.filter(game => chosenGames.includes(game)).length;
      
        if (matchingGamesCount === 0) {
          return '#D42D2D';
        } else if (matchingGamesCount < mostGames.length) {
          return '#F28111';
        } else {
          return '#108910';
        }
    };
      
    const determineArrowStyle = (chosen, reel) => {
        const isEqual = chosen === reel;
        const backgroundColor = isEqual ? '#108910' : '#D42D2D';
        
        let backgroundImage = '';
        
        if (chosen > reel) {
            backgroundImage = "url('/assets/arrow_up.svg')";
        } else if (chosen < reel) {
            backgroundImage = "url('/assets/arrow_down.svg')";
        }
          
        return {
            backgroundColor: backgroundColor,
            backgroundImage: backgroundImage,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        };
    };

    const age = calculateAge(date_birth);
    const chosenAge = calculateAge(chosenElementFull.date_birth);

    return (
        <Card
            chosenElementFull={chosenElementFull}
            age={age}
            chosenAge={chosenAge}
            determineMostStreamGameBg={determineMostStreamGameBg}
            determineArrowStyle={determineArrowStyle}
            {...props}
        />
    );
};

export default EnhancedCard;