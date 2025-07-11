import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative pb-40 border-2 pt-60 max-lg:pt-52 max-lg:pb-36 border-amber-300 max-md:pt-36 max-md:pb-32">
      <Element>
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="uppercase caption small-2 text-p3">
              Video Editing
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
