import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import { getDateTime } from "@src/common/utils/getDateTime";
import styles from "@src/styles/components/bootcamp/_bootcamp-course-info.module.scss";

export default function BootcampApplicationInfo({ bootcamp }: { bootcamp: Bootcamp }) {
  const applicationStartDate = bootcamp.applicationStartDate && getDateTime(bootcamp.applicationStartDate);
  const applicationEndDate = bootcamp.applicationEndDate && getDateTime(bootcamp.applicationEndDate);
  const isNotBothDate = !applicationStartDate && !applicationEndDate;

  return (
    <section className={styles.info}>
      <h2>모집 정보</h2>
      <table>
        <tbody>
          <tr>
            <td>모집 정원</td>
            <td>{bootcamp.quota ? bootcamp.quota + "명" : "제한 없음"}</td>
          </tr>
          <tr>
            <td>선발 절차</td>
            <td>{bootcamp.isSelectionProcess ? "있음" : "없음"}</td>
          </tr>
          <tr>
            <td>모집 기간</td>
            <td>
              {isNotBothDate
                ? "상시 모집"
                : `${applicationStartDate ? applicationEndDate : ""} ~ ${applicationEndDate ? applicationEndDate : ""}`}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
