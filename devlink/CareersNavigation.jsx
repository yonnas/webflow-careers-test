"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CareersNavigation.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-26":{"id":"e-26","name":"","animationType":"custom","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-14","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-27"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d228d542-943c-edec-f8d3-588c44bcd97e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d228d542-943c-edec-f8d3-588c44bcd97e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616441779095},"e-27":{"id":"e-27","name":"","animationType":"custom","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"d228d542-943c-edec-f8d3-588c44bcd97e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d228d542-943c-edec-f8d3-588c44bcd97e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616441779097},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-31"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav-scroll-color-trigger","originalId":"68bf272c16ca62f05b9c111e|86be2924-a4b2-fe9f-63ba-173818476d8c","appliesTo":"CLASS"},"targets":[{"selector":".nav-scroll-color-trigger","originalId":"68bf272c16ca62f05b9c111e|86be2924-a4b2-fe9f-63ba-173818476d8c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1610117663242},"e-31":{"id":"e-31","name":"","animationType":"custom","eventTypeId":"SCROLL_OUT_OF_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-17","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".nav-scroll-color-trigger","originalId":"68bf272c16ca62f05b9c111e|86be2924-a4b2-fe9f-63ba-173818476d8c","appliesTo":"CLASS"},"targets":[{"selector":".nav-scroll-color-trigger","originalId":"68bf272c16ca62f05b9c111e|86be2924-a4b2-fe9f-63ba-173818476d8c","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1610117663243}},"actionLists":{"a-14":{"id":"a-14","title":"Nav Open - Careers","actionItemGroups":[{"actionItems":[{"id":"a-14-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["6b0793c3-8564-8dad-bfdb-baeea457d6c1"]},"value":0}}]},{"actionItems":[{"id":"a-14-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["6b0793c3-8564-8dad-bfdb-baeea457d6c1"]},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1595290069126},"a-15":{"id":"a-15","title":"Nav Close - Careers","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".nav-icon","selectorGuids":["6b0793c3-8564-8dad-bfdb-baeea457d6c1"]},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1595290069126},"a-16":{"id":"a-16","title":"Careers - Nav Scroll In","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".nav-overlay","selectorGuids":["c2d6c3d6-b126-ec4e-103d-d52eb878c160"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1610117675938},"a-17":{"id":"a-17","title":"Careers - Nav Scroll Out","actionItemGroups":[{"actionItems":[{"id":"a-17-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".nav-overlay","selectorGuids":["c2d6c3d6-b126-ec4e-103d-d52eb878c160"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1610117675938}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CareersNavigation({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav", "cc-careers-white")}
      data-w-id="d228d542-943c-edec-f8d3-588c44bcd97e"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="0"
      data-easing="ease-out-quart"
      data-easing2="ease-in-quart"
      config={{
        animation: "default",
        easing: "ease-out-quart",
        easing2: "ease-in-quart",
        duration: 0,
        collapse: "medium",
        docHeight: false,
        noScroll: false,
      }}
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "nav_skip-link")}
        button={false}
        id="skip-link"
        block=""
        options={{
          href: "#main",
        }}
      >
        {"Skip to main content"}
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(_styles, "nav_wrapper")}
        tag="div"
        id="nav_wrapper"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "nav_logo-wrapper")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-logo_link")}
            button={false}
            block="inline"
            options={{
              href: "http://webflow.com",
              preload: "none",
            }}
          >
            <_Builtin.HtmlEmbed
              className={_utils.cx(_styles, "nav-logo_embed")}
              value="%3Csvg%20width%3D%2284%22%20height%3D%2222%22%20viewBox%3D%220%200%2084%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ctitle%3EWebflow%20logo%3C%2Ftitle%3E%0A%3Cg%20clip-path%3D%22url(%23clip0)%22%3E%0A%3Cpath%20d%3D%22M27.1%208.3C27.1%206.8%2025.6%205.2%2023.1%205.2C20.3%205.2%2017.1%207.3%2016.6%2011.5C16.1%2015.7%2018.7%2017.6%2021.4%2017.6C24.1%2017.6%2025.4%2016.6%2026.8%2015.2C25.6%2013.7%2024%2014.4%2023.7%2014.5C23.4%2014.7%2022.9%2014.9%2022.1%2014.9C21.1%2014.9%2020%2014.4%2020%2012.5C26.6%2011.8%2027.1%209.8%2027.1%208.3ZM23.9%208.5C23.9%209%2023.7%209.8%2020.4%2010.2C21.1%207.7%2022.4%207.5%2023%207.5C23.6%207.6%2023.9%208%2023.9%208.5ZM12.8%208.9C12.8%208.9%2011.4%2013.3%2011.3%2013.7C11.3%2013.3%2010.2%205.4%2010.2%205.4C7.8%205.4%206.5%207.1%205.9%208.9C5.9%208.9%204.2%2013.3%204.1%2013.7C4%2013.4%203.8%209%203.8%209C3.6%206.8%201.6%205.4%200%205.4L2%2017.4C4.5%2017.4%205.9%2015.7%206.6%2013.9C6.6%2013.9%208.1%2010%208.2%209.8C8.2%2010%209.3%2017.4%209.3%2017.4C11.8%2017.4%2013.2%2015.8%2013.9%2014.1L17.4%205.4C14.8%205.4%2013.5%207.1%2012.8%208.9ZM36.4%205.1C34.9%205.1%2033.7%205.9%2032.7%207.2L33.5%200C31.4%200%2029.8%201.8%2029.4%204.4L27.8%2017.3C29%2017.3%2030.2%2017%2030.9%2016.1C31.5%2016.9%2032.4%2017.5%2033.7%2017.5C37.2%2017.5%2039.6%2013.5%2039.6%209.7C39.7%206.2%2038%205.1%2036.4%205.1ZM36%2011.3C35.6%2013.4%2034.5%2014.8%2033.3%2014.8C32.2%2014.8%2031.7%2014.3%2031.7%2014.3C31.9%2012.5%2032.1%2011.3%2032.5%2010.3C32.9%209.3%2033.9%207.8%2034.9%207.8C35.9%207.9%2036.4%209.2%2036%2011.3ZM48.4%205.4H46V5.3C46.2%203.7%2046.5%202.9%2047.8%202.8C48.6%202.7%2049%202.3%2049.1%201.8C49.2%201.4%2049.4%200.1%2049.4%200.1C44.5%200.1%2043%202.2%2042.6%205.4V5.5H42.5C41.7%205.5%2040.8%206.4%2040.7%207.5L40.6%207.9H42.2L40.8%2019.1L40.4%2021.1C40.5%2021.1%2040.5%2021.1%2040.6%2021.1C42.9%2021%2044.3%2019.2%2044.7%2016.6L45.8%207.8H46.6C47.3%207.8%2048.2%207.1%2048.4%205.8V5.4ZM61%205.2C58.2%205.2%2055.6%207.3%2054.8%2010.5C54%2013.7%2055.2%2017.6%2059.3%2017.6C63.4%2017.6%2065.8%2013.6%2065.8%2010.3C65.7%207%2063.5%205.2%2061%205.2ZM62.1%2011.2C62%2012.7%2061.3%2014.9%2059.5%2014.9C57.7%2014.9%2058%2012.3%2058.1%2011.1C58.3%209.8%2059%207.9%2060.6%207.9C62.1%207.9%2062.3%209.6%2062.1%2011.2ZM79.6%208.9C79.6%208.9%2078.2%2013.3%2078.1%2013.7C78.1%2013.3%2077%205.4%2077%205.4C74.6%205.4%2073.3%207.1%2072.7%208.9C72.7%208.9%2071%2013.3%2070.9%2013.7C70.9%2013.4%2070.6%209%2070.6%209C70.5%206.8%2068.4%205.5%2066.8%205.5L68.8%2017.5C71.3%2017.5%2072.7%2015.8%2073.4%2014C73.4%2014%2074.9%2010.1%2075%209.9C75%2010.1%2076.1%2017.5%2076.1%2017.5C78.6%2017.5%2080%2015.9%2080.7%2014.2L84%205.4C81.5%205.4%2080.2%207.1%2079.6%208.9ZM50.7%200.1L48.7%2016.5L48.3%2018.5C48.4%2018.5%2048.4%2018.5%2048.5%2018.5C50.7%2018.5%2052.3%2016.5%2052.5%2014.1L53.7%204.7C54%201.9%2052.2%200.1%2050.7%200.1Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0%22%3E%0A%3Crect%20width%3D%2284%22%20height%3D%2221.1%22%20fill%3D%22white%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-logo_link")}
            button={false}
            block="inline"
            options={{
              href: "#",
              preload: "none",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-logo_subbrand")}
              tag="div"
            >
              {"Careers"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "cc-flex_h")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "nav_button", "cc-cta", "cc-mobile")}
            button={false}
            id="continue-new_nav-mobile"
            block="inline"
            options={{
              href: "http://webflow.com/careers/roles",
              preload: "none",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_button-text")}
              tag="div"
            >
              {"Open roles"}
              <_Builtin.Span className={_utils.cx(_styles, "cc-mobile_hidden")}>
                {""}
              </_Builtin.Span>
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "nav_menu-button")}
            tag="div"
            id="navbar_menu-button"
          >
            <_Builtin.NotSupported _atom="Animation" />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav_menu-wrapper")}
          tag="nav"
          role="navigation"
          id="navigation"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "nav_menu", "cc-right")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav_left")}
              tag="div"
            >
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav_dropdown_toggle")}
                options={{
                  href: "https://webflow.com/about",
                }}
              >
                {"About Webflow"}
              </_Builtin.NavbarLink>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "nav_dropdown_toggle")}
                options={{
                  href: "https://webflow.com/diversity-equity-inclusion",
                  preload: "none",
                }}
              >
                {"Diversity, Equity & Inclusion"}
              </_Builtin.NavbarLink>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "nav_button",
                  "cc-cta",
                  "cc-desktop"
                )}
                button={false}
                block="inline"
                options={{
                  href: "http://webflow.com/careers/roles",
                  preload: "none",
                }}
              >
                <_Builtin.Block tag="div">
                  {"Open roles"}
                  <_Builtin.Span className={_utils.cx(_styles, "cc-regular")}>
                    {""}
                  </_Builtin.Span>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.NavbarMenu>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav_code-css")}
        value="%3Cstyle%3E%0A%0A*%20%7B%0A%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20-moz-osx-font-smoothing%3A%20grayscale%3B%0A%20%20text-underline-position%3A%20under%3B%0A%7D%0A%0A%2F*%20Only%20focus%20when%20tabbing%2C%20not%20when%20clicking%20*%2F%0A%0Abody%3Anot(.user-is-tabbing)%20button%3Afocus%2C%0Abody%3Anot(.user-is-tabbing)%20input%3Afocus%2C%0Abody%3Anot(.user-is-tabbing)%20select%3Afocus%2C%0Abody%3Anot(.user-is-tabbing)%20textarea%3Afocus%2C%0Abody%3Anot(.user-is-tabbing)%20.nav_menu%20*%3Afocus%20%7B%0A%20%20outline%3A%20none%20!important%3B%0A%20%20box-shadow%3A%20none%20!important%3B%20%0A%7D%0A%0A%2F*%20Adjust%20widths%20of%20container%20on%20different%20screens%20*%2F%0A%0A%40media%20(min-width%3A%201326px)%7B%0A%09.nav_wrapper%20%7B%0A%20%20%20%20max-width%3A%201280px%3B%0A%20%20%7D%0A%20%20.nav_menu%20%7B%0A%20%20%09padding-right%3A%200%3B%0A%20%20%7D%0A%20%20.nav_logo-wrapper%20%7B%0A%20%20%09padding-left%3A%200%3B%0A%20%20%7D%0A%7D%0A%40media%20(min-width%3A%201296px)%20and%20(max-width%3A%201325px)%7B%0A%20%20.nav_menu-wrapper%20%7B%0A%20%20%09padding-right%3A%20calc(50vw%20-%20640px)%3B%0A%20%20%7D%0A%7D%0A%0A%2F*%20Adjust%20height%20of%20the%20menu%20on%20smaller%20devices%20so%20that%20it's%20100%25%20of%20the%20screen%20*%2F%0A%0A%40media%20screen%20and%20(max-width%3A%20991px)%20%7B%0A%20%20.nav_menu-wrapper%20%7B%0A%20%20%20%20%20%20height%3A%20auto%3B%0A%20%09%09%20%20min-height%3A%20calc(var(--vh%2C%201vh)%20*%20100%20-%2059px)%20!important%3B%0A%20%20%7D%0A%20%20%0A%20%20.nav_menu.cc-dark.cc-alt%20%7B%0A%20%20%20%20%20%20height%3A%20calc(100vh%20-%2074px)%3B%0A%20%20%7D%0A%20%20%0A%2F*%20Change%20color%20and%20style%20for%20the%20mobile%20CTA%20in%20the%20new%20nav.%20*%2F%0A%20%20%23navbar_layout_v1%20.nav_button.cc-cta.cc-mobile%20%7B%0A%20%20%20%20background-color%3A%20transparent%3B%0A%20%20%20%20color%3A%20%23ffffff%3B%0A%20%20%20%20text-decoration%3A%20underline%3B%0A%09%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20767px)%20%7B%0A%20%20.nav_menu.cc-dark.cc-alt%20%7B%0A%20%20%09%09height%3A%20auto%3B%0A%20%20%09%09min-height%3A%20calc((var(--vh%2C%201vh)%20*%20100)%20-%2070px)%3B%0A%20%20%7D%0A%20%20%0A%20%20.w-nav-overlay%20%7B%0A%20%20%09%09overflow%3A%20scroll%3B%0A%20%20%20%20%20%20height%3A%20auto%3B%0A%20%20%09%09min-height%3A%20calc(100vh%20-%2070px)%20!important%3B%0A%09%7D%0A%20%20%0A%2F*%20Change%20color%20and%20style%20for%20the%20mobile%20CTA%20in%20the%20new%20nav.%20%20*%2F%0A%20%20%23navbar_layout_v1%20.nav_button.cc-cta.cc-mobile%20%7B%0A%20%20%20%20background-color%3A%20transparent%3B%0A%20%20%20%20color%3A%20%23ffffff%3B%0A%20%20%20%20text-decoration%3A%20underline%3B%0A%09%7D%0A%7D%0A%0A%40media%20screen%20and%20(max-width%3A%20479px)%20%7B%0A%20%20.nav_menu.cc-dark.cc-alt%20%7B%0A%09%09%09height%3A%20auto%3B%20%0A%20%20%09%09min-height%3A%20calc((var(--vh%2C%201vh)%20*%20100)%20-%2059px)%3B%0A%20%20%7D%0A%20%20%0A%20%20.w-nav-overlay%20%7B%0A%20%20%09%09overflow%3A%20hidden%3B%0A%09%7D%20%20%0A%7D%0A%0A.w-nav-overlay%20%7B%0A%20%20height%3A%20auto%3B%0A%20%20min-height%3A%20calc(100vh%20-%2059px)%20!important%3B%0A%7D%0A%0A%2F*%20Lowering%20z-index%20so%20that%20it's%20below%20the%20nav%20when%20opened%20*%2F%0A%0A.w-webflow-badge%20%7B%0A%20%20%20%20z-index%3A%20100%20!important%3B%0A%7D%0A%0A%3C%2Fstyle%3E"
      />
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "nav_code-js")}
        value="%3C!--%20Focus%20only%20on%20keyboard%2C%20not%20on%20mouse%20--%3E%0A%0A%3Cscript%3E%0Afunction%20handleFirstTab(e)%20%7B%0A%20%20if%20(e.keyCode%20%3D%3D%3D%209)%20%7B%0A%20%20%20%20document.body.classList.add('user-is-tabbing')%3B%0A%20%20%20%20%0A%20%20%20%20window.removeEventListener('keydown'%2C%20handleFirstTab)%3B%0A%20%20%20%20window.addEventListener('mousedown'%2C%20handleMouseDownOnce)%3B%0A%20%20%7D%0A%7D%0A%0Afunction%20handleMouseDownOnce()%20%7B%0A%20%20document.body.classList.remove('user-is-tabbing')%3B%0A%20%20%0A%20%20window.removeEventListener('mousedown'%2C%20handleMouseDownOnce)%3B%0A%20%20window.addEventListener('keydown'%2C%20handleFirstTab)%3B%0A%7D%0A%0Awindow.addEventListener('keydown'%2C%20handleFirstTab)%3B%0A%3C%2Fscript%3E%0A%0A%3C!--%20Close%20modal%20when%20pressing%20the%20Esc%20key%20--%3E%0A%0A%3Cscript%3E%0A%20%20window.addEventListener('keyup'%2C%20function(event)%20%7B%0A%09%09if%20(event.which%20%3D%3D%3D%2027)%20%7B%0A%20%20%20%20%09console.log('Esc')%0A%20%20%20%20%20%20var%20modalClose%20%3D%20document.getElementById('modal-close')%0A%20%20%20%20%20%20modalClose.click()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block className={_utils.cx(_styles, "nav-overlay")} tag="div" />
    </_Component>
  );
}
