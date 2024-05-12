import { env } from "@src/config/environment";
import { Filter } from "./interface/filter.interface";
import { BootcampList } from "./interface/bootcampList.interface";

export const fetchBootcamps = async ({
  searchParams,
  filters,
}: {
  searchParams: { [k: string]: string[] | undefined };
  filters: Filter[];
}): Promise<BootcampList> => {
  let url = `${env.baseUrl}/api/v1/bootcamps`;

  if (searchParams) {
    const keys = Object.keys(searchParams);
    if (keys.length > 0) {
      url += "?";
      keys.forEach((key) => {
        const filterItems = filters.find((filter) => filter.searchKey === key)?.filterItems;
        if (filterItems) {
          searchParams[key]?.forEach((value) => {
            const filterItem = filterItems.find((item) => item.label === value);
            if (filterItem) url += `${key}=${filterItem._id}&`;
          });
        } else {
          searchParams[key]?.forEach((value) => {
            url += `${key}=${value}&`;
          });
        }
      });
    }
  }

  const response = await fetch(url, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error("fetchBootcampFilters failed");
  }

  return response.json();
};
