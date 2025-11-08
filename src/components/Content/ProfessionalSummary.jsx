import APR from "../../assets/images/apr6.png";
import { LuMessageSquareCode } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { LuSquareActivity } from "react-icons/lu";
import { ACTIVITIES, EDUCATION, PRO_SUMMARY } from "../../utils/data";
import FadeContent from "../Common/FadeContent";

const ProfessionalSummary = () => {
  return (
    <section
      id="summary"
      className="bg-linear-to-tr from-primary/30 via-black to-primary/30 relative px-4 lg:px-20"
    >
      {/* Main Container */}
      <div className="relative z-30 container mx-auto min-h-screen lg:min-h-screen flex flex-col items-center justify-center gap-4 py-18 lg:py-28">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={1000}
        >
          {/*== Professional Summary ==*/}
          {/* Name */}

          <div className="w-full text-white flex flex-col lg:flex-row items-center justify-start gap-4 mb-4">
            {/* Image */}
            <div className="z-20 w-20 h-20 lg:w-44 lg:h-44 bg-linear-to-br from-white to-purple-400 border-4 border-purple-200 rounded-full overflow-hidden flex flex-col items-center justify-center gap-4">
              <img src={APR} alt="apr" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center gap-0 lg:gap-2">
              {/* Name */}
              <div className="w-full flex flex-col items-start">
                <h1 className="font-semibold text-2xl lg:text-4xl text-white">
                  Aditi Patil Raman
                </h1>
              </div>

              {/* Info */}
              <div className="w-full flex flex-col items-center justify-center gap-0 mb-2">
                <h3 className="hidden lg:flex w-2/3 lg:w-full text-left text-balance text-sm lg:text-lg text-zinc-300">
                  Data Engineer | AI/ML & GenAI Enthusiast | 3x AWS Certified
                </h3>
                <h3 className="w-full lg:w-full text-center lg:text-left text-balance text-sm lg:text-lg text-zinc-300">
                  United States
                </h3>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full flex flex-col lg:flex-row items-start gap-10">
            {/* Summary */}
            <div className="w-full flex flex-col items-start gap-4">
              <div className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 py-6">
                <h3 className="text-xl lg:text-2xl flex items-center gap-3 mb-4">
                  <span className="bg-zinc-800 rounded-xl p-2">
                    <LuMessageSquareCode size={25} />
                  </span>
                  Professional Summary
                </h3>
                <ul className="list-disc list-outside flex flex-col gap-3 pl-4">
                  {PRO_SUMMARY.map(({ line, id }) => (
                    <li
                      key={id}
                      className="text-sm lg:text-base text-left text-zinc-400"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeContent>

        {/*== Education & Activities==*/}

        {/* Content */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          delay={1500}
        >
          <div className="w-full flex flex-col lg:flex-row items-start gap-4">
            {/* Education */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
              <div className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 py-6">
                <h3 className="text-xl lg:text-2xl flex items-center gap-3 mb-4">
                  <span className="bg-zinc-800 rounded-xl p-2">
                    <LuGraduationCap size={25} />
                  </span>
                  Education
                </h3>
                <div className="flex flex-col gap-3">
                  {EDUCATION.map(
                    ({
                      id,
                      study,
                      major,
                      uni,
                      timeline,
                      coursework,
                      gradeType,
                      grade,
                    }) => (
                      <div
                        key={id}
                        className="border-2 border-zinc-600 rounded-xl flex flex-col items-start justify-between px-3 py-2"
                      >
                        {/* Top */}
                        <div className="w-full flex items-start justify-between mb-4">
                          {/* Left */}
                          <div className="w-full flex flex-col items-start">
                            <h3 className="text-base lg:text-lg font-semibold text-balance">
                              {study} in {major}
                            </h3>
                            <p className="text-sm lg:text-base text-zinc-400">
                              {uni}
                            </p>
                            <p className="text-sm lg:text-base text-zinc-400">
                              {timeline}
                            </p>
                          </div>

                          {/* Right */}
                          <div className="text-black bg-white rounded-xl flex flex-col items-center justify-center p-2 lg:p-4">
                            <p className="text-xs">{gradeType}</p>
                            <p className="text-sm lg:text-base">{grade}</p>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="w-full">
                          <p className="text-sm lg:text-base text-white">
                            Coursework :{" "}
                            <span className="text-zinc-400">{coursework}</span>
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
              <div className="w-full bg-black border-2 border-zinc-800 rounded-xl px-6 py-6">
                <h3 className="text-xl lg:text-2xl flex items-center gap-3 mb-4">
                  <span className="bg-zinc-800 rounded-xl p-2">
                    <LuSquareActivity size={25} />
                  </span>
                  Activities
                </h3>
                <div className="flex flex-col gap-3">
                  {ACTIVITIES.map(
                    ({ id, imgSrc, title, designation, timeline, content }) => (
                      <div
                        key={id}
                        className="border-2 border-zinc-600 rounded-xl flex flex-col items-start justify-between px-3 py-2"
                      >
                        {/* Top */}
                        <div className="w-full flex items-start justify-between mb-4">
                          {/* Left */}
                          <div className="w-full flex flex-col items-start">
                            <h3 className="text-base lg:text-lg font-semibold text-balance">
                              {title}
                            </h3>
                            <p className="text-sm lg:text-base text-zinc-400">
                              {designation}
                            </p>
                            <p className="text-sm lg:text-base text-zinc-400">
                              {timeline}
                            </p>
                          </div>

                          {/* Right */}
                          <div className="overflow-hidden text-black bg-white rounded-xl flex flex-col items-center justify-center">
                            <img
                              src={imgSrc}
                              alt={title}
                              className="w-20 h-16 object-cover"
                            />
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="w-full">
                          <p className="text-sm lg:text-base text-white">
                            <span className="text-zinc-400">{content}</span>
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
