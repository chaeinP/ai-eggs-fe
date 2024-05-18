import styles from "@src/styles/apps/bootcamps/_page.module.scss";
import { fetchBootcampFilters } from "@src/api/fetchBootcampFilters";
import BootcampRecommendList from "@src/components/bootcamp-list/BootcampRecommendList";
import BootcampList from "@src/components/bootcamp-list/BootcampList";
import { decodeSearchParams } from "@src/common/utils/decodeSearchParams";
import { fetchBootcamps } from "@src/api/fetchBootcamps";
import { fetchRecommendedBootcamps } from "@src/api/fetchRecommendedBootcamps";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import { Suspense } from "react";
import LoadingSpinner from "@src/components/spinner/LoadingSpinner";

export default async function Bootcamps({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const filters = await fetchBootcampFilters();
  const decodedSearchParams = decodeSearchParams(searchParams);
  const bootcampList = await fetchBootcamps({ searchParams: decodedSearchParams, filters });
  const recommendedBootcampList = await fetchRecommendedBootcamps();

  return (
    <div className={styles.main}>
      <HorizontalDivider height="0px" />
      <h1 className={styles.title}>데이터 · AI 부트캠프</h1>
      {recommendedBootcampList.totalCount > 0 && (
        <BootcampRecommendList bootcamps={recommendedBootcampList.bootcamps} />
      )}
      <BootcampList
        filters={filters}
        searchParams={decodedSearchParams}
        bootcamps={bootcampList.bootcamps}
        totalCount={bootcampList.totalCount}
      />
    </div>
  );
}
