import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Profissional" icon={<MdWork />} />
        <ResumeCard
          badge="2024"
          title="Full Stack developer"
          subTitle="Mind Consulting"
          des="Estou estagiando como desenvolvedor Full Stack, onde estou tendo a oportunidade de aprender e experenciar diversas tecnologias e práticas de desenvolvimento."
          active
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Acadêmica" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017 - 2020"
          title="Wizard English School"
          subTitle="Curso de Inglês"
          des="Alcancei um nivel de inglês avançado quase fluente. Acabei não completando o curso por conta da pandemia."
        />
        <ResumeCard
          badge="2020 - 2022"
          title="ETEC Elias Miguel Júnior"
          subTitle="Curso Informática para Internet"
          des="Curso técnico integrado ao ensino médio, onde aprendi os fundamentos da programação."
        />
        <ResumeCard
          badge="2023"
          title="FATEC Votorantim"
          subTitle="Curso Desenvolvimento de Software Multiplataforma"
          des="Estou terminando o curso de Desenvolvimento de Software Multiplataforma, onde estou aprendendo diversas tecnologias e práticas de desenvolvimento de software."
          active
        />
      </div>
    </div>
  );
};

export default Education;
