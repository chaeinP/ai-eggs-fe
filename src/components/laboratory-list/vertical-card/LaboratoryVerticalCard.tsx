import { SimpleLaboratory } from "@src/api/interface/simpleLaboratory.interface";
import Image from "next/image";
import styles from "@src/styles/components/laboratory-list/_vertical-card.module.scss";
import Link from "next/link";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";

export function LaboratoryVerticalCard({ laboratory }: { laboratory: SimpleLaboratory }) {
  return (
    <Link href={`/laboratories/${laboratory.name.replaceAll(" ", "-")}_${laboratory.id}`}>
      <Image
        src={laboratory.university.thumbnailUrl}
        alt="laboratory-thumbnail"
        width={251}
        height={140.49}
        objectFit="contain"
        objectPosition="center"
        style={{ border: "1px solid #E7EAEE" }}
      />
      <HorizontalDivider height="12px" />
      <p className={styles.title}>{laboratory.name}</p>
      <p className={styles.description}>
        {laboratory.university.name} {laboratory.college.name}
      </p>
    </Link>
  );
}
