import React from "react";
import { BookCheck, Microscope } from "lucide-react";
import type { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "microscope":
      return <Microscope size={16} />;
    case "bookCheck":
    default:
      return <BookCheck size={16} />;
  }
};

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{education.title}</h3>
      <h4 className="italic mb-2">{education.institution}</h4>
      <p className="text-gray-600 mb-4">{education.description}</p>
      <div className="space-y-2">
        {education.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getIcon(link.icon)}
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
