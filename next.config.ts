import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression gzip/brotli côté Next (Vercel le fait déjà mais ne mange pas)
  compress: true,

  // Headers de sécurité + bonnes pratiques
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      {
        // Cache long pour les routes générées statiquement
        source: "/(llms\\.txt|llms-full\\.txt|robots\\.txt|sitemap\\.xml)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },

  // Optimisation images : générer AVIF + WebP, hauteurs/largeurs raisonnables
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Redirection éventuelle si le user décide d'unifier www / non-www :
  // async redirects() {
  //   return [
  //     { source: "/:path*", destination: "https://www.fontenayenparisisfootballclub.fr/:path*",
  //       has: [{ type: "host", value: "fontenayenparisisfootballclub.fr" }], permanent: true },
  //   ];
  // },
};

export default nextConfig;
