import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap XML — uniquement des routes existantes (zéro 404, zéro page noindex).
 * Mise à jour automatique à chaque build via `lastModified: new Date()`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`,                       changeFrequency: "weekly",  priority: 1.0, lastModified },
    { url: `${SITE_URL}/club/licence`,           changeFrequency: "yearly",  priority: 0.9, lastModified },
    { url: `${SITE_URL}/club/benevoles`,         changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${SITE_URL}/club/entrainements`,     changeFrequency: "monthly", priority: 0.8, lastModified },
    { url: `${SITE_URL}/club/terrains`,          changeFrequency: "yearly",  priority: 0.6, lastModified },
    { url: `${SITE_URL}/calendrier`,             changeFrequency: "weekly",  priority: 0.7, lastModified },
    { url: `${SITE_URL}/classement`,             changeFrequency: "weekly",  priority: 0.7, lastModified },
    { url: `${SITE_URL}/ecole_de_foot/valeurs`,  changeFrequency: "yearly",  priority: 0.6, lastModified },
    { url: `${SITE_URL}/ecole_de_foot/sac`,      changeFrequency: "yearly",  priority: 0.5, lastModified },
    { url: `${SITE_URL}/ecole_de_foot/lettre`,   changeFrequency: "yearly",  priority: 0.4, lastModified },
    { url: `${SITE_URL}/contact`,                changeFrequency: "yearly",  priority: 0.5, lastModified },
  ];
}
