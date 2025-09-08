"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Job } from "./Job";
import * as _utils from "./utils";
import _styles from "./Department.module.css";

export function Department({
  as: _Component = _Builtin.Block,
  title = "Department name",
  jobs,
  department,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "jobs-dept_section")}
      tag="section"
      id="job"
    >
      {department ?? (
        <>
          <_Builtin.Heading
            className={_utils.cx(_styles, "jobs-dept_title", "h3")}
            tag="h2"
          >
            {title}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "jobs-container")}
            tag="div"
          >
            {jobs ?? <Job jobs={jobs} />}
          </_Builtin.Block>
        </>
      )}
    </_Component>
  );
}
