import { Filter } from "@src/api/interface/filter.interface";
import styles from "@src/styles/components/filter/_filter.module.scss";
import { UseMultiSelect } from "../select/hooks/useMultiSelect";
import { UseSingleSelect } from "../select/hooks/useSingleSelect";
import MultiSelect from "../select/MultiSelect";
import SingleSelect from "../select/SingleSelect";

export default function Filters({
  filters,
  selectHooks,
}: {
  filters: Filter[];
  selectHooks: (UseMultiSelect | UseSingleSelect)[];
}) {
  return (
    <div className={styles.filters}>
      {filters.map((filter, i) => {
        if (filter.selectMode === "multiple") {
          const hook = selectHooks[i] as UseMultiSelect;
          return <MultiSelect key={filter.filterName} filter={filter} {...hook} />;
        } else {
          const hook = selectHooks[i] as UseSingleSelect;
          return <SingleSelect key={filter.filterName} filter={filter} {...hook} />;
        }
      })}
    </div>
  );
}
