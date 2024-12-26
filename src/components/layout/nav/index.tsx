import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Nav = () => {
  return (
    <>
      <div className="hidden xl:flex">
        <DesktopNav />
      </div>
      <div className="xl:hidden">
        <MobileNav />
      </div>
    </>
  );
};

export default Nav;
