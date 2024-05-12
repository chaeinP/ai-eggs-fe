export const PricingType = {
  FREE: "free",
  PAID: "paid",
} as const;

export type PricingType = (typeof PricingType)[keyof typeof PricingType];
