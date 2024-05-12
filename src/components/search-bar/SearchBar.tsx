import Search from "@public/icons/search.svg";
import CloseCircle from "@public/icons/closeCircle.svg";
import styles from "@src/styles/components/_search.module.scss";
import { UseSearchBar } from "./useSearchBar";

export default function SearchBar({
  input,
  setInput,
  placeholder,
  handleClear,
  handleSearch,
}: { placeholder: string } & UseSearchBar) {
  return (
    <div
      className={styles["search-bar"]}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }}
    >
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {input && (
        <button className={styles.button} onClick={handleClear}>
          <CloseCircle />
        </button>
      )}
      <button className={styles.button} onClick={handleSearch}>
        <Search />
      </button>
    </div>
  );
}
