import { SectionContentType } from "@src/api/const/sectionContentType";
import { SectionType } from "@src/api/const/sectionType";
import { Section, Single4Section } from "@src/api/interface/section.interface";

export function isBootcampSingle4Carousel(
  section: Section<SectionType, SectionContentType>
): section is Single4Section<"bootcamp"> {
  return section.type === SectionType.SINGLE_4_CAROUSEL && section.contentType === SectionContentType.BOOTCAMP;
}
