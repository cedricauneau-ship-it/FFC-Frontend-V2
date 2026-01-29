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
                <div className={styles.cellTitle}>Baby</div>
                <div className={styles.cellContent}>Mercredi 17h30 à 18h</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U6 / U7</div>
                <div className={styles.cellContent}>Mercredi 18h à 19h15</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U8 / U9</div>
                <div className={styles.cellContent}>Mercredi 18h à 19h30</div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U10 / U11</div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h à 19h30</p>
                    <p>Jeudi 18h à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U12 / U13</div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h à 19h30</p>
                    <p>Jeudi 18h à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U14 / U15</div>
                <div className={styles.cellContent}>
                    <p>Mardi 18h15 à 19h30</p>
                    <p>Jeudi 18h15 à 19h30</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>U16 / U17</div>
                <div className={styles.cellContent}>
                    <p>Mercredi 19h30 à 21h</p>
                    <p>Vendredi 19h30 à 21h</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>Sénior</div>
                <div className={styles.cellContent}>
                    <p>Mardi 19h30 à 22h</p>
                    <p>Jeudi 19h30 à 22h</p>
                </div>
                </div>

                <div className={styles.row}>
                <div className={styles.cellTitle}>Vétéran</div>
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