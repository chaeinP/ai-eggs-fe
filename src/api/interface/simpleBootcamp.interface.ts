import { ApplicationStatusLabel } from "../const/applicationStatus";
import { ParticipationMethodLabel } from "../const/participationMethod";
import { ParticipationTypeLabel } from "../const/participationType";
import { PricingTypeLabel } from "../const/pricingType";
import { EducationCompany } from "./educationCompany.interface";
import { FilterItem } from "./filter.interface";

export interface SimpleBootcamp {
  id: string;
  thumbnailUrl: string;
  title: string;
  nthClass: number | null;
  educationCompanies: EducationCompany[];
  categories: FilterItem[];
  tags: FilterItem[];
  skills: FilterItem[];
  courseStartDate: string;
  courseEndDate: string;
  applicationStartDate: string | null;
  applicationEndDate: string | null;
  applicationLeftDays: number | null;
  applicationStatus: ApplicationStatusLabel;
  schedule: string;
  originalPrice: number;
  pricingType: PricingTypeLabel;
  participationMethod: ParticipationMethodLabel;
  participationType: ParticipationTypeLabel;
  isKdt: boolean;
}
