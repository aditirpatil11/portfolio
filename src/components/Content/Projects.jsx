import { useState } from "react";
import { RiGithubLine } from "react-icons/ri";
import { PROJECTS } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const Projects = () => {
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured");

  // Filter by category
  const filtered = PROJECTS.filter((p) => {
    if (filterCategory === "All") return true;
    return p.category === filterCategory;
  });

  // Sort logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "featured")
      return Number(b.featured) - Number(a.featured);
    if (sortOption === "alpha") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section
      id="projects"
      className="bg-linear-to-br from-primary/30 via-black to-primary/30 relative px-4 lg:px-20"
    >
      <div className="relative z-30 container mx-auto min-h-screen flex flex-col items-center justify-center gap-4 py-18 lg:py-28">
        {/* TOP */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={0}
        >
          <div className="text-white flex flex-col items-center justify-center gap-4 mb-4">
            <h1 className="text-3xl lg:text-5xl text-center text-balance">
              Projects
            </h1>
            <h3 className="w-full lg:w-2/3 text-sm lg:text-lg text-center text-balance text-zinc-400">
              Collection of all my work in data engineering, machine learning,
              and data visualization.
            </h3>
          </div>
        </FadeContent>

        {/* FILTERS */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={1500}
        >
          <div className="flex flex-wrap gap-4 mb-8">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-black text-white border border-zinc-700 rounded px-2 py-2"
            >
              <option value="All" className="">
                All Projects
              </option>
              <option value="AI/ML">AI/ML</option>
              <option value="Data Eng & Visualization">
                Data Engineering & Visualization
              </option>
            </select>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-black text-white border border-zinc-700 rounded px-2 py-2"
            >
              <option value="featured">Featured First</option>
              <option value="alpha">Alphabetical</option>
            </select>
          </div>
        </FadeContent>

        {/* PROJECTS GRID */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10">
          {sorted.map(
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
                    className="w-full h-[214px] object-cover border-2 border-white rounded-xl"
                  />

                  <div className="w-full flex items-start justify-between">
                    <h3 className="text-xl text-balance">{name}</h3>
                    {featured && (
                      <p className="text-xs text-black bg-linear-to-br from-purple-400 via-purple-300 to-white rounded-full px-3 py-1">
                        Featured
                      </p>
                    )}
                  </div>

                  <p className="text-sm text-balance text-zinc-300">{desc}</p>

                  <div className="w-full flex flex-col gap-2">
                    <h3 className="text-sm lg:text-base">Tech Stack:</h3>
                    <ul className="text-sm flex flex-wrap gap-2">
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

export default Projects;
