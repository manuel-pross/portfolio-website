import { OpenSrcProject } from "@/types";
import { prependZeros } from "@/utils";

type ProjectProps = {
  project: OpenSrcProject;
};

export function Project({ project }: ProjectProps) {
  return (
    <div>
      <p className="text-8xl leading-none font-extrabold text-outline-white text-transparent">
        {prependZeros(project.id, 2)}
      </p>
    </div>
  );
}

export default Project;
