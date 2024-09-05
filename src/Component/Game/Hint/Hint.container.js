import React, { useState, useEffect, useRef } from "react";
import Hint from "./Hint";
import data from '../../../data.json';
import { faL } from "@fortawesome/free-solid-svg-icons";

const EnhancedHint = ({chosenElement, selectedOptions, ...props}) => {
    const chosenElementFull = data.find(item => item.id === chosenElement);
    const [isUnlock, setIsUnlock] = useState({hint1 : false, hint2: false, hint3: false});
    const [hintDisplayed, setHintDisplayed] = useState(0);
    const bluredPicture = useRef()

    useEffect(() => {
        switch (hintDisplayed) {
            case 1:
                break;

            case 2:
                break;

            case 3:
                const context = bluredPicture.current.getContext("2d");
                const image = new Image();
                image.src = chosenElementFull.picture_url
                image.onload = () => {
                    context.clearRect(0, 0, bluredPicture.current.width, bluredPicture.current.height); 
                    context.filter = 'blur(35px)';
                    context.drawImage(image, 0, 0, 200, 200);
                }
                break;
        
            default:
                break;
        }

    }, [hintDisplayed])

    useEffect(() => {
        const guesses_number = selectedOptions?.length;
        setIsUnlock({hint1 : guesses_number>3, hint2 : guesses_number>5, hint3 : guesses_number>7});
    }, [selectedOptions]);

    return (
        <Hint
            chosenElementFull={chosenElementFull}
            isUnlock={isUnlock}
            hintDisplayed={hintDisplayed}
            setHintDisplayed={setHintDisplayed}
            bluredPicture={bluredPicture}

            {...props}
        />
    );
};

export default EnhancedHint;