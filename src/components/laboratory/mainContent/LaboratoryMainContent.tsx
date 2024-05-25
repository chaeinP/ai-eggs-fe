import { Laboratory } from "@src/api/interface/laboratory.interface";
import Line from "@src/components/line/Line";
import MarkdownSection from "@src/components/mdx/MarkdownSection";
import styles from "@src/styles/components/laboratory/_main-content.module.scss";

export default function LaboratoryMainContent({ laboratory }: { laboratory: Laboratory }) {
  return (
    <div className={styles.main}>
      <MarkdownSection title="연구실 소개" markdownContent={laboratory.description} />
      <Line height="1px" />
      {laboratory.qualification && <MarkdownSection title="지원 자격" markdownContent={laboratory.qualification} />}
      {laboratory.applicationProcess && (
        <MarkdownSection title="연구실 지원 방법" markdownContent={laboratory.applicationProcess} />
      )}
      {laboratory.benefits && <MarkdownSection title="연구실 혜택" markdownContent={laboratory.benefits} />}
    </div>
  );
}
