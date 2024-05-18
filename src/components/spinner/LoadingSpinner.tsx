import styles from "@src/styles/components/_loading-spinner.module.scss";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}
