import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import type { PersonalInfo } from "../types";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const getContactIcon = (type: string) => {
  switch (type) {
    case "email":
      return <Mail size={20} />;
    case "github":
      return <Github size={20} />;
    case "linkedin":
      return <Linkedin size={20} />;
    case "website":
      return <Globe size={20} />;
    default:
      return <Mail size={20} />;
  }
};

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="bg-blue-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
          <h2 className="text-2xl mb-6">{personalInfo.title}</h2>
          <div className="flex flex-col gap-4">
            {personalInfo.contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-2 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {getContactIcon(contact.type)}
                {contact.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
