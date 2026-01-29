"use client"

import Style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    {/* Etat du menu Burger */}
    const [open, setOpen] = useState(false);
    const [burgerClubOpen, setBurgerClubOpen] = useState(false);
    const [burgerEcoleOpen, setBurgerEcoleOpen] = useState(false);


    {/* Etat des Modals */}
    const [clubOpen, setClubOpen] = useState(false);
    const clubRef = useRef<HTMLDivElement>(null);

    const [ecoleOpen, setEcoleOpen] = useState(false);
    const ecoleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (clubRef.current && !clubRef.current.contains(e.target as Node)) {
            setClubOpen(false);
            }

            if (ecoleRef.current && !ecoleRef.current.contains(e.target as Node)) {
            setEcoleOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () =>
        document.removeEventListener("click", handleClickOutside);
    }, []);

    const pathname = usePathname();

    {/* Navigue ou remets au début si déja sur la page */}
    const handleNavClick = (href: string) => (e: React.MouseEvent) => {
        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setClubOpen(false);
    };
    
    return (
        <nav className={Style.container}>
            <Image
             src="/icons/LogoFFC.png"
             alt="Logo FFC"
             width={90}
             height={74}
            />

            <div className={Style.linkSection}>
                <Link
                    href="/"
                    onClick={ handleNavClick("/") }
                    className={Style.navLink}
                >
                    accueil
                </Link>
                <div className={Style.clubWrapper} ref={clubRef}>
                    <button
                        className={`${Style.navLink} ${Style.clubButton}`}
                        onClick={() => setClubOpen(!clubOpen)}
                        aria-expanded={clubOpen}
                    >
                        club
                    </button>
                </div>
                <Link href="/resultats" className={Style.navLink}>résultats</Link>
                <Link href="/classement" className={Style.navLink}>classement</Link>
                <div className={Style.ecoleWrapper} ref={ecoleRef}>
                    <button
                        className={`${Style.navLink} ${Style.ecoleButton}`}
                        onClick={() => setEcoleOpen(prev => !prev)}
                        aria-expanded={ecoleOpen}
                    >
                        école de foot
                    </button>
                </div>
                <Link href="/contact" className={Style.navLink}>contact</Link>
            </div>

            <div className={Style.mobileActions}>
                <span className={Style.clubNameFull}>Fontenay Football Club</span>
                <span className={Style.clubNameShort}>FFC</span>

                <div className={Style.iconsContainer}>
                    <Link href="/" className={Style.homeIcon}>
                        <span className={Style.homeMask}></span>
                    </Link>

                    {/* Menu Burger */}
                    <button
                        className={Style.burger}
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        >
                        {open ? "✕" : "☰"}
                    </button>

                </div>
            </div>

            {/* Menu responsive */}
            {open && (
                <>
                    <div
                        className={Style.overlay}
                        onClick={() => {
                            setOpen(false);
                            setBurgerClubOpen(false);
                            setBurgerEcoleOpen(false);
                        }}
                    />

                    <div className={Style.mobileMenu}>
                        <Link href="/" onClick={() => setOpen(false)}>accueil</Link>

                        <div className={Style.mobileItem}>
                            <div
                                className={Style.mobileLink}
                                onClick={() => {
                                setBurgerClubOpen(prev => !prev);
                                setBurgerEcoleOpen(false);
                                }}
                            >
                                club ▾
                            </div>

                            {burgerClubOpen && (
                                <div className={Style.mobileSubMenu}>
                                    <Link href="/club/benevoles" onClick={() => setOpen(false)}>les bénévoles</Link>
                                    <Link href="/club/entrainements" onClick={() => setOpen(false)}>entraînements</Link>
                                    <Link href="/club/terrains" onClick={() => setOpen(false)}>les terrains</Link>
                                </div>
                            )}
                            </div>

                        <Link href="/resultats" onClick={() => setOpen(false)}>résultats</Link>
                        <Link href="/classement" onClick={() => setOpen(false)}>classement</Link>

                        <div className={Style.mobileItem}>
                            <div
                                className={Style.mobileLink}
                                onClick={() => {
                                setBurgerEcoleOpen(prev => !prev);
                                setBurgerClubOpen(false);
                                }}
                            >
                                école de foot ▾
                            </div>

                            {burgerEcoleOpen && (
                                <div className={Style.mobileSubMenu}>
                                    <Link href="/ecole/categories" onClick={() => setOpen(false)}>Les valeurs du club</Link>
                                    <Link href="/ecole/educateurs" onClick={() => setOpen(false)}>Le sac de football</Link>
                                    <Link href="/ecole/horaires" onClick={() => setOpen(false)}>Lettre d'un enfant à un adulte</Link>
                                </div>
                            )}
                            </div>

                        <Link href="/contact" onClick={() => setOpen(false)}>contact</Link>
                    </div>
                </>
            )}

            {clubOpen && (
                <div className={Style.clubMenu}>
                    <div className={Style.lineBlack}>
                        <Link
                            href="/club/benevoles"
                            onClick={ handleNavClick("/club/benevoles") }
                        >
                            les bénévoles
                        </Link>
                        <Link 
                            href="/club/entrainements" 
                            onClick={ handleNavClick("/club/entrainements") }
                        >
                            entraînements
                        </Link>
                        <Link href="/club/terrains" onClick={() => setClubOpen(false)}>
                            les terrains
                        </Link>
                    </div>
                </div>
            )}

            {ecoleOpen && (
                <div className={Style.ecoleMenu}>
                    <div className={Style.lineBlack}>
                        <Link href="/ecole/valeurs" onClick={() => setEcoleOpen(false)}>
                            Les valeurs du club
                        </Link>
                        <Link href="/ecole/sac" onClick={() => setEcoleOpen(false)}>
                            le sac de football
                        </Link>
                        <Link href="/ecole/lettre" onClick={() => setEcoleOpen(false)}>
                            lettre d'un enfant à un adulte
                        </Link>
                    </div>
                </div>
            )}

        </nav>
    );
}