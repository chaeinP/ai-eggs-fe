import { Filter } from "@src/api/interface/filter.interface";
import { UseMultiSelect, useMultiSelect } from "./useMultiSelect";
import { UseSingleSelect, useSingleSelect } from "./useSingleSelect";

export function initializeUseSelects({
  filters,
  searchParams,
}: {
  filters: Filter[];
  searchParams?: { [key: string]: string[] | undefined };
}): (UseSingleSelect | UseMultiSelect)[] {
  return filters.map((filter) => {
    if (filter.selectMode === "multiple")
      return useMultiSelect({ filter, selectedValues: searchParams?.[filter.searchKey] });
    else return useSingleSelect({ filter, selectedValue: searchParams?.[filter.searchKey]?.[0] });
  });
}
