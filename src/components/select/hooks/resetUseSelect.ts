import { UseMultiSelect } from "./useMultiSelect";
import { UseSingleSelect } from "./useSingleSelect";

export default function resetUseSelect(hooks: (UseSingleSelect | UseMultiSelect)[]) {
  hooks.forEach((hook) => {
    if ((hook as UseSingleSelect).setSelectedItem) (hook as UseSingleSelect).setSelectedItem(null);
    else if ((hook as UseMultiSelect).setSelectedItems) (hook as UseMultiSelect).setSelectedItems({});
  });
}
