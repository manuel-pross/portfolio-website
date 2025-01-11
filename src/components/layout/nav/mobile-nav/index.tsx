import { useState } from "react";
import { NavBarLink } from "../../../../types";
import BurgerIcon from "../../../ui/burgerIcon";
import { AnimatePresence, motion } from "motion/react";

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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            data-testid="mobile-nav"
            data-cy="mobile-nav-links"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <a data-testid="navbar-link" href={link.ref}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
