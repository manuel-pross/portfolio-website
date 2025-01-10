import { useState } from "react";
import { NavBarLink } from "../../../../types";
import BurgerIcon from "../../../ui/burgerIcon";

type MobileNavProps = {
  links: NavBarLink[];
};

const MobileNav = ({ links }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBtnClick = () => {
    console.log("click");
  };

  const handleMenuChange = (isMenuOpen: boolean) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <BurgerIcon onStatusChange={handleMenuChange} />
      {isMenuOpen && (
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
      )}
    </>
  );
};

export default MobileNav;
