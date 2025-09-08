import * as React from "react";
import * as Types from "./types";

declare function Job(props: {
  as?: React.ElementType;
  jobs?: Types.Devlink.Slot;
  title?: React.ReactNode;
  location?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
