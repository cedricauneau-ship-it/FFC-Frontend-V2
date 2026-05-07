import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, CLUB, SPORTS_CLUB_JSON_LD, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${CLUB.legalName} | Club de foot 95190`,
    template: `%s | ${CLUB.legalName}`,
  },
  description: CLUB.shortDescription,
  applicationName: CLUB.legalName,
  generator: "Next.js",
  keywords: [
    "Fontenay-en-Parisis Football Club",
    "FFC Fontenay",
    "Fontenay FC",
    "club football 95190",
    "club football Val-d'Oise",
    "école de foot Fontenay",
    "licence football Fontenay-en-Parisis",
    "football amateur 95",
  ],
  authors: [{ name: CLUB.legalName, url: SITE_URL }],
  creator: CLUB.legalName,
  publisher: CLUB.legalName,
  category: "sports",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: CLUB.legalName,
    title: `${CLUB.legalName} | Club de foot 95190`,
    description: CLUB.shortDescription,
    // /opengraph-image est généré dynamiquement par app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: CLUB.legalName,
    description: CLUB.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/LogoFFC.png",
  },
  // À remplir une fois les comptes créés :
  // verification: { google: "TON_CODE_SEARCH_CONSOLE", other: { "msvalidate.01": "TON_CODE_BING" } },
};

export const viewport: Viewport = {
  themeColor: "#f57c00",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* JSON-LD global SportsClub — lu par Google, ChatGPT, Perplexity, Claude */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(SPORTS_CLUB_JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
