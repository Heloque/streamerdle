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
                        content={"Couleur perçue\n(Rouge, Vert, Bleu, Jaune, Violet, Marron, Rose ou Orange)"}
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
                        content={"Puissance lumineuse\n(Foncé ou Clair)"}
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
                    <Tippy
                        content={"Référence liée au nom\n(Nourriture, Concept, Fleur, Lieu, Matériel ou Animal)"}
                        trigger="mouseenter"
                        theme="custom"
                    >
                        <span className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faInfoCircle} size="xs" fixedWidth />
                        </span>
                    </Tippy>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Âge</span>
                    <Tippy
                        content={"Couleur dominante dans le code RGB\n(Rouge, Vert ou Bleu)"}
                        trigger="mouseenter"
                        theme="custom"
                    >
                        <span className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faInfoCircle} size="xs" fixedWidth />
                        </span>
                    </Tippy>
                </div>
                <div className={styles.colorBox}>
                    <span className={styles.attributeName}>Création de la chaîne</span>
                    <Tippy
                        content={"Couleur secondaire dans le code RGB\n(Rouge, Vert ou Bleu)"}
                        trigger="mouseenter"
                        theme="custom"
                    >
                        <span className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faInfoCircle} size="xs" fixedWidth />
                        </span>
                    </Tippy>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;
