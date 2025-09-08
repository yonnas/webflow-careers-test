"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FooterCondensed.module.css";

export function FooterCondensed({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "brand-boilerplate-components--g-condensed-footer"
      )}
      tag="footer"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "brand-boilerplate-components--g-footer_container"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-footer-column_wrapper"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column",
              "brand-boilerplate-components--cc-logo"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-condensed-footer-brand"
              )}
              button={false}
              aria-label="Webflow's homepage"
              block="inline"
              options={{
                href: "https://webflow.com/?r=0",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-brand-logo_condensed_footer"
                )}
                value="%3Csvg%20width%3D%2265%22%20height%3D%2242%22%20viewBox%3D%220%200%2087%2054%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EWebflow%3C%2Ftitle%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M86.5687%200L58.9458%2054H33L44.5602%2031.6201H44.0415C34.5044%2044.0005%2020.2749%2052.1505%200%2054V31.9298C0%2031.9298%2012.9703%2031.1637%2020.5952%2023.1472H0V0.000426544H23.1468V19.0383L23.6663%2019.0362L33.125%200.000426544H50.6303V18.9176L51.1498%2018.9168L60.9633%200H86.5687Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-condensed-footer-column"
            )}
            tag="div"
          >
            <_Builtin.List
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-condensed-footer-list"
              )}
              tag="ul"
              aria-label="Links"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-condensed-footer-list_item"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_2d6856d9-e105-5790-1d65-98730c9fad48-0c9fad40"
                )}
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "https://webflow.com/legal/terms",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Terms of Service"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-condensed-footer-list_item"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_2d6856d9-e105-5790-1d65-98730c9fad4c-0c9fad40"
                )}
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "https://webflow.com/legal/privacy",
                  }}
                >
                  <_Builtin.Block tag="div">{"Privacy policy"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-condensed-footer-list_item"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_2d6856d9-e105-5790-1d65-98730c9fad50-0c9fad40"
                )}
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "https://webflow.com/legal/cookie-policy",
                  }}
                >
                  <_Builtin.Block tag="div">{"Cookie policy"}</_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-condensed-footer-list_item"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_2d6856d9-e105-5790-1d65-98730c9fad54-0c9fad40"
                )}
              >
                <_Builtin.Link
                  button={false}
                  id="show-cookie-preferences"
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block tag="div">
                    {"Cookie preferences"}
                  </_Builtin.Block>
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-condensed-footer-column",
              "brand-boilerplate-components--u-text-gray300"
            )}
            tag="div"
          >
            {"© "}
            <_Builtin.Span
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--footer-copyright_year"
              )}
            >
              {"2024"}
            </_Builtin.Span>
            {" Webflow, Inc. All rights reserved"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
