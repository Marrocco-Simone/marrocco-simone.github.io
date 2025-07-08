// Personal Info Types
export interface Contact {
  type: string;
  value: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  contacts: Contact[];
}

// Work Experience Types
export interface WorkExperienceLink {
  text: string;
  href: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  description: string;
  links: WorkExperienceLink[];
}

// Education Types
export interface EducationLink {
  text: string;
  href: string;
  icon?: string;
}

export interface Education {
  title: string;
  institution: string;
  description: string;
  links: EducationLink[];
}

// Skills Types
export interface SkillCategory {
  title: string;
  skills: string[];
}

// Document Types
export interface DocumentLink {
  text: string;
  href: string;
}
