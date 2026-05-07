import Style from './Footer.module.css';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContainer}>
        <div className={Style.footerProfile}>
          <h3 className={Style.footerTitle}>Fontenay-en-parisis</h3>
          <h3 className={Style.footerTitle}>Football Club</h3>
          <Image
                src="/icons/LogoFFC.png"
                alt="Logo FFC"
                width={65}
                height={55}
              />
        </div>
        <div className={Style.footerSocials}>
          <h3 className={Style.footerTitleLink}>Nos Réseaux</h3>
          <div className={Style.logoContainer}>
            <a
              href="https://www.facebook.com/fontenayenparisisfc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Facebook FFC'
            > 
              <Image
                src="/icons/Facebook.png"
                alt="Logo Facebook"
                width={60}
                height={60}
                className={Style.logoLink}
              />
            </a>  
            <a
              href='https://www.instagram.com/fontenayenparisisfc/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram FFC'
            >
              <Image
                src="/icons/Instagram.png"
                alt="Logo Instagram"
                width={60}
                height={60}
                className={Style.logoLink}
              />
            </a>  
          </div>
        </div>
      </div>
      <div className={Style.footerDivider}></div>
      <div className={Style.footerEndText}>
        <p>© Copyright {new Date().getFullYear()} - Créé par <a href='https://portfolio-psi-orpin-j4uynkghk2.vercel.app' target='_blank' rel='noopener noreferrer' aria-label='Portfolio de Cédric Auneau'>Cédric Auneau</a></p>
      </div>
    </footer>
  );
}
