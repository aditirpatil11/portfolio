import ColorBends from "../components/Common/ColorBends";
import Hero from "../components/Content/Hero";
import About from "../components/Content/About";
import FeaturedProjects from "../components/Content/FeaturedProjects";

const Home = () => {
  return (
    <>
      <ColorBends
        colors={["#ff47f0",]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
      />
      <Hero/>
      <About/>
      <FeaturedProjects/>
    </>
  );
};

export default Home;
