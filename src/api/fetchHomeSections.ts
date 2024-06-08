import { env } from "@src/config/environment";
import { BannerList } from "@src/api/interface/bannerList.interface";
import { SectionList } from "@src/api/interface/sectionList.interface";

export async function fetchHomeSections(): Promise<SectionList> {
  const response = await fetch(`${env.baseUrl}/api/v1/home/sections`);

  if (!response.ok) {
    throw new Error("fetchHomeSections failed:");
  }

  return response.json();
}
