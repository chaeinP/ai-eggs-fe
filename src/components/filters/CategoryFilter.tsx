import { Filter } from "@src/api/interface/filter.interface";
import { UseSingleSelect } from "@src/components/select/hooks/useSingleSelect";
import styles from "@src/styles/components/filter/_category-filter.module.scss";

export default function CategoryFilter({
  filter,
  setSelectedItem,
  selectedItem,
}: { filter: Filter } & UseSingleSelect) {
  return (
    <div className={styles.category_filter}>
      <h3>{filter.filterName}</h3>
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
