import { SITE_URL, CLUB } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Convention 2026 : llms.txt — version courte et structurée pour les LLM.
 * Liste les pages pillier avec un résumé pour aider GPTBot/ClaudeBot/
 * PerplexityBot à comprendre la structure du site et les entités clés.
 */
export function GET() {
  const body = `# ${CLUB.legalName}

> ${CLUB.description} Adresse : ${CLUB.address.streetAddress}, ${CLUB.address.postalCode} ${CLUB.address.locality} (${CLUB.address.region}, France). Téléphone : ${CLUB.phoneDisplay} (${CLUB.contactName}, ${CLUB.contactRole}). Email : ${CLUB.email}.

## Identité

- Nom : ${CLUB.legalName}
- Noms alternatifs : ${CLUB.alternateNames.join(", ")}
- Couleurs : orange et noir
- Sport : Football
- Affiliation : Fédération Française de Football (FFF), district du Val-d'Oise, ligue Paris Île-de-France
- Saison de référence : 2025-2026

## Pages clés

- [Accueil](${SITE_URL}/) : présentation du club, dernières actualités, derniers matchs, FAQ.
- [La licence](${SITE_URL}/club/licence) : tarif (180 €/an), démarche d'inscription dématérialisée via la FFF, équipement fourni (short, chaussettes, sweat).
- [Les entraînements](${SITE_URL}/club/entrainements) : horaires détaillés de chaque catégorie, du Baby (5 ans) au Vétéran (36 ans et plus).
- [Les terrains](${SITE_URL}/club/terrains) : 3 terrains en herbe, complexe sportif, ${CLUB.address.streetAddress}, ${CLUB.address.postalCode} ${CLUB.address.locality}.
- [Les bénévoles](${SITE_URL}/club/benevoles) : équipe dirigeante (président, vice-président, secrétaire, trésorier) et éducateurs par catégorie.
- [Calendrier](${SITE_URL}/calendrier) : matchs à venir et résultats récents (source : FFF/Scorenco).
- [Classement](${SITE_URL}/classement) : classement championnat district Val-d'Oise (source : FFF/Scorenco).
- [Les valeurs](${SITE_URL}/ecole_de_foot/valeurs) : respect, sérieux, plaisir.
- [Le sac de football](${SITE_URL}/ecole_de_foot/sac) : équipement obligatoire pour entraînements et matchs.
- [Lettre d'un enfant](${SITE_URL}/ecole_de_foot/lettre) : esprit éducatif de l'école de foot.
- [Contact](${SITE_URL}/contact) : ${CLUB.phoneDisplay} — ${CLUB.contactName} (${CLUB.contactRole}). Email : ${CLUB.email}.

## Catégories proposées

Baby (5 ans), U6/U7, U8/U9, U10/U11, U12/U13, U13 féminine, U14/U15, U16/U17, Sénior, Vétéran V35, Vétéran V45.

## Réseaux sociaux

- Facebook : ${CLUB.social.facebook}
- Instagram : ${CLUB.social.instagram}

## Données structurées

Toutes les pages contiennent du JSON-LD Schema.org (SportsClub, BreadcrumbList, FAQPage, ContactPage, SportsTeam, SportsActivityLocation) — exploitables directement.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
