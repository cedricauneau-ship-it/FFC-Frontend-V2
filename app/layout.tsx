import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fontenay-en-parisis Football Club",
  description: "Site officiel du club de football de Fontenay-en-parisis",
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
