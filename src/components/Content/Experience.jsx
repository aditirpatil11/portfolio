import { EXPERIENCE } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const Experience = () => {
  return (
    <section
      id="experience"
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
            <h1 className="text-2xl lg:text-5xl text-center text-balance">
              Work Experience
            </h1>
            <h3 className="w-full lg:w-2/3 text-sm lg:text-lg text-center text-balance text-zinc-400">
              Driven by curiosity to understand how data transforms into
              meaningful insights through AI and cloud technologies.
            </h3>
          </div>
        </FadeContent>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-10">
          {/* Experience */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-10">
            {EXPERIENCE.map(
              ({
                designation,
                companyName,
                place,
                timeline,
                desc,
                techstack,
              }) => (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1000}
                >
                  <div
                    key={companyName}
                    className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 pt-4 pb-6"
                  >
                    <div className="w-full flex flex-col lg:flex-row items-start justify-between mb-4">
                      <div className="flex flex-col items-start">
                        <h3 className="font-bold text-base lg:text-xl text-balance">
                          {designation}
                        </h3>
                        <h3 className="text-sm lg:text-base text-balance text-zinc-400">
                          {companyName} | {place}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end">
                        <h3 className="text-sm lg:text-lg text-balance text-zinc-400">
                          {timeline}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <ul className="list-disc list-outside flex flex-col gap-2 pl-4">
                        {desc.map((line) => (
                          <li
                            key={line}
                            className="text-sm lg:text-base text-zinc-300"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="text-sm flex flex-wrap items-center gap-2 mb-4">
                      {techstack.map((skill) => (
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
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
