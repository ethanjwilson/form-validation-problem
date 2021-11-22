import React from "react";
import { styled } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "inline-flex",
  flexDirection: "column",
  backgroundColor: "$blue4",
  borderRadius: 4,
  boxShadow: `0 2px 10px rgba(0 0 0 / 0.1)`,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  color: "$blue12",
  padding: "14px 16px",
  fontSize: 16,
  lineHeight: 1,
  marginTop: 1,
  "&:first-child": { marginTop: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  "&:last-child": { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
  "&:hover": { backgroundColor: "$blue3" },
  "&[data-state=on]": { backgroundColor: "$blue4", color: "$blue11" },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
});

// Exports
export const ToggleGroup = StyledToggleGroup;
export const ToggleGroupItem = StyledItem;
