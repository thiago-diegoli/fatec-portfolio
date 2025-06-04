import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Olá 👋🏻! Eu sou Thiago Diegoli</h2>
          <p className="text-base leading-6 ">
            Programador Full Stack com foco em desenvolvimento web que vê cada
            desafio como uma nova oportunidade de aprender e evoluir no código
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Idade:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residência:</span>
            Brasil
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Indisponível
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Endereço:</span>
            Sorocaba, SP
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
