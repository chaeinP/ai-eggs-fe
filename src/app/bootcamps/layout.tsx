import styles from "@src/styles/apps/bootcamps/_layout.module.scss";

export default function BootcampsLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles["bootcamps-layout"]}>{children}</div>;
}
