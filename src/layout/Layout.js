import React, { useState, useEffect } from 'react';
import { getDailyElement, getRandomElement } from '../utils/elementGetter';
import Home from '../Component/Home';
import Game from '../Component/Game'

const Layout = () => {
    const [chosenElement, setChosenElement] = useState();
    const [mod, setMod] = useState("home");

    useEffect(() => {
        switch (mod) {
            case "daily":
                setChosenElement(getDailyElement());
                break;
            case "infinite":
                setChosenElement(getRandomElement());
                break;
            default:
                break;
        }
    }, [mod]);

    return (
        <>
            {mod === "home" ? (
                <Home setMod={setMod}/>
            ) : (
                <Game chosenElement={chosenElement} setChosenElement={setChosenElement} mod={mod} setMod={setMod}/>
            )}
        </>  
    )
}

export default Layout;