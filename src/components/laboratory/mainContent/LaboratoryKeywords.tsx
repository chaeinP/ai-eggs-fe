import { Laboratory } from "@src/api/interface/laboratory.interface";
import Tag from "@src/components/tag/Tag";
import styles from "@src/styles/components/laboratory/_keywords.module.scss";

export default function LaboratoryKeywords({ laboratory }: { laboratory: Laboratory }) {
  return (
    <section className={styles.main}>
      <h2>연구 분야 및 키워드</h2>
      <div className={styles.tags}>
        {laboratory.researchFields.map(({ _id, label }) => (
          <Tag key={_id} label={label} />
        ))}
        {laboratory.researchKeywords.map(({ _id, label }) => (
          <Tag key={_id} label={label} />
        ))}
      </div>
    </section>
  );
}
