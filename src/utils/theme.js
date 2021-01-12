const maxWidth = {
  max: "750px",
};

const color = {
  primary: "rgb(25,25,25)",
  secondary: "#1a1a1a",
  tertiary: "#A4A4AA",
  primaryText: "#fff",
  secondaryText: "#b0b0b0",
  highlightText: "#00b894",
  success: "#00C358",
  error: "#F32535",
  info: "#0079F0",
  pro: "#00ACFB",
  foreground: "#F7F8FD",
  background: "rgb(25,25,25)",
  popoverBack: "#0d0d0d",
};

const radius = {
  rounded: "4px",
  oval: "18px",
};

const fontSize = {
  footnote: "0.5rem", // 9px
  subcaption: "0.75rem", // 12px
  caption: "0.875rem", // 14px
  body: "1rem", // 16px
  subtitle: "1.25rem", // 20px
  title: "1.5rem", // 24px
  headline: "2rem", // 32px
  display: "4rem", // 64px
};

const fontWeight = {
  bold: "700",
  semiBold: "500",
  normal: "400",
};

const font = {
  header: "Open Sans Condensed",
  base: `-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
  // header: `'Poppins', sans-serif`,
};

const media = {
  desktop: "1200px",
  medium: "1005px",
  tablet: "768px",
  mobile: "576px",
  tiny: "340px",
};

const spacing = {
  tiny: "6px",
  small: "12px",
  medium: "22px",
  large: "36px",
  huge: "48px",
  footer: "70px",
};

const zIndex = {
  modal: 10000,
  popover: 3000,
  mainMenu: 2500,
  sticky: 1000,
  elevated: 100,
  defined: 1,
  behind: -1,
};

const theme = {
  color,
  radius,
  fontSize,
  fontWeight,
  font,
  media,
  spacing,
  zIndex,
  maxWidth,
};

export default theme;
