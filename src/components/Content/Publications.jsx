import { LuNewspaper, LuEye } from "react-icons/lu";
import { PUBLICATIONS } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const Publications = () => {
  return (
    <section
      id="publications"
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
              Research Publications
            </h1>
          </div>
        </FadeContent>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
          {/* Summary */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
            {PUBLICATIONS.map(({ id, paper, journal, timeline, doi, link }) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={1500}
              >
                <div
                  key={id}
                  className="w-full bg-black border-2 border-zinc-800 rounded-xl flex flex-col items-start gap-2 px-6 py-6"
                >
                  <h3 className="text-base lg:text-2xl text-balance flex items-center gap-3">
                    <span className="bg-zinc-800 rounded-xl p-2">
                      <LuNewspaper size={25} />
                    </span>
                    {paper}
                  </h3>
                  <p className="text-sm lg:text-base text-zinc-400">
                    {journal}
                  </p>
                  <p className="text-sm lg:text-base text-zinc-400">
                    DOI : <span className="text-white">{doi}</span>
                  </p>
                  <p className="text-sm lg:text-base text-zinc-400 mb-4">
                    {timeline}
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm lg:text-base text-black bg-white hover:scale-95 rounded-3xl flex items-center gap-3 px-4 py-2 transition-all duration-300"
                  >
                    <LuEye size={25} />
                    View Research Paper
                  </a>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
