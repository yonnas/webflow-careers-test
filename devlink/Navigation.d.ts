import * as React from "react";
import * as Types from "./types";

declare function Navigation(props: {
  as?: React.ElementType;
  customizationLeftNav?: Types.Visibility.VisibilityConditions;
  customizationStyleDarkForBlackNav?: Types.Builtin.Text;
  navTypeSalesNav?: Types.Visibility.VisibilityConditions;
  notificationBarVisibility?: Types.Visibility.VisibilityConditions;
  notificationBarText?: React.ReactNode;
  notificationBarButtonText?: React.ReactNode;
  notificationBarLink?: Types.Basic.Link;
  navTypeNormalNav?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
