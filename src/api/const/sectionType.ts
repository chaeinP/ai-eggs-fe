export const SectionType = {
  TAB_4_CAROUSEL: "tab-4-carousel",
  SINGLE_4_CAROUSEL: "single-4-carousel",
  SINGLE_6_CAROUSEL: "single-6-carousel",
} as const;

export type SectionType = (typeof SectionType)[keyof typeof SectionType];
