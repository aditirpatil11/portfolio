import CF from "../../assets/images/cf.svg";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin, FaSquareGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NAV_LINKS, PROFILE } from "../../utils/data";
import { SOCIAL_LINKS } from "../../utils/data";
import ResumeAPR from "../../assets/resume/Aditi-Patil-Raman.pdf";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  // Pages that get the `to-tr` gradient
  const useTopRightGradient = pathname === "/" || pathname === "/projects";

  const gradientClass = useTopRightGradient
    ? "bg-linear-to-tr from-primary/30 via-black to-primary/30"
    : "bg-linear-to-br from-primary/30 via-black to-primary/30";

  return (
    <>
      <footer
        id="footer"
        className={`z-50 relative text-black tracking-tight ${gradientClass}`}
      >
        <div className="w-full h-full bg-linear-to-br from-zinc-200 via-white to-zinc-400 rounded-t-3xl px-10 pt-12 pb-4 lg:px-20 lg:pt-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
            {/* Grid 1 */}
            {PROFILE.map(({ name, place }) => (
              <div key={name} className="flex flex-col items-start gap-2">
                <h3 className="font-semibold lg:font-medium text-2xl lg:text-3xl">
                  {name}
                </h3>
                <p className="text-balance text-zinc-500 mb-2">{place}</p>

                <a
                  href={ResumeAPR}
                  download="Aditi-Patil-Raman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cursor-pointer text-purple-800 hover:text-white hover:bg-purple-800 border-2 rounded flex items-center gap-2 px-4 py-2 transition-colors duration-300">
                    Resume <MdOutlineFileDownload />
                  </button>
                </a>
              </div>
            ))}
            {/* Grid 2 */}
            <div className="">
              <h3 className="text-lg lg:text-xl mb-2 lg:mb-4">
                Navigation Links
              </h3>
              <ul className="text-zinc-500 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-3">
                {NAV_LINKS.map(({ name, link }) => (
                  <li key={name}>
                    <Link
                      to={link}
                      className="hover:text-black transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Grid 3 */}
            {SOCIAL_LINKS.map(({ linkedin, github, instagram }, index) => (
              <div key={index} className="">
                <h3 className="text-lg lg:text-xl mb-2 lg:mb-4">My Socials</h3>
                <ul className="text-zinc-500 space-y-1 lg:space-y-3">
                  <li className="flex items-center gap-2">
                    <FaLinkedin />
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors duration-300"
                    >
                      Linked In
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSquareGithub />
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  </li>
                  {instagram && (
                    <li className="flex items-center gap-2">
                      <FaInstagram />
                      <a
                        href={instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors duration-300"
                      >
                        Instagram
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
            {/* Grid 4 */}
            <div className="">
              <h3 className="text-lg lg:text-xl mb-2 lg:mb-4">
                Send me an email
              </h3>
              <ul className="text-zinc-500 space-y-1 lg:space-y-3 mb-4">
                <li>
                  <a
                    href="mailto:aditi.rpatil2001@gmail.com"
                    aria-label="Send me an email"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors duration-300"
                  >
                    aditi.rpatil2001@gmail.com
                  </a>
                </li>
              </ul>
              <h3 className="text-lg lg:text-xl mb-2 lg:mb-4">Contact Me</h3>
              <ul className="text-zinc-500 space-y-1 lg:space-y-3">
                <li>
                  <a
                    href="tel:7043694543"
                    aria-label="Call me at (704) 369 4543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors duration-300"
                  >
                    +1 (704) 369 4543
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="w-full border-t border-zinc-400 flex flex-col md:flex-row items-center justify-between gap-2 py-4">
            <p className="bg-clip-text text-transparent text-center bg-linear-to-br from-zinc-800 via-zinc-500 to-zinc-700">
              &copy; 2025 Aditi Patil Raman. <br className="flex lg:hidden" />{" "}
              All Rights Reserved.
            </p>

            <img
              src={CF}
              alt="CF"
              className="mix-blend-difference pointer-events-none w-6 h-6 rotate-90 skew-x-12"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
