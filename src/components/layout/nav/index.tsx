import { NavBarLink } from "../../../types";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const links: NavBarLink[] = [
  { label: "work experience", ref: "work-experience" },
  { label: "education", ref: "education" },
  { label: "projects", ref: "projects" },
];

const Nav = () => {
  return (
    <>
      <div
        className="hidden xl:flex"
        data-testid="desktop-nav-wrapper"
        data-cy="desktop-nav"
      >
        <DesktopNav links={links} />
      </div>
      <div
        className="fixed top-0 right-0 z-10 h-screen xl:hidden"
        data-testid="mobile-nav-wrapper"
        data-cy="mobile-nav"
      >
        <MobileNav links={links} />
      </div>
    </>
  );
};

export default Nav;
