"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ScrollingJob.module.css";

export function ScrollingJob({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  department = "This is some text inside of a div block.",
  name = "This is some text inside of a div block.",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "career_positons-link")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "flex-space-between")}
        tag="div"
      >
        <_Builtin.Block tag="div">{department}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "h4", "button-icon_top-right")}
          tag="div"
        >
          {"↗"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "h4-3")} tag="div">
        {name}
      </_Builtin.Block>
    </_Component>
  );
}
