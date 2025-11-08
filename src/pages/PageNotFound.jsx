import ColorBends from "../components/Common/ColorBends";

const PageNotFound = () => {
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
      <section className="w-screen h-screen flex items-center justify-center">
        <h1 className="font-bold text-4xl text-purple-400">Page Not Found</h1>
      </section>
    </>
  );
};

export default PageNotFound;
