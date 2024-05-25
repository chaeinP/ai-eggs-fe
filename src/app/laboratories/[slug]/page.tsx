import { fetchLaboratory } from "@src/api/fetchLaboratory";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import LaboratoryTitleBanner from "@src/components/laboratory/LaboratoryTitleBanner";
import LoadingSpinner from "@src/components/spinner/LoadingSpinner";
import { Suspense } from "react";
import LaboratoryCTASection from "@src/components/laboratory/LaboratoryCTASction";
import LaboratoryMainContent from "@src/components/laboratory/mainContent/LaboratoryMainContent";

export default async function Page({ params }: { params: { slug: string } }) {
  const laboratoryId = params.slug.split("_")[1];
  const laboratory = await fetchLaboratory(laboratoryId);

  return (
    <div>
      <LaboratoryTitleBanner laboratory={laboratory} />
      <HorizontalDivider height="48px" />
      <Suspense fallback={<LoadingSpinner />}>
        <main style={{ display: "flex", gap: "40px" }}>
          <LaboratoryMainContent laboratory={laboratory} />
          <LaboratoryCTASection laboratory={laboratory} />
        </main>
      </Suspense>
    </div>
  );
}
