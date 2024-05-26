import Logo from "@public/logos/koLogo.svg";
import Link from "next/link";
import styles from "@src/styles/components/_nav-bar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
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
      </div>
      <div>
        <ul>
          <li>
            <a>교육 과정 등록/수정</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
