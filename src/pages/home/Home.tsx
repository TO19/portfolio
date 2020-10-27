import React, { useContext, ReactElement } from "react";
import Header from "../../components/header/Header";
import { Box, Container } from "@material-ui/core";
import Console from "../../components/console/Console";
import SectionTitle from "../../components/section-title/SectionTitle";
import TypeWriter from "../../components/typewriter/TypeWriter";
import profilePicture from "../../assets/etna-profile.jpeg";
import "./home.scss";
import SocialButtons from "../../components/social-buttons/SocialButtons";
import ProjectList from "../../components/project-list/ProjectList";
import { ThemeContext } from "../../providers/AppProviders";

export default function Home(): ReactElement {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <SectionTitle title="Antonin GOIX" />
        <Box component="div" flexDirection="column" display="flex">
          <img
            src={profilePicture}
            className="profile-picture"
            alt="Profile"
            width="200"
            height="240"
            style={{
              border: `3px solid ${theme.palette.secondary.main}`,
            }}
          />
          <TypeWriter
            typingDelay={150}
            erasingDelay={50}
            newTextDelay={2000}
            textArray={[
              "Passionné de tech",
              "Développeur",
              "Étudiant Master 1",
              "Architecte",
            ]}
            loop={true}
          />
          <SocialButtons />
        </Box>
        <SectionTitle title="Mes compétences" />
        <Console />
        <SectionTitle title="Mes projets" />
        <ProjectList />
      </Container>
    </>
  );
}
