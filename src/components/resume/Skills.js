import React from "react";
import { FaGear } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Frameworks and Languages Start here =================== */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Frameworks" icon={<FaGear />} />
        {/* Reactjs */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Reactjs</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Nest */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Nest</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Angular */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Angular</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Expo */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Expo</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Idiomas" icon={<FaFlag />} />
        {/* Português */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Português</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Inglês */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Inglês</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Espanhol */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Espanhol</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[25%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      {/* =============== Frameworks and Languages End here ===================== */}

      {/* =============== Code Languages Start here ==================== */}

      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Linguagens" icon={<BiCodeAlt />} />
        {/* TypeScript */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">TypeScript</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Java */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Java</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[25%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Python */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Python</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* HTML, CSS, JS */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">HTML, CSS, JS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      {/* =============== Code Languages End here ==================== */}

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Conhecimentos" icon={<IoIosPaper />} />
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Desenvolvimento web
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Apps Android e iOS
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Deploy e hospedagem
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            APIs e integrações
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Inteligência artificial
          </li>
        </ul>
      </div>
      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
