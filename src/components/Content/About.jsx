import { BsStars } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

import { SKILLS } from "../../utils/data";
import { Link } from "react-router-dom";
import FadeContent from "../Common/FadeContent";

const About = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-tr from-primary/30 via-black to-primary/30 relative px-4 lg:px-20"
    >
      {/* Main Container */}
      <div className="relative z-30 container mx-auto min-h-screen lg:min-h-screen flex flex-col items-center justify-center gap-4 py-18 lg:py-28">
        {/* Top - Titles */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={500}
        >
          <div className="text-white flex flex-col items-center justify-center gap-4 mb-4">
            <p className="text-sm border-2 rounded flex items-center gap-2 px-2 py-1">
              <BsStars size={16} />
              About Me
            </p>
            <h1 className="text-2xl lg:text-5xl text-center text-balance">
              Exploring the World of Data and AI
            </h1>
            <h3 className="w-full lg:w-2/3 text-sm lg:text-lg text-center text-balance text-zinc-400">
              Driven by curiosity to understand how data transforms into
              meaningful insights through AI and cloud technologies.
            </h3>
          </div>
        </FadeContent>

        {/* Content */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={500}
        >
          <div className="w-full flex flex-col lg:flex-row items-start gap-10">
            {/* Left - Background */}
            <div className="w-full lg:w-2/5 flex flex-col items-start gap-4">
              <div className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 py-6">
                <h3 className="text-2xl flex items-center gap-3 mb-4">
                  <span className="bg-zinc-800 rounded-xl p-2">
                    <LuGraduationCap size={25} />
                  </span>
                  Background
                </h3>
                <p className="text-sm lg:text-base text-left text-zinc-400">
                  I'm passionate about exploring the intersection of Data
                  Engineering, AI/ML, and Cloud Technologies. My work focuses on
                  learning how data transforms into intelligence through
                  scalable systems, from ETL pipelines and machine learning
                  models to LLM-powered applications. I enjoy solving real-world
                  problems, experimenting with new tools, and continuously
                  expanding my understanding of how data can drive innovation.
                </p>
              </div>
              <div className="w-full flex items-center justify-center lg:items-start lg:justify-start">
                <Link
                  to="/about"
                  className="text-sm lg:text-base text-black bg-white hover:scale-95 rounded-xl flex items-center gap-2 px-6 py-3 transition-all duration-300"
                >
                  <p>Learn More About Me</p> <FaArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right - Skills */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
              {SKILLS.map(({ logo: Icon, name, skills }) => (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1000}
                >
                  <div
                    key={name}
                    className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 pt-4 pb-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={28} />
                      <h3 className="text-xl text-balance">{name}</h3>
                    </div>

                    <ul className="text-sm flex flex-wrap items-center gap-2">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="border-2 border-zinc-600 rounded px-2"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default About;
