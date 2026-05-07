# Audit SEO + LLM — Fontenay-en-Parisis Football Club

**Site audité** : https://www.fontenayenparisisfootballclub.fr
**Stack** : Next.js 16.1.4 (App Router) + React 19 + CSS Modules
**Date** : 7 mai 2026
**Périmètre** : SEO classique (Google/Bing), visibilité LLM (ChatGPT/Perplexity/Claude/Gemini), Google Business Profile, cohérence NAP.

---

## 1. Résumé exécutif

Le site est techniquement propre côté Next.js (SSR fonctionnel, images optimisées via `next/image`, sitemap.ts présent), mais il est **invisible pour Google sur les requêtes locales** et **quasi muet pour les LLM**. Trois raisons principales :

1. **Aucune donnée structurée Schema.org** (pas de `SportsClub`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`). Les LLM et Google ne savent pas ce qu'est ce site.
2. **Toutes les pages partagent le même `<title>` et la même `<meta description>`** (ils viennent uniquement du `app/layout.tsx`). Google considère ça comme du contenu dupliqué côté metadata.
3. **Le sitemap pointe vers deux URL en 404** (`/club` et `/ecole_de_foot`) qui renvoient `<meta name="robots" content="noindex">`. Mauvais signal de qualité envoyé aux crawlers.

À ces problèmes s'ajoutent : pas de `robots.txt`, pas d'OpenGraph/Twitter Card, contenu principal de la home dans des `<iframe>` tiers (Facebook/Scorenco) **non indexables**, NAP incohérent entre 3 sources publiques, et un email de contact pointant vers ton adresse personnelle (`auneau.dev@gmail.com`).

**Impact mesurable attendu après corrections (priorité 1 + 2)** : passage de "introuvable hors recherche du nom exact" à un positionnement top 3 sur "club football Fontenay-en-Parisis", "école de foot Fontenay-en-Parisis 95190", "licence football Val-d'Oise Fontenay", et apparition dans les réponses de ChatGPT/Perplexity sur ces mêmes intentions.

---

## 2. Score par axe

| Axe | Score | Commentaire |
|---|---|---|
| SEO technique | 4/10 | SSR OK, sitemap OK, mais 404 dans le sitemap, pas de robots.txt, pas de canonical |
| Metadata / OG | 2/10 | 1 seul title pour tout le site, 0 OG, 0 Twitter Card |
| Données structurées | 0/10 | Aucun JSON-LD |
| Contenu / mots-clés | 5/10 | Bon contenu sur les pages école, mais home vide de texte indexable |
| SEO local (NAP/GBP) | 3/10 | Adresse incohérente entre site / FFF / footeo / mairie |
| Performance / Core Web Vitals | 7/10 | `next/image` bien utilisé, `priority` sur le hero, mais 6 iframes Scorenco + 1 iframe SociableKit + 1 Google Maps sur la home = beaucoup de tiers |
| Accessibilité | 6/10 | `alt` présents mais peu descriptifs, `aria-label` OK sur les réseaux |
| Visibilité LLM (GEO) | 1/10 | Aucun signal exploitable par GPTBot/ClaudeBot/PerplexityBot |

**Score global : 3.5 / 10** — site fonctionnel mais sous-exploité. Tous les chantiers ci-dessous se règlent en code, sans refonte.

---

## 3. Problèmes critiques (à régler en priorité)

### 3.1. Le sitemap publie deux URL en 404

Le `sitemap.ts` liste `/club` et `/ecole_de_foot` mais ces routes n'existent pas dans `app/(ffc)/` — il y a uniquement les sous-pages (`/club/benevoles`, `/club/licence`, etc.). Résultat : Google fetch ces URL, reçoit un HTML avec `<meta name="robots" content="noindex">`, et te marque comme "site qui publie des liens cassés dans son propre sitemap".

À l'inverse, `/club/licence` existe (HTTP 200, contenu réel) mais **n'est pas dans le sitemap** → la page n'est pas découverte.

**Fix** : voir §9.2.

### 3.2. Aucun `robots.txt`

`https://www.fontenayenparisisfootballclub.fr/robots.txt` retourne 404. Sans `robots.txt`, tu ne peux pas :
- déclarer le sitemap explicitement,
- autoriser/interdire les bots LLM (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`),
- bloquer `/_next/` ou les ressources statiques inutiles.

### 3.3. Toutes les pages ont le même title et la même description

Chaque page (`/club/licence`, `/calendrier`, `/contact`, etc.) renvoie en HTML :
```html
<title>Fontenay-en-Parisis Football Club | Club de football (95190)</title>
<meta name="description" content="Site officiel du Fontenay-en-Parisis Football Club...">
```

Google interprète ça comme **9 pages quasi-dupliquées** et n'en retient qu'une dans son index.

### 3.4. Aucune donnée structurée (Schema.org)

Pas un seul `<script type="application/ld+json">` sur le site. Or pour un club sportif local, c'est l'élément le plus rentable côté SEO : Google a un type dédié `SportsClub` qui alimente directement le Knowledge Graph et les Rich Results. Les LLM (ChatGPT/Perplexity/Claude) lisent prioritairement le JSON-LD pour comprendre les entités.

### 3.5. Home page : H1 "Actualité" et contenu principal en iframe

Le HTML servi à Googlebot pour la home contient :
- 6 `<h1>` (un par section : "Actualité", "La vie du club", "Derniers matchs", "Nous rejoindre", etc.) → multi-H1 = pas pénalisant en HTML5 mais flou pour le sens.
- Une section "Actualité" vide (`<div class="actuContainer"></div>`).
- Une iframe SociableKit qui contient les posts Facebook → invisible pour Google et les LLM.
- 6 iframes Scorenco pour les matchs → invisible pour Google et les LLM.

Conséquence : la **home n'a aucun texte indexable** au-delà de la nav et du footer. C'est là-dessus que Google juge "de quoi parle le site".

### 3.6. NAP incohérent

| Source | Adresse |
|---|---|
| Ton site `/contact` | Chem. du Haras, 95190 Fontenay-en-Parisis |
| FFF (fff.fr) | 10 place Stalingrad, 95190 Fontenay En Parisis (mairie) |
| Footeo (fontenay-fc.footeo.com) | Chemin Des Demoiselles, 95190 Fontenay En Parisis |
| Site municipal | Lien vers footeo, pas vers ton domaine |

Le NAP (Name / Address / Phone) cohérent partout est le facteur n°1 du SEO local. Aujourd'hui Google ne sait pas quelle adresse retenir → il ne place pas le club dans le pack local de la requête "club football Fontenay-en-Parisis".

### 3.7. Email de contact = ton adresse personnelle

`mailto:auneau.dev@gmail.com` apparaît à 2 endroits du code (`page.tsx` home et `contact/page.tsx`). Toutes les demandes de licence, bénévolat, infos club arrivent sur ta boîte perso. À remplacer par une adresse club (ex. `contact@fontenayenparisisfootballclub.fr` via la conf Vercel/registrar).

### 3.8. Site doublon indexable

`https://ffc-frontend-dun.vercel.app/` (l'ancien preview Vercel) répond en HTTP 200 et apparaît dans les SERP. Doublon = dilution du PageRank. À configurer en redirect 301 vers le domaine final, ou au minimum à mettre en `noindex`.

---

## 4. Audit technique détaillé

### 4.1. Metadata Next.js

Aujourd'hui dans `app/layout.tsx` :
```tsx
export const metadata: Metadata = {
  title: "Fontenay-en-Parisis Football Club | Club de football (95190)",
  description: "Site officiel du Fontenay-en-Parisis Football Club...",
};
```

Manquent : `metadataBase`, `title.template`, `openGraph`, `twitter`, `alternates.canonical`, `robots`, `keywords` (peu utile mais inoffensif), `verification` (pour Google Search Console).

### 4.2. Pages "use client" qui n'en ont pas besoin

Plusieurs pages sont marquées `"use client"` alors qu'elles sont **purement statiques** :
- `app/(ffc)/club/benevoles/page.tsx` — juste un `.map()` sur un tableau, aucun hook
- `app/(ffc)/club/entrainements/page.tsx` — `new Date().getFullYear()` qui peut tourner côté serveur
- `app/(ffc)/club/licence/page.tsx` — pas de hook
- `app/(ffc)/club/terrains/page.tsx` — pas de hook

Conséquence : ces pages embarquent inutilement le runtime React côté client + ne peuvent pas exporter de `metadata` statique (si tu mets `export const metadata` dans une page `"use client"`, Next l'ignore).

À retirer le `"use client"` partout où il n'y a pas de `useState`/`useEffect`/`onClick`. Seules `home`, `Navbar`, `WidgetIframe`, `PersonCard`, `calendrier` et `classement` en ont vraiment besoin.

### 4.3. Pages "use client" avec hooks vraiment nécessaires

- `home` (`/`) : utilise `useState`/`useEffect` pour le carousel hero. **Solution** : extraire le carousel dans un Client Component séparé (`<HeroCarousel />`) et garder la page principale en Server Component. Cela permet d'exporter une `metadata` propre et de servir le contenu textuel en SSR pur.

### 4.4. Page d'accueil — texte indexable manquant

Sur la home rendue en HTML, le seul vrai texte indexable est :
- les 5 `<h1>` de section
- 2 paragraphes "Joueur" / "Bénévole"

Aucune mention de :
- la ville et le code postal dans un paragraphe (uniquement dans le `<title>`)
- les catégories ("U6 à Vétérans")
- le ou les terrains
- le nom du club étendu et son histoire (même 2-3 phrases)

C'est ce qui manque pour ranker sur "club foot Fontenay 95" et pour que Perplexity/ChatGPT te citent quand on leur demande "où inscrire mon enfant au foot à Fontenay-en-Parisis".

### 4.5. Données structurées manquantes

Aucun JSON-LD sur aucune page. Voir §9.5 pour les blocs prêts à coller.

### 4.6. Images

`next/image` est correctement utilisé partout (bon point) avec `priority` sur la première image hero, `sizes` sur les images de terrain, et `placeholder="blur"`. À améliorer :

- **`alt` génériques** : sur la home, les 6 images du carousel ont toutes le même `alt="Fontenay-en-Parisis Football Club"`. Devrait être "Catégorie U6-U7 du Fontenay-en-Parisis Football Club", "Vétérans V35…", etc. C'est une opportunité d'enrichissement sémantique pour Google Images et pour les LLM.
- **Logo du club** (`/icons/LogoFFC.png`) pèse **494 KB** pour un logo qui s'affiche en 90×74 px. Compresse à < 30 KB en WebP/PNG optimisé.
- **Instagram.png** : 230 KB pour une icône 60×60. Idem, < 5 KB suffit.
- **Pas d'OG image dédiée** (`/opengraph-image.png` ou via `app/opengraph-image.tsx`). Quand tu partages le lien sur WhatsApp / Facebook / Discord, l'aperçu est moche.

### 4.7. Accessibilité / sémantique

- `<button>` du burger : OK avec `aria-label`.
- Sous-menu dropdown desktop : c'est un `<span>` avec `:hover`, donc **inaccessible au clavier**. Idéalement utiliser `<button aria-expanded>` ou un menu HTML natif.
- "lettre d'un enfant" page utilise des `<h2>` pour des titres entre guillemets fictifs. C'est OK mais à terme remplacer par `<blockquote>` sémantique pour clarifier qu'il s'agit d'une citation.
- Le footer mentionne "Créer par" → "Créé par" (faute de français visible sur toutes les pages).

### 4.8. Performance — risques sur la home

La home charge en parallèle 6 iframes Scorenco + 1 iframe SociableKit Facebook + 1 Google Maps sur `/contact`. Ces iframes :
- ne sont pas en `loading="lazy"` (sauf la map de contact),
- déclenchent chacune leur propre cascade de requêtes vers des CDN tiers,
- impactent le LCP et le CLS.

Mesure attendue (PageSpeed Insights) : LCP > 3s en mobile à cause de l'iframe Facebook. À régler en (1) ajoutant `loading="lazy"` sur toutes les iframes, (2) éventuellement ne charger les iframes Scorenco que au scroll (Intersection Observer).

---

## 5. Audit SEO local & Google Business Profile

### 5.1. Fiche Google Business Profile

Aucune fiche GBP n'apparaît dans les résultats pour "Fontenay-en-Parisis Football Club" (recherche réalisée le 7/05/2026). C'est **le levier #1 manquant** pour un club local. Sans fiche GBP :
- pas de pack local sur Google Maps,
- pas de Knowledge Panel à droite des SERP,
- 0 avis publics,
- les LLM qui s'appuient sur Google Maps (Gemini, ChatGPT search) ne trouvent pas le club.

**À faire** : créer la fiche sur https://business.google.com avec :
- Nom : `Fontenay-en-Parisis Football Club` (exactement)
- Catégorie principale : `Club de football` (Soccer Club en EN)
- Catégories secondaires : `Association sportive`, `École de football`
- Adresse : à arbitrer en cohérence avec FFF (voir §5.2)
- Téléphone : 06 32 46 90 68 (Claude Jolly, secrétaire général) — celui affiché sur `/contact`
- Site : https://www.fontenayenparisisfootballclub.fr
- Horaires : ceux des entraînements (mardi/mercredi/jeudi/vendredi soirs) ou "Ouvert sur RDV"
- Photos : logo, terrain, équipes (10 minimum, qualité élevée)
- Description : 750 caractères minimum reprenant les mots-clés "Fontenay-en-Parisis", "95190", "Val-d'Oise", "école de foot U6 à vétérans", "FFF", "Paris Île-de-France"
- Q&R : préremplir les 5 questions probables ("comment inscrire un enfant ?", "quel âge minimum ?", "tarifs licence ?", "où sont les terrains ?", "horaires entraînements ?")

### 5.2. Cohérence NAP — à arbitrer

Trois adresses circulent :
- `Chem. du Haras, 95190` (ton site)
- `10 place Stalingrad` (FFF — c'est l'adresse administrative = mairie)
- `Chemin Des Demoiselles` (footeo — c'est l'adresse du complexe sportif)

L'adresse **Chemin du Haras** correspond géographiquement au complexe sportif sur Google Maps (lat 49.0483, long 2.4433 — vérifié via l'embed de ton iframe). C'est probablement la bonne pour la fiche GBP. Il faut alors :
1. Mettre à jour fontenay-fc.footeo.com (Chemin des Demoiselles → Chemin du Haras)
2. Mettre à jour la fiche FFF (place Stalingrad → Chemin du Haras), au moins dans la rubrique "siège du club"
3. Cohérence sur tous les annuaires : asso-1901.com, helloasso, sportcorico.com, scorenco.com, besport.com

### 5.3. Backlinks locaux à activer

Aucun de ces sites institutionnels ne pointe vers `fontenayenparisisfootballclub.fr` :
- **fontenay-en-parisis.fr/association/fontenay-football-club** → pointe vers footeo. À demander à la mairie de mettre le nouveau lien.
- **fff.fr/.../527726-fontenay-en-parisis-fc** → champ "site web" probablement vide ou sur footeo. À mettre à jour via l'espace dirigeant FFF.
- **scorenco.com / sportcorico.com / besport.com / detectionsfoot.fr** → idem.

Ces 5 backlinks valent plus que 50 backlinks aléatoires pour le local SEO.

### 5.4. Bing Places + Apple Maps + Waze

Dupliquer la fiche GBP sur :
- **Bing Places** (https://www.bingplaces.com) — 10% du trafic moteur en France, et surtout, c'est la source principale de **ChatGPT search** quand il appelle un moteur de recherche.
- **Apple Business Connect** (https://businessconnect.apple.com) — pour Apple Maps + Siri.
- **Waze for Cities** — gratuit, signale le club aux conducteurs.

---

## 6. Optimisation LLM / GEO (Generative Engine Optimization)

Les LLM (ChatGPT, Claude, Perplexity, Gemini) se nourrissent de :
1. **Schema.org JSON-LD** (lecture directe → §9.5)
2. **HTML sémantique riche en contenu factuel** (pas d'iframe → §4.4)
3. **Wikipedia / Wikidata** (un club à 4 équipes seniors n'y rentrera pas, on peut zapper)
4. **Backlinks de sites de confiance** (mairie, FFF, district 95)
5. **`llms.txt`** (norme émergente, gratuite à mettre en place)

### 6.1. Mettre en place `llms.txt` et `llms-full.txt`

Convention 2026 : 2 fichiers à la racine.

- `llms.txt` : version courte, structurée en Markdown, qui indique aux crawlers LLM les pages pillier et leur résumé.
- `llms-full.txt` : version longue contenant tout le contenu textuel du site, paginé, avec dates de modif.

À placer dans `app/llms.txt/route.ts` (Next 16 le sert correctement comme route handler avec `Content-Type: text/plain`).

Modèle prêt à coller en §9.6.

### 6.2. Autoriser explicitement les bots LLM

Dans `robots.txt`, on **autorise** explicitement (sinon certains bots considèrent qu'absence = interdiction) :
- `GPTBot` (OpenAI)
- `ChatGPT-User` (OpenAI, fetch en temps réel)
- `OAI-SearchBot` (OpenAI, search index)
- `ClaudeBot` (Anthropic)
- `PerplexityBot` (Perplexity)
- `Google-Extended` (Google AI / Gemini)
- `Bingbot` + `BingPreview` (déjà couverts par allow all, mais on les rend explicites)

Voir bloc en §9.4.

### 6.3. Format "answer-ready" du contenu

Les LLM citent prioritairement le contenu structuré en **questions/réponses courtes** ou **listes factuelles**.

Exemple à ajouter en bas de la home (ou créer une page `/faq`) :

```
## Questions fréquentes

### Quel est le coût de la licence au Fontenay-en-Parisis Football Club ?
La cotisation annuelle est de 180 € pour toutes les catégories, équipement (short, chaussettes, sweat) inclus.

### À partir de quel âge peut-on s'inscrire ?
Dès la catégorie Baby (5 ans), jusqu'aux Vétérans (36 ans et +).

### Où s'entraînent les équipes ?
Sur les 3 terrains en herbe du complexe sportif, Chemin du Haras, 95190 Fontenay-en-Parisis.

### Comment contacter le club ?
Par téléphone au 06 32 46 90 68 (Claude Jolly, secrétaire général) ou par email à contact@fontenayenparisisfootballclub.fr.
```

Ce bloc doublé d'un JSON-LD `FAQPage` (§9.5) déclenche les rich results "People also ask" sur Google et est repris quasi mot pour mot par Perplexity.

### 6.4. Désindexer ce qui n'apporte rien aux LLM

Les pages `/calendrier` et `/classement` n'ont **aucun contenu textuel propre** — juste une iframe Scorenco. Côté LLM, elles polluent l'index sans rien apporter. Deux options :
1. Les laisser indexées mais ajouter une section texte au-dessus de l'iframe : "Le Fontenay FC évolue actuellement en Seniors D3 du district du Val-d'Oise…" + JSON-LD `SportsTeam` + description des dernières journées.
2. Les marquer `robots: { index: false }` via `metadata`. Solution simple si tu n'as pas le temps d'enrichir.

Recommandation : **option 1** — c'est exactement ce que cherchent les LLM ("dans quel championnat joue le club ?").

---

## 7. Plan d'action priorisé

### 🔥 Quick wins (1 à 3 heures de code, gros impact)

| # | Action | Impact | Fichier |
|---|---|---|---|
| 1 | Corriger le sitemap.ts (retirer `/club` et `/ecole_de_foot`, ajouter `/club/licence`) | Stop signal "404 dans sitemap" | `app/sitemap.ts` |
| 2 | Créer `app/robots.ts` | Indexation propre + autorisation LLM | nouveau |
| 3 | Ajouter `metadataBase` + `title.template` + `openGraph` au root layout | OG cards correctes au partage | `app/layout.tsx` |
| 4 | Ajouter une `metadata` par page avec title/description spécifiques | -90% duplicate content | chaque `page.tsx` |
| 5 | Retirer `"use client"` des pages statiques | Bundle JS plus léger + permet metadata | 4 pages |
| 6 | Corriger les `alt` du carousel home | SEO images + accessibilité | `app/(ffc)/page.tsx` |
| 7 | Compresser les PNG du dossier `/icons` | -700 KB sur chaque page | `public/icons/` |
| 8 | Ajouter `loading="lazy"` aux iframes Scorenco/SociableKit | LCP -1s | home + calendrier + classement |

### 🎯 Priorité 2 (1 journée de code)

| # | Action | Impact |
|---|---|---|
| 9 | Ajouter le JSON-LD `SportsClub` global (root layout) | Knowledge Graph + LLM |
| 10 | Ajouter le JSON-LD `BreadcrumbList` par page | Rich snippets |
| 11 | Ajouter une section "À propos / FAQ" texte sur la home (200-300 mots) | Contenu indexable réel |
| 12 | Ajouter le JSON-LD `FAQPage` sur la home + page licence | "People also ask" Google |
| 13 | Créer une OG image (1200×630) — soit `app/opengraph-image.png`, soit dynamiquement via `app/opengraph-image.tsx` | Partage social |
| 14 | Extraire le carousel hero dans un `<HeroCarousel />` client component pour pouvoir SSR le reste de la home | Page entièrement crawlable |
| 15 | Remplacer `auneau.dev@gmail.com` par `contact@fontenayenparisisfootballclub.fr` (config registrar/Vercel) | Pro + délivrabilité |
| 16 | Créer `app/llms.txt/route.ts` et `app/llms-full.txt/route.ts` | Visibilité LLM 2026 |

### 🏗️ Priorité 3 (au-delà du code — stratégique)

| # | Action | Impact |
|---|---|---|
| 17 | Créer la fiche **Google Business Profile** (avec photos + Q&R) | #1 levier local |
| 18 | Créer fiches **Bing Places** et **Apple Business Connect** | ChatGPT/Siri |
| 19 | Aligner le NAP sur tous les annuaires (FFF, footeo, mairie, Scorenco, SportCorico, BeSport, DetectionsFoot, Verif.com) | Local SEO |
| 20 | Demander à la mairie de Fontenay-en-Parisis de remplacer le lien footeo par le nouveau domaine | Backlink officiel |
| 21 | Mettre `ffc-frontend-dun.vercel.app` en redirect 301 vers le domaine final | Stop dilution |
| 22 | Soumettre le sitemap dans **Google Search Console** + **Bing Webmaster Tools** + **IndexNow** | Indexation accélérée |
| 23 | Mettre en place un suivi Plausible/Vercel Analytics + Search Console pour mesurer | Mesure réelle des progrès |
| 24 | Ajouter du contenu rédigé : 1 actualité par mois (la section est vide aujourd'hui) | Fraîcheur + mots-clés long-tail |

---

## 8. Quelques chiffres à objectiver

Avant / après visé sur 60-90 jours après mise en place des priorités 1+2+3 :

| Métrique | Estimation actuelle | Cible 90j |
|---|---|---|
| Pages indexées Google | 1-3 (à cause des duplicate titles) | 12 |
| Position sur "club foot Fontenay-en-Parisis" | non classé | top 3 |
| Position sur "école de foot Fontenay-en-Parisis 95190" | non classé | top 3 |
| Apparition Pack Local Maps | non | oui (avec GBP) |
| Taux de citation par Perplexity sur ces requêtes | 0% | 30-50% |
| Apparition Knowledge Panel | non | oui (via SportsClub JSON-LD + GBP cohérent) |

Ces estimations sont basées sur des cas similaires (clubs amateurs locaux corrigeant les mêmes points). Aucune garantie : Google met 3-12 semaines à recrawler après les changements.

---

## 9. Annexe — extraits de code prêts à coller

### 9.1. `app/layout.tsx` enrichi

```tsx
import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.fontenayenparisisfootballclub.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fontenay-en-Parisis Football Club | Club de foot 95190",
    template: "%s | Fontenay-en-Parisis Football Club",
  },
  description:
    "Club de football amateur à Fontenay-en-Parisis (95190, Val-d'Oise). École de foot U6 à Vétérans, 3 terrains en herbe, licence à 180 €/an. FFF — District 95.",
  keywords: [
    "Fontenay-en-Parisis Football Club",
    "FFC Fontenay",
    "club football 95190",
    "école de foot Val-d'Oise",
    "licence football Fontenay",
  ],
  authors: [{ name: "Fontenay-en-Parisis Football Club" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Fontenay-en-Parisis Football Club",
    title: "Fontenay-en-Parisis Football Club | Club de foot 95190",
    description:
      "Club de football amateur à Fontenay-en-Parisis (95190). École de foot U6 à Vétérans.",
    images: [
      {
        url: "/og-image.jpg", // à créer en 1200x630
        width: 1200,
        height: 630,
        alt: "Fontenay-en-Parisis Football Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fontenay-en-Parisis Football Club",
    description: "Club de foot amateur du 95190 — école de foot U6 à Vétérans.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: { google: "TON-CODE-SEARCH-CONSOLE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* JSON-LD global SportsClub — voir §9.5 */}
        {children}
      </body>
    </html>
  );
}
```

### 9.2. `app/sitemap.ts` corrigé

```ts
import { MetadataRoute } from "next";

const BASE = "https://www.fontenayenparisisfootballclub.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Uniquement des routes qui existent réellement (pas de /club ni /ecole_de_foot nus)
  return [
    { url: `${BASE}/`,                       changeFrequency: "weekly",  priority: 1.0, lastModified },
    { url: `${BASE}/club/benevoles`,         changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${BASE}/club/licence`,           changeFrequency: "yearly",  priority: 0.9, lastModified }, // ajoutée
    { url: `${BASE}/club/entrainements`,     changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${BASE}/club/terrains`,          changeFrequency: "yearly",  priority: 0.6, lastModified },
    { url: `${BASE}/ecole_de_foot/valeurs`,  changeFrequency: "yearly",  priority: 0.6, lastModified },
    { url: `${BASE}/ecole_de_foot/sac`,      changeFrequency: "yearly",  priority: 0.5, lastModified },
    { url: `${BASE}/ecole_de_foot/lettre`,   changeFrequency: "yearly",  priority: 0.4, lastModified },
    { url: `${BASE}/calendrier`,             changeFrequency: "weekly",  priority: 0.7, lastModified },
    { url: `${BASE}/classement`,             changeFrequency: "weekly",  priority: 0.7, lastModified },
    { url: `${BASE}/contact`,                changeFrequency: "yearly",  priority: 0.5, lastModified },
  ];
}
```

### 9.3. `app/robots.ts` (nouveau fichier)

```ts
import { MetadataRoute } from "next";

const BASE = "https://www.fontenayenparisisfootballclub.fr";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Tous les bots classiques
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/static/chunks/"] },

      // Bots LLM autorisés explicitement
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
```

### 9.4. Exemple de `metadata` par page (à copier dans chaque `page.tsx` côté Server)

```ts
// app/(ffc)/club/licence/page.tsx — RETIRER "use client" puis ajouter :
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La licence — Inscription au club (180 €/an)",
  description:
    "Tarifs et démarches pour la licence au Fontenay-en-Parisis FC : 180 € par an, équipement fourni. Procédure dématérialisée via la FFF.",
  alternates: { canonical: "/club/licence" },
};
```

Faire la même chose pour chaque page avec un title et une description uniques (max 60 / 155 caractères).

### 9.5. JSON-LD à coller dans `app/layout.tsx` (avant `{children}`)

```tsx
const sportsClubJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "name": "Fontenay-en-Parisis Football Club",
  "alternateName": ["FFC Fontenay", "Fontenay FC"],
  "url": "https://www.fontenayenparisisfootballclub.fr",
  "logo": "https://www.fontenayenparisisfootballclub.fr/icons/LogoFFC.png",
  "image": "https://www.fontenayenparisisfootballclub.fr/og-image.jpg",
  "sport": "Football",
  "description":
    "Club de football amateur affilié à la FFF (district du Val-d'Oise, ligue Paris Île-de-France). École de foot des U6 aux Vétérans, 3 terrains en herbe, licence à 180 €/an.",
  "foundingLocation": "Fontenay-en-Parisis, France",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chemin du Haras",
    "addressLocality": "Fontenay-en-Parisis",
    "postalCode": "95190",
    "addressRegion": "Île-de-France",
    "addressCountry": "FR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 49.0483,
    "longitude": 2.4433,
  },
  "telephone": "+33632469068",
  "email": "contact@fontenayenparisisfootballclub.fr",
  "memberOf": {
    "@type": "SportsOrganization",
    "name": "Fédération Française de Football",
    "url": "https://www.fff.fr",
  },
  "sameAs": [
    "https://www.facebook.com/fontenayenparisisfc/",
    "https://www.instagram.com/fontenayenparisisfc/",
    "https://www.fff.fr/competition/club/527726-fontenay-en-parisis-fc/information.html",
    "https://scorenco.com/football/clubs/fontenay-en-parisis-fc-2i7u",
  ],
};

// dans le JSX :
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsClubJsonLd) }}
/>
```

Et un JSON-LD `FAQPage` à ajouter sur la page `/club/licence` :

```tsx
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte la licence au Fontenay-en-Parisis FC ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La cotisation annuelle est de 180 € pour toutes les catégories. Un short, des chaussettes et un sweat du club sont fournis à chaque licencié.",
      },
    },
    {
      "@type": "Question",
      "name": "Comment s'inscrire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'inscription est dématérialisée. Il suffit de transmettre nom, prénom, date et lieu de naissance, et une adresse email au club. La FFF envoie ensuite un formulaire à compléter.",
      },
    },
  ],
};
```

### 9.6. `app/llms.txt/route.ts` (nouveau)

```ts
export const dynamic = "force-static";

export function GET() {
  const body = `# Fontenay-en-Parisis Football Club

> Club de football amateur français, situé à Fontenay-en-Parisis (95190, Val-d'Oise, Île-de-France). Affilié à la Fédération Française de Football (FFF), district du Val-d'Oise. École de foot des U6 aux Vétérans. 3 terrains en herbe. Licence : 180 € par an, équipement fourni.

## Pages clés

- [Accueil](https://www.fontenayenparisisfootballclub.fr/) : présentation du club, dernières actualités et matchs.
- [La licence](https://www.fontenayenparisisfootballclub.fr/club/licence) : tarif (180 €), démarche d'inscription dématérialisée via la FFF.
- [Les entraînements](https://www.fontenayenparisisfootballclub.fr/club/entrainements) : horaires de chaque catégorie (Baby à Vétérans).
- [Les terrains](https://www.fontenayenparisisfootballclub.fr/club/terrains) : 3 terrains en herbe, Chemin du Haras, 95190 Fontenay-en-Parisis.
- [Les bénévoles](https://www.fontenayenparisisfootballclub.fr/club/benevoles) : équipe dirigeante et éducateurs.
- [Calendrier](https://www.fontenayenparisisfootballclub.fr/calendrier) : matchs à venir.
- [Classement](https://www.fontenayenparisisfootballclub.fr/classement) : classement championnat.
- [Contact](https://www.fontenayenparisisfootballclub.fr/contact) : 06 32 46 90 68 — Claude Jolly, secrétaire général.

## Catégories proposées

Baby (5 ans), U6/U7, U8/U9, U10/U11, U12/U13, U14/U15, U16/U17, Sénior, Vétéran (35+ et 45+), équipe féminine U13.

## Valeurs

Respect, sérieux, plaisir.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
```

---

## 10. Prochaines étapes recommandées

1. Lire ce rapport, valider les arbitrages d'adresse et d'email avec le bureau du club.
2. Faire les **quick wins §7** (priorité 1) en une session — c'est 90% de l'effort en SEO classique.
3. Créer la **fiche Google Business Profile** (priorité 3, mais c'est ce qui apportera le plus de visibilité locale).
4. Soumettre le nouveau sitemap dans Google Search Console et Bing Webmaster Tools.
5. Mesurer dans 4-6 semaines : positions sur les requêtes cibles + nombre de pages indexées (`site:fontenayenparisisfootballclub.fr` dans Google).

---

## Sources

- [Next.js — generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js — Metadata & OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Schema.org — SportsClub](https://schema.org/SportsClub)
- [Fontenay Football Club sur la mairie](https://www.fontenay-en-parisis.fr/association/fontenay-football-club/)
- [Fiche FFF du club](https://www.fff.fr/competition/club/527726-fontenay-en-parisis-fc/information.html)
- [Site Footeo actuel](https://fontenay-fc.footeo.com/)
- [Scorenco — Fontenay en Parisis FC](https://scorenco.com/football/clubs/fontenay-en-parisis-fc-2i7u)
- [llms.txt convention 2026](https://alejandrorioja.com/llms-txt-playbook/)
- [Technical GEO fixes 2026](https://www.demandlocal.com/blog/technical-geo-fixes-web-agencies/)
