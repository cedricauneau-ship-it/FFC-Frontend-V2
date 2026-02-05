"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function EntrainementPage() {
    return (
        <>
            <section id="entrainement">

                <div className="sectionDiviser"></div>
                <h1>La licence</h1>

                <div className="sectionContainer">
                    <div className="sectionCadreContainer">
                        <div className={styles.licenceInfo}>
                            <div className={styles.cardContainer}>
                                <div className={styles.card}>
                                    <h2>La cotisation</h2>
                                    <p>La cotisation est de 180 € pour toutes les catégories.</p>
                                </div>
                            </div>
                            <div className={styles.cardContainer}>
                                <div className={styles.card}>
                                    <h2>L'équipement</h2>
                                    <p>Un short, des chaussettes et un sweat du club sont fournis à chaque licencié.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <h2>La démarche à effectuer</h2>
                            <p>
                                Les licences se font uniquement de manière dématérialisée.
                                Il vous suffit de nous transmettre le nom, le prénom, la date et le lieu de naissance du licencié,
                                ainsi qu’une adresse mail.
                                Le club se charge ensuite de la saisie des informations.
                            </p>
                            <p>
                                Vous recevrez alors un mail de la fédération vous invitant à compléter le formulaire.
                                Une fois celui-ci validé, nous finaliserons la demande.
                            </p>
                            <p className={styles.endText}>
                                Pour toute question ou information complémentaire,
                                n’hésitez pas à <Link href="/contact" className={styles.link}>nous contacter</Link>, nous serons ravis de vous accompagner.
                            </p>
                        </div>    

                    </div>
                </div>

            </section>

            <div className="diviser"></div>
        </>
    )
}
