import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import Image from "next/image";
import styles from "@src/styles/components/bootcamp/_title-banner.module.scss";

export default function BootcampTitleBanner({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <header className={styles.title_banner}>
      <div className={styles.main}>
        <div>
          <p className={styles.category}>{bootcamp.categories.map(({ label }) => label).join(" · ")}</p>
          <h1>
            {bootcamp.title}
            {bootcamp.nthClass ? ` ${bootcamp.nthClass}기` : ""}
          </h1>
          <p className={styles.edu_company}> {bootcamp.educationCompanies[0].name}</p>
        </div>
        <Image src={bootcamp.thumbnailUrl} alt={bootcamp.title} width={320} height={179.1} />
      </div>
    </header>
  );
}
