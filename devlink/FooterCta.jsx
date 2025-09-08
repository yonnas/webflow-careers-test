"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterCta.module.css";

export function FooterCta({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "cc-footer_cta")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "grid",
            "lg-col-3",
            "md-col-1",
            "cc-gap-96",
            "cc-align-bottom"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h0", "u-w-90")}
            id={_utils.cx(
              _styles,
              "w-node-_185bf79f-16c2-6f93-8d99-dacd8c12169d-bab26cb5"
            )}
            tag="h2"
          >
            {"Get started for free"}
          </_Builtin.Heading>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_185bf79f-16c2-6f93-8d99-dacd8c12169f-bab26cb5"
            )}
            tag="div"
          >
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-l", "u-text-gray200")}
            >
              {
                "Try Webflow for as long as you like with our free Starter plan. Purchase a paid Site plan to publish, host, and unlock additional features."
              }
              <br />
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "new_button", "u-mt-32", "u-mb-16")}
              button={false}
              data-signup-cta="1"
              id="continue-bottom"
              block="inline"
              options={{
                href: "https://webflow.com/dashboard/signup",
              }}
            >
              <_Builtin.Block tag="div">
                {"Get started "}
                <_Builtin.Span className={_utils.cx(_styles, "button-subtext")}>
                  {"— it's free"}
                </_Builtin.Span>
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "cta-website")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "cta-image")}
            loading="eager"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/64f8f2818d8314c16c584367/650cc756a43c4f10abb62510_prefooter_cta-img.jpg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "cta-gradient")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
