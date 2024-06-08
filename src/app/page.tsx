import { fetchBanners } from "@src/api/fetchBanners";
import { fetchHomeSections } from "@src/api/fetchHomeSections";
import { isBootcampSingle4Carousel } from "@src/api/utils/isBootcampSingle4Carousel";
import { isTabSection } from "@src/api/utils/isTabCarousel";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import RollingBanner from "@src/components/rolling-banner/RollingBanner";
import { Single4Carousel } from "@src/components/single-carousel/Single4Carousel";
import { TabCarousel } from "@src/components/tab-carousel/TabCarousel";
import Organization from "@public/icons/organization.svg";
import { DEFAULT_METADATA } from "@src/common/const/defaultMetaData";
import { Metadata } from "next";

export const metaData: Metadata = DEFAULT_METADATA;

export default async function Home() {
  const bannerList = await fetchBanners();
  const sectionList = await fetchHomeSections();

  return (
    <div>
      <HorizontalDivider height="48px" />
      <RollingBanner bannerList={bannerList} />
      <HorizontalDivider height="72px" />
      <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
        {sectionList.sections.map((section) => {
          if (isBootcampSingle4Carousel(section)) return <Single4Carousel key={section.title} section={section} />;
          if (isTabSection(section)) return <TabCarousel key={section.title} section={section} />;
        })}
      </div>
      <HorizontalDivider height="72px" />
      <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
        <Organization />
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "28.64px",
          }}
        >
          교육 과정 등록 또는 수정하기
        </h3>
        <p
          style={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19.09px",
          }}
        >
          에이아이란은 데이터, 인공지능 분야의 교육 과정을 큐레이션합니다. 교육 과정 등록 또는 정보 수정을 원하신다면
          아래 버튼을 눌러 양식을 제출해주세요.
        </p>

        <button
          style={{
            display: "block",
            padding: "9.5px 18px",
            color: "white",
            backgroundColor: "#212730",
            borderRadius: "7px",
            height: "36px",
            width: "145px",
            marginTop: "32px",
          }}
        >
          교육 과정 등록/수정
        </button>
      </div>
    </div>
  );
}
