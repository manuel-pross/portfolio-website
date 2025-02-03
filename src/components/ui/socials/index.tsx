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
          className: "w-8 h-8 text-tokyo-green",
        }}
      >
        {socialLinks.map((social) => {
          return (
            <li key={social.url}>
              <a href={social.url}>
                <div className="border-2 border-tokyo-green rounded-full p-2">
                  {social.icon}
                </div>
              </a>
            </li>
          );
        })}
      </IconContext.Provider>
    </ul>
  );
}

export default Socials;
