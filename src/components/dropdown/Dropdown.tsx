import ArrowDown from "@public/icons/arrowDown.svg";
import styles from "@src/styles/components/_dropdown.module.scss";
import { UseDropdown } from "./useDropdown";

export default function Dropdown({ options, setSelectedOption }: UseDropdown) {
  return (
    <form className={styles.dropdown}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ArrowDown />
    </form>
  );
}
