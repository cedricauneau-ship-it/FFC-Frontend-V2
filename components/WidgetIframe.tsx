"use client";

import { useState } from "react";
import styles from "./WidgetIframe.module.css";

type Props = {
  src: string;
  title: string;
};

export default function WidgetIframe({ src, title }: Props) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onClick={() => setActive(true)}
    >
      <iframe
        src={src}
        title={title}
        referrerPolicy="unsafe-url"
        className={`${styles.iframe} ${active ? styles.active : ""}`}
      />
    </div>
  );
}