"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function CalendrierPage() {
  const [active, setActive] = useState(false);

  return (
    <>
        <section id="calendrier">
            
            <div className="sectionDiviser"></div>
            <h1>Les calendriers</h1>

            <div className="sectionContainer">
                <div className="sectionCadreContainer">

                <div
                    className={`${styles.Wrapper} ${
                    active ? styles.active : ""
                    }`}
                    onClick={() => setActive(true)}
                >
                    <iframe
                    src="https://widgets.scorenco.com/team/180994"
                    referrerPolicy="unsafe-url"
                    title="Calendrier Fontenay En Parisis FC"
                    className={styles.calendrier}
                    />
                </div>

                </div>
            </div>

        </section>

        <div className="diviser"></div>
    </>    
  );
}