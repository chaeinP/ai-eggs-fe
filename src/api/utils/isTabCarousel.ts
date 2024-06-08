import { SectionContentType } from "@src/api/const/sectionContentType";
import { SectionType } from "@src/api/const/sectionType";
import { Section, TabSection } from "@src/api/interface/section.interface";

export function isTabSection(
  section: Section<SectionType, SectionContentType>
): section is TabSection<SectionContentType> {
  return section.type === SectionType.TAB_4_CAROUSEL;
}
