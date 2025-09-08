import * as React from "react";
import * as Types from "./types";

declare function JobsList(props: {
  as?: React.ElementType;
  department?: Types.Devlink.Slot;
  title?: React.ReactNode;
  jobs?: Types.Devlink.Slot;
}): React.JSX.Element;
