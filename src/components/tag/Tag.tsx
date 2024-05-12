import styles from "@src/styles/components/_tag.module.scss";

export default function Tag({
  label,
  color = "grey",
  children,
}: {
  label: string;
  color?: "pink" | "grey";
  children?: React.ReactNode;
}) {
  return (
    <div className={color === "grey" ? styles.tag_grey : styles.tag_pink}>
      {label}
      {children}
    </div>
  );
}
