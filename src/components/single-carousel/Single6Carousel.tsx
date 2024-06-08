"use client";
import { BootcampSingleSection, ExternalPostSingleSection } from "@src/api/interface/section.interface";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BootcampVerticalCard from "@src/components/bootcamp-list/vertical-card/BootcampVerticalCard";
import Link from "next/link";

export function Single6Carousel({ section }: { section: ExternalPostSingleSection }) {
  return (
    <div>
      <div>
        <h3>{section.title}</h3>
      </div>
      <Swiper slidesPerView={4} spaceBetween={16}>
        {section.externalPosts.map((post) => {
          return <SwiperSlide key={post._id}>{/* <BootcampVerticalCard bootcamp={bootcamp} /> */}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
}
