"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NotificationBar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-879":{"id":"e-879","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-625","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-880"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"07d023d9-d279-ab64-c251-d987695f37cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"07d023d9-d279-ab64-c251-d987695f37cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616009663927,"origin":["68b8680cd1532136f92279cf","e-24"]},"e-880":{"id":"e-880","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-626","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-879"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"07d023d9-d279-ab64-c251-d987695f37cb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"07d023d9-d279-ab64-c251-d987695f37cb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1616009663928,"origin":["68b8680cd1532136f92279cf","e-25"]}},"actionLists":{"a-625":{"id":"a-625","origin":["68b8680cd1532136f92279cf","a-8"],"title":"Button hover (arrow topright) - on 2","actionItemGroups":[{"actionItems":[{"id":"a-625-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--button-icon_top-right","selectorGuids":["e3f201a8-981c-3d54-f259-b3f97f64d4f2"]},"xValue":8,"yValue":-8,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1555436722284},"a-626":{"id":"a-626","origin":["68b8680cd1532136f92279cf","a-9"],"title":"Button hover (arrow topright) - off 2","actionItemGroups":[{"actionItems":[{"id":"a-626-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".brand-boilerplate-components--button-icon_top-right","selectorGuids":["e3f201a8-981c-3d54-f259-b3f97f64d4f2"]},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1555436722284}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NotificationBar({
  as: _Component = _Builtin.Link,
  notificationBar = true,
  notificationBarText = (
    <>
      {"This is where the title of the notification goes. "}
      <br />
    </>
  ),
  notificationBarButtonText = "Learn more",

  notificationBarLink = {
    href: "https://store.webflow.com",
    target: "_blank",
    preload: "none",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "brand-boilerplate-components--notification_bar"
      )}
      data-w-id="07d023d9-d279-ab64-c251-d987695f37cb"
      button={false}
      block="inline"
      options={notificationBarLink}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "brand-boilerplate-components--container",
          "brand-boilerplate-components--cc-notification_bar"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "brand-boilerplate-components--notification_bar-flex"
          )}
          tag="div"
        >
          <_Builtin.Block tag="div">{notificationBarText}</_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "brand-boilerplate-components--notification_bar-button"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--u-d-inline-block"
              )}
              tag="div"
            >
              {notificationBarButtonText}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "brand-boilerplate-components--button-icon_top-right"
              )}
              tag="div"
            >
              {"↗"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%2F*%20Make%20g-nav_wrapper%20relative%20if%20sticky%20wrapper%20applied%20for%20top%20notification%20banner%20use%20*%2F%0A%20%20.notification_bar%20%2B%20.g-nav-wrapper%20%7B%0A%20%20%20%20position%3A%20sticky%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%7D%0A%0A%20%20.notification_bar%20%2B%20.g-nav-wrapper%20.g-nav-wrapper-position%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%7D%0A%0A%20%20body%3Ahas(%20.notification_bar)%20%7B%0A%20%20%20%20position%3A%20relative%3B%20%0A%20%20%7D%0A%0A%20%20%2F*%20Make%20g-nav_wrapper%20relative%20if%20sticky%20wrapper%20applied%20for%20top%20notification%20banner%20use%20*%2F%0A%20%20%5Bclass%24%3D%22notification_bar%22%5D%20%2B%20%5Bclass%24%3D%22g-nav-wrapper%22%5D%20%7B%0A%20%20%20%20position%3A%20sticky%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%7D%0A%0A%20%20%5Bclass%24%3D%22notification_bar%22%5D%20%2B%20%5Bclass%24%3D%22g-nav-wrapper%22%5D%20%5Bclass%24%3D%22g-nav-wrapper-position%22%5D%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%7D%0A%0A%20%20body%3Ahas(%20%5Bclass%24%3D%22notification_bar%22%5D)%20%7B%0A%20%20%20%20position%3A%20relative%3B%20%0A%20%20%7D%0A%20%20%0A%20%20%2F*%20Make%20g-nav_wrapper%20relative%20if%20sticky%20wrapper%20applied%20for%20top%20notification%20banner%20use%20*%2F%0A%20%20.brand-boilerplate-components--notification_bar%20%2B%20.brand-boilerplate-components--g-nav-wrapper%20%7B%0A%20%20%20%20position%3A%20sticky%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%7D%0A%0A%20%20.brand-boilerplate-components--notification_bar%20%2B%20.brand-boilerplate-components--g-nav-wrapper%20.brand-boilerplate-components--g-nav-wrapper-position%20%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%7D%0A%0A%20%20body%3Ahas(%20.brand-boilerplate-components--notification_bar)%20%7B%0A%20%20%20%20position%3A%20relative%3B%20%0A%20%20%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
