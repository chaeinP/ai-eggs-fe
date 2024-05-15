import { ParticipationMethod } from "@src/api/const/participationMethod";
import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import styles from "@src/styles/components/bootcamp/_bootcamp-course-info.module.scss";

export default function BootcampCourseInfo({ bootcamp }: { bootcamp: Bootcamp }) {
  const isAddress = bootcamp.participationMethod.label === ParticipationMethod.OFFLINE && bootcamp.address;

  return (
    <section className={styles.info}>
      <h2>수업 정보</h2>
      <table>
        <tbody>
          <tr>
            <td>수업 기간</td>
            <td>
              {bootcamp.courseStartDate.split("T")[0]} ~ {bootcamp.courseEndDate.split("T")[0]}
              {bootcamp.totalTrainingMonth && ` (약 ${bootcamp.totalTrainingMonth}개월)`}
            </td>
          </tr>
          <tr>
            <td>수업 시간</td>
            <td>{bootcamp.schedule}</td>
          </tr>
          <tr>
            <td>수업 장소</td>
            <td>
              {bootcamp.participationMethod.label}
              {isAddress && bootcamp.address}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
