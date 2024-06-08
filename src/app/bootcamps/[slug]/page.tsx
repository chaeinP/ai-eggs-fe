import { fetchBootcamp } from "@src/api/fetchBootcamp";
import BootcampTitleBanner from "@src/components/bootcamp/BootcampTitleBanner";
import BootcampCTASection from "@src/components/bootcamp/BootcampCTASction";
import BootcampMainContent from "@src/components/bootcamp/mainContent/BootcampMainContent";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";
import LoadingSpinner from "@src/components/spinner/LoadingSpinner";
import { Suspense } from "react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const bootcampId = params.slug.split("_")[1];
  const bootcamp = await fetchBootcamp(bootcampId);

  return {
    title: `${bootcamp.title}-${bootcamp.educationCompanies[0].name}`,
    description: bootcamp.features,
    keywords: [bootcamp.title, bootcamp.educationCompanies[0].name, ...bootcamp.tags.map((tag) => tag.label)],
    openGraph: {
      images: ["/og-images/default.png"],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const bootcampId = params.slug.split("_")[1];
  const bootcamp = await fetchBootcamp(bootcampId);

  return (
    <div>
      <BootcampTitleBanner bootcamp={bootcamp} />
      <HorizontalDivider height="48px" />
      <Suspense fallback={<LoadingSpinner />}>
        <main style={{ display: "flex", gap: "40px" }}>
          <BootcampMainContent bootcamp={bootcamp} />
          <BootcampCTASection bootcamp={bootcamp} />
        </main>
      </Suspense>
    </div>
  );
}
