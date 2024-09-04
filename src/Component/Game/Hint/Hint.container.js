import React, { useState, useEffect } from "react";
import Hint from "./Hint";
import data from '../../../data.json';
import { faL } from "@fortawesome/free-solid-svg-icons";

const EnhancedHint = ({chosenElement, selectedOptions, ...props}) => {
    const chosenElementFull = data.find(item => item.id === chosenElement);
    const [isUnlock, setIsUnlock] = useState({hint1 : false, hint2: false, hint3: false});
    const [hintDisplayed, setHintDisplayed] = useState(0);

    useEffect(() => {
        const guesses_number = selectedOptions?.length;
        setIsUnlock({hint1 : guesses_number>3, hint2 : guesses_number>5, hint3 : guesses_number>7});
        console.log(selectedOptions)
        console.log(isUnlock)
  
    }, [selectedOptions]);

    return (
        <Hint
            chosenElementFull={chosenElementFull}
            isUnlock={isUnlock}
            hintDisplayed={hintDisplayed}
            setHintDisplayed={setHintDisplayed}
            {...props}
        />
    );
};

export default EnhancedHint;