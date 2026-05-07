import type { Metadata } from "next";
import Image from "next/image";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export const metadata: Metadata = {
  title: "Les valeurs du club — Respect, Sérieux, Plaisir",
  description:
    "Les valeurs de l'école de foot du Fontenay-en-Parisis Football Club : respect des éducateurs, des adversaires et de l'arbitre, sérieux à l'entraînement, plaisir du jeu.",
  alternates: { canonical: "/ecole_de_foot/valeurs" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "École de foot", path: "/ecole_de_foot/valeurs" },
  { name: "Les valeurs", path: "/ecole_de_foot/valeurs" },
]);

export default function ValeursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <section id="valeurs">
        <div className="sectionDiviser"></div>
        <h1>Les valeurs du club</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            <div className={styles.imageWrapper}>
              <Image
                src="/images/ecole/11regles.jpg"
                alt="Les 11 règles et valeurs de l'école de football du Fontenay-en-Parisis FC"
                fill
                sizes="100vw"
                className={styles.image}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>

            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le respect</h2>
                <div className="titlediviser"></div>
              </div>

              <p>Le <span>RESPECT</span>, c&apos;est quoi ?</p>

              <p>
                « Le respect, c&apos;est d&apos;abord appliquer les formules de politesse
                (bonjour, au revoir, pardon, bon match, bien joué, serrer la main
                aux adversaires et à l&apos;arbitre). Mais c&apos;est aussi savoir écouter
                l&apos;autre. »
              </p>

              <ul>
                <li>
                  Je <span>respecte</span> mes éducateurs, les adversaires,
                  l&apos;arbitre et je me respecte moi-même.
                </li>
                <li>
                  Je <span>respecte</span> le lieu dans lequel je me trouve
                  (terrain, vestiaire, club house) et le matériel (maillots,
                  gourdes, mes affaires et celles des autres).
                </li>
                <li>Je <span>respecte</span> les horaires.</li>
                <li>
                  Sur le terrain je <span>respecte</span> les lois du jeu et je
                  <span> respecte</span> les décisions de l&apos;arbitre.
                </li>
              </ul>

              <p>
                <span>
                  Quand je suis absent pour le match, je préviens mon responsable
                </span>
                . Cela permettra de faire jouer un copain qui n&apos;était pas
                convoqué.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le sérieux</h2>
                <div className="titlediviser"></div>
              </div>

              <ul>
                <li>Je viens à l&apos;entraînement pour progresser.</li>
                <li>
                  Avant, pendant et après l&apos;entraînement, je suis attentif aux
                  consignes de mon éducateur.
                </li>
                <li>
                  J&apos;aide au rangement du matériel continuellement dans l&apos;année.
                </li>
                <li>
                  Je reste avec mon équipe (entraînement et match).
                </li>
                <li>
                  Je m&apos;applique dans les exercices ou les jeux proposés par
                  l&apos;éducateur.
                </li>
                <li>
                  Je me regarde et je fais ce que j&apos;ai à faire avant de critiquer
                  les autres.
                </li>
                <li>
                  Durant les matchs, je respecte mon poste et les consignes de
                  l&apos;éducateur.
                </li>
              </ul>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le plaisir</h2>
                <div className="titlediviser"></div>
              </div>

              <ul>
                <li>
                  C&apos;est en étant sérieux et appliqué dans ce que je fais que je
                  vais prendre du plaisir par la suite.
                </li>
                <li>
                  Profiter des temps calmes (après match, avant l&apos;entraînement)
                  pour plaisanter avec les copains.
                </li>
                <li>
                  Durant le match, je prends du plaisir en faisant mes choix
                  (profitables pour l&apos;équipe et en respectant les consignes du
                  coach) et pas les choix des personnes qui crient sur le bord du
                  terrain.
                </li>
                <li>
                  Je prends du plaisir en tentant des gestes (profitables pour
                  l&apos;équipe).
                </li>
                <li>Je prends du plaisir à faire mon sac de football.</li>
                <li>Je prends du plaisir dans tout ce que je fais.</li>
              </ul>
            </div>

            <div className={styles.conclusion}>
              <p>
                Le football est un <span>sport</span>, et le sport est avant tout
                un <span>jeu</span>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
