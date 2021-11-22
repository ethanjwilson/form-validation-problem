import { styled } from "@stitches/react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "white",
  width: 26,
  height: 26,
  marginRight: 10,
  borderRadius: "100%",
  boxShadow: `0 2px 10px rgba(0 0 0 / 0.1)`,
  "&:hover": { backgroundColor: "$blue10" },
  "&:focus": { boxShadow: `0 0 0 1px rgba(0 0 0 / 0.2)` },

  variants: {
    color: {
      blue: {
        "&:hover": { backgroundColor: "$blue10" },
      },
      green: {
        "&:hover": { backgroundColor: "$green10" },
      },
      red: {
        "&:hover": { backgroundColor: "$red10" },
      },
      black: {
        "&:hover": { backgroundColor: "black" },
      },
      brown: {
        "&:hover": { backgroundColor: "$brown10" },
      },
    },
  },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 16,
    height: 16,
    borderRadius: "50%",
    backgroundColor: "$blue10",
  },
  variants: {
    color: {
      blue: {
        "&::after": { backgroundColor: "$blue10" },
      },
      green: {
        "&::after": { backgroundColor: "$green10" },
      },
      red: {
        "&::after": { backgroundColor: "$red10" },
      },
      black: {
        "&::after": { backgroundColor: "black" },
      },
      brown: {
        "&::after": { backgroundColor: "$brown10" },
      },
    },
  },
});

// Exports
export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;
