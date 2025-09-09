import { FeaturedJobsSlider } from "./FeaturedJobsSlider";
import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import "../../../src/layouts/globals.css";

export default declareComponent(FeaturedJobsSlider, {
  name: "Job Slider",
  description: "A slider of selected jobs in Greenhouse",
  props: {
    domain: props.Text({
      name: "Domain",
      defaultValue:
        "https://webflow-about-1c3d6c3166e82678aba90676e.webflow.io",
    }),
    jobIds: props.Text({
      name: "Job IDs",
      defaultValue: "123456,789012,345678",
    }),
    ghSlug: props.Text({
      name: "Greenhouse Slug",
      defaultValue: "webflow",
    }),
    className: props.Text({
      name: "Class Name",
      defaultValue: "",
    }),
    autoPlayInterval: props.Number({
      name: "Auto Play Interval",
      defaultValue: 25000,
    }),
  },
});
