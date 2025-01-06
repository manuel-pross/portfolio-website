import { NavBarLink } from "../../../../types";

type DesktopNavProps = {
  links: NavBarLink[];
};

const DesktopNav = ({ links }: DesktopNavProps) => {
  return (
    <ul
      className="flex gap-8"
      data-testid="desktop-nav"
      data-cy="desktop-nav-links"
    >
      {links.map((link) => {
        return (
          <li key={link.label}>
            <a
              className="capitalize font-medium hover:text-tokyo-green transition-all"
              data-testid="navbar-link"
              href={link.ref}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
