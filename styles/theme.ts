import { DefaultTheme } from "styled-components";

const deviceSizes = {
  tablet: "767px",
};

const theme: DefaultTheme = {
  device: {
    tablet: `(max-width: ${deviceSizes.tablet})`,
  },
  basicFontColor: "#1d1d1d",
};

export default theme;
