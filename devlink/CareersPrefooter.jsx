"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CareersPrefooter.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-232":{"id":"e-232","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-89","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"8d6c0497-d66f-321f-c784-b240d324900b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8d6c0497-d66f-321f-c784-b240d324900b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-89-p","smoothing":95,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1718147317401}},"actionLists":{"a-89":{"id":"a-89","title":"Careers Prefooter","continuousParameterGroups":[{"id":"a-89-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":25,"actionItems":[{"id":"a-89-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._1","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507da"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._2","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507de"]},"yValue":4.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._3","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507db"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._4","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507d7"]},"yValue":3.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._5","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507d9"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"keyframe":50,"actionItems":[{"id":"a-89-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._1","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507da"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._2","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507de"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._3","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507db"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-9","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._4","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507d7"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-89-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".careers_prefooter-image-wrapper._5","selectorGuids":["707aa4af-090c-6b4a-ceee-fe1ab1d507d6","707aa4af-090c-6b4a-ceee-fe1ab1d507d9"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}]}],"createdOn":1718147325918}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CareersPrefooter({
  as: _Component = _Builtin.Section,
  mode = "Light",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "u-bg-black", "u-text-white")}
      data-w-id="8d6c0497-d66f-321f-c784-b240d324900b"
      grid={{
        type: "section",
      }}
      tag="section"
      data-mode={mode}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "u-position-relative")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "careers_prefooter-image-wrapper",
            "_1",
            "yellow-bloom-line"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "careers_prefooter-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1351_Freelancer%2022.webp"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "careers_prefooter-image-wrapper",
            "_2"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "careers_prefooter-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1352_Freelancer%2022.webp"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "u-z-index-1", "u-text-center")}
          tag="div"
        >
          <_Builtin.DOM tag="div" style="max-width: 44rem; margin: 0 auto;">
            <_Builtin.Heading
              className={_utils.cx(_styles, "h0", "u-mb-48")}
              tag="h2"
            >
              {"We’d love to have you"}
            </_Builtin.Heading>
          </_Builtin.DOM>
          <_Builtin.DOM tag="div" style="max-width: 46rem; margin: 0 auto;">
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "paragraph-xl",
                "u-mb-48",
                "u-text-gray200"
              )}
            >
              {
                "Aligned with our mission and excited about the possibilities? Explore our open roles to see where your superpowers can shine."
              }
            </_Builtin.Paragraph>
          </_Builtin.DOM>
          <_Builtin.Link
            className={_utils.cx(_styles, "button")}
            button={false}
            block="inline"
            options={{
              href: "https://webflow.com/careers/roles",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "u-d-inline-block")}
              tag="div"
            >
              {"Explore open roles"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button-icon_right")}
              tag="div"
            >
              {"→"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "careers_prefooter-image-wrapper",
            "_3",
            "purple-bloom-line"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "careers_prefooter-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1353_Freelancer%2022.webp"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "careers_prefooter-image-wrapper",
            "_4",
            "pink-bloom-line"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "careers_prefooter-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1356_Freelancer%2022.webp"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "careers_prefooter-image-wrapper",
            "_5",
            "blue-bloom-line"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "careers_prefooter-image")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68bf272c16ca62f05b9c1141/68bf272c16ca62f05b9c1354_Freelancer%2022.webp"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
