import { Filter, FilterItem } from "@src/api/interface/filter.interface";
import { Dispatch, SetStateAction, useState } from "react";

export interface UseMultiSelect {
  selectedItems: Record<string, FilterItem>;
  setSelectedItems: Dispatch<SetStateAction<Record<string, FilterItem>>>;
  searchKey: string;
  handleSelect: (item: FilterItem) => void;
}

export function useMultiSelect({ filter, selectedValues }: { filter: Filter; selectedValues?: string[] }) {
  const [selectedItems, setSelectedItems] = useState(
    filter.filterItems
      .filter((item) => selectedValues?.includes(item.label))
      .reduce((acc, item) => {
        acc[item.label] = item;
        return acc;
      }, {} as Record<string, FilterItem>)
  );

  const handleSelect = (item: FilterItem) => {
    if (selectedItems[item.label]) {
      const { [item.label]: omit, ...rest } = selectedItems;
      setSelectedItems(rest);
    } else {
      setSelectedItems({ ...selectedItems, [item.label]: item });
    }
  };

  return { selectedItems, setSelectedItems, searchKey: filter.searchKey, handleSelect };
}
