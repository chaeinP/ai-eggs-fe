import { fetchBootcamp } from "@src/api/fetchBootcamp";
import BootcampTitleBanner from "@src/components/bootcamp/BootcampTitleBanner";
import CTASection from "@src/components/bootcamp/CTASction";
import BootcampMainContent from "@src/components/bootcamp/mainContent/BootcampMainContent";
import HorizontalDivider from "@src/components/divider/HorizontalDivider";

export default async function Page({ params }: { params: { slug: string } }) {
  const bootcampId = params.slug.split("_")[1];
  const bootcamp = await fetchBootcamp(bootcampId);

  return (
    <div>
      <BootcampTitleBanner bootcamp={bootcamp} />
      <HorizontalDivider height="48px" />
      <main style={{ display: "flex", gap: "40px" }}>
        <BootcampMainContent bootcamp={bootcamp} />
        <CTASection bootcamp={bootcamp} />
      </main>
    </div>
  );
}