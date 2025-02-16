import { ReactElement } from "react";

export type NavBarLink = {
  label: string;
  ref: string;
};

export type Tab = {
  id: number;
  name: string;
};

export type PersonalNote = {
  fieldName: string;
  fieldValue: string;
};

export type Institution = {
  name: string;
  position: string;
  duration: string;
};

export type Skill = {
  icon: ReactElement;
  name: string;
};

export type ResumeItem = {
  title: string;
  description: string;
  items: PersonalNote[] | Institution[] | Skill[];
};
