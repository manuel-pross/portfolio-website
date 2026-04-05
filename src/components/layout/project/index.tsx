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
    <div className="relative flex flex-col h-full w-full bg-tokyo-storm py-2.5 lg:py-0 lg:pb-2.5 rounded-xl">
      <div className="flex flex-col h-full w-full justify-between lg:flex-row lg:mb-5">
        <div className="[&>p:first-child]:!bg-tokyo-storm [&>p:first-child]:!text-tokyo-storm px-3 lg:pt-2.5 lg:basis-3xl xl:basis-4xl">
          <p className="text-6xl lg:text-8xl leading-none font-extrabold text-outline-white text-transparent text-left">
            {prependZeros(project.id, 2)}
          </p>
          <h3 className="h3 text-left">{project.title}</h3>
          <p>{truncateText(project.description, 100)}</p>
          <ul className="flex gap-5 text-xl mb-5">
            {project.stack.map((technology) => (
              <li
                className="text-tokyo-green text-sm md:text-lg"
                key={technology.id}
              >
                {technology.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mb-5 lg:mb-0">
          <img src={project.image} alt="Screenshot of project" />
        </div>
        <hr className="hidden lg:block lg:border-tokyo-white lg:opacity-50 lg:mb-5" />
      </div>
      <div className="flex gap-3 px-3">
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
