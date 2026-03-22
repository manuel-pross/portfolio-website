import { OpenSrcProject } from "@/types";
import { prependZeros, truncateText } from "@/utils";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

type ProjectProps = {
  project: OpenSrcProject;
};

export function Project({ project }: ProjectProps) {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div>
          <p className="text-8xl leading-none font-extrabold text-outline-white text-transparent text-left">
            {prependZeros(project.id, 2)}
          </p>
          <h3 className="h2 text-left">{project.title}</h3>
          <p>{truncateText(project.description, 100)}</p>
          <ul className="flex gap-5 text-xl mb-5">
            {project.stack.map((technology) => (
              <li className="text-tokyo-green" key={technology.id}>
                {technology.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <img src={project.image} alt="Screenshot of project" />
        </div>
      </div>
      <hr className="border-tokyo-white opacity-50 mb-5" />
      <div className="flex gap-3">
        <IconContext.Provider
          value={{
            className:
              "w-6 h-6 text-tokyo-green group-hover:text-tokyo-text transition-all duration-300 ease-in-out md:w-8 md:h-8",
          }}
        >
          {project.liveLink && (
            <a href={project.liveLink}>
              <span className="group block border-2 border-tokyo-green rounded-full p-2 hover:border-tokyo-text hover:text-tokyo-text transition-all duration-300">
                <MdArrowOutward />
              </span>
            </a>
          )}
          <a href={project.githubLink}>
            <span className="group block border-2 border-tokyo-green rounded-full p-2 hover:border-tokyo-text hover:text-tokyo-text transition-all duration-300">
              <FaGithub />
            </span>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Project;
