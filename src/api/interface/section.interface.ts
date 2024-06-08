import { SectionContentType } from "@src/api/const/sectionContentType";
import { SectionType } from "@src/api/const/sectionType";
import { ExternalPost } from "@src/api/interface/externalPost.interface";
import { SimpleBootcamp } from "@src/api/interface/simpleBootcamp.interface";
import { SimpleLaboratory } from "@src/api/interface/simpleLaboratory.interface";

export type Section<S extends SectionType, C extends SectionContentType> = S extends "tab-4-carousel"
  ? TabSection<C>
  : Single4Section<C>;
//   : Single6Section<C>;

export interface CommonSection {
  title: string;
  type: SectionType;
  contentType: SectionContentType;
}

export type Single4Section<C extends SectionContentType> = C extends "bootcamp"
  ? BootcampSingleSection
  : C extends "laboratory"
  ? LabSingleSection
  : ExternalPostSingleSection;

// export interface Single6Section<C extends SectionContentType> extends CommonSection {
//   path: string;
//   bootcamps: SimpleBootcamp[];
//   laboratories: SimpleLaboratory[];
//   totalCount: number;
// }

export interface BootcampSingleSection extends CommonSection {
  path: string;
  bootcamps: SimpleBootcamp[];
  totalCount: number;
}

export interface LabSingleSection extends CommonSection {
  path: string;
  laboratories: SimpleLaboratory[];
  totalCount: number;
}

export interface ExternalPostSingleSection extends CommonSection {
  externalPosts: ExternalPost[];
  totalCount: number;
}

export type TabSection<C extends SectionContentType> = C extends "bootcamp" ? BootcampTabSection : LabTabSection;

export interface BootcampTabSection extends CommonSection {
  tabs: {
    [k: string]: {
      path: string;
      bootcamps: SimpleBootcamp[];
      totalCount: number;
    };
  };
}
export interface LabTabSection extends CommonSection {
  tabs: {
    [k: string]: {
      path: string;
      laboratories: SimpleLaboratory[];
      totalCount: number;
    };
  };
}
