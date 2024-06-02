import { env } from "@src/config/environment";
import { BannerList } from "@src/api/interface/bannerList.interface";

export async function fetchBanners(): Promise<BannerList> {
  const response = await fetch(`${env.baseUrl}/api/v1/banners`);

  if (!response.ok) {
    throw new Error("fetchBanners failed:");
  }

  return response.json();
}
