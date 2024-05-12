export const ParticipationMethod = {
  ONLINE: "online",
  OFFLINE: "offline",
  MIXED: "mixed",
} as const;

export type ParticipationMethod = (typeof ParticipationMethod)[keyof typeof ParticipationMethod];
