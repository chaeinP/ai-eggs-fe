import { SectionContentType } from "@src/api/const/sectionContentType";
import { SectionType } from "@src/api/const/sectionType";
import { Section } from "@src/api/interface/section.interface";

export interface SectionList {
  sections: Section<SectionType, SectionContentType>[];
}
