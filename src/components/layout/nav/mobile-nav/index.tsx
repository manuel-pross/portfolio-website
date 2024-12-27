import { CiMenuFries } from "react-icons/ci";
import { NavBarLink } from "../../../../types";

type MobileNavProps = {
  links: NavBarLink[];
};

const MobileNav = ({ links }: MobileNavProps) => {
  return (
    <>
      <CiMenuFries className="text-4xl" role="button" />
      <ul data-testid="mobile-nav">
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
