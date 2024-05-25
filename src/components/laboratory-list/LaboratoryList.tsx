"use client";

import styles from "@src/styles/components/laboratory-list/_laboratory-list.module.scss";
import Replay from "@public/icons/replay.svg";
import SearchBar from "@src/components/search-bar/SearchBar";
import BootcampHorizontalCard from "./horizontal-card/LaboratoryHorizontalCard";
import { Filter, FilterItem } from "@src/api/interface/filter.interface";
import { initializeUseSelects } from "@src/components/select/hooks/initializeUseSelect";
import { UseMultiSelect } from "@src/components/select/hooks/useMultiSelect";
import { UseSingleSelect } from "@src/components/select/hooks/useSingleSelect";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePagination } from "@src/components/pagination/usePagination";
import Pagination from "@src/components/pagination/Pagination";
import { useSearchBar } from "@src/components/search-bar/useSearchBar";
import Tag from "../tag/Tag";
import Close from "@public/icons/close.svg";
import resetUseSelect from "../select/hooks/resetUseSelect";
import LoadingSpinner from "../spinner/LoadingSpinner";
import { SimpleLaboratory } from "@src/api/interface/simpleLaboratory.interface";
import Filters from "../filters/Filters";
import CategoryFilter from "../filters/CategoryFilter";
import LaboratoryHorizontalCard from "./horizontal-card/LaboratoryHorizontalCard";

export default function LaboratoryList({
  filters,
  searchParams,
  laboratories,
  totalCount,
}: {
  filters: Filter[];
  searchParams: { [key: string]: string[] | undefined };
  laboratories: SimpleLaboratory[];
  totalCount: number;
}) {
  const router = useRouter();
  const selectHooks = initializeUseSelects({ filters, searchParams });
  const paginationHook = usePagination({ total: totalCount });
  const searchBarHook = useSearchBar({ keyword: searchParams.keyword?.[0] });

  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      let path = selectHooks.reduce((acc, hook) => {
        if ((hook as UseSingleSelect).selectedItem) {
          acc += `${hook.searchKey}=${(hook as UseSingleSelect).selectedItem?.label}&`;
        } else if (
          (hook as UseMultiSelect).selectedItems &&
          Object.keys((hook as UseMultiSelect).selectedItems).length > 0
        ) {
          acc += `${hook.searchKey}=${Object.keys((hook as UseMultiSelect).selectedItems).join(",")}&`;
        }
        return acc;
      }, "/laboratories?");

      path += `page=${paginationHook.currentPage}&size=10&`;

      if (searchBarHook.searchKeyword) path += `keyword=${searchBarHook.searchKeyword}&`;

      setLoading(true);
      router.push(path);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      ...selectHooks.map((hook) => (hook as UseSingleSelect).selectedItem || (hook as UseMultiSelect).selectedItems),
      paginationHook.currentPage,
      searchBarHook.searchKeyword,
    ]
  );

  const handleReset = () => {
    resetUseSelect(selectHooks);
    router.push("/laboratories");
  };

  const singleSelected = selectHooks
    .filter((hook) => (hook as UseSingleSelect).selectedItem)
    .map<[FilterItem, () => void]>((hook) => [
      (hook as UseSingleSelect).selectedItem!,
      () => (hook as UseSingleSelect).setSelectedItem(null),
    ]);

  const multiSelected = selectHooks
    .filter((hook) => (hook as UseMultiSelect).selectedItems)
    .reduce((acc, hook) => {
      const items = Object.values((hook as UseMultiSelect).selectedItems);
      if (items.length > 0) {
        items.forEach((item) => {
          acc.push([item, () => (hook as UseMultiSelect).handleSelect(item)]);
        });
      }
      return acc;
    }, [] as [FilterItem, () => void][]);

  useEffect(() => {
    setLoading(false);
  }, [laboratories]);

  return (
    <div>
      {loading && <LoadingSpinner />}
      <CategoryFilter filter={filters[0]} {...(selectHooks[0] as UseSingleSelect)} />
      <HorizontalDivider height="48px" />
      <header className={styles.header}>
        <h3>모든 부트캠프</h3>
        <SearchBar {...searchBarHook} placeholder="찾고 있는 연구실이 있나요?" />
      </header>
      <section className={styles.section}>
        <Filters filters={filters} selectHooks={selectHooks} />
        <div className={styles["laboratory-list"]}>
          <div className="laboratory-list-header">
            <div className={styles.summary}>
              <p>{totalCount}개의 결과</p>
            </div>
            <div className={styles["filter-panel"]}>
              <button className={styles.initialize} onClick={handleReset}>
                <Replay />
                <p>초기화</p>
              </button>
              {singleSelected.length > 0 &&
                singleSelected.map(([item, fn]) => (
                  <li key={item._id}>
                    <Tag key={item._id} label={item.label}>
                      <button onClick={fn}>
                        <Close />
                      </button>
                    </Tag>
                  </li>
                ))}
              {multiSelected.length > 0 &&
                multiSelected.map(([item, fn]) => (
                  <li key={item._id}>
                    <Tag key={item._id} label={item.label}>
                      <button onClick={fn}>
                        <Close />
                      </button>
                    </Tag>
                  </li>
                ))}
            </div>
          </div>
          <div>
            <ul className={styles.bootcamp_list_main}>
              {laboratories.map((laboratory) => (
                <LaboratoryHorizontalCard key={laboratory.id} laboratory={laboratory} />
              ))}
            </ul>
          </div>
          <Pagination {...paginationHook} />
        </div>
      </section>
    </div>
  );
}
