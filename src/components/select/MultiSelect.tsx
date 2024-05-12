import commonStyles from "@src/styles/components/_select.module.scss";
import CheckedBox from "@public/icons/checkedBox.svg";
import EmptyBox from "@public/icons/emptyBox.svg";
import { Filter } from "@src/api/interface/filter.interface";
import { UseMultiSelect } from "./hooks/useMultiSelect";

export default function MultiSelect({ filter, selectedItems, handleSelect }: { filter: Filter } & UseMultiSelect) {
  return (
    <div className={commonStyles["select-wrapper"]}>
      <div className={commonStyles["filter-name"]}>
        <p>{filter.filterName}</p>
      </div>
      <ul>
        {filter.filterItems.map((item) => (
          <li className={commonStyles["multiple-select-item"]} key={item._id} onClick={() => handleSelect(item)}>
            <div>{selectedItems[item.label] ? <CheckedBox /> : <EmptyBox />}</div>
            <div>{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
