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
  id: number;
  fieldName: string;
  fieldValue: string;
};

export type Institution = {
  id: number;
  name: string;
  position: string;
  duration: string;
};

export type Skill = {
  id: number;
  icon: ReactElement;
  name: string;
};

export type ResumeItem = {
  title: string;
  description: string;
  items: PersonalNote[] | Institution[] | Skill[];
};

export type Technology = {
  id: number;
  name: string;
};

export type OpenSrcProject = {
  id: number;
  category: string;
  title: string;
  description: string;
  stack: Technology[];
  image: string;
  liveLink?: string;
  githubLink: string;
};
