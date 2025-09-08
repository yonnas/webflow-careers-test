"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CareersCtaSection.module.css";

export function CareersCtaSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "u-bg-gray900", "u-text-white")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "grid", "cc-gap-64", "sm-col-1")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "u-w-80")} tag="div">
              <_Builtin.Heading className={_utils.cx(_styles, "h2")} tag="h2">
                {"All fired up? That’s a goodsign."}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_9888e540-0bdb-488b-4068-6aff4797c4dd-4797c4d6"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-l", "u-mb-32")}
            >
              {
                "For the kind and candid. For the intentional. For the doers, the fixers, the leaders, and the dreamers — Webflow is made by and for you."
              }
              <br />
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={false}
              block="inline"
              options={{
                href: "http://webflow.com/careers/roles",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "u-d-inline-block")}
                tag="div"
              >
                {"Join us"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "button-icon_right")}
                tag="div"
              >
                {"→"}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
