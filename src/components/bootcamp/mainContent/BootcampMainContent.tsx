import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import MarkdownSection from "@src/components/mdx/MarkdownSection";
import styles from "@src/styles/components/bootcamp/_bootcamp-main.module.scss";
import BootcampFeatures from "./BootcampFeature";
import Line from "@src/components/line/Line";
import BootcampCourseInfo from "./BootcampCourseInfo";
import BootcampApplicationInfo from "./BootcampApplicationInfo";
import BootcampEducationCompany from "./BootcampEducationCompany";
import BootcampInstructors from "./BootcampInstructors";
import BootcampCurriculum from "./BootcampCurriculum";

export default function BootcampMainContent({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <div className={styles.main}>
      <BootcampFeatures>
        <MarkdownSection title="이 부트캠프 특징" markdownContent={bootcamp.features} />
      </BootcampFeatures>
      <MarkdownSection title="학습 목표" markdownContent={bootcamp.learningGoals} />
      <MarkdownSection title="추천 대상" markdownContent={bootcamp.recommendedTargets} />
      {bootcamp.curriculum?.length > 0 && <BootcampCurriculum bootcamp={bootcamp} />}
      {bootcamp.projects && <MarkdownSection title="프로젝트" markdownContent={bootcamp.projects} />}
      {bootcamp.careerSupport && <MarkdownSection title="취업 지원" markdownContent={bootcamp.careerSupport} />}
      <Line height="1px" />
      <BootcampCourseInfo bootcamp={bootcamp} />
      {bootcamp.instructors.length > 0 && <BootcampInstructors bootcamp={bootcamp} />}
      <BootcampEducationCompany bootcamp={bootcamp} />
      <Line height="1px" />
      <BootcampApplicationInfo bootcamp={bootcamp} />
      {bootcamp.admissionsProcess && (
        <MarkdownSection title="지원 및 선발 절차" markdownContent={bootcamp.admissionsProcess} />
      )}
      {bootcamp.qualifications && <MarkdownSection title="지원 자격" markdownContent={bootcamp.qualifications} />}
    </div>
  );
}
