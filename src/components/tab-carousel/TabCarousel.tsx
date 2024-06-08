"use client";
import { SectionContentType } from "@src/api/const/sectionContentType";
import { isBootcampTabSection } from "@src/api/utils/isBootcampTabSection";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import BootcampVerticalCard from "@src/components/bootcamp-list/vertical-card/BootcampVerticalCard";
import { LaboratoryVerticalCard } from "@src/components/laboratory-list/vertical-card/LaboratoryVerticalCard";
import { TabSection } from "@src/api/interface/section.interface";
import styles from "@src/styles/components/_tab-carousel.module.scss";
import Link from "next/link";
import ArrowLeft from "@public/icons/prevArrow24.svg";
import ArrowRight from "@public/icons/nextArrow24.svg";
import { Pagination } from "swiper/modules";

export function TabCarousel({ section }: { section: TabSection<SectionContentType> }) {
  const tabLabels = Object.keys(section.tabs);
  const [activeTab, setActiveTab] = useState(tabLabels[0]);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(section.tabs[activeTab].totalCount > 4);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    swiper?.slideTo(0);
    setHasPrevPage(false);
    setHasNextPage(section.tabs[tab].totalCount > 4);
  };

  return (
    <div style={{ position: "relative" }}>
      <h3 className={styles.title}>{section.title}</h3>
      <ul className={styles.nav}>
        {tabLabels.map((label) => (
          <li
            key={label}
            className={activeTab === label ? styles.nav_selected : styles.nav_non_selected}
            onClick={() => handleTabClick(label)}
          >
            {label}
          </li>
        ))}
      </ul>
      <Swiper
        spaceBetween={16}
        centeredSlides={false}
        slidesPerGroup={4}
        slidesPerView={4}
        onSwiper={(_swiper) => {
          setSwiper(_swiper);
        }}
        onSlideChange={(swiper) => {
          if (swiper.realIndex === 0) setHasPrevPage(false);
          else setHasPrevPage(true);

          if (swiper.realIndex + 4 >= section.tabs[activeTab].totalCount) setHasNextPage(false);
          else setHasNextPage(true);
        }}
        modules={[Pagination]}
      >
        {isBootcampTabSection(section)
          ? section.tabs[activeTab].bootcamps.map((bootcamp) => (
              <SwiperSlide key={bootcamp.id}>
                <BootcampVerticalCard bootcamp={bootcamp} />
              </SwiperSlide>
            ))
          : section.tabs[activeTab].laboratories.map((laboratory) => (
              <SwiperSlide key={laboratory.id}>
                <LaboratoryVerticalCard laboratory={laboratory} />
              </SwiperSlide>
            ))}
      </Swiper>
      <Link href={section.tabs[activeTab].path}>
        <button className={styles.more}>{activeTab} 연구실 더보기</button>
      </Link>
      <div className={styles.prev}>
        <button onClick={() => swiper?.slidePrev()}>
          <ArrowLeft stroke={hasPrevPage ? "#2E3642" : "#C9CFD9"} />
        </button>
      </div>
      <div className={styles.next}>
        <button onClick={() => swiper?.slideNext()}>
          <ArrowRight stroke={hasNextPage ? "#2E3642" : "#C9CFD9"} />
        </button>
      </div>
    </div>
  );
}
