import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.txt généré dynamiquement par Next.js.
 * - Tous les bots classiques peuvent crawler.
 * - Bots LLM (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) sont
 *   autorisés explicitement pour maximiser la visibilité dans ChatGPT/Claude/
 *   Perplexity/Gemini.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Tous les bots classiques
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/chunks/"],
      },

      // Bots LLM autorisés explicitement
      { userAgent: "GPTBot", allow: "/" }, // OpenAI training
      { userAgent: "ChatGPT-User", allow: "/" }, // OpenAI fetch en temps réel
      { userAgent: "OAI-SearchBot", allow: "/" }, // OpenAI search index
      { userAgent: "ClaudeBot", allow: "/" }, // Anthropic
      { userAgent: "anthropic-ai", allow: "/" }, // Anthropic (legacy)
      { userAgent: "PerplexityBot", allow: "/" }, // Perplexity
      { userAgent: "Perplexity-User", allow: "/" }, // Perplexity user-triggered
      { userAgent: "Google-Extended", allow: "/" }, // Google AI / Gemini
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
      { userAgent: "CCBot", allow: "/" }, // Common Crawl (alimente plein de LLM)
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
