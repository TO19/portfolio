import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import profilePic from "../../assets/etna-profile.jpeg";
import { Tooltip } from "@material-ui/core";

const useStylesGrid = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
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

const tileData = [
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
  {
    img: profilePic,
    title: "Image",
    author: "author",
  },
];
export default function ProjectList() {
  const classes = useStylesGrid();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
              actionIcon={
                <Tooltip title="En savoir plus">
                  <IconButton
                    aria-label={`info about ${tile.title}`}
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
