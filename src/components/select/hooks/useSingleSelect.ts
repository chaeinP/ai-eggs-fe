import { Filter, FilterItem } from "@src/api/interface/filter.interface";
import { Dispatch, SetStateAction, useState } from "react";

export interface UseSingleSelect {
  selectedItem: FilterItem | null;
  setSelectedItem: Dispatch<SetStateAction<FilterItem | null>>;
  searchKey: string;
}

export function useSingleSelect({ filter, selectedValue }: { filter: Filter; selectedValue?: string }) {
  const [selectedItem, setSelectedItem] = useState<FilterItem | null>(
    filter.filterItems.find((item) => item.label === selectedValue) || null
  );

  return { selectedItem, setSelectedItem, searchKey: filter.searchKey };
}
