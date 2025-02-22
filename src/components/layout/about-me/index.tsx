import { PersonalNote, ResumeItem } from "@/types";

type AboutMeProps = {
  content: ResumeItem & { items: PersonalNote[] };
};

function AboutMe({ content }: AboutMeProps) {
  return (
    <article>
      <h2 className="h3">{content.title}</h2>
      <p className="text-center lg:text-left">{content.description}</p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {content.items.map((item) => (
          <li key={item.id}>
            <p className="text-center lg:text-left mb-0">
              <span className="text-tokyo-comment">{item.fieldName}</span>:
              <span className="inline-block pl-4">{item.fieldValue}</span>
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default AboutMe;
