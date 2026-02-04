import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fontenay-en-Parisis Football Club | Club de football (95190)",
  description: "Site officiel du Fontenay-en-Parisis Football Club. Club de football amateur à Fontenay-en-Parisis (95190) : école de foot, équipes, calendrier et actualités.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
