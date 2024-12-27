import { NavBarLink } from "../../../types";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const links: NavBarLink[] = [
  { label: "header", ref: "header" },
  { label: "work experience", ref: "work-experience" },
  { label: "education", ref: "education" },
  { label: "projects", ref: "projects" },
];

const Nav = () => {
  return (
    <>
      <div className="hidden xl:flex">
        <DesktopNav links={links} />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;
