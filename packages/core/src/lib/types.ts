const sizeValues = ["xs", "sm", "md", "lg", "xl"] as const;

export type Size = (typeof sizeValues)[number];
export const Sizes: { [key: string]: Size } = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
};