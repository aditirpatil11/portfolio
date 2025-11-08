import Projects from "../components/Content/Projects";
import ColorBends from "../components/Common/ColorBends";

const ProjectsPage = () => {
  return (
    <>
      <ColorBends
        colors={["#ff47f0"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
