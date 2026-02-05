"use client";

import styles from "./page.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/homeHero/U6-U7.jpg",
  "/images/homeHero/U8-U9.jpg",
  "/images/homeHero/U10-U11.jpg",
  "/images/homeHero/U12-U13.jpg",
  "/images/homeHero/V35.jpg",
  "/images/homeHero/V45.jpg",
]

const matchIds = [
180564, 180597, 180598, 180599, 180600, 180601,
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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

      <section>

        <div className="sectionDiviser"></div>
        <h1>Actualité</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.actuContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/actu/loto.jpg"
                  alt="Affiche du loto de Fontenay-en-parisis"
                  fill
                  sizes="(max-width: 768px) 100vw, 250px"
                  className={styles.actuImage}
                />
              </div>
              <div className={styles.actuText}>
                <h2>On vous donne rendez-vous <span>le 28 mars</span>.</h2>
                <h2>De nombreux lots à gagner !</h2>
              </div>
            </div>
          </div>    
        </div>

      </section>

      <div className="diviser"></div>

      <section>

        <div className="sectionDiviser"></div>
        <h1>La vie du club</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <iframe
              src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25649718" 
              width="100%" 
              height="1000px"
            >
            </iframe>
          </div>    
        </div>

      </section>

      <div className="diviser"></div>

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
                <Link href="/club/benevoles#educateurs" className="btnPrimaire">
                  les éducateurs
                </Link>
              </div>
              <div className={styles.verticalDiviser}></div>
              <div className={styles.benevoleText}>  
                <h2>Bénévole</h2>
                <p>
                  Le bénévolat vous tente ?
                  Le club est toujours heureux d’accueillir de nouveaux bénévoles.
                  Si l’aventure vous interesse ou si vous souhaitez en savoir plus, n’hésitez pas à nous contacter !
                </p>
                <a 
                  href="mailto:auneau.dev@gmail.com?subject=Contact%20Bénévole%20Infos"
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