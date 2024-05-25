import Image from "next/image";
import styles from "@src/styles/components/laboratory/_title-banner.module.scss";
import { Laboratory } from "@src/api/interface/laboratory.interface";

export default function LaboratoryTitleBanner({ laboratory }: { laboratory: Laboratory }) {
  return (
    <header className={styles.title_banner}>
      <div className={styles.main}>
        <div>
          <p className={styles.category}>{laboratory.researchFields.map(({ label }) => label).join(" · ")}</p>
          <h1>{laboratory.name}</h1>
          <p className={styles.edu_company}>
            {laboratory.university.name} {laboratory.college.name}
          </p>
        </div>
      </div>
    </header>
  );
}
