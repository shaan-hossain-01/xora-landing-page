import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll
    to={title}
    offset={-100}
    spy
    smooth
    className="font-bold text-[16px] leading-[24px] text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer max-lg:my-4 max-lg:h5"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500 max-lg:py-4",
        isScrolled ? "py-2 bg-black-100 backdrop-blur-[8px]" : "py-10"
      )}
    >
      <div className="container flex items-center h-14 max-lg:px-5">
        <a className="flex-1 cursor-pointer lg:hidden z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:px-12 max-lg:block">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="absolute left-0 block lg:hidden top-1/2 w-[960px] h-[380px] -translate-y-1/2 translate-x-[-290px] rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="flex items-center justify-center border-2 rounded-full lg:hidden z-2 border-s4/25 size-10"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            className="object-contain size-1/2"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
