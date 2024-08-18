import React from "react";
import Card from "./Card";
import data from '../../data.json';

const EnhancedCard = ({dailyElement, ...props}) => {
    const dailyElementFull = data.find(item => item.id === dailyElement);

    return (
        <Card dailyElementFull={dailyElementFull} {...props} />
    );
};

export default EnhancedCard;