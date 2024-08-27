import React from "react";
import Card from "./Card";
import data from '../../data.json';

const EnhancedCard = ({dailyElement, date_birth, ...props}) => {
    const dailyElementFull = data.find(item => item.id === dailyElement);

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
    const dailyAge = calculateAge(dailyElementFull.date_birth);

    return (
        <Card dailyElementFull={dailyElementFull} age={age} dailyAge={dailyAge} {...props} />
    );
};

export default EnhancedCard;