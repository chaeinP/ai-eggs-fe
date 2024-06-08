import styles from "@src/styles/apps/laboratories/_page.module.scss";
import { fetchLaboratoryFilters } from "@src/api/fetchLaboratoryFilters";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import { decodeSearchParams } from "@src/common/utils/decodeSearchParams";
import { fetchLaboratories } from "@src/api/fetchLaboratories";
import LaboratoryList from "@src/components/laboratory-list/LaboratoryList";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}): Promise<Metadata> {
  const decodedSearchParams = decodeSearchParams(searchParams);

  return {
    title: `${decodedSearchParams?.researchFieldIds ?? "데이터 · AI"} 연구실 리스트`,
    description: "내가 원하는 데이터 · AI 연구실을 검색해 보세요.",
    keywords: [
      "데이터 연구실",
      "AI 연구실",
      "석사",
      "박사",
      ...(decodedSearchParams?.universityId ?? []),
      ...(decodedSearchParams?.researchKeywordIds ?? []),
    ],
    openGraph: {
      images: ["/og-images/default.png"],
    },
  };
}

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
