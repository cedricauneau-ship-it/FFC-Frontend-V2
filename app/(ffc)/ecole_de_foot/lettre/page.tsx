import type { Metadata } from "next";
import Image from "next/image";
import { jsonLd, breadcrumb } from "@/lib/seo";
import styles from "./page.module.css";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export const metadata: Metadata = {
  title: "Lettre d'un enfant aux adultes — Esprit éducatif",
  description:
    "Une lettre d'enfant aux adultes : laissez-nous jouer, soyez indulgents. L'esprit éducatif de l'école de foot du Fontenay-en-Parisis Football Club.",
  alternates: { canonical: "/ecole_de_foot/lettre" },
};

const breadcrumbJsonLd = breadcrumb([
  { name: "Accueil", path: "/" },
  { name: "École de foot", path: "/ecole_de_foot/lettre" },
  { name: "Lettre d'un enfant", path: "/ecole_de_foot/lettre" },
]);

export default function LettrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <section id="lettre">
        <div className="sectionDiviser"></div>
        <h1>Lettre d&apos;un enfant à un adulte</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">

            <div className={styles.valueCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/ecole/amateur.jpg"
                  alt="Football amateur — école de foot du Fontenay-en-Parisis FC"
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className={styles.image}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  quality={100}
                />
              </div>

              <blockquote>
                <p>&quot;Je suis</p>
                <p>Débutante, Débutant,</p>
                <p>Poussine, Poussin,</p>
                <p>Benjamine, Benjamin&quot;</p>
              </blockquote>
            </div>

            <div className={styles.valueCard}>
              <h2>&quot;LETTRE A TOUS LES ADULTES&quot;</h2>
              <blockquote>
                <p>&quot;À tous les adultes, aujourd&apos;hui c&apos;est notre fête :</p>
                <p>nous venons ici pour nous amuser.</p>
                <p>Bien sûr, nous aussi nous voulons gagner,</p>
                <p>mais avant de gagner, il faut jouer... &quot;</p>
              </blockquote>
            </div>

            <div className={styles.valueCard}>
              <h2>&quot;ALORS LAISSEZ NOUS JOUER !&quot;</h2>
              <blockquote>
                <p>&quot;Ne criez pas sur nous tout le temps,</p>
                <p>ne rouspétez pas lors de nos erreurs sur le terrain,</p>
                <p>c&apos;est décourageant d&apos;essayer de bien faire et d&apos;entendre</p>
                <p>sans cesse des reproches.</p>
                <p>N&apos;hurlez pas sur les arbitres, eux aussi apprennent,</p>
                <p>ils sont là pour nous.&quot;</p>
              </blockquote>
            </div>

            <div className={styles.valueCard}>
              <h2>&quot;ALORS SOYEZ INDULGENTS !&quot;</h2>
              <blockquote>
                <p>&quot;Faites-nous tous jouer à part égale,</p>
                <p>vous savez celui qui reste sur le côté s&apos;ennuie et pleure</p>
                <p>et ce n&apos;est pas juste.</p>
                <p>Nous sommes jeunes et nous devons apprendre,</p>
                <p>apprendre en jouant, jouer avec et contre</p>
                <p>d&apos;autres enfants, simplement.&quot;</p>
              </blockquote>

              <p className={styles.signature}>Merci — Tous les enfants…</p>
            </div>

          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}
