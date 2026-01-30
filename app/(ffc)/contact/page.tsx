import styles from "./page.module.css";
import Image from "next/image";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjE4IiBmaWxsPSIjM2EzYTNlIiAvPjwvc3ZnPg==";

export default function ContactPage() {
  return (
    <>
      <section id="contact">
        <div className="sectionDiviser"></div>
        <h1>Contact</h1>

        <div className="sectionContainer">
          <div className="sectionCadreContainer">
            <div className={styles.valueCard}>

              {/* INFOS */}
              <div className={styles.logoContainer}>

                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/LogoFFC.png"
                      alt="Fontenay-en-Parisis FC"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <h3>Fontenay en Parisis FC</h3>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/position.png"
                      alt="Adresse du club"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <h3>95190 Fontenay-en-Parisis</h3>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src="/icons/telephone.png"
                      alt="Téléphone du club"
                      fill
                      className={styles.image}
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                      quality={100}
                    />
                  </div>
                  <h3>06 32 46 90 68</h3>
                </div>

              </div>

              {/* MAP */}
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7396.445374921771!2d2.437383535574211!3d49.04789457918111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6405c0f352c13%3A0x9a2d51f055d3e496!2sComplexe%20sportif%20Municipal!5e0!3m2!1sfr!2sfr!4v1760800099407!5m2!1sfr!2sfr"
                loading="lazy"
                title="Carte des terrains"
              />

              <a
                href="mailto:auneau.dev@gmail.com?subject=Contact%20Bénévole%20Infos"
                className="btnPrimaire"
              >
                Nous contacter
              </a>

            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}