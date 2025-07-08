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
      <p className="text-gray-600 mb-4">{experience.description}</p>
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
