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
      <div className="absolute right-0">
        <BurgerIcon onStatusChange={handleMenuChange} />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="pt-6"
            data-testid="mobile-nav"
            data-cy="mobile-nav-links"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2>Manuel.</h2>
            <ul className="flex flex-col justify-center gap-4 h-full text-lg text-center pt-10">
              {links.map((link) => {
                return (
                  <li className="" key={link.label}>
                    <a data-testid="navbar-link" href={link.ref}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
