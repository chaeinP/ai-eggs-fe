"use client";
import { LaboratoryPublication } from "@src/api/interface/laboratory.interface";
import style from "@src/styles/components/laboratory/_publication-card.module.scss";

export default function PublicationCard({ publication }: { publication: LaboratoryPublication }) {
  const isUrl = publication.linkUrl !== "" || !!publication.linkUrl;

  const handleClick = () => {
    if (isUrl) {
      window.open(publication.linkUrl!, "_blank");
    }
  };

  return (
    <li onClick={handleClick} className={isUrl ? style.click_enabled : style.click_disabled}>
      <p className={style.title}>{publication.title}</p>
      <div className={style.sub_info}>
        <p>{publication.authors}</p>
        {publication.year && <p>, {publication.year}</p>}
        {publication.journal && <p>, {publication.journal}</p>}
      </div>
    </li>
  );
}
