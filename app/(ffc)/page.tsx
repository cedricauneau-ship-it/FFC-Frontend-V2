"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const heroImages = [
  "/Images/homeHero/U6-U7.jpg",
  "/Images/homeHero/U8-U9.jpg",
  "/Images/homeHero/U10-U11.jpg",
  "/Images/homeHero/U12-U13.jpg",
  "/Images/homeHero/V35.jpg",
  "/Images/homeHero/V45.jpg",
]

const matchIds = [
180564, 180597, 180598, 180599, 180600, 180601,
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* hero */}
      <section className={styles.hero}>

        {heroImages.map((src, i) => (
          <div
            key={src}
            className={`${styles.slide} ${
              i === index ? styles.active : ""
            }`}
          >
            <Image
              src={src}
              alt="Fontenay-en-Parisis Football Club"
              fill
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

      </section>

      <div className="diviser"></div>

      {/* Match */}
      <section>

        <div className="sectionDiviser"></div>
        <h1>Derniers matchs</h1>

        <div className="sectionContainer">
          <div className={styles.gridMatch}>

            {matchIds.map((id) => (
              <div key={id} className={styles.cardMatch}>
                <iframe
                  src={`https://widgets.scorenco.com/previous-next/${id}`}
                  height="375"
                  width="100%"
                  frameBorder="0"
                  referrerPolicy="unsafe-url"
                />
              </div>
            ))}
            
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* Actualité */}
      <section>

        <div className="sectionDiviser"></div>
        <h1>La vie du club</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.actu1}>
              <Image
                src="/Images/actu/Loto.jpg"
                alt="Affiche du loto"
                width={400}
                height={400}
                className="actuImg"
              />
              <div className={styles.actu1Text}>
                <p>🍀🍀🍀🍀🍀🍀🍀</p>
                <h2>Rendez-vous le 28 mars 2026.</h2>
                <h2>De nombreux lots à gagner !</h2>
              </div>
            </div>
          </div>    
        </div>

      </section>

      <div className="diviser"></div>
      
      {/* Club */}
      <section>

        <div className="sectionDiviser"></div>
        <h1>Nous rejoindre</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.clubContainer}>
              <div className={styles.joueurText}>
              <h2>Joueur</h2>
                <p>
                  Vous avez envie de reprendre ou de pratiquer le sport dans une ambiance familiale et chaleureuse ?
                  Les éducateurs de chaque catégorie se feront un plaisir de répondre à toutes vos questions.
                </p>
                <a 
                  href="mailto:auneau.dev@gmail.com?subject=Contact%20Bureau%20FFC"
                  className="btnPrimaire" 
                >
                  Les éducateurs
                </a>
              </div>
              <div className={styles.verticalDiviser}></div>
              <div className={styles.benevoleText}>  
                <h2>Bénévole</h2>
                <p>
                  Le bénévolat vous tente ?
                  Le club est toujours heureux d’accueillir de nouveaux bénévoles.
                  Si l’aventure vous tente ou si vous souhaitez en savoir plus, n’hésitez pas à nous contacter !
                </p>
                <a 
                  href="mailto:auneau.dev@gmail.com?subject=Contact%20Bureau%20FFC"
                  className="btnPrimaire" 
                >
                  Nous contacter
                </a>
              </div>  
            </div>
          </div>
        </div>
            
      </section>

      <div className="diviser"></div>
    </>
  );
}