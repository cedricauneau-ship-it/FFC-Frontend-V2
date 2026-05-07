"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroCarousel.module.css";

type Slide = { src: string; alt: string };

type HeroCarouselProps = {
  slides: Slide[];
  intervalMs?: number;
};

/**
 * Carousel hero auto-rotatif.
 * Isolé en Client Component pour permettre à la home de rester un Server
 * Component (SSR pur, exportable `metadata`, contenu indexable).
 */
export default function HeroCarousel({ slides, intervalMs = 7500 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [slides.length, intervalMs]);

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Photos du club">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </section>
  );
}
