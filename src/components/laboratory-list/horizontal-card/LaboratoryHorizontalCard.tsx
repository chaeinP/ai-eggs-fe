import Image from "next/image";
import Link from "next/link";
import styles from "@src/styles/components/laboratory-list/_horizontal-card.module.scss";
import { SimpleLaboratory } from "@src/api/interface/simpleLaboratory.interface";
import LaboratoryHorizontalCardTags from "./LaboratoryHorizontalCardTags";

export default function LaboratoryHorizontalCard({ laboratory }: { laboratory: SimpleLaboratory }) {
  return (
    <Link href={`/laboratories/${laboratory.name.replaceAll(" ", "-")}_${laboratory.id}`}>
      <li key={laboratory.id} className={styles.card}>
        <div>
          <Image src={laboratory.university.logoUrl} alt="bootcamp-thumbnail" width={64} height={64} />
        </div>
        <div className={styles.main_info}>
          <h3 className={styles.title}>{laboratory.name}</h3>
          <p className={styles.company}>
            {laboratory.university.name} {laboratory.college.name}
          </p>
          <p className={styles.description}>
            지도교수: {laboratory.faculties.map((faculty) => faculty.name).join(", ")}
          </p>
          <p className={styles.description}>
            {laboratory.courseTypes.map((courseType) => courseType.label).join(" ・ ")}
          </p>
          <LaboratoryHorizontalCardTags
            researchFields={laboratory.researchFields}
            researchKeywords={laboratory.researchKeywords}
          />
        </div>
      </li>
    </Link>
  );
}
