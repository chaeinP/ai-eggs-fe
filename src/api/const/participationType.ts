export const ParticipationType = {
  FULLTIME: "fulltime",
  PARTTIME: "parttime",
} as const;

export type ParticipationType = (typeof ParticipationType)[keyof typeof ParticipationType];

export interface ParticipationTypeLabel {
  _id: ParticipationType;
  label: string;
}
