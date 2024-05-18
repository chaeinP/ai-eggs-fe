import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import { CustomMDX } from "@src/components/mdx/CustomMdx";
import Tag from "@src/components/tag/Tag";
import styles from "@src/styles/components/bootcamp/_bootcamp-instructors.module.scss";

export default function BootcampInstructors({ bootcamp }: { bootcamp: Bootcamp }) {
  return (
    <section className={styles.info}>
      <h2>강사 정보</h2>
      <ul className={styles.grid}>
        {bootcamp.instructors.map((instructor) => (
          <li key={instructor.name}>
            <div className={styles.name}>
              <p>{instructor.name}</p>
              <Tag label={"강사"} />
            </div>
            <CustomMDX source={instructor.career} />
          </li>
        ))}
      </ul>
    </section>
  );
}
