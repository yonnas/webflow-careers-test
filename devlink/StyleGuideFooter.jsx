"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./StyleGuideFooter.module.css";

export function StyleGuideFooter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "u-p-2",
        "u-bg-black",
        "u-text-white",
        "u-text-center",
        "u-mt-auto"
      )}
      tag="footer"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block tag="div">
          {"View full documentation and notes on the boilerplate project in "}
          <_Builtin.Link
            button={false}
            block=""
            options={{
              href: "#",
              target: "_blank",
            }}
          >
            {"Confluence."}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
