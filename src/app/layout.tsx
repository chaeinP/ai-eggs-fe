import "@src/styles/globals.css";
import type { Metadata } from "next";
import MainLayout from "@src/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "에이아이란",
  description: "ai가 그래서 뭐야? 나도 제대로 알고 싶어!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
