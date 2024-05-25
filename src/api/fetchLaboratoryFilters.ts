import { env } from "@src/config/environment";
import { Filter } from "./interface/filter.interface";

export const fetchLaboratoryFilters = async (): Promise<Filter[]> => {
  const response = await fetch(`${env.baseUrl}/api/v1/laboratories/filters`);

  if (!response.ok) {
    throw new Error("fetchLaboratoryFilters failed");
  }

  return response.json().then((data) => data.filters);
};
