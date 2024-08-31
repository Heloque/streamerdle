import React from "react";
import Card from "./Card";
import data from '../../data.json';

const EnhancedCard = ({chosenElement, date_birth, ...props}) => {
    const chosenElementFull = data.find(item => item.id === chosenElement);

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

    const age = calculateAge(date_birth);
    const chosenAge = calculateAge(chosenElementFull.date_birth);

    return (
        <Card chosenElementFull={chosenElementFull} age={age} chosenAge={chosenAge} {...props} />
    );
};

export default EnhancedCard;