import { useState } from "react";
import { NavBarLink } from "../../../../types";
import BurgerIcon from "../../../ui/burgerIcon";
import { AnimatePresence, motion } from "motion/react";

type MobileNavProps = {
  links: NavBarLink[];
};

const MobileNav = ({ links }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuChange = (isMenuOpen: boolean) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="absolute top-4 right-6 md:top-8">
        <BurgerIcon onStatusChange={handleMenuChange} />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="flex flex-col h-full pt-16 px-12"
            data-testid="mobile-nav"
            data-cy="mobile-nav-links"
            initial={{ opacity: 0, x: 20, backgroundColor: "#1a1b26" }}
            animate={{ opacity: 1, x: 0, backgroundColor: "#24283b" }}
            exit={{ opacity: 0, x: 20 }}
          >
            <h2 className="text-3xl font-semibold text-center">
              Manuel<span className="text-tokyo-green">.</span>
            </h2>
            <ul className="flex flex-col justify-center gap-20 grow text-lg text-center">
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
