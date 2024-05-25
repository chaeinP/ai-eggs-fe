import styles from "@src/styles/components/bootcamp-list/_horizontal-card.module.scss";
import Tag from "@src/components/tag/Tag";
import { FilterItem } from "@src/api/interface/filter.interface";

export default function LaboratoryHorizontalCardTags({
  researchFields,
  researchKeywords,
}: {
  researchFields: FilterItem[];
  researchKeywords: FilterItem[];
}) {
  return (
    <ul className={styles.tag_list}>
      {researchFields.map((field) => {
        return <Tag key={field._id} label={field.label} color="grey" />;
      })}
      {researchKeywords.map((keyword) => {
        return <Tag key={keyword._id} label={keyword.label} color="grey" />;
      })}
    </ul>
  );
}
