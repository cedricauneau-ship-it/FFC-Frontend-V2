"use client";

import Style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [burgerClubOpen, setBurgerClubOpen] = useState(false);
  const [burgerEcoleOpen, setBurgerEcoleOpen] = useState(false);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
    setBurgerClubOpen(false);
    setBurgerEcoleOpen(false);
  };

  return (
    <nav className={Style.container}>
      <Image src="/icons/LogoFFC.png" alt="Logo FFC" width={90} height={74} />

      <span className={Style.clubNameFull}>Fontenay Football Club</span>
      <span className={Style.clubNameShort}>Fontenay FC</span>

      {/* ===== DESKTOP ===== */}
      <div className={Style.linkSection}>
        <Link href="/" className={Style.navLink}>accueil</Link>

        <div className={Style.clubWrapper}>
          <span className={`${Style.navLink} ${Style.hasSubmenu}`}>club</span>
          <div className={Style.dropdownMenu}>
            <Link href="/club/benevoles">les bénévoles</Link>
            <Link href="/club/entrainements">entraînements</Link>
            <Link href="/club/terrains">les terrains</Link>
          </div>
        </div>

        <Link href="/calendrier" className={Style.navLink}>calendrier</Link>
        <Link href="/classement" className={Style.navLink}>classement</Link>

        <div className={Style.ecoleWrapper}>
          <span className={`${Style.navLink} ${Style.hasSubmenu}`}>école de foot</span>
          <div className={Style.dropdownMenu}>
            <Link href="/ecole_de_foot/valeurs">les valeurs du club</Link>
            <Link href="/ecole_de_foot/sac">le sac de football</Link>
            <Link href="/ecole_de_foot/lettre">lettre d’un enfant</Link>
          </div>
        </div>

        <Link href="/contact" className={Style.navLink}>contact</Link>
      </div>

      {/* ===== MOBILE HEADER ===== */}
      <div className={Style.mobileActions}>
        <div className={Style.iconsContainer}>
          <Link href="/" className={Style.homeIcon}>
            <span className={Style.homeMask}></span>
          </Link>

          <button
            className={Style.burger}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <>
          <div className={Style.overlay} onClick={() => setOpen(false)} />

          <div className={Style.mobileMenu}>
            <Link href="/" onClick={handleNavClick("/")}>accueil</Link>

            <div className={Style.mobileItem}>
              <div
                className={Style.mobileLink}
                onClick={() => {
                  setBurgerClubOpen(true);
                  setBurgerEcoleOpen(false);
                }}
              >
                club ▾
              </div>
            </div>

            <Link href="/calendrier" onClick={handleNavClick("/calendrier")}>calendrier</Link>
            <Link href="/classement" onClick={handleNavClick("/classement")}>classement</Link>

            <div className={Style.mobileItem}>
              <div
                className={Style.mobileLink}
                onClick={() => {
                  setBurgerEcoleOpen(true);
                  setBurgerClubOpen(false);
                }}
              >
                école de foot ▾
              </div>
            </div>

            <Link href="/contact" onClick={handleNavClick("/contact")}>contact</Link>
          </div>

          {/* ===== SOUS-MENU CLUB FULLSCREEN ===== */}
          {burgerClubOpen && (
            <div className={Style.mobileSubMenuFull}>
              <div className={Style.mobileBack} onClick={() => setBurgerClubOpen(false)}>
                ← retour
              </div>
              <Link href="/club/benevoles" onClick={handleNavClick("/club/benevoles")}>les bénévoles</Link>
              <Link href="/club/entrainements" onClick={handleNavClick("/club/entrainements")}>entraînements</Link>
              <Link href="/club/terrains" onClick={handleNavClick("/club/terrains")}>les terrains</Link>
            </div>
          )}

          {/* ===== SOUS-MENU ECOLE FULLSCREEN ===== */}
          {burgerEcoleOpen && (
            <div className={Style.mobileSubMenuFull}>
              <div className={Style.mobileBack} onClick={() => setBurgerEcoleOpen(false)}>
                ← retour
              </div>
              <Link href="/ecole_de_foot/valeurs" onClick={handleNavClick("/ecole_de_foot/valeurs")}>les valeurs du club</Link>
              <Link href="/ecole_de_foot/sac" onClick={handleNavClick("/ecole_de_foot/sac")}>le sac de football</Link>
              <Link href="/ecole_de_foot/lettre" onClick={handleNavClick("/ecole_de_foot/lettre")}>lettre d’un enfant</Link>
            </div>
          )}
        </>
      )}
    </nav>
  );
}
