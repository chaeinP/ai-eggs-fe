import { env } from "@src/config/environment";
import { Filter } from "./interface/filter.interface";
import { LaboratoryList } from "./interface/laboratoryList.interface";

export const fetchLaboratories = async ({
  searchParams,
  filters,
}: {
  searchParams: { [k: string]: string[] | undefined };
  filters: Filter[];
}): Promise<LaboratoryList> => {
  let url = `${env.baseUrl}/api/v1/laboratories`;

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
    throw new Error("fetchLaboratories failed");
  }

  return response.json();
};
