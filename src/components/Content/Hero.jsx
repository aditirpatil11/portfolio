import APR from "../../assets/images/apr6.png";
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { PROFILE } from "../../utils/data";
import ResumeAPR from "../../assets/resume/Aditi-Patil-Raman.pdf";
import FadeContent from "../Common/FadeContent";

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative px-4 lg:px-20">
        {/* Main Container */}
        <div className="container mx-auto min-h-screen lg:h-screen flex flex-col items-center justify-center gap-4">
          {/* TOP */}
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={1000}
          >
            <div className="z-20 w-44 h-44 lg:w-60 lg:h-60 bg-linear-to-br from-white to-purple-400 border-4 border-purple-200 rounded-full overflow-hidden flex flex-col items-center justify-center gap-4">
              <img src={APR} alt="apr" className="w-full h-full object-cover" />
            </div>
          </FadeContent>

          {/* BOTTOM */}
          <div className="z-20 flex flex-col items-center justify-center gap-2 lg:gap-4">
            {/* Name */}
            {PROFILE.map(({ name }) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={1500}
              >
                <div
                  key={name}
                  className="w-full flex flex-col items-center gap-2"
                >
                  <p className="text-base lg:text-2xl text-zinc-300">Hi, I'm</p>
                  <h1 className="font-semibold text-3xl lg:text-5xl text-transparent bg-clip-text bg-linear-to-br from-zinc-400 via-white to-zinc-500 mb-2">
                    {name}
                  </h1>
                </div>
              </FadeContent>
            ))}

            {/* Info */}
            {PROFILE.map(({ tag1, tag2, tag3, tagline }, index) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={2000}
              >
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-center gap-0 mb-2"
                >
                  <div className="min-w-[250px] text-sm lg:text-lg text-zinc-300 text-center grid grid-cols-1 lg:flex items-center gap-2 mb-4 lg:mb-2">
                    <p className="text-white bg-zinc-600/30 border lg:border-0 border-zinc-700 rounded px-2">
                      {tag1}
                    </p>
                    <p className="hidden lg:flex">|</p>
                    <p className="text-white bg-zinc-600/30 border lg:border-0 border-zinc-700 rounded px-2">
                      {tag2}
                    </p>
                    <p className="hidden lg:flex">|</p>
                    <p className="text-white bg-zinc-600/30 border lg:border-0 border-zinc-700 rounded px-2">
                      {tag3}
                    </p>
                  </div>
                  <h3 className="w-2/3 lg:w-full text-center text-balance text-sm lg:text-lg text-zinc-300">
                    {tagline}
                  </h3>
                </div>
              </FadeContent>
            ))}

            {/* Social Links */}
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={2500}
            >
              <div className="w-full flex flex-col items-center justify-center gap-1">
                {/* First Line */}
                <div className="w-[220px] flex items-center justify-center gap-1">
                  {/* Resume */}
                  <a
                    href={ResumeAPR}
                    download="Aditi-Patil-Raman.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 hover:text-black hover:bg-white hover:scale-95 border-2 border-white rounded flex items-center justify-center gap-2 px-3 py-1 lg:py-2 transition-all duration-300"
                  >
                    <p className="hidden lg:flex">Resume</p>
                    <MdOutlineFileDownload
                      size={25}
                      className="hidden lg:flex"
                    />

                    {/* Mobile Icon */}
                    <HiOutlineDocumentArrowDown
                      size={25}
                      className="lg:hidden flex"
                    />
                  </a>
                  {/* Github */}
                  <a
                    href="https://github.com/aditirpatil11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-0 lg:flex-0 hover:text-black hover:bg-white hover:scale-95 border-2 border-white rounded flex items-center justify-center gap-2 px-3 py-1 lg:py-2 transition-all duration-300"
                  >
                    <RiGithubLine size={25} />
                  </a>
                </div>
                {/* Second Line */}
                <div className="w-[220px] flex items-center justify-center gap-1">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/aditi-patil-raman-452199248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-0 lg:flex-0 hover:text-black hover:bg-white hover:scale-95 border-2 border-white rounded flex items-center justify-center gap-2 px-3 py-1 lg:py-2 transition-all duration-300"
                  >
                    <RiLinkedinFill size={25} />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:aditi.rpatil2001@gmail.com"
                    aria-label="Send me an email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 hover:text-black hover:bg-white hover:scale-95 border-2 border-white rounded flex items-center justify-center gap-2 px-3 py-1 lg:py-2 transition-all duration-300"
                  >
                    <p className="hidden lg:flex">Gmail</p>
                    <BiLogoGmail size={25} />
                  </a>
                </div>
              </div>
            </FadeContent>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
