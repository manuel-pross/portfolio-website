import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/manuel-pross" },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/manuel-proß-a2059b2b7",
  },
];

function Socials() {
  return (
    <ul className="flex gap-3 justify-center">
      <IconContext.Provider
        value={{
          className:
            "w-6 h-6 text-tokyo-green group-hover:text-tokyo-text transition-all duration-500 ease-in-out md:w-8 md:h-8",
        }}
      >
        {socialLinks.map((social) => {
          return (
            <li key={social.url}>
              <a href={social.url}>
                <span className="group block border-2 border-tokyo-green rounded-full p-2 hover:border-tokyo-text hover:text-tokyo-text transition-all duration-500">
                  {social.icon}
                </span>
              </a>
            </li>
          );
        })}
      </IconContext.Provider>
    </ul>
  );
}

export default Socials;
