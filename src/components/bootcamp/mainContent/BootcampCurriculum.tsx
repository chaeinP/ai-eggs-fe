"use client";

import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import styles from "@src/styles/components/bootcamp/_bootcamp-curriculum.module.scss";
import ArrowUp from "@public/icons/arrowUp.svg";
import ArrowDown from "@public/icons/arrowDown.svg";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function BootcampCurriculum({ bootcamp }: { bootcamp: Bootcamp }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((openIndex) => openIndex !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className={styles.info}>
      <h2>커리큘럼</h2>
      <ul className={styles.card}>
        {bootcamp.curriculum.map((curriculum, index) => (
          <li key={index}>
            <div className={styles.title} onClick={() => handleClick(index)}>
              <h3>{curriculum.title}</h3>
              {openIndexes.includes(index) ? <ArrowUp /> : <ArrowDown />}
            </div>
            <div className={openIndexes.includes(index) ? styles.description : styles.description_disabled}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{curriculum.description}</ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
