import React, { useContext } from "react";
import { Box, IconButton, Tooltip } from "@material-ui/core";
import {
  AccountBox,
  GitHub,
  LinkedIn,
  School,
  Twitter,
} from "@material-ui/icons";
import { ThemeContext } from "../../providers/AppProviders";
import { Link } from "react-router-dom";

enum ProfileLinks {
  github = "https://github.com/TO19",
  linkedIn = "https://www.linkedin.com/in/antonin-goix-560972180/",
  twitter = "https://twitter.com/AntoninGoix",
  etna = "https://etna.io/",
}

export default function SocialButtons() {
  const { theme } = useContext(ThemeContext);

  function goToLink(link: string): void {
    window.open(link, "_blank");
  }

  // TODO: Refactor icons into a smaller component props: color, link, label,
  // title, icon
  return (
    <Box alignSelf="center">
      <Tooltip title="Ouvrir mon profile LinkedIn">
        <IconButton
          style={{
            color: "#0077B5",
          }}
          aria-label="go to linked profil"
          component="span"
          onClick={() => goToLink(ProfileLinks.linkedIn)}
        >
          <LinkedIn style={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ouvrir mon profile Github">
        <IconButton
          style={{
            color: theme.palette.secondary.main,
          }}
          aria-label="go to github profil"
          component="span"
          onClick={() => goToLink(ProfileLinks.github)}
        >
          <GitHub style={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Ouvrir mon profile Twitter">
        <IconButton
          style={{
            color: "#55ACEE",
          }}
          aria-label="go to twitter profil"
          component="span"
          onClick={() => goToLink(ProfileLinks.twitter)}
        >
          <Twitter style={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Télécharger mon CV">
        <Link to={process.env.PUBLIC_URL + '/CV-ANTONIN.pdf'} target="_blank" download>
          <IconButton
            style={{
              color: theme.palette.secondary.main,
            }}
            aria-label="show cv"
            component="span"
            //onClick={goToCV}
          >
            <AccountBox style={{ fontSize: 40 }} />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip title="Aller sur le site de mon école">
        <IconButton
          style={{
            color: "#5295a9",
          }}
          aria-label="go to etna site"
          component="span"
          onClick={() => goToLink(ProfileLinks.etna)}
        >
          <School style={{ fontSize: 40 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
