export const SectionContentType = {
  LABORATORY: "laboratory",
  BOOTCAMP: "bootcamp",
  EXTERNAL_POST: "external-post",
} as const;

export type SectionContentType = (typeof SectionContentType)[keyof typeof SectionContentType];
