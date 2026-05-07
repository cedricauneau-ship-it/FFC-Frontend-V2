import { SITE_URL, CLUB } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Convention 2026 : llms-full.txt — version étendue avec tout le contenu textuel du
 * site, paginé par section et avec dates de modification (utile pour
 * GPTBot, ClaudeBot, PerplexityBot, Google-Extended).
 */
export function GET() {
  const lastModified = new Date().toISOString();

  const body = `# ${CLUB.legalName} — Contenu complet

Last-Modified: ${lastModified}
Source: ${SITE_URL}

---

## 1. Identité du club

Nom officiel : ${CLUB.legalName}
Noms alternatifs : ${CLUB.alternateNames.join(", ")}
Couleurs : orange et noir
Sport : Football
Affiliation : Fédération Française de Football (FFF), district du Val-d'Oise, ligue Paris Île-de-France

Adresse complète :
${CLUB.address.streetAddress}
${CLUB.address.postalCode} ${CLUB.address.locality}
${CLUB.address.region}, France

Coordonnées GPS : ${CLUB.geo.latitude}, ${CLUB.geo.longitude}
Téléphone : ${CLUB.phoneDisplay} (${CLUB.contactName}, ${CLUB.contactRole})
Email : ${CLUB.email}
Site web : ${SITE_URL}

Réseaux sociaux :
- Facebook : ${CLUB.social.facebook}
- Instagram : ${CLUB.social.instagram}

Profils externes :
${CLUB.externalProfiles.map((p) => `- ${p}`).join("\n")}

---

## 2. La licence (${SITE_URL}/club/licence)

Cotisation : 180 € par an pour toutes les catégories.
Équipement fourni à chaque licencié : short, chaussettes, sweat aux couleurs du club.

Démarche d'inscription :
1. Transmettre au club nom, prénom, date et lieu de naissance du licencié, ainsi qu'une adresse email.
2. Le club saisit les informations dans le système FFF.
3. La FFF envoie un mail invitant à compléter le formulaire en ligne.
4. Une fois validé, le club finalise la demande.

L'inscription est entièrement dématérialisée.

---

## 3. Catégories et horaires d'entraînement (${SITE_URL}/club/entrainements)

- Baby (5 ans) — mercredi 17h30 à 18h
- U6 / U7 — mercredi 18h à 19h15
- U8 / U9 — mercredi 18h à 19h30
- U10 / U11 — mardi 18h-19h30, jeudi 18h-19h30
- U12 / U13 — mardi 18h-19h30, jeudi 18h-19h30
- U13 féminine — équipe dédiée
- U14 / U15 — mardi 18h15-19h30, jeudi 18h15-19h30
- U16 / U17 — mercredi 19h30-21h, vendredi 19h30-21h
- Sénior — mardi 19h30-22h, jeudi 19h30-22h
- Vétéran (V35, V45) — jeudi 19h45-21h15

---

## 4. Les terrains (${SITE_URL}/club/terrains)

Le club dispose de 3 terrains en herbe au complexe sportif, ${CLUB.address.streetAddress}, ${CLUB.address.postalCode} ${CLUB.address.locality}.

Terrain herbe 1, Terrain herbe 2, Terrain herbe 3 : utilisés pour entraînements et matchs.

---

## 5. Bureau et éducateurs (${SITE_URL}/club/benevoles)

Dirigeants :
- Schilt Laurent — Président — 06 20 21 51 03
- Tavares Novo Carlos — Vice-président — 06 74 68 55 13
- Jolly Claude — Secrétaire général — 06 32 46 90 68
- Moser Jean-Marc — Trésorier — 06 23 81 45 97
- Cochet Jean-François — Référent arbitre — 06 72 86 23 29
- Barazzutti Guido — Organisation tournois
- Fournier Jean-Claude — Membre du bureau
- Louis Laurent — Membre du bureau
- Fache Sébastien — Membre du bureau

Éducateurs :
- Moser Jean-Marc — Responsable école de foot — 06 23 81 45 97
- Cochet Jean-François — Responsable U6/U7 — 06 72 86 23 29
- Camara Abdoulaye — Responsable U8/U9 — 06 95 64 69 26
- Strub Guillaume — Responsable U10/U11 — 06 19 43 65 60
- Leroy Christian — Responsable U12/U13 — 06 87 34 90 72
- Moser Jean-Marc — Responsable U13 féminine — 06 23 81 45 97
- Nivert Thomas — Responsable U16/U17 — 06 22 02 28 94
- Ravenal Jean-Luc — Responsable Sénior
- Ellama Cedric — Responsable Vétéran — 06 64 74 68 66

---

## 6. Valeurs du club (${SITE_URL}/ecole_de_foot/valeurs)

Le club s'appuie sur trois valeurs fondamentales :

### Le respect
Respect des éducateurs, des adversaires, de l'arbitre, du matériel, du lieu (terrain, vestiaire, club house), des horaires et des lois du jeu. Prévenir le responsable en cas d'absence à un match.

### Le sérieux
Venir à l'entraînement pour progresser. Être attentif aux consignes de l'éducateur. Aider au rangement du matériel. Rester avec son équipe. S'appliquer dans les exercices. Respecter son poste durant les matchs.

### Le plaisir
Prendre du plaisir en faisant des choix profitables pour l'équipe, en tentant des gestes, en faisant son sac de football. "Le football est un sport, et le sport est avant tout un jeu."

---

## 7. Sac de football — équipement obligatoire (${SITE_URL}/ecole_de_foot/sac)

- Chaussures : à partir des U13, deux paires (moulés terrain sec / vissés terrain humide). Pour les plus jeunes : une seule paire (vissés interdits).
- Tenue : chaussettes noires et short noir du club. Tenue libre à l'entraînement.
- Sécurité : protège-tibias obligatoires.
- Hygiène : serviette, gel douche, vêtements de rechange.
- Organisation : sac plastique pour affaires sales et chaussures.
- Confort : tee-shirt sous le maillot par temps froid.
- Survêtement du club obligatoire à l'arrivée.

---

## 8. Esprit éducatif — Lettre d'un enfant (${SITE_URL}/ecole_de_foot/lettre)

Lettre adressée par les enfants aux adultes : "Aujourd'hui c'est notre fête : nous venons ici pour nous amuser. Bien sûr, nous aussi nous voulons gagner, mais avant de gagner, il faut jouer. Alors laissez-nous jouer ! Ne criez pas sur nous tout le temps. N'hurlez pas sur les arbitres, eux aussi apprennent. Soyez indulgents ! Faites-nous tous jouer à part égale."

---

## 9. Contact (${SITE_URL}/contact)

Téléphone : ${CLUB.phoneDisplay}
Référent : ${CLUB.contactName} (${CLUB.contactRole})
Email : ${CLUB.email}
Adresse : ${CLUB.address.streetAddress}, ${CLUB.address.postalCode} ${CLUB.address.locality}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, must-revalidate",
    },
  });
}
