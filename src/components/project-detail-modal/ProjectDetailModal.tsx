import {
  Popover,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { Project } from "../../shared/data/projects";

export interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  toggle: () => void;
  linkedElId: string;
  anchorEl: any;
}

const useStylesModal = makeStyles(() =>
  createStyles({
    content: {
      padding: "1rem",
      maxWidth: "400px",
      alignSelf: "center",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    root: {
      display: "flex",
    },
  })
);

export default function ProjectDetailModal(
  props: ProjectDetailModalProps
): ReactElement {
  const { isOpen, toggle, project, anchorEl, linkedElId } = props;
  const classes = useStylesModal();
  return (
    <Popover
      id={linkedElId}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={toggle}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <div className={classes.content}>
        <Typography variant="h6"> {project.name}</Typography>
        <p>{project.description}</p>
        {project.links ? (
          <a href={project.links[0]}>Lien vers le store android</a>
        ) : null}
      </div>
    </Popover>
  );
}
