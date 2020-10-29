import React, { ReactElement, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import { list, Project } from "../../shared/data/projects";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import ProjectDetailModal from "../project-detail-modal/ProjectDetailModal";

const useStylesGrid = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      alignContent: "center",
      marginBottom: "5rem",
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
  })
);

export default function ProjectList(): ReactElement {
  const classes = useStylesGrid();
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  function togglePopover(): void {
    setIsPopoverOpen(!isPopoverOpen);
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} spacing={40} className={classes.gridList}>
        {list.map((project: Project, index: number) => (
          <GridListTile key={project.name}>
            <img src={project.img} alt={project.name} />
            <GridListTileBar
              title={project.name}
              subtitle={<span>{project.technologies}</span>}
              actionIcon={
                <Tooltip title="En savoir plus">
                  <IconButton
                    onClick={(event) => {
                      setAnchorEl(event.currentTarget);
                      setProjectId(index);
                      togglePopover();
                    }}
                    style={{
                      color: "#FAFAFA",
                    }}
                    aria-describedby={`btn-info-${projectId}`}
                    aria-label={`info about ${project.name}`}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </GridListTile>
        ))}
        <ProjectDetailModal
          anchorEl={anchorEl}
          linkedElId={`btn-info-${projectId}`}
          project={list[projectId]}
          isOpen={isPopoverOpen}
          toggle={togglePopover}
        />
      </GridList>
    </div>
  );
}
