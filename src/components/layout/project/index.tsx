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
      <div className="flex gap-4">
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
            className: "w-6 h-6",
          }}
        >
          {project.liveLink && (
            <a href={project.liveLink}>
              <span className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-tokyo-storm">
                <MdArrowOutward />
              </span>
            </a>
          )}
          <a href={project.githubLink}>
            <span className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-tokyo-storm">
              <FaGithub />
            </span>
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Project;
