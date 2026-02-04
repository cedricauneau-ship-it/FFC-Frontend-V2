"use client";

import styles from "./page.module.css";

export default function EntrainementPage() {
  return (
    <>
        <section id="entrainement">
        <div className="sectionDiviser"></div>
        <h1>Les entrainements</h1>

        <div className="sectionContainer">
            <div className="sectionCadreContainer">

            <div className={styles.table}>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>Baby</p>
                    <p>({new Date().getFullYear() - 5})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 17h30 à 18h</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U6 / U7</p>
                    <p>({new Date().getFullYear() - 6} / {new Date().getFullYear() - 7})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 18h à 19h15</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U8 / U9</p>
                    <p>({new Date().getFullYear() - 8} / {new Date().getFullYear() - 9})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 18h à 19h30</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U10 / U11</p>
                    <p>({new Date().getFullYear() - 10} / {new Date().getFullYear() - 11})</p>
                </div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h à 19h30</p>
                    <p>Jeudi 18h à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U12 / U13</p>
                    <p>({new Date().getFullYear() - 12} / {new Date().getFullYear() - 13})</p>
                </div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h à 19h30</p>
                    <p>Jeudi 18h à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U14 / U15</p>
                    <p>({new Date().getFullYear() - 14} / {new Date().getFullYear() - 15})</p>
                </div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h15 à 19h30</p>
                    <p>Jeudi 18h15 à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>U16 / U17</p>
                    <p>({new Date().getFullYear() - 16} / {new Date().getFullYear() - 17})</p>
                </div>
                <div className={styles.cellContent}>
                    <p>Mercredi 19h30 à 21h</p>
                    <p>Vendredi 19h30 à 21h</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>Sénior</p>
                    <p>({new Date().getFullYear() - 18} / {new Date().getFullYear() - 35})</p>
                </div>
                <div className={styles.cellContent}>
                    <p>Mardi 19h30 à 22h</p>
                    <p>Jeudi 19h30 à 22h</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>
                    <p>Vétéran</p>
                    <p>({new Date().getFullYear() - 36})</p>
                </div>
                <div className={styles.cellContent}>
                    Jeudi 19h45 à 21h15
                </div>
                </div>

            </div>

            </div>
        </div>
        </section>

        <div className="diviser"></div>
    </>    
  );
}