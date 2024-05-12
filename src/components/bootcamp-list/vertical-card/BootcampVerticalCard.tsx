import styles from "@src/styles/components/bootcamp-list/_vertical-card.module.scss";
import Tag from "@src/components/tag/Tag";
import Image from "next/image";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import { ApplicationStatus } from "@src/api/const/applicationStatus";
import { countDday } from "@src/common/utils/getDday";

export default function BootcampVerticalCard({ bootcamp }: { bootcamp: Bootcamp }) {
  const showApplicationEndDate =
    bootcamp.applicationEndDate !== null && bootcamp.applicationStatus._id !== ApplicationStatus.CLOSED;
  const tags = bootcamp.tags.filter((tag) => tag.label !== "KDT");

  return (
    <li className={styles.card} key={bootcamp.id}>
      <Image src={bootcamp.thumbnailUrl} alt={bootcamp.title} width={251} height={140.49} />
      <HorizontalDivider height="12px" />
      <div>
        <ul>
          <li>
            <Tag
              label={bootcamp.applicationStatus.label}
              color={bootcamp.applicationStatus._id === ApplicationStatus.CLOSED ? "grey" : "pink"}
            />
          </li>
          {showApplicationEndDate && (
            <li>
              <Tag label={`D-${countDday(bootcamp.applicationEndDate!)}`} color="pink" />
            </li>
          )}
          {tags.length > 0 && (
            <li>
              <Tag label={tags[0].label} color="grey" />
            </li>
          )}
        </ul>
        <p className={styles.title}>{bootcamp.title}</p>
        <p className={styles.company}>{bootcamp.educationCompany.name}</p>
        <HorizontalDivider height="12.5px" />
        <div className={styles.price}>
          <p>{bootcamp.pricingType._id === "free" ? "무료" : bootcamp.originalPrice + "원"}</p>
          {bootcamp.isKdt && <Tag key="1" label="KDT" color="grey" />}
        </div>
      </div>
    </li>
  );
}
