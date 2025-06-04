import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Projetos" subTitle="Recentes" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Sistema de Gestão de Compras"
            category="Website e app para faculdade"
            image={workImgOne}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Recycle Hub"
            category="Website/App"
            image={workImgTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
