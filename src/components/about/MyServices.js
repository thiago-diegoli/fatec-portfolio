import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Desenvolvimento Web"
        subTitle="Criação de sites e aplicações web responsivas, modernas e de alta performance. Utilizo as tecnologias mais recentes como React, Next.js e Tailwind CSS para entregar projetos de qualidade."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Aplicativos Móveis"
        subTitle="Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android. Trabalho com React Native e Expo para criar experiências fluidas e intuitivas para os usuários."
      />
    </div>
  );
};

export default MyServices;
