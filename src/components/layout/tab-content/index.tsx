import AboutMe from "@/components/layout/about-me";
import Experience from "@/components/layout/experience";
import Skills from "@/components/layout/skills";
import useSelectedTabStore from "@/stores/selectedTabStore";
import { Institution, PersonalNote, ResumeItem, Skill } from "@/types";
import { FaAngular, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const about: ResumeItem & { items: PersonalNote[] } = {
  title: "Über mich",
  description: "Lorem Ipsum",
  items: [
    {
      id: 1,
      fieldName: "Name",
      fieldValue: "Manuel Roman Proß",
    },
    {
      id: 2,
      fieldName: "Arbeitserfahrung",
      fieldValue: "3+ Jahre",
    },
    {
      id: 3,
      fieldName: "Nationalität",
      fieldValue: "Deutsch",
    },
    {
      id: 4,
      fieldName: "Sprachen",
      fieldValue: "Englisch (B2), Deutsch",
    },
  ],
};

const experience: ResumeItem & { items: Institution[] } = {
  title: "Professionelle Erfahrung",
  description: "Lorem Ipsum",
  items: [
    {
      id: 1,
      name: "Mercedes-Benz Consulting",
      position: "Junior Frontendentwickler und Consultant",
      duration: "2025 - heute",
    },
    {
      id: 2,
      name: "Flip GmbH",
      position: "Frontendentwickler (Werkstudent)",
      duration: "2022 - 2024",
    },
    {
      id: 3,
      name: "Sick AG",
      position: "Softwareentwickler (Werkstudent)",
      duration: "2020 - 2021",
    },
    {
      id: 4,
      name: "dreiQBIK GmbH",
      position: "Frontendentwickler (Praktikant)",
      duration: "2019 - 2020",
    },
    {
      id: 5,
      name: "CAT",
      position: "Softwareentwickler (Praktikant)",
      duration: "2016 - 2017",
    },
  ],
};

const skills: ResumeItem & { items: Skill[] } = {
  title: "Meine Skills",
  description: "Lorem Ipsum",
  items: [
    {
      id: 1,
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      id: 2,
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      id: 3,
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      id: 4,
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      id: 5,
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      id: 6,
      icon: <FaAngular />,
      name: "Angular",
    },
    {
      id: 7,
      icon: <FaReact />,
      name: "React",
    },
  ],
};

const education: ResumeItem & { items: Institution[] } = {
  title: "Bildung",
  description: "Lorem Ipsum",
  items: [
    {
      id: 1,
      name: "Fachhochschule Salzburg",
      position: "MultiMediaTechnology (Web Engineering), M. Sc.",
      duration: "2022 - 2024",
    },
    {
      id: 2,
      name: "Hochschule Furtwangen",
      position: "Medieninformatik, B. Sc.",
      duration: "2018 - 2022",
    },
    {
      id: 3,
      name: "Akademie für Datenverarabeitung",
      position:
        "Staatlich geprüfter Informatiker (Fachrichtung: Medien), Ausbildung",
      duration: "2015 - 2018",
    },
  ],
};

function TabContent() {
  const selectedTab = useSelectedTabStore((state) => state.selectedTab);

  const getSelectedContent = (selectedTab: string) => {
    let content = undefined;
    switch (selectedTab) {
      case "experience":
        content = <Experience content={experience} />;
        break;
      case "education":
        content = <Experience content={education} />;
        break;
      case "skills":
        content = <Skills content={skills} />;
        break;
      case "aboutMe":
        content = <AboutMe content={about} />;
        break;
      default:
        content = <p>No tab selected</p>;
        break;
    }

    return content;
  };

  return <>{selectedTab && getSelectedContent(selectedTab)}</>;
}

export default TabContent;
