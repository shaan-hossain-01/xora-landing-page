import { Element } from "react-scroll";
import { features } from "../constants";
// import { features } from "../constants"

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex border-2 md:flex-wrap-nowrap border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:3 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, title, caption, icon, text, button }) => (
              <div
                key={id}
                className="relative px-5 pb-5 z-2 md:px-10 md:pb-10 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:flex-320"
              >
                <div className="flex items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center mb-12 -ml-3">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img src={icon} className="object-contain size-28" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
