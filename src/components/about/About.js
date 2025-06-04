import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="Sobre" subTitle="Mim" />
      <AboutMe />
      <Title title="Meus" subTitle="Serviços" />
      <MyServices />
    </section>
  );
};

export default About;
