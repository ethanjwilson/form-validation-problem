// stitches.config.ts

import { gray, blue, red, green, brown } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: { ...gray, ...blue, ...red, ...green, ...brown },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),
  },
});
