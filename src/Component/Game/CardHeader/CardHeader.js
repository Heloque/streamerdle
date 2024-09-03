import React from 'react';
import styles from './CardHeader.module.css';
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import 'tippy.js/dist/tippy.css';

const CardHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.colorBox}>
                    Streamer
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Jeux les plus streamés</span>
                    <Tippy
                        content={"Les 3 jeux les plus streamés de 2024. Code couleur : aucun jeu trouvé (rouge), 1 ou 2 jeux trouvés (orange), tous les jeux trouvés (vert)"}
                        trigger="mouseenter"
                        theme="custom"
                    >
                        <span className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faInfoCircle} size="xs" fixedWidth />
                        </span>
                    </Tippy>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Nombre de viewers moyen</span>
                    <Tippy
                        content={"Nombre de viewer moyen en 2024"}
                        trigger="mouseenter"
                        theme="custom"
                    >
                        <span className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faInfoCircle} size="xs" fixedWidth />
                        </span>
                    </Tippy>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>A déjà été banni</span>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Âge</span>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Date de création de la chaîne</span>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
