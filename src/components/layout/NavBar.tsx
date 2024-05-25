import Logo from "@public/logos/koLogo.svg";
import Link from "next/link";
import styles from "@src/styles/components/_nav-bar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/bootcamps?applicationStatus=모집 중" prefetch>
            부트캠프
          </Link>
        </li>
        <li>
          <Link href="/laboratories">대학원 연구실</Link>
        </li>
      </ul>
    </nav>
  );
}
