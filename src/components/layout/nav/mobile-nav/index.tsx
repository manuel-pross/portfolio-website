import { NavBarLink } from "../../../../types";
import BurgerIcon from "../../../ui/burgerIcon";

type MobileNavProps = {
  links: NavBarLink[];
};

const MobileNav = ({ links }: MobileNavProps) => {
  const handleBtnClick = () => {
    console.log("click");
  };

  return (
    <>
      <BurgerIcon />
      <ul data-testid="mobile-nav" data-cy="mobile-nav-links" className="">
        {links.map((link) => {
          return (
            <li key={link.label}>
              <a data-testid="navbar-link" href={link.ref}>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MobileNav;
