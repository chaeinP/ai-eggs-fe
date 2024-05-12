import styles from "@src/styles/components/bootcamp-list/_horizontal-card.module.scss";
import Tag from "@src/components/tag/Tag";
import { ApplicationStatus } from "@src/api/const/applicationStatus";
import { countDday } from "@src/common/utils/getDday";

export default function BootcampHorizontalCardTags({
  applicationStatus,
  applicationEndDate,
  tags,
}: {
  applicationStatus: { _id: ApplicationStatus; label: string };
  applicationEndDate: string | null;
  tags: { _id: string; label: string }[];
}) {
  const showApplicationEndDate = applicationEndDate !== null && applicationStatus._id !== ApplicationStatus.CLOSED;

  return (
    <ul className={styles.tag_list}>
      <li>
        <Tag
          label={applicationStatus.label}
          color={applicationStatus._id === ApplicationStatus.CLOSED ? "grey" : "pink"}
        />
      </li>
      {showApplicationEndDate && (
        <li>
          <Tag label={`D-${countDday(applicationEndDate)}`} color="pink" />
        </li>
      )}
      {tags.map(
        (tag) =>
          tag.label !== "KDT" && (
            <li key={tag._id}>
              <Tag label={tag.label} color="grey" />
            </li>
          )
      )}
    </ul>
  );
}
