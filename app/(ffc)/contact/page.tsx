import type { Metadata } from "next";
import Image from "next/image";
import { CLUB, jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export const metadata: Metadata = {
  title: "Contact — Téléphone, adresse, accès au club",
  description: `Contactez le Fontenay-en-Parisis Football Club : ${CLUB.phoneDisplay} (${CLUB.contactName}, ${CLUB.contactRole}), ${CLUB.email}. Adresse : Chemin du Haras, 95190 Fontenay-en-Parisis.`,
  alternates: { canonical: "/contact" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact — ${CLUB.legalName}`,
  url: "https://www.fontenayenparisisfootballclub.fr/contact",
  about: {
    "@type": "SportsClub",
    name: CLUB.legalName,
    telephone: CLUB.phone,
    email: CLUB.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLUB.address.streetAddress,
      addressLocality: CLUB.address.locality,
      postalCode: CLUB.address.postalCode,
      addressRegion: CLUB.address.region,
      addressCountry: CLUB.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CLUB.phone,
      email: CLUB.email,
      contactType: "customer support",
      areaServed: "FR",
      availableLanguage: ["French"],
    },
  },
};

export default function ContactPage() {
  const mailto = `mailto:${CLUB.email}?subject=${encodeURIComponent("Contact club — Demande d'informations")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactJsonLd) }}
      />

      <section id="contact">
        <div className="sectionDiviser"></div>
        <h1>Contact</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.valueCard}>
              {/* INFOS */}
              <div className={styles.logoContainer}>
                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/LogoFFC.png"
                      alt="Logo Fontenay-en-Parisis Football Club"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <h3>Fontenay en Parisis</h3>
                  <h3>Football Club</h3>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/position.png"
                      alt="Adresse du Fontenay-en-Parisis Football Club"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <address className={styles.address}>
                    <h3>Chemin du Haras</h3>
                    <h3>95190 Fontenay-en-Parisis</h3>
                  </address>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/telephone.png"
                      alt="Téléphone du Fontenay-en-Parisis Football Club"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <h3>
                    <a href={`tel:${CLUB.phone}`} className={styles.tel}>
                      {CLUB.phoneDisplay}
                    </a>
                  </h3>
                  <h3>{CLUB.contactName}</h3>
                </div>
              </div>

              {/* MAP */}
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4397.917032118023!2d2.4433452895936996!3d49.048298203139275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6411aa18c15cd%3A0xfeed93484d4a7a5c!2sFontenay-en-Parisis%20Football%20Club!5e0!3m2!1sfr!2sfr!4v1770202095690!5m2!1sfr!2sfr"
                width="100%"
                loading="lazy"
                title="Emplacement du Fontenay-en-Parisis Football Club sur Google Maps"
              />

              <div className={styles.endContact}>
                <p>
                  Pour toute demande, n&apos;hésitez pas à nous appeler ou à nous contacter par
                  mail en cliquant sur le bouton ci-dessous.
                </p>

                <a href={mailto} className="btnPrimaire">
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
