import GreyLogo from "@public/logos/koLogoGrey.svg";
import styles from "@src/styles/components/_footer.module.scss";
import HorizontalDivider from "../divider/HorizontalDivider";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <GreyLogo />
        <ul>
          <li>비즈니스 문의</li>
          <li>의견 보내기</li>
        </ul>
      </div>
    </footer>
  );
}
