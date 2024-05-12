import { env } from "@src/config/environment";
import { BootcampList } from "./interface/bootcampList.interface";

export const fetchRecommendedBootcamps = async (): Promise<BootcampList> => {
  let url = `${env.baseUrl}/api/v1/bootcamps?isRecommended=true&page=1&size=4&applicationStatus=open&sortField=applicationEndDate&orderBy=asc`;

  const response = await fetch(url, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error("fetchBootcampFilters failed");
  }

  return response.json();
};
