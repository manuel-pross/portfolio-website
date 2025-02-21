import { ResumeItem, Skill } from "@/types";

type SkillsProps = {
  content: ResumeItem & { items: Skill[] };
};

function Skills({ content }: SkillsProps) {
  return (
    <article>
      <h4 className="h3">{content.title}</h4>
      <p>{content.description}</p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 justify-items-center md:justify-items-normal gap-5 max-w-[700px]">
        {content.items.map((item) => (
          <li
            className="block w-fit text-6xl p-10 md:p-12 bg-tokyo-storm rounded-xl"
            key={item.id}
          >
            {item.icon}
          </li>
        ))}
        <li></li>
      </ul>
    </article>
  );
}

export default Skills;
