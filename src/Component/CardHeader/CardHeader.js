import React from 'react';
import styles from './CardHeader.module.css';
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import 'tippy.js/dist/tippy.css';

const CardHeader = () => {
    return (
        <div className={styles.card}>
            <div className={styles.colorBox}>
                Couleur
            </div>
            <div className={styles.colorBox}>
                <span className={styles.attributeName}>Teinte</span>
                <Tippy
                    content={"Rouge, Vert, Bleu, Jaune, Violet, Marron, Rose ou Orange"}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <span className={styles.infoIcon}>
                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
                    </span>
                </Tippy>
            </div>
            <div className={styles.colorBox}>
                <span className={styles.attributeName}>Luminosité</span>
                <Tippy
                    content={"Foncé ou Clair"}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <span className={styles.infoIcon}>
                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
                    </span>
                </Tippy>
            </div>
            <div className={styles.colorBox}>
                <span className={styles.attributeName}>Type</span>
                <Tippy
                    content={"Nourriture, Concept, Fleur, Lieu, Matériel ou Animal"}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <span className={styles.infoIcon}>
                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
                    </span>
                </Tippy>
            </div>
            <div className={styles.colorBox}>
                <span className={styles.attributeName}>Couleur principale</span>
                <Tippy
                    content={"Rouge, Vert ou Bleu"}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <span className={styles.infoIcon}>
                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
                    </span>
                </Tippy>
            </div>
            <div className={styles.colorBox}>
                <span className={styles.attributeName}>Couleur secondaire</span>
                <Tippy
                    content={"Rouge, Vert ou Bleu"}
                    trigger="mouseenter"
                    theme="custom"
                >
                    <span className={styles.infoIcon}>
                        <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
                    </span>
                </Tippy>
            </div>
        </div>
    );
};

export default CardHeader;
