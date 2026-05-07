import type { Metadata } from "next";
import Link from "next/link";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "La licence — Inscription au club (180 €/an)",
  description:
    "Tarifs et démarches pour la licence au Fontenay-en-Parisis Football Club : 180 € par an, équipement (short, chaussettes, sweat) fourni. Procédure dématérialisée via la FFF.",
  alternates: { canonical: "/club/licence" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Le club", path: "/club/licence" },
  { name: "La licence", path: "/club/licence" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte la licence au Fontenay-en-Parisis FC ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cotisation annuelle est de 180 € pour toutes les catégories. Un short, des chaussettes et un sweat du club sont fournis à chaque licencié.",
      },
    },
    {
      "@type": "Question",
      name: "Comment s'inscrire au Fontenay-en-Parisis Football Club ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'inscription est entièrement dématérialisée. Il suffit de transmettre au club nom, prénom, date et lieu de naissance du licencié, ainsi qu'une adresse email. La FFF envoie ensuite un formulaire à compléter ; le club finalise la demande après validation.",
      },
    },
    {
      "@type": "Question",
      name: "Quel équipement est fourni avec la licence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chaque licencié reçoit un short, des chaussettes et un sweat aux couleurs du club (orange et noir).",
      },
    },
  ],
};

export default function LicencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />

      <section id="licence">
        <div className="sectionDiviser"></div>
        <h1>La licence</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.licenceInfo}>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <h2>La cotisation</h2>
                  <p>La cotisation est de <strong>180 €</strong> pour toutes les catégories.</p>
                </div>
              </div>
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <h2>L&apos;équipement</h2>
                  <p>Un short, des chaussettes et un sweat du club sont fournis à chaque licencié.</p>
                </div>
              </div>
            </div>

            <div className={styles.text}>
              <h2>La démarche à effectuer</h2>
              <p>
                Les licences se font uniquement de manière dématérialisée.
                Il vous suffit de nous transmettre le nom, le prénom, la date et le lieu de naissance du licencié,
                ainsi qu&apos;une adresse mail.
                Le club se charge ensuite de la saisie des informations.
              </p>
              <p>
                Vous recevrez alors un mail de la fédération vous invitant à compléter le formulaire.
                Une fois celui-ci validé, nous finaliserons la demande.
              </p>
              <p className={styles.endText}>
                Pour toute question ou information complémentaire,
                n&apos;hésitez pas à <Link href="/contact" className={styles.link}>nous contacter</Link>, nous serons ravis de vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
