import React from "react";
import { Typography } from "@material-ui/core";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <Typography
      variant="h4"
      style={{
        padding: "2rem 0 2rem 0",
        textAlign: "center",
      }}
    >
      {props.title}
    </Typography>
  );
}
