import { BootcampCurriculum } from "./bootcampCurriculum";
import { BootcampInstructor } from "./bootcmpaInstructor.interface";
import { SimpleBootcamp } from "./simpleBootcamp.interface";

export interface Bootcamp extends SimpleBootcamp {
  bootcampUUID: string;
  isSelectionProcess: boolean;
  pageUrl: string;
  totalTrainingMonth: number;
  totalTrainingHours: number | null;
  instructors: BootcampInstructor[];
  curriculum: BootcampCurriculum[];
  curriculumLink: string | null;
  learningGoals: string;
  features: string;
  recommendedTargets: string;
  careerSupport: string | null;
  admissionsProcess: string | null;
  qualifications: string | null;
  projects: string | null;
  address: string | null;
  city: string | null;
  locationImageUrls: string[];
  quota: number | null;
  selectionCriteria: string | null;
}
