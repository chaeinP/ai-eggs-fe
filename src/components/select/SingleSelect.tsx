import commonStyles from "@src/styles/components/_select.module.scss";
import { Filter } from "@src/api/interface/filter.interface";
import { UseSingleSelect } from "./hooks/useSingleSelect";

export default function SingleSelect({ filter, selectedItem, setSelectedItem }: { filter: Filter } & UseSingleSelect) {
  return (
    <div className={commonStyles["select-wrapper"]}>
      <div className={commonStyles["filter-name"]}>
        <p>{filter.filterName}</p>
      </div>
      <ul>
        {filter.filterItems.map((item) => (
          <li className={commonStyles["single-select-item"]} key={item._id} onClick={() => setSelectedItem(item)}>
            {selectedItem?._id === item._id ? <strong>{item.label}</strong> : item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
