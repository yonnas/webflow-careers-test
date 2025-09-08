import * as React from "react";
import * as Types from "./types";

declare function Department(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  jobs?: Types.Devlink.Slot;
  department?: Types.Devlink.Slot;
}): React.JSX.Element;
