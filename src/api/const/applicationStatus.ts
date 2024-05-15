export const ApplicationStatus = {
  UPCOMING: "upcoming",
  OPEN: "open",
  CLOSED: "closed",
} as const;

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

export interface ApplicationStatusLabel {
  _id: ApplicationStatus;
  label: string;
}
