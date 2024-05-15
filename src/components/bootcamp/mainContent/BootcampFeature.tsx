import { ReactNode } from "react";
import styles from "@src/styles/components/bootcamp/_bootcamp-feature.module.scss";

export default function BootcampFeatures({ children }: { children: ReactNode }) {
  return <div className={styles.box}>{children}</div>;
}
