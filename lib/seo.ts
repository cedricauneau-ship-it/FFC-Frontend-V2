/**
 * Source unique des informations SEO et métier du club.
 * Toute modification (adresse, téléphone, email, slogan) se fait ICI.
 */

export const SITE_URL = "https://www.fontenayenparisisfootballclub.fr";

export const CLUB = {
  legalName: "Fontenay-en-Parisis Football Club",
  shortName: "Fontenay FC",
  alternateNames: ["FFC Fontenay", "Fontenay FC", "Fontenay-en-Parisis FC"],
  slogan: "Le foot amateur en Val-d'Oise",
  description:
    "Club de football amateur affilié à la FFF (district du Val-d'Oise, ligue Paris Île-de-France). École de foot des U6 aux Vétérans, 3 terrains en herbe, licence à 180 €/an.",
  shortDescription:
    "Club de football amateur à Fontenay-en-Parisis (95190, Val-d'Oise). École de foot U6 à Vétérans, licence 180 €/an, 3 terrains en herbe.",

  // NAP — à garder cohérent partout (annuaires, GBP, FFF, footeo…)
  address: {
    streetAddress: "Chemin du Haras",
    locality: "Fontenay-en-Parisis",
    postalCode: "95190",
    region: "Île-de-France",
    country: "FR",
  },
  geo: {
    latitude: 49.0483,
    longitude: 2.4433,
  },
  phone: "+33632469068", // 06 32 46 90 68 — Claude Jolly, secrétaire général
  phoneDisplay: "06 32 46 90 68",
  contactName: "Claude Jolly",
  contactRole: "Secrétaire général",
  email: "contact@fontenayenparisisfootballclub.fr",

  // Réseaux et entités liées (utilisé pour `sameAs` du JSON-LD)
  social: {
    facebook: "https://www.facebook.com/fontenayenparisisfc/",
    instagram: "https://www.instagram.com/fontenayenparisisfc/",
  },
  externalProfiles: [
    "https://www.fff.fr/competition/club/527726-fontenay-en-parisis-fc/information.html",
    "https://scorenco.com/football/clubs/fontenay-en-parisis-fc-2i7u",
    "https://fontenay-fc.footeo.com/",
    "https://www.fontenay-en-parisis.fr/association/fontenay-football-club/",
  ],
};

export const CLUB_COLORS = ["Orange", "Noir"];

/**
 * Construit l'URL absolue à partir d'un chemin relatif.
 * Garantit qu'on n'a jamais de double slash dans les `canonical` / `openGraph.url`.
 */
export function absoluteUrl(path: string = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

/**
 * JSON-LD générique réutilisable côté serveur.
 * Prend un objet, retourne le tag `<script>` à injecter dans une page.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function jsonLd(data: any): string {
  return JSON.stringify(data);
}

/**
 * Construit un BreadcrumbList JSON-LD à partir d'une liste ordonnée d'étapes.
 * Exemple : breadcrumb([{ name: "Accueil", path: "/" }, { name: "Club", path: "/club/licence" }]).
 */
export function breadcrumb(
  items: { name: string; path: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Données structurées globales du club (SportsClub).
 * À injecter une seule fois, dans le root layout.
 */
export const SPORTS_CLUB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: CLUB.legalName,
  alternateName: CLUB.alternateNames,
  url: SITE_URL,
  logo: absoluteUrl("/icons/LogoFFC.png"),
  image: absoluteUrl("/opengraph-image"),
  sport: "Football",
  description: CLUB.description,
  foundingLocation: {
    "@type": "Place",
    name: "Fontenay-en-Parisis, France",
  },
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
  telephone: CLUB.phone,
  email: CLUB.email,
  memberOf: {
    "@type": "SportsOrganization",
    name: "Fédération Française de Football",
    url: "https://www.fff.fr",
  },
  sameAs: [CLUB.social.facebook, CLUB.social.instagram, ...CLUB.externalProfiles],
};
