import { CERTIFICATIONS } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const Certifications = () => {
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
              Certifications
            </h1>
          </div>
        </FadeContent>

        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Experience */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            {CERTIFICATIONS.map(
              ({ id, certificate, imgSrc, issuedBy, issuedOn, link }) => (
                <FadeContent
                  blur={true}
                  duration={1500}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1000}
                >
                  <div
                    key={id}
                    className="bg-linear-to-br from-black/50 to-zinc-800/50 border-2 border-zinc-600 rounded-xl flex flex-col items-start justify-between px-3 py-2"
                  >
                    {/* Certificate */}
                    <div className="w-full h-full flex flex-col lg:flex-row items-center gap-3">
                      {/* Image */}
                      <div className="h-full w-full lg:w-1/3 text-black bg-transparent rounded-xl flex flex-col items-center justify-center">
                        {imgSrc && (
                          <img
                            src={imgSrc}
                            alt={certificate}
                            className="w-50 h-50 lg:w-30 lg:h-30 object-contain"
                          />
                        )}
                      </div>

                      {/* Text */}
                      <div className="w-2/3 h-full flex flex-col lg:flex-row items-start justify-between">
                        <div className="w-full text-center lg:text-left flex flex-1 flex-col items-center lg:items-start justify-between">
                          <h3 className="text-base lg:text-lg font-semibold text-balance">
                            {certificate}
                          </h3>
                          <p className="font-semiboldtext-sm lg:text-base text-zinc-400">
                            {issuedBy}
                          </p>
                          <p className="text-sm lg:text-base text-zinc-400 mb-4">
                            {issuedOn}
                          </p>
                          {link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-black bg-white hover:scale-95 rounded flex items-center gap-3 px-4 py-2 transition-all duration-300"
                            >
                              Show Credentials
                            </a>
                          ) : (
                            <a className="pointer-events-none text-sm text-black bg-zinc-400 rounded flex items-center gap-3 px-4 py-2">
                              Show Credentials
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
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

export default Certifications;
