"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Job.module.css";

export function Job({
  as: _Component = _Builtin.Block,
  jobs,
  title = "Role name",
  location = "Location name",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "jobs-container")} tag="div">
      {jobs ?? (
        <_Builtin.Link
          className={_utils.cx(_styles, "jobs-listing")}
          button={false}
          id="listing"
          block="inline"
          options={link}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-listing_left")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "jobs-listing_title", "h5")}
              tag="h3"
            >
              {title}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-listing_right")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "jobs-listing_location")}
              tag="div"
            >
              {location}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Link>
      )}
    </_Component>
  );
}
