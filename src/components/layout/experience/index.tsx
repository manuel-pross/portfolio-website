import { Institution, ResumeItem } from "@/types";

type ExperienceProps = {
  content: ResumeItem & { items: Institution[] };
};

function Experience({ content: experience }: ExperienceProps) {
  return (
    <article>
      <h3 className="h3">{experience.title}</h3>
      <p>{experience.description}</p>
      {experience.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </article>
  );
}

export default Experience;
