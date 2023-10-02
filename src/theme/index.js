import { createTheme as createMuiTheme } from "@mui/material/styles";
import { createOptions } from "./custom/options";

export const createTheme = (config) => {
  let theme = createMuiTheme(
    createOptions({
      colorPreset: config.colorPreset,
      contrast: config.contrast,
    })
  );

  return theme;
};
