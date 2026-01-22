import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <header><Navbar /></header>
        <main>{children}</main>
        <footer><Footer /></footer>
      </body>
    </html>
  );
}