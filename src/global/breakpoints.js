const device = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xLarge: "1200px",
};

export const breakpoints = {
  small: `@media (max-width:${device.small})`,
  medium: `@media (max-width:${device.medium})`,
  large: `@media (max-width:${device.large})`,
  xLarge: `@media (max-width:${device.xLarge})`,
};
