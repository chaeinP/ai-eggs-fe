export const PricingType = {
  FREE: "free",
  PAID: "paid",
} as const;

export type PricingType = (typeof PricingType)[keyof typeof PricingType];

export interface PricingTypeLabel {
  _id: PricingType;
  label: string;
}
