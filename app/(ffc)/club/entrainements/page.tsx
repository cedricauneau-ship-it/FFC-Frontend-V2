import type { Metadata } from "next";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Horaires des entraînements — Toutes catégories",
  description:
    "Horaires complets des entraînements du Fontenay-en-Parisis Football Club. Catégories Baby (5 ans), U6 à U17, Sénior, Vétéran. Mardi, mercredi, jeudi, vendredi.",
  alternates: { canonical: "/club/entrainements" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Le club", path: "/club/entrainements" },
  { name: "Entraînements", path: "/club/entrainements" },
]);

export default function EntrainementsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <section id="entrainement">
        <div className="sectionDiviser"></div>
        <h1>Les entrainements</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.table}>
              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>Baby</p>
                  <p>({currentYear - 5})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 17h30 à 18h</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U6 / U7</p>
                  <p>({currentYear - 6} / {currentYear - 7})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 18h à 19h15</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U8 / U9</p>
                  <p>({currentYear - 8} / {currentYear - 9})</p>
                </div>
                <div className={styles.cellContent}>Mercredi 18h à 19h30</div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U10 / U11</p>
                  <p>({currentYear - 10} / {currentYear - 11})</p>
                </div>
                <div className={styles.cellContent}>
                  <p>Mardi 18h à 19h30</p>
                  <p>Jeudi 18h à 19h30</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U12 / U13</p>
                  <p>({currentYear - 12} / {currentYear - 13})</p>
                </div>
                <div className={styles.cellContent}>
                  <p>Mardi 18h à 19h30</p>
                  <p>Jeudi 18h à 19h30</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U14 / U15</p>
                  <p>({currentYear - 14} / {currentYear - 15})</p>
                </div>
                <div className={styles.cellContent}>
                  <p>Mardi 18h15 à 19h30</p>
                  <p>Jeudi 18h15 à 19h30</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>U16 / U17</p>
                  <p>({currentYear - 16} / {currentYear - 17})</p>
                </div>
                <div className={styles.cellContent}>
                  <p>Mercredi 19h30 à 21h</p>
                  <p>Vendredi 19h30 à 21h</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>Sénior</p>
                  <p>({currentYear - 18} / {currentYear - 35})</p>
                </div>
                <div className={styles.cellContent}>
                  <p>Mardi 19h30 à 22h</p>
                  <p>Jeudi 19h30 à 22h</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.cellTitle}>
                  <p>Vétéran</p>
                  <p>({currentYear - 36})</p>
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
