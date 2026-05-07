import type { Metadata } from "next";
import Image from "next/image";
import { jsonLd, breadcrumb, CLUB } from "@/lib/seo";
import styles from "./page.module.css";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export const metadata: Metadata = {
  title: "Les terrains — Complexe sportif Chemin du Haras",
  description:
    "Les 3 terrains en herbe du Fontenay-en-Parisis Football Club, situés au complexe sportif Chemin du Haras, 95190 Fontenay-en-Parisis (Val-d'Oise).",
  alternates: { canonical: "/club/terrains" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Le club", path: "/club/terrains" },
  { name: "Les terrains", path: "/club/terrains" },
]);

const placeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: `Complexe sportif du ${CLUB.legalName}`,
  description: "3 terrains en herbe pour les entraînements et matchs du club.",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLUB.address.streetAddress,
    addressLocality: CLUB.address.locality,
    postalCode: CLUB.address.postalCode,
    addressRegion: CLUB.address.region,
    addressCountry: CLUB.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLUB.geo.latitude,
    longitude: CLUB.geo.longitude,
  },
};

const terrains = [
  { name: "Terrain herbe 1", img: "/images/terrains/terrain-1.jpg" },
  { name: "Terrain herbe 2", img: "/images/terrains/terrain-2.jpg" },
  { name: "Terrain herbe 3", img: "/images/terrains/terrain-3.jpg" },
];

export default function TerrainsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(placeJsonLd) }}
      />

      <section id="terrain">
        <div className="sectionDiviser"></div>
        <h1>Les terrains</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4397.917032118023!2d2.4433452895936996!3d49.048298203139275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6411aa18c15cd%3A0xfeed93484d4a7a5c!2sFontenay-en-Parisis%20Football%20Club!5e0!3m2!1sfr!2sfr!4v1770202095690!5m2!1sfr!2sfr"
              width="100%"
              loading="lazy"
              title="Carte des terrains du Fontenay-en-Parisis Football Club"
            />

            <div className={styles.terrainsGrid}>
              {terrains.map((terrain) => (
                <div key={terrain.name} className={styles.terrainCard}>
                  <h2>{terrain.name}</h2>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={terrain.img}
                      alt={`Vue du ${terrain.name} du Fontenay-en-Parisis Football Club`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />

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
