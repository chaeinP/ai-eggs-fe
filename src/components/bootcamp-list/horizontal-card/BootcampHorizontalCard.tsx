import Image from "next/image";
import styles from "@src/styles/components/bootcamp-list/_horizontal-card.module.scss";
import BootcampHorizontalCardTags from "./BootcampHorizontalCardTags";
import Tag from "@src/components/tag/Tag";
import { SimpleBootcamp } from "@src/api/interface/simpleBootcamp.interface";
import Link from "next/link";

export default function BootcampHorizontalCard({ bootcamp }: { bootcamp: SimpleBootcamp }) {
  return (
    <Link href={`/bootcamps/${bootcamp.title.replaceAll(" ", "-")}_${bootcamp.id}`}>
      <li key={bootcamp.id} className={styles.card}>
        <div>
          <Image src={bootcamp.thumbnailUrl} alt="bootcamp-thumbnail" width={260} height={145.52} />
        </div>
        <div className={styles.main_info}>
          <h3 className={styles.title}>
            {bootcamp.title}
            {bootcamp.nthClass ? ` ${bootcamp.nthClass}기` : ""}
          </h3>
          <p className={styles.company}>{bootcamp.educationCompanies[0].name}</p>
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
    </Link>
  );
}
