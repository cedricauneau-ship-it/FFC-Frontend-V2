import styles from "./page.module.css";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export default function ValeursPage() {
  return (
    <>
      <section id="valeurs">
        <div className="sectionDiviser"></div>
        <h1>Les valeurs du club</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            {/* IMAGE INTRO */}
            <div className={styles.imageWrapper}>
              <Image
                src="/images/ecole/11regles.jpg"
                alt="Les valeurs du club"
                fill
                sizes="100vw"
                className={styles.image}
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>

            {/* LE RESPECT */}
            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le respect</h2>
                <div className="titlediviser"></div>
              </div>

              <p>Le <span>RESPECT</span>, c’est quoi ?</p>

              <p>
                « Le respect, c’est d’abord appliquer les formules de politesse
                (bonjour, au revoir, pardon, bon match, bien joué, serrer la main
                aux adversaires et à l’arbitre). Mais c’est aussi savoir écouter
                l’autre. »
              </p>

              <ul>
                <li>
                  Je <span>respecte</span> mes éducateurs, les adversaires,
                  l’arbitre et je me respecte moi-même.
                </li>
                <li>
                  Je <span>respecte</span> le lieu dans lequel je me trouve
                  (terrain, vestiaire, club house) et le matériel (maillots,
                  gourdes, mes affaires et celles des autres).
                </li>
                <li>Je <span>respecte</span> les horaires.</li>
                <li>
                  Sur le terrain je <span>respecte</span> les lois du jeu et je
                  <span> respecte</span> les décisions de l’arbitre.
                </li>
              </ul>

              <p>
                <span>
                  Quand je suis absent pour le match, je préviens mon responsable
                </span>
                . Cela permettra de faire jouer un copain qui n’était pas
                convoqué.
              </p>
            </div>

            {/* LE SÉRIEUX */}
            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le sérieux</h2>
                <div className="titlediviser"></div>
              </div>

              <ul>
                <li>Je viens à l’entraînement pour progresser.</li>
                <li>
                  Avant, pendant et après l’entraînement, je suis attentif aux
                  consignes de mon éducateur.
                </li>
                <li>
                  J’aide au rangement du matériel continuellement dans l’année.
                </li>
                <li>
                  Je reste avec mon équipe (entraînement et match).
                </li>
                <li>
                  Je m’applique dans les exercices ou les jeux proposés par
                  l’éducateur.
                </li>
                <li>
                  Je me regarde et je fais ce que j’ai à faire avant de critiquer
                  les autres.
                </li>
                <li>
                  Durant les matchs, je respecte mon poste et les consignes de
                  l’éducateur.
                </li>
              </ul>
            </div>

            {/* LE PLAISIR */}
            <div className={styles.valueCard}>
              <div className={styles.titleContainer}>
                <h2>Le plaisir</h2>
                <div className="titlediviser"></div>
              </div>

              <ul>
                <li>
                  C’est en étant sérieux et appliqué dans ce que je fais que je
                  vais prendre du plaisir par la suite.
                </li>
                <li>
                  Profiter des temps calmes (après match, avant l’entraînement)
                  pour plaisanter avec les copains.
                </li>
                <li>
                  Durant le match, je prends du plaisir en faisant mes choix
                  (profitables pour l’équipe et en respectant les consignes du
                  coach) et pas les choix des personnes qui crient sur le bord du
                  terrain.
                </li>
                <li>
                  Je prends du plaisir en tentant des gestes (profitables pour
                  l’équipe).
                </li>
                <li>Je prends du plaisir à faire mon sac de football.</li>
                <li>Je prends du plaisir dans tout ce que je fais.</li>
              </ul>
            </div>

            {/* CONCLUSION */}
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