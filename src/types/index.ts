export interface Contact {
  type: "email" | "github" | "linkedin";
  value: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  intro: string[];
  affiliation: string[];
  contacts: Contact[];
}

export interface DocumentLink {
  text: string;
  href: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period?: string;
  description: string;
  details?: string[];
  links: DocumentLink[];
}

export interface Education {
  title: string;
  institution: string;
  period?: string;
  description: string;
  links: DocumentLink[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface UnderReviewPaper {
  venue: string;
  authors: string;
  title: string;
  details: string;
}

export interface Publication extends UnderReviewPaper {
  href: string;
}
