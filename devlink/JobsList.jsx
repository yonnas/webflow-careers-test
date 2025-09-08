"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Department } from "./Department";
import * as _utils from "./utils";
import _styles from "./JobsList.module.css";

export function JobsList({
  as: _Component = _Builtin.Block,
  department,
  title = "Department name",
  jobs,
}) {
  return (
    <_Component className={_utils.cx(_styles, "u-position-relative")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "jobs-render-container")}
        tag="div"
        id="jobs-list"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "roles-team", "cc-header")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "roles-team_title")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "h6")} tag="div">
              {"Team"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "roles-team_role-wrapper")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "roles-team_role", "cc-header")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "roles-team_role-title")}
                tag="div"
              >
                <_Builtin.Block className={_utils.cx(_styles, "h6")} tag="div">
                  {"Role"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "roles-team_role-location")}
                tag="div"
              >
                <_Builtin.Block className={_utils.cx(_styles, "h6")} tag="div">
                  {"Location"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-hidden-clones")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            {department ?? (
              <Department title={title} jobs={jobs} department={department} />
            )}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-dept_section")}
            tag="section"
            id="department"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "jobs-container")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-loading_wrapper")}
          tag="div"
          id="loading"
        >
          <_Builtin.NotSupported _atom="Animation" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
