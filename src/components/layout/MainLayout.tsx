import { ReactNode } from "react";
import NavBar from "./NavBar";
import styles from "@src/styles/components/_main-layout.module.scss";
import Footer from "./Footer";
import HorizontalDivider from "../divider/HorizontalDivider";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <HorizontalDivider height="48px" />
      <Footer />
    </div>
  );
}
