import { CustomMDX } from "@src/components/mdx/CustomMdx";
import styles from "@src/styles/components/laboratory/_faculty-info-card-content.module.scss";

export default function FacultyInfoCardContent({ title, content }: { title: string; content: string }) {
  return (
    <div className={styles.main}>
      <p>{title}</p>
      <CustomMDX source={content} />
    </div>
  );
}
