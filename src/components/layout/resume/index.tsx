import TabContent from "@/components/layout/tab-content";
import TabButton from "@/components/ui/tab-button";
import useSelectedTabStore from "@/stores/selectedTabStore";
import { ResumeItem, Tab } from "@/types";
import { FaAngular, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const tabBtns: Tab[] = [
  { id: 1, name: "Experience" },
  { id: 2, name: "Education" },
  { id: 3, name: "Skills" },
  { id: 4, name: "About me" },
];

const about: ResumeItem = {
  title: "Über mich",
  description: "Lorem Ipsum",
  items: [
    { fieldName: "Name", fieldValue: "Manuel Roman Proß" },
    { fieldName: "Arbeitserfahrung", fieldValue: "3+ Jahre" },
    { fieldName: "Nationalität", fieldValue: "Deutsch" },
    { fieldName: "Email", fieldValue: "pro_manuel@yahoo.de" },
    { fieldName: "Sprachen", fieldValue: "Englisch (B2), Deutsch" },
  ],
};

const experience: ResumeItem = {
  title: "Professionelle Erfahrung",
  description: "Lorem Ipsum",
  items: [
    {
      name: "Flip GmbH",
      position: "Frontendentwickler (Werkstudent)",
      duration: "2022 - 2024",
    },
    {
      name: "Sick AG",
      position: "Softwareentwickler (Werkstudent)",
      duration: "2020 - 2021",
    },
    {
      name: "dreiQBIK GmbH",
      position: "Frontendentwickler (Praktikant)",
      duration: "2019 - 2020",
    },
    {
      name: "CAT",
      position: "Softwareentwickler (Praktikant)",
      duration: "2016 - 2017",
    },
  ],
};

const skills: ResumeItem = {
  title: "Meine Skills",
  description: "Lorem Ipsum",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScrpt",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
  ],
};

const education: ResumeItem = {
  title: "Bildung",
  description: "Lorem Ipsum",
  items: [
    {
      name: "Fachhochschule Salzburg",
      position: "MultiMediaTechnology (Web Engineering), M. Sc.",
      duration: "2022 - 2024",
    },
    {
      name: "Hochschule Furtwangen",
      position: "Medieninformatik, B. Sc.",
      duration: "2018 - 2022",
    },
    {
      name: "Akademie für Datenverarabeitung",
      position:
        "Staatlich geprüfter Informatiker (Fachrichtung: Medien), Ausbildung",
      duration: "2015 - 2018",
    },
  ],
};

function Resume() {
  const updateSelectedTab = useSelectedTabStore(
    (state) => state.updateSelectedTab,
  );

  const handleClick = (newSelectedTab: string) => {
    updateSelectedTab(newSelectedTab);
  };

  return (
    <section>
      <h2 className="h2 text-center lg:text-left">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {tabBtns.map((tabBtn) => (
          <TabButton key={tabBtn.id} text={tabBtn.name} onClick={handleClick} />
        ))}
      </div>
      <TabContent />
    </section>
  );
}

export default Resume;
