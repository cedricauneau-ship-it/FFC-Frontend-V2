import type { Metadata } from "next";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Le sac de football — Équipement obligatoire",
  description:
    "Liste complète de l'équipement à apporter pour l'entraînement et les matchs au Fontenay-en-Parisis FC : chaussures, tenue, protège-tibias, hygiène, organisation.",
  alternates: { canonical: "/ecole_de_foot/sac" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "École de foot", path: "/ecole_de_foot/sac" },
  { name: "Le sac de football", path: "/ecole_de_foot/sac" },
]);

export default function SacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <section id="sac">
        <div className="sectionDiviser"></div>
        <h1>Le sac de football</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            <h2 className={styles.subTitle}>
              Le joueur doit arriver <span>en survêtement du club</span>, avec un
              sac de football qui <span>doit contenir</span> :
            </h2>

            <div className={styles.table}>
              <div className={styles.row}>
                <span>Chaussures</span>
                <div className={styles.text}>
                  <p>
                    À partir des U13 : deux paires (moulés terrain sec / vissés
                    terrain humide).
                  </p>
                  <p>
                    Pour les plus jeunes : <span>une seule paire</span> (vissés
                    interdits).
                  </p>
                </div>
              </div>

              <div className={styles.row}>
                <span>Tenue</span>
                <div className={styles.text}>
                  <p>Chaussettes noires et short noir du club.</p>
                  <p>Pour les jours d&apos;entraînement : tenue libre.</p>
                </div>
              </div>

              <div className={styles.row}>
                <span>Sécurité</span>
                <p>Protège-tibias <span>obligatoires</span>.</p>
              </div>

              <div className={styles.row}>
                <span>Hygiène</span>
                <p>Serviette, gel douche et vêtements de rechange.</p>
              </div>

              <div className={styles.row}>
                <span>Organisation</span>
                <p>Sac plastique pour affaires sales et chaussures.</p>
              </div>

              <div className={styles.row}>
                <span>Confort</span>
                <p>Tee-shirt à porter sous le maillot par temps froid.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
