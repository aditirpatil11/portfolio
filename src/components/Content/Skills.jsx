import { LuCode } from "react-icons/lu";
import { SKILLS } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-linear-to-tr from-primary/30 via-black/80 to-primary/30 relative px-4 lg:px-20"
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
              <LuCode size={16} />
              My Skills
            </p>
            <h1 className="text-2xl lg:text-5xl text-center text-balance">
              Skills & Expertise
            </h1>
            <h3 className="w-full lg:w-2/3 text-sm lg:text-lg text-center text-balance text-zinc-400">
              Driven by curiosity to understand how data transforms into
              meaningful insights through AI and cloud technologies.
            </h3>
          </div>
        </FadeContent>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-10">
          {/* Right - Skills */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            {SKILLS.map(({ logo: Icon, name, skills }) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={1500}
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
      </div>
    </section>
  );
};

export default Skills;
