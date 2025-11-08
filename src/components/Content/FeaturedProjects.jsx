import { BsStars } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import { FEATURED_PROJECTS } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="bg-linear-to-br from-primary/30 via-black to-primary/30 relative px-4 lg:px-20"
    >
      {/* Main Container */}
      <div className="relative z-30 container mx-auto min-h-screen lg:min-h-screen flex flex-col items-center justify-center gap-4 py-18 lg:py-28">
        {/* TOP */}
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
              Projects
            </p>
            <h1 className="text-2xl lg:text-5xl text-center text-balance">
              Featured Projects
            </h1>
            <h3 className="w-full lg:w-2/3 text-sm lg:text-lg text-center text-balance text-zinc-400">
              Highlights of my recent work in data engineering, machine
              learning, and data visualization.
            </h3>
          </div>
        </FadeContent>

        {/* PROJECTS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10">
          {FEATURED_PROJECTS.map(
            ({
              id,
              featured,
              imgSrc,
              name,
              desc,
              techstack,
              githublink,
              livedemo,
            }) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={1000}
              >
                <div
                  key={id}
                  className="w-full bg-black border-2 border-zinc-800 rounded-xl flex flex-col items-center gap-4 px-6 pt-4 pb-6"
                >
                  <img
                    src={imgSrc}
                    alt={name}
                    className="w-full h-[214px] bg-white object-cover border-2 border-white rounded-xl overflow-hidden"
                  />
                  <div className="w-full flex items-start justify-between">
                    <h3 className="text-xl text-balance">{name}</h3>
                    {featured && (
                      <p className="text-xs text-black bg-linear-to-br from-purple-400 via-purple-300 to-white rounded-full px-3 py-1">
                        Featured
                      </p>
                    )}
                  </div>
                  <div className="w-full flex items-center">
                    <h3 className="text-sm text-balance text-zinc-300">
                      {desc}
                    </h3>
                  </div>
                  <div className="w-full flex flex-col items-center gap-2">
                    <h3 className="w-full text-left text-sm lg:text-base">
                      Tech Stack:
                    </h3>
                    <ul className="text-sm flex flex-wrap items-center gap-2">
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

                  <div className="w-full flex items-center gap-3">
                    {githublink && (
                      <a
                        href={githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white bg-black hover:text-black hover:bg-white hover:scale-95 border-2 border-white rounded flex items-center gap-2 px-4 py-3 transition-all duration-200"
                      >
                        GitHub <RiGithubLine size={20} />
                      </a>
                    )}
                    {livedemo && (
                      <a
                        href={livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-black bg-white hover:text-purple-800 hover:scale-95 border-2 border-white hover:border-purple-800 rounded flex items-center gap-2 px-4 py-3 transition-all duration-200"
                      >
                        View Dashboard
                      </a>
                    )}
                  </div>
                </div>
              </FadeContent>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
