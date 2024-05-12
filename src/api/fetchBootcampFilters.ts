import { env } from "@src/config/environment";
import { Filter } from "./interface/filter.interface";

export const fetchBootcampFilters = async (): Promise<Filter[]> => {
  const response = await fetch(`${env.baseUrl}/api/v1/bootcamps/filters`);

  if (!response.ok) {
    throw new Error("fetchBootcampFilters failed");
  }

  return response.json().then((data) => data.filters);
};
