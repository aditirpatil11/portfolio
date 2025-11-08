import Skills from '../components/Content/Skills'
import ColorBends from '../components/Common/ColorBends'

const SkillsPage = () => {
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
      <Skills />
    </>
  );
}

export default SkillsPage