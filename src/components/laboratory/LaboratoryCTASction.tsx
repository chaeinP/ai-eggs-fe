"use client";

import { useEffect, useState } from "react";
import styles from "@src/styles/components/laboratory/_cta-section.module.scss";
import { Laboratory } from "@src/api/interface/laboratory.interface";

export default function LaboratoryCTASection({ laboratory }: { laboratory: Laboratory }) {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      currentScrollPos > 323.1 ? setFixed(true) : setFixed(false);

      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={styles.main}>
      <div className={fixed ? styles.fixed : styles.non_fixed}>
        <div className={styles.cta_card}>
          <div className={styles.name}>
            <p>{laboratory.name}</p>
          </div>
          <table>
            <tbody>
              <tr>
                <td>대학/학과</td>
                <td>
                  {laboratory.university.name} {laboratory.college.name}
                </td>
              </tr>
              <tr>
                <td>연구분야</td>
                <td>
                  {laboratory.researchFields
                    .slice(0, 2)
                    .map(({ label }) => label)
                    .join("・")}
                </td>
              </tr>
              <tr>
                <td>지도 교수</td>
                <td>{laboratory.faculties.map(({ name }) => name).join(", ")}</td>
              </tr>
              <tr>
                <td>컨택 이메일</td>
                <td>{laboratory.email}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.cta}>
            <button
              onClick={() => {
                window.open(laboratory.siteUrl, "_blank");
              }}
            >
              연구실 홈페이지
            </button>
          </div>
          <div
            className={styles.bottom}
            onClick={() => {
              const url = window.location.href;
              handleCopyClipBoard(url);
            }}
          >
            <p>링크 공유</p>
          </div>
        </div>
      </div>
    </div>
  );
}
