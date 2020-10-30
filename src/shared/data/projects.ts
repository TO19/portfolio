import dashPongo from "../../assets/project-pictures/dashboardpongo.png";
import internPongo from "../../assets/project-pictures/adminpongo.png";
import plasticOrigins from "../../assets/project-pictures/planetorigin.png";
import fastNVet from "../../assets/project-pictures/fastnvet.png";
import day from "../../assets/project-pictures/1day1sport.png";
import golfPlanet from "../../assets/project-pictures/golf-planet.png";
import meditSolution from "../../assets/project-pictures/meditsolution.png";
import pongoTablet from "../../assets/project-pictures/tablettepongo.png";
import laravel from "../../assets/frameworks/laravel.jpg";
import pythonDocker from "../../assets/frameworks/python-docker.jpg";
import chatBot from "../../assets/project-pictures/anychat.png";
import myYoutube from "../../assets/project-pictures/myYoutube.jpg";

export interface Project {
  img: string;
  name: string;
  technologies: string;
  cols?: number;
  links?: string[];
  description: string;
}

export const list: Project[] = [
  {
    img: chatBot,
    name: "ChatBot de réservation",
    technologies: "Tensorflow, nodeJS, React, Python",
    description:
      "Dans le cadre de mon projet annuel lors de mon bachelor. En groupe nous avons réalisé un chat bot permettant de prendre des réservations chez des commercants automatiquement 24h/7j.",
  },
  {
    img: dashPongo,
    name: "Dashboard Client Pongo",
    technologies: "Angular 10, Material Angular",
    description:
      "Réécriture complète de l'application permettant aux clients de HeyPongo de voir les stats de leurs restaurants, lancer des campagnes SMS, modifier un client, créer des sondages et demander des informations au clients finaux.",
  },
  {
    img: myYoutube,
    name: "Clone de Youtube en microservice",
    technologies: "GO, Laravel, Springboot, Vue, NextJS",
    description:
      "Pendant mon année de Bachelor j'ai réalisé en groupe un petit clone de Youtube pour comprendre l'architecture microservice. Celui-ci comprenait 3 microservices: un servant à la recherche rapide grace à une api go et elasticsearch, un pour l'upload/formatage/stockage de vidéo, un servant à l'authentification en springboot et un dernier pour l'interface utilisateur en VueJS 3 avec SSR via NextJS.",
  },
  {
    img: pythonDocker,
    name: "Scripting python/docker",
    technologies: "Python 3.9, Docker",
    description:
      "Création d'un script Python permetant d'installer, configurer, deployer, checker des containers Docker via sssh.",
  },
  {
    img: laravel,
    name: "API Pongo",
    technologies: "PHP, Laravel 8",
    description:
      "Écriture de l'api HeyPongo pour leurs 3 applications front. Défi techniques: temps réel, grosse quantité de data, implementation de partenaire, multiple niveaux d'authentification, impersonalisation...",
  },
  {
    img: internPongo,
    name: "Dashboard Admin Pongo",
    technologies: "Angular 10, Clarity",
    description:
      "Réécriture complète de l'application permettant aux salariés de HeyPongo de modifier un restaurateur, ajouter/modifier/supprimer de nouveaux restaurateurs.",
  },
  {
    img: pongoTablet,
    name: "Application Tablette Pongo",
    technologies: "Angular 10, Ionic 5, Material Angular",
    description:
      "Réécriture complète de l'application tablette de HeyPongo. Cette application permet au clients finaux de récupérer des points suivant leurs commandes faites chez le restaurateur. Defi techniques: Temps réels pour la liaison avec des partnaire de caisse.",
  },
  {
    img: plasticOrigins,
    name: "Plastic Origins",
    technologies: "React-Native",
    description:
      "Cette application disponible sur les stores permet de renseigner, en ligne ou hors ligne, les dechets present sur votre randonnée ou votre sport quotidien.",
    links: ["https://play.google.com/store/apps/details?id=com.plasticorigins"],
  },
  {
    img: fastNVet,
    name: "Fast And Vet",
    technologies: "React-Native",
    description:
      "Cette application disponible sur les stores permet de facilement commander ce que vos animaux de compagnies ont besoins.",
    links: ["https://play.google.com/store/apps/details?id=com.plasticorigins"],
  },
  {
    img: day,
    name: "1Day1Sport",
    technologies: "React-Native",
    description:
      "L'Application 1DAY1SPORT a été pensé comme un réseau social du sport et du bien-être où le virtuel n'est qu'un passage vers le réel.",
    links: [
      "https://play.google.com/store/apps/details?id=com.onedayonesport.app",
    ],
  },
  {
    img: golfPlanet,
    name: "Golf Planet",
    description: "Golf Planète, toute l’info sur tout le golf !",
    links: [
      "https://play.google.com/store/apps/details?id=com.golfplanete.app",
    ],
    technologies: "React-Native",
  },
  {
    img: meditSolution,
    name: "Medit Solution",
    description: "Application d'aide à la méditation.",
    links: [
      "https://play.google.com/store/apps/details?id=com.meditsolutions.mobile",
    ],
    technologies: "React-Native",
  },
];
