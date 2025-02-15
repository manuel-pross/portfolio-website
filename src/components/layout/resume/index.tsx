import { FaAngular, FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const about = {
  title: "Über mich",
  description: "Lorem Ipsum",
  infos: [
    { fieldName: "Name", fieldValue: "Manuel Roman Proß" },
    { fieldName: "Arbeitserfahrung", fieldValue: "3+ Jahre" },
    { fieldName: "Nationalität", fieldValue: "Deutsch" },
    { fieldName: "Email", fieldValue: "pro_manuel@yahoo.de" },
    { fieldName: "Sprachen", fieldValue: "Englisch (B2), Deutsch" },
  ],
};

const experience = {
  title: "Professionelle Erfahrung",
  description: "Lorem Ipsum",
  items: [
    {
      institution: "Flip GmbH",
      position: "Frontendentwickler (Werkstudent)",
      duration: "2022 - 2024",
    },
    {
      institution: "Sick AG",
      position: "Softwareentwickler (Werkstudent)",
      duration: "2020 - 2021",
    },
    {
      institution: "dreiQBIK GmbH",
      position: "Frontendentwickler (Praktikant)",
      duration: "2019 - 2020",
    },
    {
      institution: "CAT",
      position: "Softwareentwickler (Praktikant)",
      duration: "2016 - 2017",
    },
  ],
};

const skills = {
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

const education = {
  title: "Bildung",
  description: "Lorem Ipsum",
  items: [
    {
      institution: "Fachhochschule Salzburg",
      position: "MultiMediaTechnology (Web Engineering), M. Sc.",
      duration: "2022 - 2024",
    },
    {
      institution: "Hochschule Furtwangen",
      position: "Medieninformatik, B. Sc.",
      duration: "2018 - 2022",
    },
    {
      institution: "Akademie für Datenverarabeitung",
      position:
        "Staatlich geprüfter Informatiker (Fachrichtung: Medien), Ausbildung",
      duration: "2015 - 2018",
    },
  ],
};

function Resume() {
  return (
    <section>
      <h2 className="h2">Work Experience</h2>
    </section>
  );
}

export default Resume;
