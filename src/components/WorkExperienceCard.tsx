import React from "react";
import { Globe } from "lucide-react";
import type { WorkExperience } from "../types";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
      <h4 className="italic mb-2">{experience.company}</h4>
      {experience.period && (
        <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
      )}
      <p className="text-gray-600 mb-4">{experience.description}</p>
      {experience.details && (
        <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600">
          {experience.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
      <div className="space-y-2">
        {experience.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} />
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
