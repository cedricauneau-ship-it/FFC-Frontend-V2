"use client";

import styles from "./page.module.css";
import Image from "next/image";

/* 🔑 Blur générique (à garder tel quel) */
const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export default function TerrainsPage() {
  const terrains = [
    {
      name: "Terrain herbe 1",
      img: "/images/terrains/terrain-1.jpg",
    },
    {
      name: "Terrain herbe 2",
      img: "/images/terrains/terrain-2.jpg",
    },
    {
      name: "Terrain herbe 3",
      img: "/images/terrains/terrain-3.jpg",
    },
  ];

  return (
    <>
      <section id="terrain">
        <div className="sectionDiviser"></div>
        <h1>Les terrains</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            {/* MAP */}
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7396.445374921771!2d2.437383535574211!3d49.04789457918111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6405c0f352c13%3A0x9a2d51f055d3e496!2sComplexe%20sportif%20Municipal!5e0!3m2!1sfr!2sfr!4v1760800099407!5m2!1sfr!2sfr"
              width="100%"
              loading="lazy"
              title="Carte des terrains"
            />

            {/* TERRAINS */}
            <div className={styles.terrainsGrid}>
              {terrains.map((terrain) => (
                <div key={terrain.name} className={styles.terrainCard}>
                  <h2>{terrain.name}</h2>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={terrain.img}
                      alt={`Vue du ${terrain.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />

                    {/* Overlay temporaire */}
                    <div className={styles.imageOverlay}>
                      <span className={styles.overlayIcon}>⚽</span>
                      <span className={styles.overlayText}>Photo à venir</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}