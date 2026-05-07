import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { CLUB, jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

/* ─────────────────────────── Metadata page ─────────────────────────── */

export const metadata: Metadata = {
  title: `${CLUB.legalName} | Site officiel — 95190 Val-d'Oise`,
  description:
    "Site officiel du Fontenay-en-Parisis Football Club (95190). École de foot U6 à Vétérans, licence 180 €/an, équipement fourni. 3 terrains en herbe, FFF — district du Val-d'Oise.",
  alternates: { canonical: "/" },
};

/* ─────────────────────────── Données ─────────────────────────── */

const heroSlides = [
  { src: "/images/homeHero/U6-U7.jpg",   alt: "Catégorie U6/U7 du Fontenay-en-Parisis Football Club" },
  { src: "/images/homeHero/U8-U9.jpg",   alt: "Catégorie U8/U9 — école de football du FFC" },
  { src: "/images/homeHero/U10-U11.jpg", alt: "Catégorie U10/U11 — équipe jeunes du Fontenay-en-Parisis FC" },
  { src: "/images/homeHero/U12-U13.jpg", alt: "Catégorie U12/U13 — équipe pré-ado du club" },
  { src: "/images/homeHero/V35.jpg",     alt: "Équipe Vétérans V35 du Fontenay-en-Parisis FC" },
  { src: "/images/homeHero/V45.jpg",     alt: "Équipe Vétérans V45 du Fontenay-en-Parisis FC" },
];

const matchIds = [180564, 180597, 180598, 180599, 180600, 180601];

const faqEntries = [
  {
    question: "Combien coûte la licence au Fontenay-en-Parisis Football Club ?",
    answer:
      "La cotisation annuelle est de 180 € pour toutes les catégories, équipement (short, chaussettes, sweat) inclus.",
  },
  {
    question: "À partir de quel âge peut-on s'inscrire ?",
    answer:
      "Dès la catégorie Baby (5 ans), jusqu'aux Vétérans (36 ans et plus). Le club propose toutes les catégories U6 à U17, Sénior et Vétéran, ainsi qu'une équipe U13 féminine.",
  },
  {
    question: "Où s'entraînent les équipes ?",
    answer:
      "Sur les 3 terrains en herbe du complexe sportif, Chemin du Haras, 95190 Fontenay-en-Parisis, en Val-d'Oise.",
  },
  {
    question: "Comment contacter le club ?",
    answer: `Par téléphone au ${CLUB.phoneDisplay} (${CLUB.contactName}, ${CLUB.contactRole.toLowerCase()}) ou par email à ${CLUB.email}.`,
  },
  {
    question: "Quels championnats joue le club ?",
    answer:
      "Le Fontenay-en-Parisis Football Club est affilié à la FFF, district du Val-d'Oise, ligue Paris Île-de-France. Les équipes Sénior et Vétérans évoluent en championnats départementaux.",
  },
];

/* ─────────────────────────── JSON-LD ─────────────────────────── */

const breadcrumbJsonLd = breadcrumb([{ name: "Accueil", path: "/" }]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: CLUB.legalName,
  url: "https://www.fontenayenparisisfootballclub.fr",
  inLanguage: "fr-FR",
};

/* ─────────────────────────── Page ─────────────────────────── */

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />

      <HeroCarousel slides={heroSlides} />

      {/* À propos — contenu textuel indexable, premier signal sémantique */}
      <section id="presentation">
        <div className="sectionDiviser"></div>
        <h1>Fontenay-en-Parisis Football Club</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.aboutText}>
              <p>
                Le <strong>Fontenay-en-Parisis Football Club</strong> est un club de football
                amateur basé à <strong>Fontenay-en-Parisis (95190)</strong>, en Val-d&apos;Oise.
                Affilié à la <strong>Fédération Française de Football</strong>, il évolue dans le
                district du Val-d&apos;Oise et la ligue Paris Île-de-France.
              </p>
              <p>
                Le club accueille les enfants dès <strong>5 ans</strong> en catégorie Baby et propose
                toutes les catégories jeunes (U6 à U17), une équipe sénior, deux équipes vétérans
                (V35, V45) ainsi qu&apos;une équipe U13 féminine. Les entraînements se déroulent
                sur les <strong>3 terrains en herbe</strong> du complexe sportif, Chemin du Haras.
              </p>
              <p>
                La <strong>licence est à 180 € par an</strong>, équipement (short, chaussettes,
                sweat) compris. La démarche d&apos;inscription est entièrement dématérialisée.{" "}
                <Link href="/club/licence" className={styles.inlineLink}>
                  En savoir plus sur la licence
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* Catégories — texte indexable et structuré */}
      <section id="categories">
        <div className="sectionDiviser"></div>
        <h2>Nos catégories</h2>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <ul className={styles.categoriesGrid}>
              <li><strong>Baby</strong> — 5 ans, mercredi 17h30-18h</li>
              <li><strong>U6 / U7</strong> — mercredi 18h-19h15</li>
              <li><strong>U8 / U9</strong> — mercredi 18h-19h30</li>
              <li><strong>U10 / U11</strong> — mardi & jeudi 18h-19h30</li>
              <li><strong>U12 / U13</strong> — mardi & jeudi 18h-19h30</li>
              <li><strong>U13 féminine</strong> — équipe dédiée</li>
              <li><strong>U14 / U15</strong> — mardi & jeudi 18h15-19h30</li>
              <li><strong>U16 / U17</strong> — mercredi & vendredi 19h30-21h</li>
              <li><strong>Sénior</strong> — mardi & jeudi 19h30-22h</li>
              <li><strong>Vétéran</strong> — jeudi 19h45-21h15</li>
            </ul>
            <p className={styles.categoriesCta}>
              <Link href="/club/entrainements" className="btnPrimaire">
                Voir tous les horaires
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* La vie du club — Facebook lazy */}
      <section id="vie-du-club">
        <div className="sectionDiviser"></div>
        <h2>La vie du club</h2>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <iframe
              src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25649718"
              width="100%"
              height="1000"
              loading="lazy"
              title="Derniers posts Facebook du Fontenay-en-Parisis Football Club"
            />
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* Derniers matchs — Scorenco lazy */}
      <section id="derniers-matchs">
        <div className="sectionDiviser"></div>
        <h2>Derniers matchs</h2>

        <div className="sectionContainer">
          <div className={styles.gridMatch}>
            {matchIds.map((id) => (
              <div key={id} className={styles.cardMatch}>
                <iframe
                  src={`https://widgets.scorenco.com/previous-next/${id}`}
                  height="375"
                  width="100%"
                  loading="lazy"
                  title={`Résultats équipe ${id} — Fontenay-en-Parisis FC`}
                  referrerPolicy="unsafe-url"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* Nous rejoindre */}
      <section id="rejoindre">
        <div className="sectionDiviser"></div>
        <h2>Nous rejoindre</h2>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.clubContainer}>
              <div className={styles.joueurText}>
                <h3>Joueur</h3>
                <p>
                  Vous avez envie de reprendre ou de pratiquer le sport dans une ambiance familiale
                  et chaleureuse ? Les éducateurs de chaque catégorie se feront un plaisir de
                  répondre à toutes vos questions.
                </p>
                <Link href="/club/benevoles#educateurs" className="btnPrimaire">
                  Les éducateurs
                </Link>
              </div>

              <div className={styles.verticalDiviser}></div>

              <div className={styles.benevoleText}>
                <h3>Bénévole</h3>
                <p>
                  Le bénévolat vous tente ? Le club est toujours heureux d&apos;accueillir de
                  nouveaux bénévoles. Si l&apos;aventure vous intéresse ou si vous souhaitez en
                  savoir plus, n&apos;hésitez pas à nous contacter !
                </p>
                <Link href="/contact" className="btnPrimaire">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>

      {/* FAQ — texte indexable + JSON-LD FAQPage en haut */}
      <section id="faq">
        <div className="sectionDiviser"></div>
        <h2>Questions fréquentes</h2>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.faqList}>
              {faqEntries.map((entry) => (
                <details key={entry.question} className={styles.faqItem}>
                  <summary>{entry.question}</summary>
                  <p>{entry.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
