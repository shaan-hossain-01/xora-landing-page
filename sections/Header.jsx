import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer">
    {title}
  </LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-10">
      <div className="container flex items-center h-14 max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" className="width-{115} height={55}" />
        </a>
        <div className="w-full border-2 border-amber-300">
          <ul className="flex max-lg:px-12 max-lg:block">
            <li className="nav-li">
              <NavLink title="features" />
              <div className="dot" />
              <NavLink title="pricing" />
            </li>
            <li className="nav-logo">
              <LinkScroll>
                <img
                  src="/images/xora.svg"
                  className="width-{160} height={55}"
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
        </div>
      </div>
    </header>
  );
};
export default Header;
