import { BASIC, LIGHT, DARK } from "./themes/index";
import THEMES from "./constants/theme";

export const getTheme = (themeName) => {
  switch (themeName) {
    case THEMES.BASIC:
      return BASIC;
    case THEMES.LIGHT:
      return LIGHT;
    default:
      return DARK;
  }
};
