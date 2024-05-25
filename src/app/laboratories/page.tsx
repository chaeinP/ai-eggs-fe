import styles from "@src/styles/apps/laboratories/_page.module.scss";
import { fetchLaboratoryFilters } from "@src/api/fetchLaboratoryFilters";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import { decodeSearchParams } from "@src/common/utils/decodeSearchParams";
import { fetchLaboratories } from "@src/api/fetchLaboratories";
import LaboratoryList from "@src/components/laboratory-list/LaboratoryList";

export default async function Laboratories({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const filters = await fetchLaboratoryFilters();
  const decodedSearchParams = decodeSearchParams(searchParams);
  const laboratoryList = await fetchLaboratories({ searchParams: decodedSearchParams, filters });

  return (
    <div className={styles.main}>
      <HorizontalDivider height="0px" />
      <h1 className={styles.title}>데이터 · AI 연구실</h1>
      <LaboratoryList
        filters={filters}
        searchParams={decodedSearchParams}
        laboratories={laboratoryList.laboratories}
        totalCount={laboratoryList.totalCount}
      />
    </div>
  );
}
