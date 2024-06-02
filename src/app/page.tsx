import { fetchBanners } from "@src/api/fetchBaners";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import RollingBanner from "@src/components/rolling-banner/RollingBanner";

export default async function Home() {
  const bannerList = await fetchBanners();

  return (
    <div>
      <HorizontalDivider height="48px" />
      <RollingBanner bannerList={bannerList} />
    </div>
  );
}
