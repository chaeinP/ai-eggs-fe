import { Laboratory } from "@src/api/interface/laboratory.interface";
import Line from "@src/components/line/Line";
import MarkdownSection from "@src/components/mdx/MarkdownSection";
import styles from "@src/styles/components/laboratory/_main-content.module.scss";
import LaboratoryInfo from "./LaboratoryInfo";
import LaboratoryKeywords from "./LaboratoryKeywords";
import Faculties from "./faculties/Faculties";
import Publications from "./publications/Publications";
import SchoolInfo from "./Schoolnfo";

export default function LaboratoryMainContent({ laboratory }: { laboratory: Laboratory }) {
  const isApplicationInfo = laboratory.qualification || laboratory.applicationProcess || laboratory.benefits;

  return (
    <div className={styles.main}>
      <MarkdownSection title="연구실 소개" markdownContent={laboratory.description} />
      <LaboratoryInfo laboratory={laboratory} />
      <LaboratoryKeywords laboratory={laboratory} />
      {laboratory.faculties.length > 0 && <Faculties laboratory={laboratory} />}
      {laboratory.publications.length > 0 && (
        <Publications publications={laboratory.publications} publicationsUrl={laboratory.publicationsUrl} />
      )}

      {isApplicationInfo && <Line height="1px" />}
      {laboratory.qualification && <MarkdownSection title="지원 자격" markdownContent={laboratory.qualification} />}
      {laboratory.applicationProcess && (
        <MarkdownSection title="연구실 지원 방법" markdownContent={laboratory.applicationProcess} />
      )}
      {laboratory.benefits && <MarkdownSection title="연구실 혜택" markdownContent={laboratory.benefits} />}

      <Line height="1px" />
      <SchoolInfo laboratory={laboratory} />
    </div>
  );
}
