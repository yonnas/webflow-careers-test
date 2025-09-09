import * as React from "react";
import * as Types from "./types";

declare function JobSlider(props: {
  as?: React.ElementType;
  domain?: Types.Builtin.Text;
  jobIDs?: Types.Builtin.Text;
  greenhouseSlug?: Types.Builtin.Text;
  className?: Types.Builtin.Text;
  title?: Types.Builtin.Text;
  showArrows?: Types.Boolean.Boolean;
  autoPlay?: Types.Boolean.Boolean;
  autoPlayInterval?: number;
}): React.JSX.Element;
