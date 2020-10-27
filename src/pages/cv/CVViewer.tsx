import React, { ReactElement } from "react";
import "./cv.scss";

export default function CVViewer(): ReactElement {
  console.log("Test cv component");
  return (
    <div className="main-cv-view">
      Test component{" "}
      {/**
      <embed
        src="../../assets/CV-ANTONIN.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
      */}
    </div>
  );
}
