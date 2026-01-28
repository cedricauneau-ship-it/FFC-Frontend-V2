"use client";

import styles from "./page.module.css"
import PersonCard from "@/components/PersonCard";

export default function BenevolesPage() {
  const dirigeants = [
    {
        img: "/images/dirigeant/laurent.jpg",
        role: "président",
        name: "schilt laurent",
        tel: "06 20 21 51 03",
    },
    {
        img: "/images/dirigeant/carlos.jpg",
        role: "vice président",
        name: "tavares novo carlos",
        tel: "06 74 68 55 13",
    },
    {
        img: "/images/dirigeant/claude.jpg",
        role: "secretaire general",
        name: "jolly claude",
        tel: "06 32 46 90 68",
    },
    {
        img: "/images/dirigeant/jean-marc.jpg",
        role: "trésorier",
        name: "moser jean marc",
        tel: "06 23 81 45 97",
    },
    {
        img: "",
        role: "référent arbitre",
        name: "cochet jean francois",
        tel: "06 72 86 23 29",
    },
    {
        img: "/images/dirigeant/guido.jpg",
        role: "organisation tournois",
        name: "barazzutti guido",
        tel: " ",
    },
    {
        img: "/images/dirigeant/jean-claude.jpg",
        role: "membre du bureau",
        name: "fournier jean claude",
        tel: "",
    },
    {
        img: "/images/dirigeant/louis.jpg",
        role: "membre du bureau",
        name: "louis laurent",
        tel: "",
    },
    {
        img: "/images/dirigeant/sebastien.jpg",
        role: "membre du bureau",
        name: "fache sébastien",
        tel: "",
    },
  ]

  const educateurs = [
    {
        img: "/images/dirigeant/jean-marc.jpg",
        role: "rt école de foot",
        name: "moser jean marc",
        tel: "06 23 81 45 97",
    },
    {
        img: "",
        role: "rt catégorie u6 - u7",
        name: "cochet jean francois",
        tel: "06 72 86 23 29",
    },
    {
        img: "",
        role: "rt catégorie u8 - u9",
        name: "camara abdoulaye",
        tel: "06 95 64 69 26",
    },
    {
        img: "",
        role: "rt catégorie u10 - u11",
        name: "strub guillaume",
        tel: "06 19 43 65 60",
    },
    {
        img: "",
        role: "rt catégorie u12 u13",
        name: "leroy christian",
        tel: "06 87 34 90 72",
    },
    {
        img: "/images/dirigeant/jean-marc.jpg",
        role: "rt catégorie u13 féminine",
        name: "moser jean marc",
        tel: "06 23 81 45 97",
    },
    {
        img: "",
        role: "rt catégorie u16 - u17",
        name: "nivert thomas",
        tel: "06 22 02 28 94",
    },
    {
        img: "",
        role: "rt catégorie sénior",
        name: "ravenal jean luc",
        tel: " ",
    },
    {
        img: "",
        role: "rt catégorie vétéran",
        name: "ellama cedric",
        tel: "06 64 74 68 66",
    },
  ]

  return (
    <>

        <section id="dirigeants">

            <div className="sectionDiviser"></div>
            <h1>Les dirigeants</h1>

            <div className="sectionContainer">
                <div className={styles.grid}>
                    {dirigeants.map((item, index) => (
                        <PersonCard
                            key={index}
                            img={item.img}
                            role={item.role}
                            name={item.name}
                            tel={item.tel}
                        />    
                    ))}
                </div>
            </div>    

        </section>

        <div className="diviser"></div>

        <section id="educateurs">

            <div className="sectionDiviser"></div>
            <h1>Les éducateurs</h1>

            <div className="sectionContainer">
                <div className={styles.grid}>
                    {educateurs.map((item, index) => (
                        <PersonCard
                            key={index}
                            img={item.img}
                            role={item.role}
                            name={item.name}
                            tel={item.tel}
                        />    
                    ))}
                </div>
            </div>    

        </section>

        <div className="diviser"></div>

    </>
  );
}