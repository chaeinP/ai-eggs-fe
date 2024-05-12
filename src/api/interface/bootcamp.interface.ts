import { ApplicationStatus } from "../const/applicationStatus";
import { ParticipationMethod } from "../const/participationMethod";
import { ParticipationType } from "../const/participationType";
import { PricingType } from "../const/pricingType";
import { FilterItem } from "./filter.interface";

export interface Bootcamp {
  id: string;
  thumbnailUrl: string;
  title: string;
  nthClass?: number;
  educationCompany: { id: string; name: string; siteUrl: string; logoUrl: string };
  categories: FilterItem[];
  tags: FilterItem[];
  skills: FilterItem[];
  description: string;
  courseStartDate: string;
  courseEndDate: string;
  applicationStartDate: string | null;
  applicationEndDate: string | null;
  applicationLeftDays: number;
  applicationStatus: { _id: ApplicationStatus; label: string };
  schedule: string | null;
  originalPrice: number;
  pricingType: {
    _id: PricingType;
    label: string;
  };
  participationMethod: {
    _id: ParticipationMethod;
    label: string;
  };
  participationType: {
    _id: ParticipationType;
    label: string;
  };
  isKdt: boolean;
}
