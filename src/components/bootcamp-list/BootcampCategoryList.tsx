import { Filter } from "@src/api/interface/filter.interface";
import { UseSingleSelect } from "@src/components/select/hooks/useSingleSelect";
import styles from "@src/styles/components/bootcamp-list/_category-list.module.scss";

export default function BootcampCategoryList({
  filter,
  setSelectedItem,
  selectedItem,
}: { filter: Filter } & UseSingleSelect) {
  return (
    <div className={styles.category_list}>
      <h2>{filter.filterName}</h2>
      <ul>
        {filter.filterItems.map((item) => (
          <li key={item._id} onClick={() => setSelectedItem(item)}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
