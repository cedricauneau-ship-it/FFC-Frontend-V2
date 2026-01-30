"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ClassementPage() {
  const [active, setActive] = useState(false);

  return (
    <>
        <section id="classement">
            
            <div className="sectionDiviser"></div>
            <h1>Les classements</h1>

            <div className="sectionContainer">
                <div className="sectionCadreContainer">

                <div
                    className={`${styles.Wrapper} ${
                    active ? styles.active : ""
                    }`}
                    onClick={() => setActive(true)}
                >
                    <iframe
                    src="https://widgets.scorenco.com/ranking/181026"
                    referrerPolicy="unsafe-url"
                    title="Calendrier Fontenay En Parisis FC"
                    className={styles.classement}
                    />
                </div>

                </div>
            </div>

        </section>

        <div className="diviser"></div>
    </>    
  );
}