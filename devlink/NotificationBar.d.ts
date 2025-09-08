import * as React from "react";
import * as Types from "./types";

declare function NotificationBar(props: {
  as?: React.ElementType;
  notificationBar?: Types.Visibility.VisibilityConditions;
  notificationBarText?: React.ReactNode;
  notificationBarButtonText?: React.ReactNode;
  notificationBarLink?: Types.Basic.Link;
}): React.JSX.Element;
