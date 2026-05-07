import Image from "next/image";
import styles from "./PersonCard.module.css";

type PersonCardProps = {
    img: string;
    role: string;
    name: string;
    tel: string;
};

export default function PersonCard({
    img,
    role,
    name,
    tel,
}: PersonCardProps) {

  const hasImage = Boolean(img && img.length > 0);

  return (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            {hasImage ? (
                <Image
                    src={img}
                    alt={`Photo de ${name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className={styles.image}
                />
            ) : (
                <div className={styles.placeholder}>
                <span className={styles.icon}>{"\u{1F464}"}</span>
                </div>
            )}
        </div>

        <div className={styles.text}>
            <h2>{role}</h2>
            <p className={styles.name}>{name}</p>
            {tel && <p className={styles.tel}>{tel}</p>}
        </div>
    </div>
  );
}
