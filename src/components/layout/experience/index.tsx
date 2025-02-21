import { Institution, ResumeItem } from "@/types";

type ExperienceProps = {
  content: ResumeItem & { items: Institution[] };
};

function Experience({ content: experience }: ExperienceProps) {
  return (
    <article className="flex flex-col">
      <h3 className="h3">{experience.title}</h3>
      <p>{experience.description}</p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-h-[400px] xl:max-h-[800px] overflow-y-auto">
        {experience.items.map((item) => (
          <li
            className="block py-4 px-8 bg-tokyo-storm rounded-2xl"
            key={item.id}
          >
            <h4 className="h4 text-tokyo-green">{item.duration}</h4>
            <h3 className="h3">{item.position}</h3>
            <p className="relative text-center xl:text-left m-0 before:content-['•'] before:pr-2 before:text-tokyo-green">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Experience;
