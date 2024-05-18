import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import styles from "@src/styles/components/bootcamp/_bootcamp-education-company.module.scss";
import Image from "next/image";

export default function BootcampEducationCompany({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <section className={styles.info}>
      <h2>기관 정보</h2>
      {bootcamp.educationCompanies.map((educationCompany) => (
        <div className={styles.card} key={educationCompany.id}>
          <Image
            src={educationCompany.logoUrl}
            alt={educationCompany.name}
            width={56}
            height={56}
            objectFit="contain"
            style={{ borderRadius: "100%" }}
          />
          <div className={styles.content}>
            <h3 className={styles.name}>{educationCompany.name}</h3>
            <p className={styles.description}>{educationCompany.description}</p>
            <a href={educationCompany.siteUrl} target="_blank" rel="noreferrer" className={styles.link}>
              홈페이지
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
