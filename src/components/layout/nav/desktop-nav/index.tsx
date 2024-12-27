import { NavBarLink } from "../../../../types";

type DesktopNavProps = {
  links: NavBarLink[];
};

const DesktopNav = ({ links }: DesktopNavProps) => {
  return (
    <ul data-testid="desktop-nav">
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
  );
};

export default DesktopNav;
