import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    device: {
      tablet: string;
    };
    basicFontColor: string;
  }
}
