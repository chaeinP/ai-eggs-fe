import Image from "next/image";
import styles from "@src/styles/components/bootcamp-list/_horizontal-card.module.scss";
import BootcampHorizontalCardTags from "./BootcampHorizontalCardTags";
import Tag from "@src/components/tag/Tag";
import { Bootcamp } from "@src/api/interface/bootcamp.interface";

export default function BootcampHorizontalCard({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <li key={bootcamp.id} className={styles.card}>
      <div>
        <Image src={bootcamp.thumbnailUrl} alt="bootcamp-thumbnail" width={260} height={145.52} />
      </div>
      <div className={styles.main_info}>
        <h3 className={styles.title}>{bootcamp.title}</h3>
        <p className={styles.company}>{bootcamp.educationCompany.name}</p>
        <p className={styles.description}>
          수강 기간: {bootcamp.courseStartDate.slice(0, 10)} ~ {bootcamp.courseEndDate.slice(0, 10)}
        </p>
        <p className={styles.description}>
          {bootcamp.participationMethod.label} · {bootcamp.participationType.label}
        </p>
        <BootcampHorizontalCardTags
          applicationStatus={bootcamp.applicationStatus}
          applicationEndDate={bootcamp.applicationEndDate}
          tags={bootcamp.tags}
        />
      </div>
      <div className={styles.extra_info}>
        <p className={styles.price}>
          {bootcamp.pricingType._id === "free" ? bootcamp.pricingType.label : bootcamp.originalPrice + "원"}
        </p>
        {bootcamp.isKdt && <Tag key="1" label="KDT" color="grey" />}
      </div>
    </li>
  );
}
