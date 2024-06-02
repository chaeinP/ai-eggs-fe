"use client";
import { BannerList } from "@src/api/interface/bannerList.interface";
import Image, { getImageProps } from "next/image";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import styles from "@src/styles/components/_rolling-banner.module.scss";
import "swiper/css";
import PrevArrow from "@public/icons/prevArrow.svg";
import NextArrow from "@public/icons/nextArrow.svg";

export default function RollingBanner({ bannerList: { banners, totalCount } }: { bannerList: BannerList }) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getImageUrl = ({ url, width, height }: { url: string; width: number; height: number }) => {
    const extractUrl = url.split("/")[4];
    const image = getImageProps({ alt: extractUrl, width, height, src: `${url}` });
    return image.props.src;
  };

  return (
    <div className={styles.wrapper}>
      <ul>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          onSwiper={(_swiper) => {
            setSwiper(_swiper);
          }}
          onSlideChange={(swiper) => {
            swiper.realIndex !== currentBannerIndex && setCurrentBannerIndex(swiper.realIndex);
          }}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={banner._id}>
              <li
                className={styles.banner}
                style={{ backgroundColor: banner.backgroundColor }}
                onClick={() => handleOpenNewTab(banner.linkUrl)}
              >
                <div className={styles.left}>
                  <h3>{banner.title}</h3>
                  <p>{banner.description}</p>
                  <button style={{ color: banner.buttonTextColor, backgroundColor: banner.buttonBackgroundColor }}>
                    {banner.buttonText}
                  </button>
                </div>
                <div>
                  <Image src={banner.desktopImageUrl} alt={banner.title} width={400} height={223.88} />
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <div className={styles.banner_button}>
        <div>
          <button onClick={() => swiper?.slidePrev()}>
            <PrevArrow />
          </button>
          <p>
            {currentBannerIndex + 1}/{totalCount}
          </p>
          <button onClick={() => swiper?.slideNext()}>
            <NextArrow />
          </button>
        </div>
      </div>
    </div>
  );
}
