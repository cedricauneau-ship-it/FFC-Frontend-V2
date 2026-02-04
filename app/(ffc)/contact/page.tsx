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
                  <h3>Fontenay en Parisis</h3>
                  <h3>Football Club</h3>
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
                  <h3>Chem. du Haras</h3>
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
                  <h3>Claude Jolly</h3>
                </div>

              </div>

              {/* MAP */}
              <iframe 
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4397.917032118023!2d2.4433452895936996!3d49.048298203139275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6411aa18c15cd%3A0xfeed93484d4a7a5c!2sFontenay-en-Parisis%20Football%20Club!5e0!3m2!1sfr!2sfr!4v1770202095690!5m2!1sfr!2sfr" 
              width="100%" 
              loading="lazy" 
              title="Emplacement du club"
              />

              <div className={styles.endContact}>
                <p>Pour toute demande, n’hésitez pas à nous appeler ou à nous contacter par mail en cliquant sur le bouton ci-dessous.</p>
                
                <a
                  href="mailto:auneau.dev@gmail.com?subject=Contact%20Bénévole%20Infos"
                  className="btnPrimaire"
                >
                  Nous contacter
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="diviser"></div>
    </>
  );
}