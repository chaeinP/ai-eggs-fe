"use client";

import { ApplicationStatus } from "@src/api/const/applicationStatus";
import { ParticipationMethod } from "@src/api/const/participationMethod";
import { PricingType } from "@src/api/const/pricingType";
import { Bootcamp } from "@src/api/interface/bootcamp.interface";
import { getDate } from "@src/common/utils/getDate";
import { getDateTime } from "@src/common/utils/getDateTime";
import { countDday } from "@src/common/utils/getDday";
import styles from "@src/styles/components/bootcamp/_bootcamp-cta-section.module.scss";
import Tag from "../tag/Tag";
import { useEffect, useState } from "react";

export default function BootcampCTASection({ bootcamp }: { bootcamp: Bootcamp }) {
  const showDday = bootcamp.applicationStatus._id === ApplicationStatus.OPEN && bootcamp.applicationEndDate;
  const isAddress = bootcamp.participationMethod.label === ParticipationMethod.OFFLINE && bootcamp.address;
  const isFree = bootcamp.pricingType._id === PricingType.FREE;
  const applicationStartDate = bootcamp.applicationStartDate && getDateTime(bootcamp.applicationStartDate);
  const applicationEndDate = bootcamp.applicationEndDate && getDateTime(bootcamp.applicationEndDate);
  const isNotBothDate = !applicationStartDate && !applicationEndDate;

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
        {showDday && (
          <div className={styles.d_day}>
            <p>
              모집 마감까지 <b>{countDday(bootcamp.applicationEndDate!)}일</b> 남았어요
            </p>
          </div>
        )}
        <div className={styles.cta_card}>
          <div className={styles.price}>
            <p>{isFree ? "무료" : bootcamp.originalPrice + "원"}</p>
            <Tag key="1" label="KDT" color="grey" />
          </div>
          <table>
            <tbody>
              <tr>
                <td>수업 기간</td>
                <td>
                  {getDate(bootcamp.courseStartDate)} ~ {getDate(bootcamp.courseEndDate)}
                  {bootcamp.totalTrainingMonth && ` (약 ${bootcamp.totalTrainingMonth}개월)`}
                </td>
              </tr>
              <tr>
                <td>수업 시간</td>
                <td>{bootcamp.schedule}</td>
              </tr>
              <tr>
                <td>수업 장소</td>
                <td>
                  {bootcamp.participationMethod.label}
                  {isAddress && bootcamp.address}
                </td>
              </tr>
              <tr>
                <td>모집 기간</td>
                <td>
                  {isNotBothDate
                    ? "상시 모집"
                    : `${applicationStartDate ? applicationEndDate : ""} ~ ${
                        applicationEndDate ? applicationEndDate : ""
                      }`}
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.cta}>
            <button
              onClick={() => {
                window.open(bootcamp.pageUrl, "_blank");
              }}
            >
              지원하기
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
