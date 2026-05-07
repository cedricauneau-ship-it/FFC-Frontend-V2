import type { Metadata } from "next";
import WidgetIframe from "@/components/WidgetIframe";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Classement championnat — Saison en cours",
  description:
    "Classement en direct du Fontenay-en-Parisis Football Club dans le championnat district du Val-d'Oise. Mis à jour automatiquement via Scorenco.",
  alternates: { canonical: "/classement" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Classement", path: "/classement" },
]);

export default function ClassementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <section id="classement">
        <div className="sectionDiviser"></div>
        <h1>Les classements</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <p className={styles.intro}>
              Classement en direct du Fontenay-en-Parisis Football Club, district du
              Val-d&apos;Oise — ligue Paris Île-de-France. Pour les calendriers et résultats des
              prochains matchs, consultez la{" "}
              <a href="/calendrier" className={styles.link}>page calendrier</a>.
            </p>

            <WidgetIframe
              src="https://widgets.scorenco.com/ranking/181026"
              title="Classement officiel Fontenay-en-Parisis FC"
            />
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
