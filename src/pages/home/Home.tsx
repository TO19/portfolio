import { Box, Container, Typography } from "@material-ui/core";
import React, { ReactElement, useContext } from "react";
import profilePicture from "../../assets/etna-profile.jpeg";
import Console from "../../components/console/Console";
import Header from "../../components/header/Header";
import ProjectList from "../../components/project-list/ProjectList";
import SectionTitle from "../../components/section-title/SectionTitle";
import SocialButtons from "../../components/social-buttons/SocialButtons";
import TypeWriter from "../../components/typewriter/TypeWriter";
import { ThemeContext } from "../../providers/AppProviders";
import "./home.scss";

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
              "Fullstack",
              "Étudiant Master 1",
              "Architecte logicie",
            ]}
            loop={true}
          />
          <SocialButtons />
          <Typography
            variant="body1"
            style={{ margin: "1rem 0 0 0", textAlign: "center", color: "red" }}
          >
            Actuellement en recherche de nouveaux challenges pour mon master a
            l'ETNA sur un contrat d'apprentissage de 2 ans.
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Passionné d'informatique depuis le plus jeune age, je suis
            actuellement en Master 1 à l'ETNA. Grâce à ma formation et ma
            curiosité je connais les bases de pas mal de technologies et langages
            en partant du C jusqu'aux langages haut niveau. Vous trouverez sur
            ce portfolio une petite partie de mes projets ainsi que toutes mes
            compétences actuelles. Vous pouvez aussi, en cliquant sur les icones
            plus haut naviguer entre mes différents réseaux, télécharger mon CV
            ou voir le site de mon école.
          </Typography>
        </Box>
        <SectionTitle title="Mes compétences" />
        <Console />
        <SectionTitle title="Mes projets" />
        <ProjectList />
      </Container>
    </>
  );
}
