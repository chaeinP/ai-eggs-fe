import { SectionContentType } from "@src/api/const/sectionContentType";
import { SectionType } from "@src/api/const/sectionType";
import { BootcampTabSection, Section } from "@src/api/interface/section.interface";

export function isLaboratoryTabSection(
  section: Section<SectionType, SectionContentType>
): section is BootcampTabSection {
  return section.type === SectionType.TAB_4_CAROUSEL && section.contentType === SectionContentType.LABORATORY;
}
