import React from 'react';
import styles from './Home.module.css';

const Home = ({ setMod }) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setMod('daily')}>
                Streamer du jour
            </button>
            <button className={styles.button} onClick={() => setMod('infinite')}>
                Jouer à l'infini
            </button>
            <button className={styles.button} onClick={() => window.open('https://colordle.fr', '_blank')}>
                Jouer aussi à Colordle
            </button>
            <a href="mailto:contact@streamerdle.fr" className={styles.contactLink}>
                Nous contacter
            </a>
        </div>
    )
}

export default Home;