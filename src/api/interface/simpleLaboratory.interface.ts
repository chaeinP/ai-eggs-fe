import { FilterItem } from "./filter.interface";

export interface SimpleLaboratory {
  id: string;
  faculties: SimpleFaculty[];
  college: SimpleCollege;
  university: SimpleUniversity;
  researchFields: FilterItem[];
  researchKeywords: FilterItem[];
  name: string;
  courseTypes: FilterItem[];
}

export interface SimpleFaculty {
  id: string;
  name: string;
}

export interface SimpleCollege {
  id: string;
  name: string;
  siteUrl: string;
}

export interface SimpleUniversity {
  id: string;
  name: string;
  logoUrl: string;
  thumbnailUrl: string;
}
