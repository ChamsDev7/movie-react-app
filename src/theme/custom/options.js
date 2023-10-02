import { createComponents } from "./components";
import { createPalette } from "./palette";
import { createShadows } from "./shadows";

export const createOptions = ({ colorPreset, contrast }) => {
  const palette = createPalette({ colorPreset, contrast });
  const components = createComponents({ palette });
  const shadows = createShadows();

  return {
    components,
    palette,
    shadows,
  };
};
