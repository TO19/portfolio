import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { list } from "../../shared/data/projects";
import profilePic from "../../assets/etna-profile.jpeg";
import { Tooltip } from "@material-ui/core";

const useStylesGrid = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);

export default function ProjectList() {
  const classes = useStylesGrid();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        {list.map((tile, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.technologies}</span>}
              actionIcon={
                <Tooltip title="En savoir plus">
                  <IconButton
                    aria-label={`info about ${tile.name}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
