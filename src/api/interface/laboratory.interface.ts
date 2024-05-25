import { SimpleFaculty, SimpleLaboratory } from "./simpleLaboratory.interface";

export interface FacultyDto extends SimpleFaculty {
  phone: string | null;
  email: string | null;
  siteUrl: string | null;
  education: string | null;
  career: string | null;
  expertise: string | null;
}

export interface LaboratoryPublication {
  title: string;
  authors: string;
  year: string;
  journal: string | null;
  linkUrl: string | null;
}

export interface Laboratory extends SimpleLaboratory {
  faculties: FacultyDto[];
  description: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  siteUrl: string;
  publications: LaboratoryPublication[];
  publicationsUrl: string | null;
  qualification: string | null;
  applicationStartDate: Date | null;
  applicationEndDate: Date | null;
  applicationProcess: string | null;
  benefits: string | null;
}
