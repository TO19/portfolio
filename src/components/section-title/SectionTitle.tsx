import React from "react";
import { Typography } from "@material-ui/core";
import "./section-title.scss";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className="container">
      <div className="border" />
      <span className="content">
        <Typography
          variant="h4"
          style={{
            width: "max-content",
            textAlign: "center",
          }}
        >
          {props.title}
        </Typography>
      </span>
      <div className="border" />
    </div>
  );
}
