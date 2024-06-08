import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL("https://ai-eggs.com"),
  title: "에이아이란 - AI·데이터 분야 커리어 교육 정보",
  description:
    "에이아이란에서 AI 및 데이터 분야 커리어에 도움이 되는 교육 정보를 찾아보세요. 부트캠프와 대학원 연구실을 쉽게 비교하고 탐색할 수 있어요.",
  alternates: {
    canonical: "/",
  },
  keywords: ["에이아이란", "AI 교육", "데이터 교육", "부트캠프", "대학원", "연구실", "커리어 탐색", "교육 정보"],
  openGraph: {
    type: "website",
    title: "에이아이란 - AI·데이터 분야 커리어 교육 정보",
    description:
      "에이아이란에서 AI 및 데이터 분야 커리어에 도움이 되는 교육 정보를 찾아보세요. 부트캠프와 대학원 연구실을 쉽게 비교하고 탐색할 수 있어요.",
    siteName: "에이아이란",
    url: "https://ai-eggs.com",
    images: [
      {
        url: "/og-images/default.png",
        alt: "에이아이란",
      },
    ],
  },
};
