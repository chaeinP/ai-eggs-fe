"use client";
import { BootcampSingleSection } from "@src/api/interface/section.interface";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import BootcampVerticalCard from "@src/components/bootcamp-list/vertical-card/BootcampVerticalCard";
import Link from "next/link";
import styles from "@src/styles/components/_single-4-carousel.module.scss";
import ArrowLeft from "@public/icons/prevArrow24.svg";
import ArrowRight from "@public/icons/nextArrow24.svg";
import { useState } from "react";
import { Pagination } from "swiper/modules";

export function Single4Carousel({ section }: { section: BootcampSingleSection }) {
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(section.totalCount > 4);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.header}>
        <h3 className={styles.title}>{section.title}</h3>
        <Link href={section.path}>
          <button className={styles.more}>더보기</button>
        </Link>
      </div>
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

          if (swiper.realIndex + 4 >= section.totalCount) setHasNextPage(false);
          else setHasNextPage(true);
        }}
        modules={[Pagination]}
      >
        {section.bootcamps.map((bootcamp) => {
          return (
            <SwiperSlide key={bootcamp.id}>
              <BootcampVerticalCard bootcamp={bootcamp} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.prev}>
        <button onClick={() => swiper?.slidePrev()}>
          <ArrowLeft stroke={hasPrevPage ? "#2E3642" : "#E7EAEE"} />
        </button>
      </div>
      <div className={styles.next}>
        <button onClick={() => swiper?.slideNext()}>
          <ArrowRight stroke={hasNextPage ? "#2E3642" : "#E7EAEE"} />
        </button>
      </div>
    </div>
  );
}
