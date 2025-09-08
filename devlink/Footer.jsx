"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "brand-boilerplate-components--g-footer")}
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
              "brand-boilerplate-components--g-footer-column"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Product"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Product"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="platform"
                    block="inline"
                    options={{
                      href: "https://webflow.com/platform",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Platform"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="design"
                    block="inline"
                    options={{
                      href: "https://webflow.com/designer",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Design"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="edit mode"
                    block="inline"
                    options={{
                      href: "https://webflow.com/edit-mode",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Edit mode"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="interactions"
                    block="inline"
                    options={{
                      href: "https://webflow.com/interactions-animations",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Interactions"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="gsap"
                    block="inline"
                    options={{
                      href: "https://gsap.com/pricing/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.Block tag="div">{"GSAP"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="page building"
                    block="inline"
                    options={{
                      href: "https://webflow.com/page-building",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Page building"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"New"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="shared libraries"
                    block="inline"
                    options={{
                      href: "https://webflow.com/shared-libraries",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Shared Libraries"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"New"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="cms"
                    block="inline"
                    options={{
                      href: "https://webflow.com/cms",
                    }}
                  >
                    <_Builtin.Block tag="div">{"CMS"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="hosting"
                    block="inline"
                    options={{
                      href: "https://webflow.com/hosting",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Hosting"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="localization"
                    block="inline"
                    options={{
                      href: "https://webflow.com/localization",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Localization"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="security"
                    block="inline"
                    options={{
                      href: "https://webflow.com/security",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Security"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="ecommerce"
                    block="inline"
                    options={{
                      href: "https://webflow.com/ecommerce",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Ecommerce"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="analyze"
                    block="inline"
                    options={{
                      href: "https://webflow.com/analyze",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Analyze"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"New"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="optimize"
                    block="inline"
                    options={{
                      href: "https://webflow.com/optimize",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Optimize"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"New"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="seo"
                    block="inline"
                    options={{
                      href: "https://webflow.com/seo",
                    }}
                  >
                    <_Builtin.Block tag="div">{"SEO"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="webflow cloud"
                    block="inline"
                    options={{
                      href: "https://webflow.com/cloud",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Webflow Cloud"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link",
                      "brand-boilerplate-components--cc-combo"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="devlink"
                    block="inline"
                    options={{
                      href: "http://webflow.com/devlink",
                    }}
                  >
                    <_Builtin.Block tag="div">{"DevLink"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"Labs"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbad-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link",
                      "brand-boilerplate-components--cc-combo"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="figma to webflow"
                    block="inline"
                    options={{
                      href: "https://webflow.com/figma-to-webflow",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Figma to Webflow"}
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"Labs"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="accessibility"
                    block="inline"
                    options={{
                      href: "https://webflow.com/accessibility",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Accessibility"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="product section"
                    data-cta-text="ai"
                    block="inline"
                    options={{
                      href: "https://webflow.com/ai",
                    }}
                  >
                    <_Builtin.Block tag="div">{"AI"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Solutions"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Solutions"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions section"
                    data-cta-text="enterprise"
                    block="inline"
                    options={{
                      href: "https://webflow.com/enterprise",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Enterprise"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions section"
                    data-cta-text="startups"
                    block="inline"
                    options={{
                      href: "https://webflow.com/startups",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Startups"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions section"
                    data-cta-text="global alliances"
                    block="inline"
                    options={{
                      href: "https://webflow.com/solutions/global-alliances",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Global alliances"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions section"
                    data-cta-text="agencies"
                    block="inline"
                    options={{
                      href: "https://webflow.com/solutions/agencies",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Agencies"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions section"
                    data-cta-text="freelancers"
                    block="inline"
                    options={{
                      href: "https://webflow.com/solutions/freelancers",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Freelancers"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="solutions sections"
                    data-cta-text="classrooms"
                    block="inline"
                    options={{
                      href: "https://webflow.com/for/classroom",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Classrooms"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Resources"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Resources"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbdd-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="university"
                    block="inline"
                    options={{
                      href: "https://university.webflow.com",
                    }}
                  >
                    <_Builtin.Block tag="div">{"University"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbe1-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="blog"
                    block="inline"
                    options={{
                      href: "https://webflow.com/blog",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Blog"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbe5-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="customer stories"
                    block="inline"
                    options={{
                      href: "https://webflow.com/customers",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Customer stories"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbe9-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="webinars and ebooks"
                    block="inline"
                    options={{
                      href: "https://webflow.com/resources",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Webinars and ebooks"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbed-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="apps"
                    block="inline"
                    options={{
                      href: "https://webflow.com/apps",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Apps"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbf1-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="libraries"
                    block="inline"
                    options={{
                      href: "https://webflow.com/libraries",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Libraries"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbf5-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="templates"
                    block="inline"
                    options={{
                      href: "https://webflow.com/templates",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Templates"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbf9-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="developers"
                    block="inline"
                    options={{
                      href: "http://developers.webflow.com/",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Developers"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bbfd-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="made in webflow"
                    block="inline"
                    options={{
                      href: "https://webflow.com/made-in-webflow",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Made in Webflow"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc01-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="glossary"
                    block="inline"
                    options={{
                      href: "https://webflow.com/glossary",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Glossary"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc05-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="livestreams"
                    block="inline"
                    options={{
                      href: "https://webflow.com/events/livestreams",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Livestreams"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc09-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="resources section"
                    data-cta-text="The Webflow Way"
                    block="inline"
                    options={{
                      href: "https://webflow.com/webflow-way",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"The Webflow Way"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Company"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Company"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc12-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="about"
                    block="inline"
                    options={{
                      href: "https://webflow.com/about",
                    }}
                  >
                    <_Builtin.Block tag="div">{"About"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc16-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link",
                      "brand-boilerplate-components--cc-combo"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="careers"
                    block="inline"
                    options={{
                      href: "https://webflow.com/careers",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Careers"}</_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-footer-list_item-tag"
                      )}
                      tag="div"
                    >
                      {"We're Hiring"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc1c-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="press"
                    block="inline"
                    options={{
                      href: "https://webflow.com/press",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Press"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc20-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="webflow ventures"
                    block="inline"
                    options={{
                      href: "https://webflow.com/webflow-ventures",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Webflow Ventures"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc24-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="webflow shop"
                    block="inline"
                    options={{
                      href: "https://shop.webflow.com",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Webflow Shop"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc28-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="terms of service"
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
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc2c-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="privacy policy"
                    block="inline"
                    options={{
                      href: "https://webflow.com/legal/privacy",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Privacy policy"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc30-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="cookie policy"
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
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc34-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="cookie preferences"
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
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc38-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="accessibility statement"
                    block="inline"
                    options={{
                      href: "https://webflow.com/accessibility/statement",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Accessibility statement"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc3c-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="company section"
                    data-cta-text="sitemap"
                    block="inline"
                    options={{
                      href: "https://webflow.com/sitemap",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Sitemap"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Community"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Community"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc45-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="discover the community"
                    block="inline"
                    options={{
                      href: "https://webflow.com/community",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Discover the community"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc49-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="partner with webflow"
                    block="inline"
                    options={{
                      href: "https://webflow.com/partners",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Partner with Webflow"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc4d-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="certified partners"
                    block="inline"
                    options={{
                      href: "https://webflow.com/certified-partners",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Certified Partners"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc51-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="become a template designer"
                    block="inline"
                    options={{
                      href: "https://webflow.com/templates/applications",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Become a template designer"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc55-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="become an affiliate"
                    block="inline"
                    options={{
                      href: "https://webflow.com/affiliates",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Become an affiliate"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc59-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="become a global leader"
                    block="inline"
                    options={{
                      href: "https://webflow.com/community/global-leaders",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Become a Global Leader"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_8c95d049-8514-722f-487a-f7e41c54bc5d-1c54bb57"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="community section"
                    data-cta-text="find a meetup near you"
                    block="inline"
                    options={{
                      href: "https://webflow.com/events",
                    }}
                  >
                    <_Builtin.Block tag="div">
                      {"Find a meetup near you"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column",
              "brand-boilerplate-components--cc-last"
            )}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-section_title",
                  "brand-boilerplate-components--h6"
                )}
                tag="div"
              >
                {"Get help"}
              </_Builtin.Block>
              <_Builtin.List
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list"
                )}
                tag="ul"
                aria-label="Get help"
                unstyled={true}
              >
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="get help section"
                    data-cta-text="support"
                    block="inline"
                    options={{
                      href: "https://help.webflow.com/",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Support"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="get help section"
                    data-cta-text="pricing"
                    block="inline"
                    options={{
                      href: "https://webflow.com/pricing",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Pricing"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="get help section"
                    data-cta-text="status"
                    block="inline"
                    options={{
                      href: "https://status.webflow.com/",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Status"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="get help section"
                    data-cta-text="forum"
                    block="inline"
                    options={{
                      href: "https://forum.webflow.com/",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Forum"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item"
                  )}
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-link"
                    )}
                    button={false}
                    data-cta="footer CTA"
                    data-cta-position="get help section"
                    data-cta-text="wishlist"
                    block="inline"
                    options={{
                      href: "https://wishlist.webflow.com/",
                    }}
                  >
                    <_Builtin.Block tag="div">{"Wishlist"}</_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-footer-copyright"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--u-text-gray400"
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
              {"2025"}
            </_Builtin.Span>
            {" Webflow, Inc. All rights reserved"}
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-brand"
            )}
            button={false}
            aria-label="Webflow's homepage"
            data-cta="footer CTA"
            data-cta-position="footer section"
            data-cta-text="webflow icon home"
            block="inline"
            options={{
              href: "https://webflow.com/?r=0",
            }}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-brand-logo_footer"
              )}
              value="%3Csvg%20width%3D%2239%22%20height%3D%2224%22%20viewBox%3D%220%200%2039%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M38.7475%200L26.4707%2024H14.9392L20.077%2014.0534H19.8465C15.6078%2019.5558%209.28359%2023.178%200.272522%2024V14.191C0.272522%2014.191%206.03712%2013.8505%209.42596%2010.2877H0.272522V0.000189575H10.56V8.46149L10.7909%208.46054L14.9947%200.000189575H22.7749V8.40784L23.0058%208.40746L27.3673%200H38.7475Z%22%20fill%3D%22%23146EF5%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-footer-column-social"
            )}
            tag="div"
          >
            <_Builtin.List
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-footer-list",
                "brand-boilerplate-components--cc-social"
              )}
              tag="ul"
              unstyled={true}
            >
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  aria-label="Made in Webflow"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="made in webflow icon"
                  block="inline"
                  options={{
                    href: "https://webflow.com/discover/popular#recent",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2222%22%20height%3D%2214%22%20viewBox%3D%220%200%2022%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EMade%20in%20Webflow%3C%2Ftitle%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M21.9575%200.157898L14.9576%2013.8421H8.3826L11.3121%208.1708H11.1806C8.76383%2011.3081%205.15791%2013.3734%200.0200195%2013.8421V8.24927C0.0200195%208.24927%203.30685%208.05514%205.23909%206.02368H0.0200195V0.158006H5.88569V4.98244L6.01734%204.98189L8.41427%200.158006H12.8503V4.95185L12.982%204.95163L15.4688%200.157898H21.9575Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's YouTube channel"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="youtube icon"
                  block="inline"
                  options={{
                    href: "https://www.youtube.com/webflow",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20alt%3D%22%22%20width%3D%2218%22%20height%3D%2213%22%20viewBox%3D%220%200%2018%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EYouTube%3C%2Ftitle%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M17.1%201.83737C17.4829%202.32842%2017.7311%202.91085%2017.82%203.52713C17.9319%204.44288%2017.992%205.36422%2018%206.28674V7.57655C17.9924%208.50241%2017.9323%209.4271%2017.82%2010.3462C17.7311%2010.9624%2017.4829%2011.5449%2017.1%2012.0359C16.6125%2012.4946%2015.9694%2012.7518%2015.3%2012.7558C12.78%2012.9358%209%2012.9358%209%2012.9358C9%2012.9358%204.32%2012.9358%202.9%2012.7658C2.16881%2012.762%201.46173%2012.5039%200.9%2012.0359C0.515501%2011.542%200.267246%2010.9559%200.18%2010.3362C0.0680335%209.42042%200.0079376%208.49908%200%207.57655V6.28674C0.00756015%205.36088%200.0676567%204.43619%200.18%203.51713C0.268925%202.90085%200.517095%202.31843%200.9%201.82737C1.38752%201.3687%202.0306%201.11151%202.7%201.10748C5.22%200.9375%209%200.9375%209%200.9375C9%200.9375%2012.78%200.9375%2015.3%201.11747C15.9694%201.12151%2016.6125%201.3787%2017.1%201.83737ZM13%206.9375L7%203.9375V9.9375L13%206.9375Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's Twitter account"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="x icon"
                  block="inline"
                  options={{
                    href: "https://twitter.com/webflow",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2218%22%20height%3D%2216%22%20viewBox%3D%220%200%2018%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EX%3C%2Ftitle%3E%0A%3Cpath%20d%3D%22M13.9389%200.316772H16.5457L10.8507%206.82584L17.5504%2015.6832H12.3046L8.19581%2010.3113L3.49447%2015.6832H0.886112L6.97752%208.72103L0.550415%200.316772H5.92945L9.6434%205.22694L13.9389%200.316772ZM13.024%2014.1229H14.4685L5.14458%201.7951H3.59454L13.024%2014.1229Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's Facebook page"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="facebook icon"
                  block="inline"
                  options={{
                    href: "https://www.facebook.com/webflow/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2219%22%20height%3D%2220%22%20viewBox%3D%220%200%2019%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EFacebook%3C%2Ftitle%3E%0A%3Cpath%20d%3D%22M19%2010.495C18.9998%208.67955%2018.4794%206.90217%2017.5004%205.37329C16.5215%203.84441%2015.1249%202.62804%2013.4761%201.86821C11.8273%201.10837%209.99534%200.836881%208.19704%201.08588C6.39875%201.33487%204.70945%202.09393%203.32915%203.27318C1.94885%204.45243%200.935345%206.00249%200.408625%207.73985C-0.118094%209.47721%20-0.135971%2011.3291%200.357111%2013.0763C0.850194%2014.8235%201.83359%2016.3929%203.19087%2017.5985C4.54814%2018.8042%206.22247%2019.5958%208.01563%2019.8794V13.2413H5.60342V10.495H8.01563V8.40183C8.01563%206.02129%209.43429%204.70554%2011.6035%204.70554C12.3161%204.71576%2013.027%204.77767%2013.7307%204.89079V7.22937H12.5321C12.1713%207.18148%2011.8062%207.27883%2011.5172%207.50003C11.2281%207.72123%2011.0388%208.04817%2010.9907%208.40896C10.9771%208.50999%2010.975%208.61224%2010.9844%208.71375V10.495H13.6167L13.1955%2013.2413H10.9788V19.8794C13.2145%2019.5271%2015.251%2018.3882%2016.7215%2016.6677C18.1921%2014.9472%2019.0001%2012.7583%2019%2010.495V10.495Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's Linkedin page"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="linkedin icon"
                  block="inline"
                  options={{
                    href: "https://www.linkedin.com/company/webflow-inc-",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3ELinkedin%3C%2Ftitle%3E%0A%3Cpath%20d%3D%22M16.2763%200.5H0.76377C0.33877%200.5%200.0200195%200.81875%200.0200195%201.24375V16.8625C0.0200195%2017.1812%200.33877%2017.5%200.76377%2017.5H16.3825C16.8075%2017.5%2017.1263%2017.1813%2017.1263%2016.7563V1.24375C17.02%200.81875%2016.7013%200.5%2016.2763%200.5ZM5.01377%2014.95H2.57002V6.875H5.12002V14.95H5.01377ZM3.84502%205.8125C2.99502%205.8125%202.35752%205.06875%202.35752%204.325C2.35752%203.475%202.99502%202.8375%203.84502%202.8375C4.69502%202.8375%205.33252%203.475%205.33252%204.325C5.22627%205.06875%204.58877%205.8125%203.84502%205.8125ZM14.47%2014.95H11.92V11.0187C11.92%2010.0625%2011.92%208.89375%2010.645%208.89375C9.37002%208.89375%209.15752%209.95625%209.15752%2011.0187V15.0562H6.60752V6.875H9.05127V7.9375C9.37002%207.3%2010.22%206.6625%2011.3888%206.6625C13.9388%206.6625%2014.3638%208.3625%2014.3638%2010.4875V14.95H14.47Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's Instagram page"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="instagram icon"
                  block="inline"
                  options={{
                    href: "https://www.instagram.com/webflow/",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2218%22%20height%3D%2219%22%20viewBox%3D%220%200%2018%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EInstagram%3C%2Ftitle%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M5.28999%200.991399C6.24999%200.941406%206.55999%200.941406%208.99999%200.941406C11.44%200.941406%2011.75%200.941406%2012.72%200.991399C13.4651%201.00749%2014.2022%201.14947%2014.9%201.41134C16.1042%201.8878%2017.0518%202.84977%2017.51%204.06096C17.7719%204.75865%2017.9139%205.49561%2017.93%206.24065C17.98%207.20051%2017.98%207.51047%2017.98%209.95012C17.98%2011.4375%2017.9614%2012.1185%2017.9469%2012.65C17.9376%2012.9903%2017.93%2013.2693%2017.93%2013.6596C17.9139%2014.4046%2017.7719%2015.1416%2017.51%2015.8393C17.0426%2017.0469%2016.0878%2018.0016%2014.88%2018.4689C14.1822%2018.7308%2013.4451%2018.8728%2012.7%2018.8889C11.74%2018.9388%2011.43%2018.9388%208.99027%2018.9388H8.98999C7.50235%2018.9388%206.82135%2018.9203%206.28974%2018.9058C5.94941%2018.8965%205.67031%2018.8889%205.27999%2018.8889C4.53485%2018.8728%203.79779%2018.7308%203.1%2018.4689C1.89018%2017.9994%200.935014%2017.0407%200.469999%2015.8293C0.208096%2015.1316%200.0660938%2014.3946%200.0499999%2013.6496C0%2012.6897%200%2012.3798%200%209.94012C0%207.50047%200%207.19052%200.0499999%206.22065C0.0660938%205.47561%200.208096%204.73866%200.469999%204.04096C0.939608%202.83132%201.8984%201.87629%203.11%201.41134C3.80779%201.14947%204.54485%201.00749%205.28999%200.991399ZM12.6406%202.61249C11.6906%202.5625%2011.4006%202.5625%209.00061%202.5625V2.5825C7.52013%202.5825%206.84346%202.60136%206.32148%202.61592C5.99376%202.62505%205.72702%202.63249%205.36062%202.63249C4.79035%202.63982%204.22553%202.74465%203.69062%202.94245C2.91752%203.24733%202.30556%203.85921%202.00062%204.6322C1.8028%205.16704%201.69796%205.73177%201.69062%206.30196C1.64062%207.25183%201.64062%207.53179%201.64062%209.94144C1.64062%2011.4217%201.65949%2012.0983%201.67405%2012.6202C1.68319%2012.9479%201.69062%2013.2146%201.69062%2013.5809C1.69796%2014.1511%201.8028%2014.7158%202.00062%2015.2507C2.30556%2016.0237%202.91752%2016.6355%203.69062%2016.9404C4.22553%2017.1382%204.79035%2017.2431%205.36062%2017.2504C6.31062%2017.3004%206.59061%2017.3004%209.00061%2017.3004C10.4811%2017.3004%2011.1578%2017.2815%2011.6797%2017.267C12.0075%2017.2578%2012.2742%2017.2504%2012.6406%2017.2504C13.2109%2017.2431%2013.7757%2017.1382%2014.3106%2016.9404C15.0837%2016.6355%2015.6957%2016.0237%2016.0006%2015.2507C16.1984%2014.7158%2016.3033%2014.1511%2016.3106%2013.5809C16.3606%2012.6311%2016.3606%2012.3511%2016.3606%209.94144C16.3606%208.46117%2016.3417%207.78459%2016.3272%207.26269C16.318%206.93502%2016.3106%206.66832%2016.3106%206.30196C16.3033%205.73177%2016.1984%205.16704%2016.0006%204.6322C15.6957%203.85921%2015.0837%203.24733%2014.3106%202.94245C13.7769%202.73783%2013.212%202.62622%2012.6406%202.61249Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.37891%209.93965C4.37891%207.38846%206.44735%205.32031%208.9989%205.32031C10.2242%205.32031%2011.3993%205.80699%2012.2657%206.67329C13.1321%207.53958%2013.6189%208.71453%2013.6189%209.93965C13.6189%2012.4908%2011.5505%2014.559%208.9989%2014.559C6.44735%2014.559%204.37891%2012.4908%204.37891%209.93965ZM6%209.94043C6%2011.5973%207.34315%2012.9404%209%2012.9404C9.79565%2012.9404%2010.5587%2012.6244%2011.1213%2012.0617C11.6839%2011.4991%2012%2010.7361%2012%209.94043C12%208.28358%2010.6569%206.94043%209%206.94043C7.34315%206.94043%206%208.28358%206%209.94043Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.7988%206.2225C14.3952%206.2225%2014.8788%205.73897%2014.8788%205.1425C14.8788%204.54603%2014.3952%204.0625%2013.7988%204.0625C13.2023%204.0625%2012.7188%204.54603%2012.7188%205.1425C12.7188%205.73897%2013.2023%206.2225%2013.7988%206.2225Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-footer-list_item"
                )}
              >
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-footer-list_item-link"
                  )}
                  button={false}
                  rel="noopener"
                  aria-label="Webflow's TikTok"
                  data-cta="footer CTA"
                  data-cta-position="footer section"
                  data-cta-text="tiktok icon"
                  block="inline"
                  options={{
                    href: "https://www.tiktok.com/@webflow",
                    target: "_blank",
                  }}
                >
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-footer-list_item-social"
                    )}
                    value="%3Csvg%20width%3D%2220%22%20height%3D%2221%22%20viewBox%3D%220%200%2020%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3ETikTok%3C%2Ftitle%3E%0A%3Cpath%20d%3D%22M8.30373%208.65756V11.7284C7.93253%2011.6265%207.54412%2011.6126%207.16708%2011.6877C6.79004%2011.7628%206.43401%2011.9251%206.12521%2012.1625C5.81641%2012.3999%205.56272%2012.7064%205.38283%2013.0595C5.20293%2013.4125%205.10143%2013.8031%205.0858%2014.2024C5.06468%2014.5462%205.11448%2014.8907%205.23187%2015.2128C5.34925%2015.535%205.53151%2015.8271%205.76637%2016.0699C6.00124%2016.3126%206.28328%2016.5002%206.59355%2016.6199C6.90381%2016.7398%207.23512%2016.7891%207.56521%2016.7646C9.39728%2016.7646%2010.0446%2015.4246%2010.0446%2014.1678V2.00391H12.9611C13.4572%205.216%2014.9992%205.96137%2017.0661%206.30587V9.3834C17.0661%209.3834%2014.6141%209.20193%2013.0437%207.96915V14.0488C13.0421%2016.7998%2011.4755%2019.8706%207.5872%2019.8706C3.97883%2019.8706%202.13281%2016.688%202.13281%2014.0204C2.15583%2013.23%202.33952%2012.4536%202.67179%2011.7426C3.00405%2011.0315%203.47735%2010.4018%204.06045%209.89507C4.64356%209.38832%205.32323%209.01601%206.05464%208.80271C6.78607%208.5894%207.5526%208.53993%208.30373%208.65756Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
