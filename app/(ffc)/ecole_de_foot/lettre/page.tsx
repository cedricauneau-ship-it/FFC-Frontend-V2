import styles from "./page.module.css";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export default function LettrePage() {
  return (
    <>
      <section id="lettre">
        <div className="sectionDiviser"></div>
        <h1>Lettre d'un enfant à un adulte</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            <div className={styles.valueCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/ecole/amateur.jpg"
                  alt="Football amateur"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  quality={100}
                />
              </div>

              <p>"Je suis</p>
              <p>Débutante, Débutant,</p>
              <p>Poussine, Poussin,</p>
              <p>Benjamine, Benjamin"</p>
            </div>

            <div className={styles.valueCard}>
              <h2>"LETTRE A TOUS LES ADULTES"</h2>
              <p>"À tous les adultes, aujourd'hui c'est notre fête :</p>
              <p>nous venons ici pour nous amuser.</p>
              <p>Bien sûr, nous aussi nous voulons gagner,</p>
              <p>mais avant de gagner, il faut jouer... "</p>
            </div>

            <div className={styles.valueCard}>
              <h2>"ALORS LAISSEZ NOUS JOUER !"</h2>
              <p>"Ne criez pas sur nous tout le temps,</p>
              <p>ne rouspétez pas lors de nos erreurs sur le terrain,</p>
              <p>c'est décourageant d'essayer de bien faire et d'entendre</p>
              <p>sans cesse des reproches.</p>
              <p>N'hurlez pas sur les arbitres, eux aussi apprennent,</p>
              <p>ils sont là pour nous."</p>
            </div>

            <div className={styles.valueCard}>
              <h2>"ALORS SOYEZ INDULGENTS !"</h2>
              <p>"Faites-nous tous jouer à part égale,</p>
              <p>vous savez celui qui reste sur le côté s'ennuie et pleure</p>
              <p>et ce n'est pas juste.</p>
              <p>Nous sommes jeunes et nous devons apprendre,</p>
              <p>apprendre en jouant, jouer avec et contre</p>
              <p>d'autres enfants, simplement."</p>

              <h3>Merci</h3>
              <h3>Tous les enfants...</h3>
            </div>

          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}