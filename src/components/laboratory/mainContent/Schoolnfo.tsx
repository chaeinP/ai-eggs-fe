import { Laboratory } from "@src/api/interface/laboratory.interface";
import styles from "@src/styles/components/laboratory/_school-info.module.scss";
import Image from "next/image";

export default function SchoolInfo({ laboratory }: { laboratory: Laboratory }) {
  return (
    <section>
      <h2>학교</h2>
      <div className={styles.card} key={laboratory.id}>
        <Image
          src={laboratory.university.logoUrl}
          alt={laboratory.university.name}
          width={56}
          height={56}
          objectFit="contain"
          style={{ borderRadius: "100%" }}
        />
        <div className={styles.content}>
          <h3 className={styles.name}>{laboratory.university.name}</h3>
          <p className={styles.description}>{laboratory.college.name}</p>
          <a href={laboratory.college.siteUrl} target="_blank" rel="noreferrer" className={styles.link}>
            홈페이지
          </a>
        </div>
      </div>
    </section>
  );
}
