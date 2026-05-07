import type { Metadata } from "next";
import WidgetIframe from "@/components/WidgetIframe";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Calendrier des matchs — Toutes les équipes",
  description:
    "Calendrier complet des matchs du Fontenay-en-Parisis Football Club : équipes seniors, vétérans, jeunes (U6 à U17). Mis à jour en direct depuis Scorenco.",
  alternates: { canonical: "/calendrier" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Calendrier", path: "/calendrier" },
]);

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: "Fontenay-en-Parisis FC — Équipes",
  sport: "Football",
  url: "https://www.fontenayenparisisfootballclub.fr/calendrier",
  memberOf: {
    "@type": "SportsOrganization",
    name: "FFF — District du Val-d'Oise",
    url: "https://valdoise.fff.fr",
  },
};

export default function CalendrierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(teamJsonLd) }}
      />

      <section id="calendrier">
        <div className="sectionDiviser"></div>
        <h1>Les calendriers</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <p className={styles.intro}>
              Retrouvez tous les <strong>matchs à venir</strong> du Fontenay-en-Parisis Football
              Club, équipes seniors, vétérans et jeunes (U6 à U17). Le calendrier est mis à jour
              en direct depuis la fédération via Scorenco. Pour les classements en temps réel,
              consultez la <a href="/classement" className={styles.link}>page classement</a>.
            </p>

            <WidgetIframe
              src="https://widgets.scorenco.com/team/180994"
              title="Calendrier officiel Fontenay-en-Parisis FC"
            />
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
