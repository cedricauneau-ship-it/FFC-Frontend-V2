"use client";

import { useState } from "react";
import styles from "./WidgetIframe.module.css";

type Props = {
  src: string;
  title: string;
  minHeight?: number; // hauteur minimale en px (défaut : 1000)
};

/**
 * Iframe tierce (Scorenco/SociableKit) avec activation au clic — empêche les
 * iframes de capturer le scroll mobile tant que l'utilisateur n'a pas cliqué
 * dessus.
 */
export default function WidgetIframe({ src, title, minHeight = 1000 }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper} onClick={() => setActive(true)}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="unsafe-url"
        className={`${styles.iframe} ${active ? styles.active : ""}`}
        style={{ minHeight: `${minHeight}px` }}
      />
    </div>
  );
}
