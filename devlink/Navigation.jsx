"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-875":{"id":"e-875","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-617","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-876"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b76ffef-700b-4a12-97a3-726b2e6510a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b76ffef-700b-4a12-97a3-726b2e6510a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715182084660,"origin":["68b8680cd1532136f92279cf","e-106"]},"e-876":{"id":"e-876","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-618","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-875"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b76ffef-700b-4a12-97a3-726b2e6510a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b76ffef-700b-4a12-97a3-726b2e6510a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715182084660,"origin":["68b8680cd1532136f92279cf","e-107"]},"e-877":{"id":"e-877","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-622","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-878"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7b76ffef-700b-4a12-97a3-726b2e651168","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7b76ffef-700b-4a12-97a3-726b2e651168","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715182084660,"origin":["68b8680cd1532136f92279cf","e-98"]},"e-867":{"id":"e-867","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-615","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1629"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".brand-boilerplate-components--g-modal_x","originalId":"138bca38-3d83-6506-3cf2-a0e8ac86919a","appliesTo":"CLASS"},"targets":[{"selector":".brand-boilerplate-components--g-modal_x","originalId":"138bca38-3d83-6506-3cf2-a0e8ac86919a","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648755378403,"origin":["68b8680cd1532136f92279cf","e-72"]},"e-869":{"id":"e-869","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-616","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1631"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".brand-boilerplate-components--g-modal_trigger","originalId":"138bca38-3d83-6506-3cf2-a0e8ac8691df","appliesTo":"CLASS"},"targets":[{"selector":".brand-boilerplate-components--g-modal_trigger","originalId":"138bca38-3d83-6506-3cf2-a0e8ac8691df","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1648755364936,"origin":["68b8680cd1532136f92279cf","e-74"]},"e-872":{"id":"e-872","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-621","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-871"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".brand-boilerplate-components--g-nav_menu-section","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d317","appliesTo":"CLASS"},"targets":[{"selector":".brand-boilerplate-components--g-nav_menu-section","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d317","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714082163177,"origin":["68b8680cd1532136f92279cf","e-100"]},"e-873":{"id":"e-873","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-619","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-874"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".brand-boilerplate-components--g-nav_menu-dropdown_wrapper","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d400","appliesTo":"CLASS"},"targets":[{"selector":".brand-boilerplate-components--g-nav_menu-dropdown_wrapper","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d400","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713878543021,"origin":["68b8680cd1532136f92279cf","e-104"]},"e-874":{"id":"e-874","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-620","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-873"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".brand-boilerplate-components--g-nav_menu-dropdown_wrapper","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d400","appliesTo":"CLASS"},"targets":[{"selector":".brand-boilerplate-components--g-nav_menu-dropdown_wrapper","originalId":"57b478ec-7b72-307a-c1ca-00c788d9d400","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1713878543021,"origin":["68b8680cd1532136f92279cf","e-105"]}},"actionLists":{"a-617":{"id":"a-617","origin":["68b8680cd1532136f92279cf","a-46"],"title":"Global Nav - Navbar (new) - Open","actionItemGroups":[{"actionItems":[{"id":"a-617-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-button-icon","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e6"]},"value":0}}]},{"actionItems":[{"id":"a-617-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-nav_menu-overlay","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c07701"]},"value":"block"}},{"id":"a-617-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-button-icon","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e6"]},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636526974861},"a-618":{"id":"a-618","origin":["68b8680cd1532136f92279cf","a-47"],"title":"Global Nav - Navbar (new) - Close","actionItemGroups":[{"actionItems":[{"id":"a-618-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-nav_menu-overlay","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c07701"]},"value":"none"}},{"id":"a-618-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-button-icon","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e6"]},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636526974861},"a-622":{"id":"a-622","origin":["68b8680cd1532136f92279cf","a-51"],"title":"Global Nav - Resetting subnav\'s wrapper","actionItemGroups":[{"actionItems":[{"id":"a-622-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".brand-boilerplate-components--g-nav_menu-container-bg","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e1"]},"widthValue":100,"heightValue":100,"widthUnit":"%","heightUnit":"%","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1714146352906},"a-615":{"id":"a-615","origin":["68b8680cd1532136f92279cf","a-36"],"title":"Global Nav - Modal - Close 2","actionItemGroups":[{"actionItems":[{"id":"a-615-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":500,"target":{"useEventTarget":"PARENT","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-615-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".brand-boilerplate-components--g-nav-modal_wrap","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076d3"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1566857602884},"a-616":{"id":"a-616","origin":["68b8680cd1532136f92279cf","a-37"],"title":"Global Nav - Modal - Open 2","actionItemGroups":[{"actionItems":[{"id":"a-616-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".brand-boilerplate-components--g-nav-modal_wrap","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076d3"]},"value":"none"}},{"id":"a-616-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"value":0,"unit":""}},{"id":"a-616-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"xValue":0.9,"yValue":0.9,"locked":true}}]},{"actionItems":[{"id":"a-616-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".brand-boilerplate-components--g-nav-modal_wrap","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076d3"]},"value":"flex"}},{"id":"a-616-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"xValue":0.75,"yValue":0.75,"locked":true}}]},{"actionItems":[{"id":"a-616-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-616-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outExpo","duration":300,"target":{"useEventTarget":"SIBLINGS","selector":".brand-boilerplate-components--g-modal_box","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076da"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1566857602884},"a-621":{"id":"a-621","origin":["68b8680cd1532136f92279cf","a-50"],"title":"Global Nav - Subnav in","actionItemGroups":[{"actionItems":[{"id":"a-621-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-621-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-621-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"value":1,"unit":""}},{"id":"a-621-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1713914706707},"a-619":{"id":"a-619","origin":["68b8680cd1532136f92279cf","a-48"],"title":"Global Nav - Dropdown - Open 3","actionItemGroups":[{"actionItems":[{"id":"a-619-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-619-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-619-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"value":0,"unit":""}},{"id":"a-619-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-overlay","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c07701"]},"value":"none"}}]},{"actionItems":[{"id":"a-619-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-overlay","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c07701"]},"value":"block"}},{"id":"a-619-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}},{"id":"a-619-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-dropdown-icon","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076d1"]},"xValue":null,"zValue":180,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}},{"id":"a-619-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":50,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-619-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":50,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1636527615733},"a-620":{"id":"a-620","origin":["68b8680cd1532136f92279cf","a-49"],"title":"Global Nav - Dropdown - Close 2","actionItemGroups":[{"actionItems":[{"id":"a-620-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-620-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-section","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076e4"]},"value":0,"unit":""}},{"id":"a-620-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}},{"id":"a-620-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-overlay","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c07701"]},"value":"none"}},{"id":"a-620-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--g-nav_menu-dropdown-icon","selectorGuids":["5adcc928-1eb4-10b3-c33a-095ed8c076d1"]},"xValue":null,"zValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1636527615733}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navigation({
  as: _Component = _Builtin.Block,
  customizationLeftNav = true,
  customizationStyleDarkForBlackNav,
  navTypeSalesNav = false,
  notificationBarVisibility,
  notificationBarText = "This is where the title of the notification goes.",
  notificationBarButtonText = "Learn more",

  notificationBarLink = {
    href: "#",
  },

  navTypeNormalNav = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "brand-boilerplate-components--g-nav-wrapper"
      )}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "brand-boilerplate-components--g-nav-wrapper-position"
        )}
        tag="div"
        id="new-g-nav"
      >
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-nav-skip"
          )}
          button={false}
          id="skip-link"
          block=""
          options={{
            href: "#main",
          }}
        >
          {"Skip to main content"}
        </_Builtin.Link>
        <_Builtin.NavbarWrapper
          className={_utils.cx(_styles, "brand-boilerplate-components--g-nav")}
          data-w-id="7b76ffef-700b-4a12-97a3-726b2e6510a5"
          tag="div"
          theme={customizationStyleDarkForBlackNav}
          config={{
            easing: "ease-out-quart",
            easing2: "ease",
            duration: 400,
            docHeight: false,
            noScroll: false,
            animation: "default",
            collapse: "medium",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-main_nav_container"
            )}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-brand"
              )}
              data-cta="top nav CTA"
              data-cta-position="top nav section"
              data-cta-text="webflow"
              options={{
                href: "https://webflow.com/?r=0",
              }}
            >
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-brand-logo"
                )}
                value="%3Csvg%20width%3D%22108%22%20height%3D%2219%22%20viewBox%3D%220%200%20108%2019%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EWebflow%3C%2Ftitle%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.8562%200.5L19.6486%2018.5H11L14.8534%2011.04H14.6805C11.5015%2015.1668%206.7583%2017.8835%200%2018.5V11.1433C0%2011.1433%204.32345%2010.8879%206.86508%208.21575H0V0.500142H7.71561V6.84612L7.88878%206.84541L11.0417%200.500142H16.8768V6.80588L17.0499%206.8056L20.3211%200.5H28.8562Z%22%20fill%3D%22%23146EF5%22%2F%3E%0A%3Cpath%20d%3D%22M79.0662%2016.5132H81.5511V2.25H79.0662V16.5132Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M65.3675%2016.3675C65.9075%2016.592%2066.4567%2016.7043%2067.015%2016.7043C67.9373%2016.7043%2068.7626%2016.4798%2069.4908%2016.0307C70.2189%2015.5817%2070.7833%2014.9628%2071.1838%2014.1739C71.5843%2013.379%2071.7845%2012.4778%2071.7845%2011.4705C71.7845%2010.4632%2071.5782%209.56211%2071.1656%208.76718C70.7529%207.97226%2070.1795%207.35634%2069.4452%206.91943C68.711%206.47646%2067.8766%206.25801%2066.9421%206.26407C66.3475%206.26407%2065.7771%206.37937%2065.2309%206.60996C64.6848%206.84055%2064.2297%207.16823%2063.8656%207.593C63.8375%207.62534%2063.8102%207.658%2063.7837%207.69099V2.2591H61.2897V16.5132H63.7655L63.7605%2015.1816C63.8245%2015.2601%2063.893%2015.3368%2063.9657%2015.4118C64.3601%2015.8184%2064.8274%2016.1369%2065.3675%2016.3675ZM67.9161%2014.0647C67.5095%2014.3135%2067.0453%2014.4379%2066.5234%2014.4379C66.0076%2014.4379%2065.5343%2014.3104%2065.1035%2014.0556C64.6726%2013.7946%2064.3298%2013.4397%2064.0749%2012.9906C63.8261%2012.5416%2063.7017%2012.0318%2063.7017%2011.4614C63.6957%2010.891%2063.817%2010.3813%2064.0658%209.93227C64.3207%209.47716%2064.6635%209.1252%2065.0944%208.87641C65.5252%208.62155%2066.0016%208.49715%2066.5234%208.50322C67.0453%208.49715%2067.5095%208.61851%2067.9161%208.86731C68.3287%209.11003%2068.6442%209.45895%2068.8627%209.91406C69.0872%2010.3631%2069.1995%2010.8789%2069.1995%2011.4614C69.1995%2012.044%2069.0872%2012.5598%2068.8627%2013.0088C68.6442%2013.4579%2068.3287%2013.8098%2067.9161%2014.0647Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M32.4562%203.11471H35.2961L37.8365%2012.3923L40.539%203.11471H42.9056L45.8365%2012.2061L48.2759%203.11471H50.8791L47.038%2016.5132H44.5895L41.6091%207.63159L38.8733%2016.5132H36.3975L32.4562%203.11471Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.0729%2016.7498C54.0837%2016.7559%2053.1917%2016.5374%2052.3968%2016.0945C51.6079%2015.6454%2050.986%2015.0234%2050.5308%2014.2285C50.0818%2013.4336%2049.8573%2012.5264%2049.8573%2011.5069C49.8573%2010.5178%2050.0879%209.62279%2050.5491%208.8218C51.0102%208.0208%2051.6352%207.39578%2052.4241%206.94674C53.213%206.4977%2054.0928%206.27318%2055.0637%206.27318C56.156%206.27318%2057.1117%206.5159%2057.9309%207.00135C58.7562%207.4868%2059.3721%208.17554%2059.7787%209.06755C60.1913%209.9535%2060.34%2010.9699%2060.2247%2012.1168H52.428C52.4498%2012.5737%2052.5638%2012.9894%2052.77%2013.3638C53.0006%2013.7764%2053.3222%2014.098%2053.7348%2014.3286C54.1475%2014.5592%2054.6086%2014.6745%2055.1184%2014.6745C55.5067%2014.6684%2055.8678%2014.6017%2056.2015%2014.4743C56.5353%2014.3408%2056.8174%2014.1618%2057.048%2013.9372C57.2847%2013.7127%2057.4516%2013.4579%2057.5487%2013.1727H60.1519C59.9941%2013.8705%2059.6786%2014.4925%2059.2053%2015.0386C58.7319%2015.5787%2058.1373%2016.0004%2057.4212%2016.3038C56.7052%2016.6072%2055.9224%2016.7559%2055.0729%2016.7498ZM52.7791%209.61369C52.6337%209.86727%2052.5329%2010.1403%2052.4768%2010.4329H57.6451C57.6076%2010.0633%2057.4935%209.72652%2057.3029%209.42254C57.0844%209.06452%2056.7871%208.78842%2056.4109%208.59424C56.0347%208.39399%2055.6099%208.29387%2055.1366%208.29387C54.6329%208.29387%2054.1748%208.40916%2053.7621%208.63975C53.3495%208.87034%2053.0218%209.19499%2052.7791%209.61369Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M73.6141%206.48253C73.6141%205.6694%2073.7991%204.94729%2074.1693%204.3162C74.5394%203.67905%2075.0583%203.18449%2075.7258%202.83254C76.3993%202.47452%2077.1852%202.28944%2078.0832%202.27731V4.48914C77.6645%204.49521%2077.3065%204.5832%2077.0092%204.75311C76.7179%204.91695%2076.4934%205.15664%2076.3356%205.47218C76.1904%205.76268%2076.112%206.09946%2076.1005%206.48253H78.0286V8.58514H76.099V16.5132H73.6141V8.58514H72.0121V6.48253H73.6141Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M87.868%2016.7316C86.8546%2016.7316%2085.9474%2016.5101%2085.1464%2016.0672C84.3515%2015.6181%2083.7265%2014.9992%2083.2714%2014.2103C82.8223%2013.4154%2082.5978%2012.5143%2082.5978%2011.5069C82.5978%2010.4936%2082.8223%209.58942%2083.2714%208.79449C83.7265%207.99349%2084.3515%207.37151%2085.1464%206.92854C85.9474%206.48556%2086.8546%206.26407%2087.868%206.26407C88.8874%206.26407%2089.7977%206.48556%2090.5986%206.92854C91.4057%207.37151%2092.0338%207.99046%2092.4828%208.78539C92.9318%209.58031%2093.1594%2010.4875%2093.1655%2011.5069C93.1594%2012.5143%2092.9318%2013.4154%2092.4828%2014.2103C92.0398%2014.9992%2091.4148%2015.6181%2090.6077%2016.0672C89.8007%2016.5101%2088.8874%2016.7316%2087.868%2016.7316ZM87.868%2014.447C88.402%2014.447%2088.8753%2014.3256%2089.2879%2014.0829C89.7006%2013.8341%2090.0191%2013.4882%2090.2437%2013.0452C90.4682%2012.5962%2090.5804%2012.0834%2090.5804%2011.5069C90.5804%2010.9244%2090.4682%2010.4086%2090.2437%209.95957C90.0191%209.51053%2089.7006%209.16465%2089.2879%208.92192C88.8753%208.67313%2088.402%208.54873%2087.868%208.54873C87.3401%208.54873%2086.8698%208.67313%2086.4571%208.92192C86.0506%209.16465%2085.735%209.51053%2085.5105%209.95957C85.286%2010.4086%2085.1768%2010.9244%2085.1828%2011.5069C85.1828%2012.0834%2085.2951%2012.5962%2085.5196%2013.0452C85.7502%2013.4882%2086.0657%2013.8341%2086.4662%2014.0829C86.8728%2014.3256%2087.3401%2014.447%2087.868%2014.447Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M95.8506%206.48253H93.0836L96.0782%2016.5132H98.4994L100.469%2010.1066L102.595%2016.5132H104.98L107.984%206.48253H105.481L103.777%2012.726L101.894%206.48253H99.4733L97.5995%2012.8635L95.8506%206.48253Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-nav_menu-mobile"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-nav_menu-right",
                  "brand-boilerplate-components--cc-mobile"
                )}
                tag="div"
              >
                <_Builtin.NavbarLink
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-nav_menu-link_wrapper-mobile"
                  )}
                  data-cta="top nav CTA"
                  data-cta-position="top nav section"
                  data-cta-text="contact sales"
                  options={{
                    href: "https://webflow.com/contact-sales",
                  }}
                >
                  {"Contact sales"}
                </_Builtin.NavbarLink>
              </_Builtin.Block>
              {customizationLeftNav ? (
                <_Builtin.NavbarButton
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-nav_menu-button"
                  )}
                  tag="div"
                  aria-label="Menu"
                  id="g-nav-icon"
                >
                  <_Builtin.NotSupported _atom="Animation" />
                </_Builtin.NavbarButton>
              ) : null}
            </_Builtin.Block>
            <_Builtin.NavbarMenu
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-nav_menu"
              )}
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-nav_menu-mobile-flex"
                )}
                tag="div"
              >
                {customizationLeftNav ? (
                  <_Builtin.List
                    className={_utils.cx(
                      _styles,
                      "brand-boilerplate-components--g-nav_menu-left"
                    )}
                    tag="ul"
                    unstyled={true}
                  >
                    <_Builtin.ListItem
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-list_item"
                      )}
                    >
                      <_Builtin.DropdownWrapper
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--g-nav_menu-dropdown_wrapper"
                        )}
                        tag="div"
                        delay={0}
                        hover={false}
                      >
                        <_Builtin.DropdownToggle
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown_toggle"
                          )}
                          tag="div"
                          data-cta="top nav CTA"
                          data-cta-position="top nav section"
                          data-cta-text="platform"
                        >
                          <_Builtin.Block tag="div">
                            {"Platform"}
                          </_Builtin.Block>
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-dropdown-icon"
                            )}
                            value="%3Csvg%20width%3D%2211%22%20height%3D%227%22%20viewBox%3D%220%200%2011%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.983887%201.33854L1.79589%200.5L5.98438%204.82322L10.1718%200.500052L10.9839%201.33849L5.98448%206.5L0.983887%201.33854Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.DropdownToggle>
                        <_Builtin.DropdownList
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown"
                          )}
                          tag="nav"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu_container"
                            )}
                            id={_utils.cx(
                              _styles,
                              "w-node-_7b76ffef-700b-4a12-97a3-726b2e6510b9-2e6510a1"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-container-bg"
                              )}
                              tag="div"
                            />
                            <_Builtin.List
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-list"
                              )}
                              tag="ul"
                              aria-label="Platform"
                              unstyled={true}
                            >
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Build"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Build"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="design"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/design",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2226%22%20viewBox%3D%220%200%2024%2026%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.35822%207.36856L6.60823%207.37237L6.60823%207.37237L7.35822%207.36856ZM7.33998%203.7762L7.78693%203.17393C7.5588%203.00463%207.25461%202.97876%207.00117%203.10709C6.74773%203.23543%206.58855%203.49593%206.58999%203.78001L7.33998%203.7762ZM10.2248%205.91702L9.77786%206.5193L9.77786%206.5193L10.2248%205.91702ZM18.8793%2012.3395L18.8831%2013.0895C19.206%2013.0878%2019.4915%2012.8798%2019.592%2012.573C19.6926%2012.2663%2019.5855%2011.9296%2019.3263%2011.7372L18.8793%2012.3395ZM13.4908%2012.3668L13.487%2011.6169C13.227%2011.6182%2012.9863%2011.754%2012.8508%2011.9758C12.7153%2012.1976%2012.7042%2012.4738%2012.8217%2012.7057L13.4908%2012.3668ZM16.7568%2018.8167L17.0956%2019.4858C17.4651%2019.2987%2017.613%2018.8474%2017.4259%2018.4779L16.7568%2018.8167ZM13.8902%2020.2682L13.2211%2020.607C13.3109%2020.7845%2013.4676%2020.919%2013.6566%2020.9809C13.8456%2021.0429%2014.0515%2021.0272%2014.229%2020.9373L13.8902%2020.2682ZM10.6242%2013.8184L11.2933%2013.4796C11.1759%2013.2477%2010.9468%2013.0931%2010.6878%2013.0711C10.4288%2013.0491%2010.1768%2013.1627%2010.0219%2013.3715L10.6242%2013.8184ZM7.41298%2018.1457L6.66299%2018.1495C6.66463%2018.4723%206.87265%2018.7578%207.17942%2018.8584C7.4862%2018.9589%207.82288%2018.8518%208.01525%2018.5926L7.41298%2018.1457ZM8.10821%207.36476L8.08997%203.77239L6.58999%203.78001L6.60823%207.37237L8.10821%207.36476ZM6.89303%204.37848L9.77786%206.5193L10.6718%205.31474L7.78693%203.17393L6.89303%204.37848ZM9.77786%206.5193L18.4324%2012.9418L19.3263%2011.7372L10.6718%205.31474L9.77786%206.5193ZM18.8755%2011.5895L13.487%2011.6169L13.4946%2013.1168L18.8831%2013.0895L18.8755%2011.5895ZM12.8217%2012.7057L16.0876%2019.1555L17.4259%2018.4779L14.1599%2012.028L12.8217%2012.7057ZM16.4179%2018.1476L13.5514%2019.5991L14.229%2020.9373L17.0956%2019.4858L16.4179%2018.1476ZM14.5593%2019.9294L11.2933%2013.4796L9.95509%2014.1572L13.2211%2020.607L14.5593%2019.9294ZM10.0219%2013.3715L6.8107%2017.6987L8.01525%2018.5926L11.2265%2014.2653L10.0219%2013.3715ZM8.16297%2018.1418L8.10821%207.36475L6.60823%207.37237L6.66299%2018.1495L8.16297%2018.1418Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Design"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Build high-performing sites"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="edit mode"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/edit-mode",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M15%205.5L5.75%2014.7501V18.2501H9.25L18.5%209L15%205.5Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M20%2018.25H13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Edit mode"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Empower your content team"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="interactions"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/interactions-animations",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%203.80516C12%203.29805%2011.3322%203.11307%2011.0713%203.54791L4.9087%2013.8188C4.50878%2014.4854%204.9889%2015.3333%205.76619%2015.3333H12V20.3231C12%2020.82%2012.6462%2021.0127%2012.9184%2020.597L18.987%2011.3254C19.4223%2010.6604%2018.9452%209.77778%2018.1503%209.77778H12V3.80516Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Interactions"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Craft immersive experiences"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="page building"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/page-building",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_521_40327)%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9%2015H12V16.5H9C8.17157%2016.5%207.5%2015.8284%207.5%2015L7.5%204.5C7.5%203.67157%208.17157%203%209%203L19.5%203C20.3284%203%2021%203.67157%2021%204.5V10.5H19.5V4.5L9%204.5L9%2015ZM15%2010.5L15%2021L18%2018H22.5L15%2010.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5%2021C3.67157%2021%203%2020.3284%203%2019.5L3%2017.25H4.5V19.5H6.75V21H4.5ZM9%2019.5H12V21H9L9%2019.5ZM4.5%2012L4.5%2015H3L3%2012H4.5ZM3%209.75V9V7.5C3%206.67157%203.67157%206%204.5%206L6%206V7.5H4.5V9L4.5%209.75H3Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_521_40327%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                            )}
                                            tag="div"
                                          >
                                            {"Page building"}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-tag"
                                            )}
                                            tag="div"
                                          >
                                            {"New"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Launch simple landing pages quickly and easily"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="shared libraries"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/shared-libraries",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%207V19.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M19.3136%205H16.1065C14.5089%205%2012.998%205.7262%2012%206.97368C11.002%205.7262%209.49107%205%207.8935%205H4.68643C4.58347%205%204.5%205.08347%204.5%205.18643V17.8399C4.5%2017.9428%204.58347%2018.0263%204.68643%2018.0263H7.90962C9.49699%2018.0263%2010.9983%2018.7479%2011.9899%2019.9874C11.9951%2019.9939%2012.0049%2019.9939%2012.0101%2019.9874C13.0017%2018.7479%2014.503%2018.0263%2016.0904%2018.0263H19.3136C19.4165%2018.0263%2019.5%2017.9428%2019.5%2017.8399V5.18643C19.5%205.08347%2019.4165%205%2019.3136%205Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                            )}
                                            tag="div"
                                          >
                                            {"Shared Libraries"}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-tag"
                                            )}
                                            tag="div"
                                          >
                                            {"New"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Unify your design system across multiple sites"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Manage"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Manage"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="cms"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/cms",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6%209.5V15.991C6%2017.7909%208.68629%2019.25%2012%2019.25C15.3137%2019.25%2018%2017.7909%2018%2015.991V9.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M6%207.5V11.8984C6%2013.4733%208.68629%2014.75%2012%2014.75C15.3137%2014.75%2018%2013.4733%2018%2011.8984V7.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M18%207.5C18%206.11929%2015.3137%205%2012%205C8.68629%205%206%206.11929%206%207.5C6%208.88071%208.68629%2010%2012%2010C15.3137%2010%2018%208.88071%2018%207.5Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"CMS"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Manage content at scale"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="hosting"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/hosting",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1.5%2015.5C1.5%2017.9853%203.51472%2020%206%2020H18C20.4853%2020%2022.5%2017.9853%2022.5%2015.5C22.5%2013.1766%2020.7391%2011.2644%2018.4791%2011.0252C18.4929%2010.852%2018.5%2010.6768%2018.5%2010.5C18.5%206.91015%2015.5899%204%2012%204C8.41015%204%205.5%206.91015%205.5%2010.5C5.5%2010.6768%205.50706%2010.852%205.52091%2011.0252C3.26088%2011.2644%201.5%2013.1766%201.5%2015.5ZM1.5%2015.5C1.5%2013.0147%203.51472%2011%206%2011C7.37184%2011%208.60031%2011.6139%209.42569%2012.5819%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Hosting"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Host and scale your site without the hassle"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="localization"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/localization",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%228%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cellipse%20cx%3D%2212%22%20cy%3D%2212%22%20rx%3D%223%22%20ry%3D%228%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cellipse%20cx%3D%2212%22%20cy%3D%2212%22%20rx%3D%223%22%20ry%3D%228%22%20transform%3D%22rotate(90%2012%2012)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Localization"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Customize your site for a worldwide audience"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="security"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/security",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20%205.97823L12%203L4%205.97823V8.48438C4%2012.8488%206.00759%2016.9806%2012%2021C17.9924%2016.9806%2020%2012.8488%2020%208.48438V5.97823Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Security"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Ensure your site stays safe"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Optimize"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Optimize"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="analyze"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/analyze",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M4.5%205.0473V18.4527H20.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M20.5%208.93918L14.8784%2013.6959L9.68919%2010.2365L4.5%2014.9932%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                            )}
                                            tag="div"
                                          >
                                            {"Analyze"}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-tag"
                                            )}
                                            tag="div"
                                          >
                                            {"New"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Understand how your site performs"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="product section"
                                      data-cta-text="optimize"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/optimize",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8.5%205H5.5V8%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M16%2019L19%2019L19%2016%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M5.5%2016L5.5%2019L8.5%2019%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M19%208L19%205L16%205%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212%22%20r%3D%223.25%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212%22%20r%3D%221%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                            )}
                                            tag="div"
                                          >
                                            {"Optimize"}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-tag"
                                            )}
                                            tag="div"
                                          >
                                            {"New"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Maximize conversions with testing and personalization"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="seo"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/seo",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17%2011C17%2014.3137%2014.3137%2017%2011%2017C7.68629%2017%205%2014.3137%205%2011C5%207.68629%207.68629%205%2011%205C14.3137%205%2017%207.68629%2017%2011Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M15%2015L20%2020%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"SEO"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Grow your reach with fine-tuned controls"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section",
                                  "brand-boilerplate-components--cc-last"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Extend"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Extend"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="apps"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/apps",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18.5%205.5H14.5V9.5H18.5V5.5ZM14.5%204C13.6716%204%2013%204.67157%2013%205.5V9.5C13%2010.3284%2013.6716%2011%2014.5%2011H18.5C19.3284%2011%2020%2010.3284%2020%209.5V5.5C20%204.67157%2019.3284%204%2018.5%204H14.5ZM9.5%2014.5H5.5L5.5%2018.5H9.5V14.5ZM5.5%2013C4.67157%2013%204%2013.6716%204%2014.5V18.5C4%2019.3284%204.67157%2020%205.5%2020H9.5C10.3284%2020%2011%2019.3284%2011%2018.5V14.5C11%2013.6716%2010.3284%2013%209.5%2013H5.5ZM5.5%205.5H9.5V9.5H5.5L5.5%205.5ZM4%205.5C4%204.67157%204.67157%204%205.5%204H9.5C10.3284%204%2011%204.67157%2011%205.5V9.5C11%2010.3284%2010.3284%2011%209.5%2011H5.5C4.67157%2011%204%2010.3284%204%209.5V5.5ZM15.75%2015.75V13H17.25V15.75H20V17.25H17.25V20H15.75V17.25H13V15.75H15.75Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Apps"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Connect your site to apps like HubSpot, Adobe Express, and more"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="figma to webflow"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/figma-to-webflow",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10%205.5C9.0335%205.5%208.25%206.2835%208.25%207.25C8.25%208.2165%209.0335%209%2010%209H11.75V5.5H10ZM11.75%204H10C8.20507%204%206.75%205.45507%206.75%207.25C6.75%208.25522%207.20637%209.15385%207.92321%209.75C7.20637%2010.3462%206.75%2011.2448%206.75%2012.25C6.75%2013.2552%207.20637%2014.1538%207.92322%2014.75C7.20637%2015.3462%206.75%2016.2448%206.75%2017.25C6.75%2019.0449%208.20507%2020.5%2010%2020.5C11.7949%2020.5%2013.25%2019.0449%2013.25%2017.25V15.5V14.9891C13.7552%2015.3125%2014.3557%2015.5%2015%2015.5C16.7949%2015.5%2018.25%2014.0449%2018.25%2012.25C18.25%2011.2448%2017.7936%2010.3462%2017.0768%209.75C17.7936%209.15385%2018.25%208.25522%2018.25%207.25C18.25%205.45507%2016.7949%204%2015%204H13.25H12.5H11.75ZM13.25%205.5V9H15C15.9665%209%2016.75%208.2165%2016.75%207.25C16.75%206.2835%2015.9665%205.5%2015%205.5H13.25ZM11.75%2010.5H10C9.0335%2010.5%208.25%2011.2835%208.25%2012.25C8.25%2013.2165%209.0335%2014%2010%2014H11.75V12.25V10.5ZM15%2010.5C14.0335%2010.5%2013.25%2011.2835%2013.25%2012.25C13.25%2013.2165%2014.0335%2014%2015%2014C15.9665%2014%2016.75%2013.2165%2016.75%2012.25C16.75%2011.2835%2015.9665%2010.5%2015%2010.5ZM10%2015.5C9.0335%2015.5%208.25%2016.2835%208.25%2017.25C8.25%2018.2165%209.0335%2019%2010%2019C10.9665%2019%2011.75%2018.2165%2011.75%2017.25V15.5H10Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Figma to Webflow"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Turn static designs into clean, production-ready code"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="platform section"
                                      data-cta-text="webflow cloud"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/cloud",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.4209%2014.8357L9.30105%2016.9541L11.4209%2019.074L10.4145%2020.0804L7.28964%2016.9555L10.4145%2013.8293L11.4209%2014.8357ZM16.7189%2016.9555L13.5941%2020.0804L12.5877%2019.074L14.7061%2016.9541L12.5877%2014.8357L13.5941%2013.8293L16.7189%2016.9555ZM19.4169%2013.0217C19.4168%2011.3153%2018.0896%209.91856%2016.4116%209.80785L15.7458%209.76337V9.08919L15.7263%208.70553C15.5343%206.81704%2013.94%205.34329%2012.0009%205.34298C9.93218%205.34298%208.25473%207.02043%208.25473%209.08919V9.76337L7.58889%209.80785C5.91096%209.91863%204.58371%2011.3153%204.58358%2013.0217C4.58358%2014.1684%205.18243%2015.1758%206.08762%2015.7476L5.70675%2016.3495L5.32726%2016.9514C4.02659%2016.1297%203.16016%2014.677%203.16016%2013.0217C3.16028%2010.7779%204.75185%208.91035%206.86745%208.47617C7.17047%205.91006%209.35335%203.91956%2012.0009%203.91956C14.6482%203.91987%2016.8286%205.91034%2017.1317%208.47617C19.248%208.90978%2020.8402%2010.7774%2020.8403%2013.0217C20.8403%2014.677%2019.9739%2016.1297%2018.6732%2016.9514L18.2937%2016.3495L17.9129%2015.7476C18.8181%2015.1758%2019.4169%2014.1684%2019.4169%2013.0217Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block tag="div">
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                            )}
                                            tag="div"
                                          >
                                            {"Webflow Cloud"}
                                          </_Builtin.Block>
                                          <_Builtin.Block
                                            className={_utils.cx(
                                              _styles,
                                              "brand-boilerplate-components--g-nav_menu-section_link-tag"
                                            )}
                                            tag="div"
                                          >
                                            {"New"}
                                          </_Builtin.Block>
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Host dynamic web apps alongside your Webflow site"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section",
                                  "brand-boilerplate-components--cc-ad"
                                )}
                              >
                                <_Builtin.Link
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-content_block-ad-link",
                                    "brand-boilerplate-components--cc-product",
                                    "brand-boilerplate-components--cc-platform"
                                  )}
                                  button={false}
                                  data-cta="top nav CTA"
                                  data-cta-position="platform section"
                                  data-cta-text="platform overview"
                                  block="inline"
                                  options={{
                                    href: "https://webflow.com/platform",
                                  }}
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section_link",
                                      "brand-boilerplate-components--cc-ad"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                      )}
                                      value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.5%2010.75L6.25%207.75V7.5L12.5%204.5L18.75%207.5L18.75%207.75L12.5%2010.75Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M18.75%2011L18.75%2011.75L12.5%2015L6.25%2011.75V11%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M18.75%2015V15.75L12.5%2019L6.25%2015.75V15%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                        )}
                                        tag="div"
                                      >
                                        {"Platform overview"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--paragraph-s",
                                          "brand-boilerplate-components--u-text-gray200"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "Explore the power of the Webflow Platform"
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-content_block-ad-arrow"
                                    )}
                                    tag="div"
                                  >
                                    {"↗"}
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-content_block-ad-link",
                                    "brand-boilerplate-components--cc-product",
                                    "brand-boilerplate-components--cc-ai"
                                  )}
                                  button={false}
                                  data-cta="top nav CTA"
                                  data-cta-position="platform section"
                                  data-cta-text="ai at webflow"
                                  block="inline"
                                  options={{
                                    href: "https://webflow.com/ai",
                                  }}
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section_link",
                                      "brand-boilerplate-components--cc-ad"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.HtmlEmbed
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                      )}
                                      value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12.5%203C12.5%207.97056%2016.5294%2012%2021.5%2012C16.5294%2012%2012.5%2016.0294%2012.5%2021C12.5%2016.0294%208.47056%2012%203.5%2012C8.47056%2012%2012.5%207.97056%2012.5%203Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                    />
                                    <_Builtin.Block tag="div">
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                        )}
                                        tag="div"
                                      >
                                        {"AIat Webflow"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--paragraph-s",
                                          "brand-boilerplate-components--u-text-gray200"
                                        )}
                                        tag="div"
                                      >
                                        {
                                          "Elevate your site with the power of AI"
                                        }
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-content_block-ad-arrow"
                                    )}
                                    tag="div"
                                  >
                                    {"↗"}
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.ListItem>
                            </_Builtin.List>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-overlay"
                            )}
                            data-w-id="7b76ffef-700b-4a12-97a3-726b2e651168"
                            tag="div"
                            scroll="enable"
                          />
                        </_Builtin.DropdownList>
                      </_Builtin.DropdownWrapper>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-list_item"
                      )}
                    >
                      <_Builtin.DropdownWrapper
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--g-nav_menu-dropdown_wrapper"
                        )}
                        tag="div"
                        delay={0}
                        hover={false}
                      >
                        <_Builtin.DropdownToggle
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown_toggle"
                          )}
                          tag="div"
                          data-cta="top nav CTA"
                          data-cta-position="top nav section"
                          data-cta-text="solutions"
                        >
                          <_Builtin.Block tag="div">
                            {"Solutions"}
                          </_Builtin.Block>
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-dropdown-icon"
                            )}
                            value="%3Csvg%20width%3D%2211%22%20height%3D%227%22%20viewBox%3D%220%200%2011%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.983887%201.33854L1.79589%200.5L5.98438%204.82322L10.1718%200.500052L10.9839%201.33849L5.98448%206.5L0.983887%201.33854Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.DropdownToggle>
                        <_Builtin.DropdownList
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown",
                            "brand-boilerplate-components--cc-small"
                          )}
                          tag="nav"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu_container",
                              "brand-boilerplate-components--cc-small"
                            )}
                            id={_utils.cx(
                              _styles,
                              "w-node-_7b76ffef-700b-4a12-97a3-726b2e651170-2e6510a1"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-container-bg"
                              )}
                              tag="div"
                            />
                            <_Builtin.List
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-list"
                              )}
                              tag="ul"
                              aria-label="Solutions"
                              unstyled={true}
                            >
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Webflow for"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Webflow for"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="enterprise"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/enterprise",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%226%22%20y%3D%229%22%20width%3D%2212%22%20height%3D%229%22%20rx%3D%221%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M9%207C9%206.44772%209.44772%206%2010%206H14C14.5523%206%2015%206.44772%2015%207V9H9V7Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Enterprise"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Built for world-class organizations"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="agencies"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/solutions/agencies",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2212%22%20cy%3D%227.25%22%20r%3D%222.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M7.5%2019.5001V17.0156C7.5%2014.5303%209.51472%2012.5156%2012%2012.5156V12.5156C14.4853%2012.5156%2016.5%2014.5303%2016.5%2017.0156V19.5001%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M16%2010.5C17.3807%2010.5%2018.5%209.38071%2018.5%208C18.5%206.61929%2017.3807%205.5%2016%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M17.5%2012.5V12.5C18.6046%2012.5%2019.5%2013.3954%2019.5%2014.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M8%2010.5C6.61929%2010.5%205.5%209.38071%205.5%208C5.5%206.61929%206.61929%205.5%208%205.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M6.5%2012.5V12.5C5.39543%2012.5%204.5%2013.3954%204.5%2014.5V17.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Agencies"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Accelerate your agency’s growth"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="freelancers"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/solutions/freelancers",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2213%22%20cy%3D%228.5%22%20r%3D%223.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M6%2020V18C6%2016.3431%207.34315%2015%209%2015H13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M10%2021H20.2667L24%2015H16.5334L13.2666%2021H10Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Freelancers"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Build custom sites for clients"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="global alliances"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/solutions/global-alliances",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.0356%208.3881C10.1693%207.717%2010.3383%207.11097%2010.5341%206.58893C10.7883%205.911%2011.0742%205.411%2011.356%205.09306C11.6387%204.77431%2011.8579%204.7%2012%204.7C12.1421%204.7%2012.3613%204.77431%2012.644%205.09306C12.9258%205.411%2013.2117%205.911%2013.4659%206.58893C13.6617%207.11097%2013.8307%207.717%2013.9644%208.3881C13.3321%208.33031%2012.6741%208.3%2012%208.3C11.3259%208.3%2010.6679%208.33031%2010.0356%208.3881ZM9.22325%206.09736C9.36046%205.73148%209.51392%205.38778%209.68399%205.07504C7.51528%205.80003%205.80003%207.51528%205.07504%209.68399C5.38778%209.51392%205.73148%209.36046%206.09736%209.22325C6.81805%208.95299%207.65679%208.73395%208.57716%208.57716C8.73395%207.65679%208.95299%206.81805%209.22325%206.09736ZM14.7768%206.09736C14.6395%205.73148%2014.4861%205.38778%2014.316%205.07504C16.4847%205.80003%2018.2%207.51527%2018.925%209.68399C18.6122%209.51391%2018.2685%209.36045%2017.9026%209.22325C17.182%208.95299%2016.3432%208.73395%2015.4228%208.57716C15.2661%207.65679%2015.047%206.81805%2014.7768%206.09736ZM5.07504%2014.316C5.80003%2016.4847%207.51527%2018.2%209.68399%2018.925C9.51391%2018.6122%209.36045%2018.2685%209.22325%2017.9026C8.95299%2017.182%208.73395%2016.3432%208.57716%2015.4228C7.65678%2015.2661%206.81805%2015.047%206.09736%2014.7768C5.73148%2014.6395%205.38778%2014.4861%205.07504%2014.316ZM5.09306%2012.644C4.77455%2012.3616%204.70011%2012.1425%204.7%2012.0003L4.7%2012L4.7%2011.9983C4.70058%2011.8561%204.77556%2011.6375%205.09306%2011.356C5.411%2011.0742%205.911%2010.7883%206.58893%2010.5341C7.11097%2010.3383%207.717%2010.1693%208.3881%2010.0356C8.33031%2010.6679%208.3%2011.3259%208.3%2012C8.3%2012.6741%208.33031%2013.3321%208.3881%2013.9644C7.717%2013.8307%207.11097%2013.6617%206.58893%2013.4659C5.911%2013.2117%205.411%2012.9258%205.09306%2012.644ZM12%2015.7V14.3C11.238%2014.3%2010.5055%2014.2587%209.81712%2014.1829C9.74125%2013.4945%209.7%2012.762%209.7%2012C9.7%2011.238%209.74125%2010.5055%209.81712%209.81712C10.5055%209.74125%2011.238%209.7%2012%209.7C12.762%209.7%2013.4945%209.74125%2014.1829%209.81712C14.2587%2010.5055%2014.3%2011.238%2014.3%2012H15.7C15.7%2011.3259%2015.6697%2010.6679%2015.6119%2010.0356C16.283%2010.1693%2016.889%2010.3383%2017.4111%2010.5341C18.089%2010.7883%2018.589%2011.0742%2018.9069%2011.356C19.2257%2011.6386%2019.3%2011.8579%2019.3%2012H20.7C20.7%207.19512%2016.8049%203.3%2012%203.3C7.19579%203.3%203.30109%207.19404%203.3%2011.998L3.3%2012C3.3%2016.8049%207.19512%2020.7%2012%2020.7V19.3C11.8579%2019.3%2011.6387%2019.2257%2011.356%2018.9069C11.0742%2018.589%2010.7883%2018.089%2010.5341%2017.4111C10.3383%2016.889%2010.1693%2016.283%2010.0356%2015.6119C10.6679%2015.6697%2011.3259%2015.7%2012%2015.7Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M17.5%2020L14.4981%2016.9499C13.8454%2016.2867%2013.8325%2015.2155%2014.4692%2014.5363C15.1431%2013.8174%2016.2732%2013.8219%2016.9415%2014.5462L17.5%2015.1515L18.0585%2014.5462C18.7268%2013.8219%2019.8569%2013.8174%2020.5308%2014.5363C21.1675%2015.2155%2021.1546%2016.2867%2020.5019%2016.9499L17.5%2020Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Global alliances"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Unlock enterprise-level partnership"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_7b76ffef-700b-4a12-97a3-726b2e651197-2e6510a1"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="startups"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/startups",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%2015.9971V12%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M12%2012C12%207.99594%2015.2459%204.75%2019.25%204.75C19.25%208.75406%2016.0041%2012%2012%2012Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M12%2012C12%209.1005%209.6495%206.75%206.75%206.75C6.75%209.64949%209.10051%2012%2012%2012Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M6.57544%2018.5754C7.85907%2017.0036%209.81235%2016%2012%2016C14.1877%2016%2016.141%2017.0036%2017.4246%2018.5754%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Startups"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Move faster with Webflow"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="classrooms"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/classroom",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%208.56392C6.32075%208.9344%204.89524%2010.3547%204.92565%2012.35C4.97933%2015.8729%205.35761%2018.007%206.90773%2019.9625C7.9898%2021.3275%209.9843%2021.344%2011.4337%2020.3778L11.4673%2020.3553C11.7899%2020.1403%2012.2102%2020.1403%2012.5328%2020.3553C13.9864%2021.3244%2015.9946%2021.2494%2017.012%2019.8293C18.3874%2017.9096%2018.8308%2015.7931%2018.9638%2012.3498C19.097%208.90331%2014.83%207.17023%2012.3911%209.60909L12%2010.0002%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M7.2178%205.18626L7.2706%204.87185L8.5712%205.09024C10.8398%205.47118%2012.3787%207.66448%2011.9948%209.95059C11.9691%2010.1034%2011.824%2010.1994%2011.6887%2010.1767L10.6489%2010.0021C8.37154%209.61972%206.8354%207.46358%207.2178%205.18626Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M16.4673%205C14.4603%205.4014%2013.3246%206.77919%2013.0602%208.07574M13.0602%208.07574C12.9998%208.37199%2012.9848%208.66401%2013.0154%208.93917L13.0602%208.07574Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Classrooms"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Register to use Webflow for free"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section",
                                  "brand-boilerplate-components--cc-small"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Compare"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Compare"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="contentful"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/vs/contentful",
                                      }}
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Contentful"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="framer"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/vs/framer",
                                      }}
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Framer"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="sitecore"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/vs/sitecore",
                                      }}
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Sitecore"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_7b76ffef-700b-4a12-97a3-726b2e6511ba-2e6510a1"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="wix"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/vs/wix",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Wix"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_7b76ffef-700b-4a12-97a3-726b2e6511bf-2e6510a1"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="solutions section"
                                      data-cta-text="wordpress"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/vs/wordpress",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"WordPress"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section",
                                  "brand-boilerplate-components--cc-last"
                                )}
                              >
                                <_Builtin.Link
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-content_block-ad-link",
                                    "brand-boilerplate-components--cc-customer"
                                  )}
                                  button={false}
                                  data-cta="top nav CTA"
                                  data-cta-position="solutions section"
                                  data-cta-text="ad unit"
                                  block="inline"
                                  options={{
                                    href: "https://webflow.com/customers/dropbox-sign",
                                  }}
                                >
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-content_block-ad-top"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-content_block-ad-eyebrow"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-content_block-ad-pill"
                                        )}
                                        tag="div"
                                      >
                                        {"Customer story"}
                                      </_Builtin.Block>
                                      <_Builtin.Block
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-content_block-ad-arrow"
                                        )}
                                        tag="div"
                                      >
                                        {"↗"}
                                      </_Builtin.Block>
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--h4"
                                      )}
                                      tag="div"
                                    >
                                      {
                                        "How Dropbox Sign transformed collaboration with Webflow"
                                      }
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                  <_Builtin.Block
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--u-mt-48"
                                    )}
                                    tag="div"
                                  >
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--h3",
                                        "brand-boilerplate-components--u-mb-8"
                                      )}
                                      tag="div"
                                    >
                                      {"67%"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--caption",
                                        "brand-boilerplate-components--u-text-gray300"
                                      )}
                                      tag="div"
                                    >
                                      <_Builtin.Strong>
                                        {"Decrease in dev ticketing"}
                                      </_Builtin.Strong>
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                                <_Builtin.Link
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_link"
                                  )}
                                  button={false}
                                  data-cta="top nav CTA"
                                  data-cta-position="solutions section"
                                  data-cta-text="customer stories"
                                  block="inline"
                                  options={{
                                    href: "https://webflow.com/customers",
                                  }}
                                >
                                  <_Builtin.HtmlEmbed
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                    )}
                                    value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%2019.25H6C5.86193%2019.25%205.75%2019.1381%205.75%2019V5C5.75%204.86193%205.86193%204.75%206%204.75H18C18.1381%204.75%2018.25%204.86193%2018.25%205V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M18%2011.75L12.75%2017.0001V19.2502H15L20.25%2014.0001L18%2011.75Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M8%208.25H16%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M8%2011.25H12%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                  />
                                  <_Builtin.Block tag="div">
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                      )}
                                      tag="div"
                                    >
                                      {"Customer stories"}
                                    </_Builtin.Block>
                                    <_Builtin.Block
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link-description"
                                      )}
                                      tag="div"
                                    >
                                      {"Browse Webflow success stories"}
                                    </_Builtin.Block>
                                  </_Builtin.Block>
                                </_Builtin.Link>
                              </_Builtin.ListItem>
                            </_Builtin.List>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-overlay"
                            )}
                            tag="div"
                            scroll="enable"
                          />
                        </_Builtin.DropdownList>
                      </_Builtin.DropdownWrapper>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-list_item"
                      )}
                    >
                      <_Builtin.DropdownWrapper
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--g-nav_menu-dropdown_wrapper"
                        )}
                        tag="div"
                        delay={0}
                        hover={false}
                      >
                        <_Builtin.DropdownToggle
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown_toggle"
                          )}
                          tag="div"
                          data-cta="top nav CTA"
                          data-cta-position="top nav section"
                          data-cta-text="resources"
                        >
                          <_Builtin.Block tag="div">
                            {"Resources"}
                          </_Builtin.Block>
                          <_Builtin.HtmlEmbed
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-dropdown-icon"
                            )}
                            value="%3Csvg%20width%3D%2211%22%20height%3D%227%22%20viewBox%3D%220%200%2011%207%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.983887%201.33854L1.79589%200.5L5.98438%204.82322L10.1718%200.500052L10.9839%201.33849L5.98448%206.5L0.983887%201.33854Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                          />
                        </_Builtin.DropdownToggle>
                        <_Builtin.DropdownList
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav_menu-dropdown"
                          )}
                          tag="nav"
                        >
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu_container"
                            )}
                            id={_utils.cx(
                              _styles,
                              "w-node-_7b76ffef-700b-4a12-97a3-726b2e6511e3-2e6510a1"
                            )}
                            tag="div"
                          >
                            <_Builtin.Block
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-container-bg"
                              )}
                              tag="div"
                            />
                            <_Builtin.List
                              className={_utils.cx(
                                _styles,
                                "brand-boilerplate-components--g-nav_menu-list"
                              )}
                              tag="ul"
                              aria-label="Resources"
                              unstyled={true}
                            >
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Get started"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Get started"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="templates"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/templates",
                                        preload: "none",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%2219.25%22%20y%3D%2219.25%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20rx%3D%220.75%22%20transform%3D%22rotate(180%2019.25%2019.25)%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2213.25%22%20y1%3D%2220%22%20x2%3D%2213.25%22%20y2%3D%224%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cline%20x1%3D%2220%22%20y1%3D%2210.75%22%20x2%3D%2213%22%20y2%3D%2210.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Templates"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Website templates for any use case"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="made in webflow"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/made-in-webflow",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.67358%2013.2838C4.31827%2013.1148%206.09486%2012.6734%207.25225%2011.457L7.62671%2010.9922H2.67358V6.0001L7.67358%206V10.8906L10.3484%206.0001H14.2591V10.6533L16.8575%206H22.4516L15.7048%2018L10.1034%2017.9869L12.865%2013.1501C10.1902%2016.0881%206.64832%2017.6505%202.67358%2017.9869V13.2838Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Made in Webflow"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {"Find and clone inspiring sites"}
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="hire a webflow partner"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/certified-partners",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2212.5%22%20cy%3D%228.5%22%20r%3D%223.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M5.5%2020V18C5.5%2016.3431%206.84315%2015%208.5%2015H12.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M17.5277%2013.3587C17.6834%2012.9109%2018.3166%2012.9109%2018.4723%2013.3587L19.1789%2015.3915C19.2476%2015.5891%2019.4319%2015.723%2019.641%2015.7273L21.7927%2015.7711C22.2666%2015.7808%2022.4623%2016.383%2022.0846%2016.6694L20.3696%2017.9696C20.2029%2018.096%2020.1325%2018.3127%2020.1931%2018.5129L20.8163%2020.5728C20.9536%2021.0265%2020.4412%2021.3988%2020.0521%2021.128L18.2856%2019.8987C18.1139%2019.7793%2017.8861%2019.7793%2017.7144%2019.8987L15.9479%2021.128C15.5588%2021.3988%2015.0464%2021.0265%2015.1837%2020.5728L15.8069%2018.5129C15.8675%2018.3127%2015.7971%2018.096%2015.6304%2017.9696L13.9154%2016.6694C13.5377%2016.383%2013.7334%2015.7808%2014.2073%2015.7711L16.359%2015.7273C16.5681%2015.723%2016.7524%2015.5891%2016.8211%2015.3915L17.5277%2013.3587Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Hire a Certified Partner"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Find a freelancer or agency to help with your next project"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="developers"
                                      block="inline"
                                      options={{
                                        href: "https://developers.webflow.com/",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.75%208.5L3.96502%2011.8119C3.85119%2011.9115%203.85119%2012.0885%203.96502%2012.1882L7.75%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M17.5%208.5L21.285%2011.8119C21.3988%2011.9115%2021.3988%2012.0885%2021.285%2012.1882L17.5%2015.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M15.5%204L9.5%2020%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Developers"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Submit an app, explore our APIs, get technical support, and more"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Learn"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Learn"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="webflow university"
                                      block="inline"
                                      options={{
                                        href: "https://university.webflow.com/",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.07176%2011C6.70506%2011.8446%206.5%2012.7885%206.5%2013.7845C6.5%2017.3201%2010.5%2018%2012.5%2018C14.375%2018%2018.5%2017.3201%2018.5%2013.7845C18.5%2012.7885%2018.2949%2011.8446%2017.9282%2011%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M22.3211%209.08945L12.5447%2013.9776C12.5166%2013.9917%2012.4834%2013.9917%2012.4553%2013.9776L2.67889%209.08945C2.60518%209.0526%202.60518%208.94742%202.67889%208.91056L12.4553%204.02236C12.4834%204.00828%2012.5166%204.00828%2012.5447%204.02236L22.3211%208.91056C22.3948%208.94742%2022.3948%209.0526%2022.3211%209.08945Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M12.5%208L9.5%2010.0001V20%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Webflow University"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Learn web design and development for free"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="blog"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/blog",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%225.75%22%20y%3D%225%22%20width%3D%2212.5%22%20height%3D%226%22%20rx%3D%221%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Crect%20x%3D%225.375%22%20y%3D%2214.375%22%20width%3D%2213.25%22%20height%3D%220.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%220.75%22%2F%3E%0A%3Crect%20x%3D%225.375%22%20y%3D%2217.875%22%20width%3D%2210.25%22%20height%3D%220.75%22%20stroke%3D%22currentColor%22%20stroke-width%3D%220.75%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Blog"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Stories, insights, and advice for how you build for the web"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="resources"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/resources",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%207V19.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M19.3136%205H16.1065C14.5089%205%2012.998%205.7262%2012%206.97368C11.002%205.7262%209.49107%205%207.8935%205H4.68643C4.58347%205%204.5%205.08347%204.5%205.18643V17.8399C4.5%2017.9428%204.58347%2018.0263%204.68643%2018.0263H7.90962C9.49699%2018.0263%2010.9983%2018.7479%2011.9899%2019.9874C11.9951%2019.9939%2012.0049%2019.9939%2012.0101%2019.9874C13.0017%2018.7479%2014.503%2018.0263%2016.0904%2018.0263H19.3136C19.4165%2018.0263%2019.5%2017.9428%2019.5%2017.8399V5.18643C19.5%205.08347%2019.4165%205%2019.3136%205Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Resources"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Free ebooks, webinars, whitepapers, and reports"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="Webflow Way"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/webflow-way",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cpath%20d%3D%22M21%2012.8571V6H3V18H14%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M3%209L21%209%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M16%2016.5L18.5%2019L23.5%2014%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"The Webflow Way"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Best practices to get the most out of Webflow"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Discover"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Discover"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="customer stories"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/customers",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.5%2019.25H6.5C6.36193%2019.25%206.25%2019.1381%206.25%2019V5C6.25%204.86193%206.36193%204.75%206.5%204.75H18.5C18.6381%204.75%2018.75%204.86193%2018.75%205V9%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M18.5%2011.75L13.25%2017.0001V19.2502H15.5L20.75%2014.0001L18.5%2011.75Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M8.5%208.25H16.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M8.5%2011.25H12.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Customer stories"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Explore enterprise and agency success stories"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="community"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/community",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M10.7711%206.44912C10.8477%205.35986%2011.7557%204.5%2012.8644%204.5C14.0234%204.5%2014.963%205.43957%2014.963%206.59859C14.963%207.75762%2014.0234%208.69719%2012.8644%208.69719C12.5412%208.69719%2012.235%208.6241%2011.9615%208.49354C12.0744%209.01176%2012.0808%209.55419%2011.9711%2010.0854C12.2568%2010.1584%2012.5561%2010.1972%2012.8644%2010.1972C14.8519%2010.1972%2016.463%208.58604%2016.463%206.5986C16.463%204.61115%2014.8519%203%2012.8644%203C11.2029%203%209.80441%204.12602%209.39038%205.65657C9.64303%205.7384%209.89096%205.84784%2010.1302%205.98597C10.3637%206.12076%2010.5776%206.27638%2010.7711%206.44912Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.7968%2013.8473C13.5098%2013.7736%2013.209%2013.7344%2012.899%2013.7344C10.9116%2013.7344%209.30042%2015.3455%209.30042%2017.333C9.30041%2019.3204%2010.9116%2020.9316%2012.899%2020.9316C14.5386%2020.9316%2015.9221%2019.835%2016.3562%2018.3353C16.1063%2018.2538%2015.8611%2018.1452%2015.6244%2018.0086C15.3922%2017.8745%2015.1793%2017.7198%2014.9867%2017.5482C14.8789%2018.6061%2013.9854%2019.4316%2012.899%2019.4316C11.74%2019.4316%2010.8004%2018.492%2010.8004%2017.333C10.8004%2016.1739%2011.74%2015.2344%2012.899%2015.2344C13.2128%2015.2344%2013.5104%2015.3032%2013.7777%2015.4266C13.6759%2014.9108%2013.6792%2014.3729%2013.7968%2013.8473Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M9.45%207.27091C10.5683%207.91655%2010.9514%209.34649%2010.3058%2010.4648C10.156%2010.7242%209.96399%2010.9441%209.74346%2011.1207C10.2171%2011.3155%2010.6541%2011.6056%2011.023%2011.9826C11.2436%2011.7571%2011.4398%2011.5006%2011.6048%2011.2148C12.6647%209.37905%2012.0357%207.03173%2010.2%205.97188C8.36428%204.91202%206.01696%205.54099%204.95711%207.3767C4.0759%208.903%204.36216%2010.783%205.53883%2011.9825C5.77736%2011.7394%206.05248%2011.5242%206.36187%2011.3455C6.51103%2011.2594%206.66357%2011.1845%206.81852%2011.1204C5.93115%2010.411%205.67071%209.14071%206.25614%208.1267C6.90178%207.00843%208.33172%206.62527%209.45%207.27091Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.7554%2011.9805C14.5349%2012.206%2014.3387%2012.4624%2014.1738%2012.7481C13.1139%2014.5839%2013.7429%2016.9312%2015.5786%2017.991C17.4143%2019.0509%2019.7617%2018.4219%2020.8215%2016.5862C21.7027%2015.06%2021.4165%2013.18%2020.2399%2011.9805C20.0013%2012.2237%2019.7261%2012.439%2019.4166%2012.6177C19.2676%2012.7037%2019.1151%2012.7787%2018.9603%2012.8427C19.8475%2013.5522%2020.1079%2014.8223%2019.5225%2015.8362C18.8768%2016.9545%2017.4469%2017.3376%2016.3286%2016.692C15.2103%2016.0464%2014.8272%2014.6164%2015.4728%2013.4981C15.6225%2013.2388%2015.8144%2013.019%2016.0348%2012.8424C15.5613%2012.6476%2015.1242%2012.3575%2014.7554%2011.9805Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.11193%2012.6459C8.23021%2012.0003%209.66015%2012.3834%2010.3058%2013.5017C10.5109%2013.8569%2010.6122%2014.2436%2010.619%2014.6266C11.0259%2014.2843%2011.5098%2014.0305%2012.0408%2013.8948C11.9599%2013.503%2011.8158%2013.1172%2011.6048%2012.7517C10.545%2010.916%208.19765%2010.287%206.36193%2011.3469C4.52622%2012.4067%203.89725%2014.7541%204.9571%2016.5898C5.87885%2018.1863%207.77441%2018.8701%209.46032%2018.324C9.37904%2018.0236%209.33567%2017.7077%209.33567%2017.3816C9.33567%2017.1578%209.35611%2016.9387%209.39521%2016.7262C8.28543%2017.3285%206.89128%2016.9399%206.25614%2015.8398C5.6105%2014.7215%205.99365%2013.2916%207.11193%2012.6459Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.7377%2010.0714C13.8186%2010.4633%2013.9627%2010.8492%2014.1737%2011.2148C15.2336%2013.0505%2017.5809%2013.6795%2019.4166%2012.6196C21.2524%2011.5597%2021.8813%209.21242%2020.8215%207.37671C19.8997%205.78021%2018.0042%205.09644%2016.3183%205.6425C16.3995%205.94277%2016.4429%206.2586%2016.4429%206.58456C16.4429%206.8085%2016.4224%207.02766%2016.3833%207.24028C17.4931%206.63791%2018.8873%207.02658%2019.5224%208.12671C20.1681%209.24499%2019.7849%2010.6749%2018.6666%2011.3206C17.5484%2011.9662%2016.1184%2011.583%2015.4728%2010.4648C15.2676%2010.1095%2015.1664%209.72267%2015.1595%209.33959C14.7526%209.6819%2014.2688%209.93572%2013.7377%2010.0714Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Community"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Connect with the worldwide Webflow community"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="partner with webflow"
                                      block="inline"
                                      options={{
                                        href: "https://webflow.com/partners",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.25%2019V16.25C6.25%2015.1454%207.14543%2014.25%208.25%2014.25H12.5M15.75%208C15.75%209.79493%2014.2949%2011.25%2012.5%2011.25C10.7051%2011.25%209.25%209.79493%209.25%208C9.25%206.20507%2010.7051%204.75%2012.5%204.75C14.2949%204.75%2015.75%206.20507%2015.75%208Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M17.0001%2019.0006L14.4838%2016.4844C13.9367%2015.9373%2013.9259%2015.0535%2014.4596%2014.4932C15.0244%2013.9001%2015.9717%2013.9038%2016.5319%2014.5013L17.0001%2015.0007L17.4682%2014.5014C18.0284%2013.9038%2018.9757%2013.9001%2019.5405%2014.4932C20.0742%2015.0535%2020.0634%2015.9373%2019.5163%2016.4844L17.0001%2019.0006Z%22%20fill%3D%22currentColor%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Partner with Webflow"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Grow your business by becoming a Webflow partner"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                              <_Builtin.ListItem
                                className={_utils.cx(
                                  _styles,
                                  "brand-boilerplate-components--g-nav_menu-section",
                                  "brand-boilerplate-components--cc-last"
                                )}
                              >
                                <_Builtin.Block
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--g-nav_menu-section_heading"
                                  )}
                                  tag="div"
                                >
                                  {"Get help"}
                                </_Builtin.Block>
                                <_Builtin.List
                                  className={_utils.cx(
                                    _styles,
                                    "brand-boilerplate-components--new-g-nav-col"
                                  )}
                                  tag="ul"
                                  aria-label="Get help"
                                  unstyled={true}
                                >
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="support"
                                      block="inline"
                                      options={{
                                        href: "https://help.webflow.com/",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%203.25C7.66751%203.25%203.75%207.16751%203.75%2012C3.75%2016.8325%207.66751%2020.75%2012.5%2020.75C17.3325%2020.75%2021.25%2016.8325%2021.25%2012C21.25%207.16751%2017.3325%203.25%2012.5%203.25ZM5.25%2012C5.25%2010.2681%205.85727%208.67804%206.87049%207.43114L8.99642%209.55706C8.51285%2010.2493%208.22921%2011.0915%208.22921%2012C8.22921%2012.9084%208.51286%2013.7507%208.99642%2014.4429L6.87048%2016.5688C5.85726%2015.3219%205.25%2013.7319%205.25%2012ZM7.93114%2017.6295L10.0571%2015.5036C10.7493%2015.9872%2011.5916%2016.2708%2012.5%2016.2708C13.4085%2016.2708%2014.2507%2015.9872%2014.943%2015.5036L17.0689%2017.6295C15.822%2018.6427%2014.2319%2019.25%2012.5%2019.25C10.7681%2019.25%209.17804%2018.6427%207.93114%2017.6295ZM18.1295%2016.5688C19.1427%2015.3219%2019.75%2013.7319%2019.75%2012C19.75%2010.2681%2019.1427%208.67804%2018.1295%207.43114L16.0036%209.55702C16.4872%2010.2493%2016.7709%2011.0915%2016.7709%2012C16.7709%2012.9085%2016.4872%2013.7507%2016.0036%2014.4429L18.1295%2016.5688ZM17.0688%206.37048C15.8219%205.35726%2014.2319%204.75%2012.5%204.75C10.7681%204.75%209.17806%205.35726%207.93115%206.37048L10.0571%208.4964C10.7493%208.01281%2011.5916%207.72915%2012.5%207.72915C13.4085%207.72915%2014.2507%208.0128%2014.943%208.49636L17.0688%206.37048ZM9.72921%2012C9.72921%2010.4697%2010.9698%209.22915%2012.5%209.22915C14.0303%209.22915%2015.2709%2010.4697%2015.2709%2012C15.2709%2013.5303%2014.0303%2014.7708%2012.5%2014.7708C10.9698%2014.7708%209.72921%2013.5303%209.72921%2012Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Support"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Jump into our product docs or connect with our Support team"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                  <_Builtin.ListItem
                                    className={_utils.cx(
                                      _styles,
                                      "brand-boilerplate-components--g-nav_menu-section-list_item"
                                    )}
                                    id={_utils.cx(
                                      _styles,
                                      "w-node-_7b76ffef-700b-4a12-97a3-726b2e651256-2e6510a1"
                                    )}
                                  >
                                    <_Builtin.Link
                                      className={_utils.cx(
                                        _styles,
                                        "brand-boilerplate-components--g-nav_menu-section_link"
                                      )}
                                      button={false}
                                      data-cta="top nav CTA"
                                      data-cta-position="resources section"
                                      data-cta-text="forum"
                                      block="inline"
                                      options={{
                                        href: "https://forum.webflow.com/",
                                      }}
                                    >
                                      <_Builtin.HtmlEmbed
                                        className={_utils.cx(
                                          _styles,
                                          "brand-boilerplate-components--g-nav_menu-section_link-icon"
                                        )}
                                        value="%3Csvg%20width%3D%2225%22%20height%3D%2224%22%20viewBox%3D%220%200%2025%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2212.5%22%20cy%3D%228.5%22%20r%3D%223.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M5.5%2020V18C5.5%2016.3431%206.84315%2015%208.5%2015H12.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M14.5%2015H23.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M14.5%2018H23.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3Cpath%20d%3D%22M14.5%2021H21.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E"
                                      />
                                      <_Builtin.Block tag="div">
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-heading"
                                          )}
                                          tag="div"
                                        >
                                          {"Forum"}
                                        </_Builtin.Block>
                                        <_Builtin.Block
                                          className={_utils.cx(
                                            _styles,
                                            "brand-boilerplate-components--g-nav_menu-section_link-description"
                                          )}
                                          tag="div"
                                        >
                                          {
                                            "Ask questions and learn alongside other Webflow users"
                                          }
                                        </_Builtin.Block>
                                      </_Builtin.Block>
                                    </_Builtin.Link>
                                  </_Builtin.ListItem>
                                </_Builtin.List>
                              </_Builtin.ListItem>
                            </_Builtin.List>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(
                              _styles,
                              "brand-boilerplate-components--g-nav_menu-overlay"
                            )}
                            tag="div"
                            scroll="enable"
                          />
                        </_Builtin.DropdownList>
                      </_Builtin.DropdownWrapper>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-list_item"
                      )}
                    >
                      <_Builtin.NavbarLink
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--g-nav_menu-link_wrapper"
                        )}
                        data-cta="top nav CTA"
                        data-cta-position="top nav section"
                        data-cta-text="enterprise"
                        options={{
                          href: "https://webflow.com/enterprise",
                        }}
                      >
                        {"Enterprise"}
                      </_Builtin.NavbarLink>
                    </_Builtin.ListItem>
                    <_Builtin.ListItem
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-list_item",
                        "brand-boilerplate-components--cc-last"
                      )}
                    >
                      <_Builtin.NavbarLink
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--g-nav_menu-link_wrapper",
                          "brand-boilerplate-components--cc-last"
                        )}
                        data-cta="top nav CTA"
                        data-cta-position="top nav section"
                        data-cta-text="pricing"
                        options={{
                          href: "https://webflow.com/pricing",
                        }}
                      >
                        {"Pricing"}
                      </_Builtin.NavbarLink>
                    </_Builtin.ListItem>
                  </_Builtin.List>
                ) : null}
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-nav_menu-right"
                  )}
                  tag="div"
                >
                  {navTypeNormalNav ? (
                    <_Builtin.NavbarLink
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-link_wrapper",
                        "brand-boilerplate-components--cc-mobile_button"
                      )}
                      data-login-cta="1"
                      data-cta="top nav CTA"
                      data-cta-position="top nav section"
                      data-cta-text="log in"
                      id="login-btn"
                      options={{
                        href: "https://webflow.com/login",
                      }}
                    >
                      {"Log in"}
                    </_Builtin.NavbarLink>
                  ) : null}
                  {navTypeNormalNav ? (
                    <_Builtin.NavbarLink
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_menu-link_wrapper",
                        "brand-boilerplate-components--cc-mobile_button"
                      )}
                      data-cta="top nav CTA"
                      data-cta-position="top nav section"
                      data-cta-text="contact sales"
                      id="secondary-nav"
                      options={{
                        href: "https://webflow.com/contact-sales",
                      }}
                    >
                      {"Contact sales"}
                    </_Builtin.NavbarLink>
                  ) : null}
                  {navTypeNormalNav ? (
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--button",
                        "brand-boilerplate-components--cc-nav"
                      )}
                      button={false}
                      data-signup-cta="1"
                      data-cta="top nav CTA"
                      data-cta-position="top nav section"
                      data-cta-text="get started its free"
                      id="continue-nav"
                      block="inline"
                      options={{
                        href: "https://webflow.com/signup",
                      }}
                    >
                      <_Builtin.Block tag="div">
                        {"Get started "}
                        <_Builtin.Span
                          className={_utils.cx(
                            _styles,
                            "brand-boilerplate-components--g-nav-text_desktop"
                          )}
                        >
                          {"—it's free"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                    </_Builtin.Link>
                  ) : null}
                  {navTypeSalesNav ? (
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "brand-boilerplate-components--g-nav_contact-sales_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Link
                        className={_utils.cx(
                          _styles,
                          "brand-boilerplate-components--button",
                          "brand-boilerplate-components--cc-nav",
                          "brand-boilerplate-components--cc-contact-sales"
                        )}
                        button={false}
                        data-cta="top nav CTA"
                        data-cta-position="top nav section"
                        id="contact_sales"
                        block="inline"
                        options={{
                          href: "https://webflow.com/contact-sales",
                        }}
                      >
                        <_Builtin.Block tag="div">
                          {"Contact sales"}
                        </_Builtin.Block>
                      </_Builtin.Link>
                    </_Builtin.Block>
                  ) : null}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
        </_Builtin.NavbarWrapper>
        <_Builtin.HtmlEmbed
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-nav-js"
          )}
          value="%3Cscript%3E%0A%20%20%2F%2FClose%20modal%20when%20pressing%20the%20Esc%20key%0A%20%20window.addEventListener('keyup'%2C%20function(event)%20%7B%0A%20%20%20%20if%20(event.which%20%3D%3D%3D%2027)%20%7B%0A%20%20%20%20%20%20wf_utils.signupModalUtils.closeModal()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20%2F%2FLock%20body%20scroll%20when%20nav%20is%20open%0A%20%20window.addEventListener('DOMContentLoaded'%2C%20(event)%20%3D%3E%20%7B%0A%20%20%20%20%24('.brand-boilerplate-components--g-nav_menu-button%2C%20.w-nav-overlay').click(function()%20%7B%0A%20%20%20%20%20%20if%20(%24('body').css('overflow')%20!%3D%3D%20'hidden')%20%7B%0A%20%20%20%20%20%20%20%20%24('body').css('overflow'%2C%20'hidden')%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%24('body').css('overflow'%2C%20'auto')%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%0A%20%20%2F%2F%20Global%20nav%20-%20Changes%20subnav%20height%20and%20width%20in%20a%20very%20flowy%20way%0A%20%20window.onload%20%3D%20function()%20%7B%0A%20%20%20%20%24('.brand-boilerplate-components--g-nav_menu-dropdown_toggle').on('click'%2C%20function%20()%20%7B%0A%20%20%20%20%20%20const%20containerElement%20%3D%20%24(this).next().find('.brand-boilerplate-components--g-nav_menu_container')%3B%0A%0A%20%20%20%20%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20%20%20%20%20const%20containerWidth%20%3D%20containerElement.outerWidth()%3B%0A%20%20%20%20%20%20%20%20%24('.brand-boilerplate-components--g-nav_menu-container-bg').width(containerWidth)%3B%0A%0A%20%20%20%20%20%20%20%20const%20containerHeight%20%3D%20containerElement.outerHeight()%3B%0A%20%20%20%20%20%20%20%20%24('.brand-boilerplate-components--g-nav_menu-container-bg').height(containerHeight)%3B%0A%20%20%20%20%20%20%7D%2C%2050)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%3C%2Fscript%3E"
        />
        <_Builtin.HtmlEmbed
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-nav-css"
          )}
          value="%3C!--%20%20We%20ideally%20need%20to%20change%20this%20CSS%20with%20%5Bclass%24%3D%22class_name%22%5D%20so%20that%20it%20works%20even%20with%20workspace%20libraries%20%20--%3E%0A%0A%3Cstyle%3E%0A%0A%20%20%2F*%20Lowering%20z-index%20so%20that%20it's%20below%20the%20nav%20when%20opened%20*%2F%0A%20%20.w-webflow-badge%20%7B%0A%20%20%20%20z-index%3A%20100%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Nav%20styling%20and%20focus%20states%20%20*%2F%0A%0A%20%20.g-nav_menu-section_link%3Afocus%20.g-nav_menu-section_link-heading%2C%0A%20%20.g-nav_menu-section_link-row%3Afocus%20.g-nav_menu-section_link-heading%20%7B%0A%20%20%20%20text-decoration%3A%20underline%3B%0A%20%20%7D%0A%0A%20%20.g-nav_menu-section_link%3Ahover%20.g-nav_menu-beta_tag%2C%0A%20%20.g-nav_menu-section_link%3Afocus%20.g-nav_menu-beta_tag%20%7B%0A%20%20%20%20text-decoration%3A%20none%20!important%3B%0A%20%20%7D%0A%0A%20%20.g-nav%20*%3Afocus%20%7B%0A%20%20%20%20outline%3A%20none%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*%20On%20smaller%20desktop%20devices%2C%20there%20is%20a%20lack%20of%20packing%20on%20both%20the%20meganav%2C%20and%20the%20dropdown%2C%20that%20needs%20to%20be%20compensated%20accordingly%20%20*%2F%0A%0A%20%20%40media%20(min-width%3A992px)%20and%20(max-width%3A%201320px)%20%7B%0A%20%20%20%20.g-nav%20%7B%0A%20%20%20%20%20%20padding%3A%200px%208px%200px%2020px%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu_container.cc-small%20%7B%0A%20%20%20%20%20%20margin-left%3A%20auto%3B%0A%20%20%20%20%20%20margin-right%3A%20auto%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu-content_block%20%7B%0A%20%20%20%20%20%20padding-right%3A%2020px%3B%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu-grid-left%20%7B%0A%20%20%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%40media%20screen%20and%20(max-width%3A%201068px)%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.g-nav_menu-link_wrapper.button%20%7B%0A%20%20%20%20%20%20padding%3A%2012px%2016px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.g-nav_menu-left%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.g-nav_menu-right%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%20%20%0A%20%20%20%20%7D%0A%20%20%20%20.button.cc-nav%20%7B%0A%20%20%20%20%20%20padding%3A%2014px%2016px%3B%0A%20%20%20%20%20%20font-size%3A0.9rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.g-nav%20%7B%0A%20%20%20%20%20%20padding%3A%200px%208px%200px%2016px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20font-size%3A0.9rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20.w-nav-overlay%20%7B%0A%20%20%20%20overflow%3A%20scroll%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*-----%20Styling%20-----*%2F%0A%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20%7B%0A%20%20%20%20background-color%3A%20%23080808%3B%0A%20%20%7D%0A%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-link_wrapper%2C%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-brand-logo%2C%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-dropdown_toggle%2C%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-link_wrapper-mobile%20%7B%0A%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%0A%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-button-icon%20%7B%0A%20%20%20%20filter%3A%20invert(1)%3B%0A%20%20%7D%0A%0A%20%20%40media%20only%20screen%20and%20(min-width%3A%20991px)%20%7B%0A%0A%20%20%20%20.g-nav_menu-link_wrapper%0A%20%20%20%20%7B%0A%20%20%20%20%20%20transition%3A%20color%200.3s%3B%20%2F*%20Smooth%20color%20transition%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu-mobile-flex%3Ahover%20.g-nav_menu-link_wrapper%2C%0A%20%20%20%20.g-nav_menu-mobile-flex%3Ahover%20.g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.g-nav_menu-mobile-flex%3Ahover%20.g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20color%3A%20%235A5A5A%3B%20%2F*%20Change%20color%20of%20all%20links%20to%20dark%20gray%20when%20navigation%20is%20hovered%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu-mobile-flex%20.g-nav_menu-dropdown_toggle%3Ahover%2C%0A%20%20%20%20.g-nav_menu-mobile-flex%20.g-nav_menu-dropdown_toggle.w--open%2C%0A%20%20%20%20.g-nav_menu-mobile-flex%20.g-nav_menu-link_wrapper%3Ahover%20%7B%0A%20%20%20%20%20%20color%3A%20%23080808%3B%20%2F*%20Ensure%20the%20hovered%20link%20remains%20black%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-mobile-flex%3Ahover%20.g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-mobile-flex%3Ahover%20.g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20color%3A%20%23ABABAB%3B%20%2F*%20Change%20color%20of%20all%20links%20to%20light%20gray%20when%20navigation%20is%20hovered%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-mobile-flex%20.g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-mobile-flex%20.g-nav_menu-dropdown_toggle%3Ahover%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-mobile-flex%20.g-nav_menu-dropdown_toggle.w--open%20%7B%0A%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%20%2F*%20Ensure%20the%20hovered%20link%20remains%20white%20*%2F%0A%20%20%20%20%7D%20%20%0A%20%20%7D%0A%20%20%40media%20only%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-link_wrapper%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.g-nav_menu-link_wrapper%2C%0A%20%20%20%20.g-nav_menu-dropdown_toggle%20%7B%0A%20%20%20%20%20%20color%3A%20%23080808%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-brand-logo%3Ahover%2C%0A%20%20%20%20.g-nav%5Btheme%3D%22dark%22%5D%20.g-nav_menu-dropdown_toggle%3Ahover%20%7B%0A%20%20%20%20%20%20color%3A%20%23146EF5%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.g-nav_menu%20%7B%0A%20%20%20%20%20%20height%3A%20calc(100vh%20-%2065px)%20!important%3B%0A%20%20%20%20%20%20min-height%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*-----%20Animating%20-----*%2F%0A%0A%20%20.g-nav_menu-section-list_item%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transform%3A%20translateY(20px)%3B%0A%20%20%20%20transition%3A%20opacity%200.3s%20ease%2C%20transform%200.3s%20ease%3B%0A%20%20%7D%0A%0A%20%20.g-nav_menu-dropdown.w--open%20.g-nav_menu-section-list_item%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Adjustment%20for%20the%20published%20live%20version%20*%2F%20%0A%0A%20%20%2F*%20Nav%20styling%20and%20focus%20states%20%20*%2F%0A%0A%20%20.brand-boilerplate-components--g-nav_menu-section_link%3Afocus%20.brand-boilerplate-components--g-nav_menu-section_link-heading%2C%0A%20%20.brand-boilerplate-components--g-nav_menu-section_link-row%3Afocus%20.brand-boilerplate-components--g-nav_menu-section_link-heading%20%7B%0A%20%20%20%20text-decoration%3A%20underline%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--g-nav_menu-section_link%3Ahover%20.brand-boilerplate-components--g-nav_menu-beta_tag%2C%0A%20%20.brand-boilerplate-components--g-nav_menu-section_link%3Afocus%20.brand-boilerplate-components--g-nav_menu-beta_tag%20%7B%0A%20%20%20%20text-decoration%3A%20none%20!important%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--g-nav%20*%3Afocus%20%7B%0A%20%20%20%20outline%3A%20none%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*%20On%20smaller%20desktop%20devices%2C%20there%20is%20a%20lack%20of%20packing%20on%20both%20the%20meganav%2C%20and%20the%20dropdown%2C%20that%20needs%20to%20be%20compensated%20accordingly%20%20*%2F%0A%0A%20%20%40media%20(min-width%3A992px)%20and%20(max-width%3A%201320px)%20%7B%0A%20%20%20%20.brand-boilerplate-components--g-nav%20%7B%0A%20%20%20%20%20%20padding%3A%200px%208px%200px%2020px%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu_container.cc-small%20%7B%0A%20%20%20%20%20%20margin-left%3A%20auto%3B%0A%20%20%20%20%20%20margin-right%3A%20auto%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-content_block%20%7B%0A%20%20%20%20%20%20padding-right%3A%2020px%3B%20%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-grid-left%20%7B%0A%20%20%20%20%20%20padding-left%3A%2020px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%40media%20screen%20and%20(max-width%3A%201068px)%20and%20(min-width%3A%20992px)%20%7B%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-link_wrapper.button%20%7B%0A%20%20%20%20%20%20padding%3A%2012px%2016px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-left%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-right%20%7B%0A%20%20%20%20%20%20grid-column-gap%3A%201rem%3B%20%20%0A%20%20%20%20%7D%0A%20%20%20%20.button.cc-nav%20%7B%0A%20%20%20%20%20%20padding%3A%2014px%2016px%3B%0A%20%20%20%20%20%20font-size%3A0.9rem%3B%0A%20%20%20%20%7D%0A%20%20%20%20.brand-boilerplate-components--g-nav%20%7B%0A%20%20%20%20%20%20padding%3A%200px%208px%200px%2016px%3B%0A%20%20%20%20%7D%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20font-size%3A0.9rem%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20.w-nav-overlay%20%7B%0A%20%20%20%20overflow%3A%20scroll%20!important%3B%0A%20%20%7D%0A%0A%20%20%2F*-----%20Styling%20-----*%2F%0A%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20%7B%0A%20%20%20%20background-color%3A%20%23080808%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-link_wrapper%2C%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-brand-logo%2C%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%2C%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-link_wrapper-mobile%20%7B%0A%20%20%20%20color%3A%20%23FFFFFF%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-button-icon%20%7B%0A%20%20%20%20filter%3A%20invert(1)%3B%0A%20%20%7D%0A%0A%20%20%40media%20only%20screen%20and%20(min-width%3A%20991px)%20%7B%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-link_wrapper%0A%20%20%20%20%7B%0A%20%20%20%20%20%20transition%3A%20color%200.3s%3B%20%2F*%20Smooth%20color%20transition%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%3Ahover%20.brand-boilerplate-components--g-nav_menu-link_wrapper%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%3Ahover%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%3Ahover%20.brand-boilerplate-components--g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20color%3A%20%235A5A5A%3B%20%2F*%20Change%20color%20of%20all%20links%20to%20dark%20gray%20when%20navigation%20is%20hovered%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle.w--open%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-link_wrapper%3Ahover%20%7B%0A%20%20%20%20%20%20color%3A%20%23080808%3B%20%2F*%20Ensure%20the%20hovered%20link%20remains%20black%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-mobile-flex%3Ahover%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-mobile-flex%3Ahover%20.brand-boilerplate-components--g-nav_menu-link_wrapper%20%7B%0A%20%20%20%20%20%20color%3A%20%23ABABAB%3B%20%2F*%20Change%20color%20of%20all%20links%20to%20light%20gray%20when%20navigation%20is%20hovered%20*%2F%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-mobile-flex%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle.w--open%20%7B%0A%20%20%20%20%20%20color%3A%20%23FFFFFF%3B%20%2F*%20Ensure%20the%20hovered%20link%20remains%20white%20*%2F%0A%20%20%20%20%7D%20%20%0A%20%20%7D%0A%20%20%40media%20only%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-link_wrapper%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-link_wrapper%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%20%7B%0A%20%20%20%20%20%20color%3A%20%23080808%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-link_wrapper%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-brand-logo%3Ahover%2C%0A%20%20%20%20.brand-boilerplate-components--g-nav%5Btheme%3D%22dark%22%5D%20.brand-boilerplate-components--g-nav_menu-dropdown_toggle%3Ahover%20%7B%0A%20%20%20%20%20%20color%3A%20%23146EF5%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20.brand-boilerplate-components--g-nav_menu%20%7B%0A%20%20%20%20%20%20height%3A%20calc(100vh%20-%2065px)%20!important%3B%0A%20%20%20%20%20%20min-height%3A%20auto%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20%2F*-----%20Animating%20-----*%2F%0A%0A%20%20.brand-boilerplate-components--g-nav_menu-section-list_item%20%7B%0A%20%20%20%20opacity%3A%200%3B%0A%20%20%20%20transform%3A%20translateY(20px)%3B%0A%20%20%20%20transition%3A%20opacity%200.3s%20ease%2C%20transform%200.3s%20ease%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--g-nav_menu-dropdown.w--open%20.brand-boilerplate-components--g-nav_menu-section-list_item%20%7B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20transform%3A%20translateY(0)%3B%0A%20%20%7D%0A%0A%0A%3C%2Fstyle%3E"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "brand-boilerplate-components--one-tap-wrapper"
        )}
        tag="div"
        id="one-tap-wrapper-auto"
      />
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "brand-boilerplate-components--g-nav-modal_wrap"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-modal_box",
            "brand-boilerplate-components--experiment"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-modal_x",
              "brand-boilerplate-components--modal-close_btn"
            )}
            tag="div"
            data-modal-close="treatment"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-modal-asset",
              "brand-boilerplate-components--cc-image",
              "brand-boilerplate-components--cc-test"
            )}
            patch80={true}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-modal-image"
              )}
              patch80={true}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-modal-image-img"
                )}
                loading="lazy"
                height="auto"
                width="auto"
                alt=""
                src="https://cdn.prod.website-files.com/64f794cdbc8227dafd183278/682f6e3405c4ce305c4edbfc_webflow-desktop.webp"
              />
              <_Builtin.Image
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-modal-image-img",
                  "brand-boilerplate-components--cc-tablet"
                )}
                loading="lazy"
                height="auto"
                width="auto"
                alt=""
                src="https://cdn.prod.website-files.com/64f794cdbc8227dafd183278/682f6e348c335e1875158949_webflow-tablet.webp"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--g-modal-login",
              "brand-boilerplate-components--cc-test"
            )}
            id={_utils.cx(
              _styles,
              "w-node-_7b76ffef-700b-4a12-97a3-726b2e65127d-2e6510a1"
            )}
            patch80={true}
            tag="div"
          >
            <_Builtin.Block patch80={true} tag="div">
              <_Builtin.HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-modal_embed",
                  "brand-boilerplate-components--experiment"
                )}
                value="%3Ciframe%20data-modal-variant%3D%22treatment%22%20style%3D%22display%3A%20block%3B%20position%3A%20absolute%3B%20top%3A%200%3B%20left%3A%200%3B%20width%3A%20100%25%3B%20height%3A%20100%25%3B%22%20frameborder%3D%220%22%3E%3C%2Fiframe%3E"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--g-modal-logos"
              )}
              patch80={true}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--eyebrow",
                  "brand-boilerplate-components--u-text-center"
                )}
                patch80={true}
                tag="div"
              >
                {"Trusted by teams at"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "brand-boilerplate-components--g-modal-logos_wrapper"
                )}
                patch80={true}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  width="auto"
                  height="19"
                  alt="Ideo"
                  src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c13c7_ideo-logo.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  width="auto"
                  height="25"
                  alt="Monday.com"
                  src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1396_monday.com.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  width="auto"
                  height="20"
                  alt="BBDO"
                  src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c13c8_bbdo-logo.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  width="auto"
                  height="23"
                  alt="The New York Times"
                  src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1397_nytimes.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  height="20"
                  width="auto"
                  alt="Ted"
                  src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1395_TED.svg"
                />
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "brand-boilerplate-components--g-modal-logos_img"
                  )}
                  loading="lazy"
                  width="auto"
                  height="23"
                  alt=""
                  src="https://cdn.prod.website-files.com/64f794cdbc8227dafd183278/67c9e34871b7f6e28f13c71c_Docusign-dark.svg"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--g-modal_trigger"
          )}
          tag="div"
          data-modal-trigger="treatment"
        />
      </_Builtin.Block>
    </_Component>
  );
}
