export interface FilterItem {
  _id: string;
  label: string;
}

export interface Filter {
  filterName: string;
  selectMode: "single" | "multiple";
  searchKey: string;
  filterItems: FilterItem[];
}
