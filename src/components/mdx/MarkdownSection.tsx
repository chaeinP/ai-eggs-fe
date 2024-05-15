import { CustomMDX } from "./CustomMdx";
import styles from "@src/styles/components/_markdown-section.module.scss";

export default function MarkdownSection({ title, markdownContent }: { title: string; markdownContent: string }) {
  return (
    <section className={styles.markdown}>
      <h2>{title}</h2>
      <CustomMDX source={markdownContent} />
    </section>
  );
}
