import React from "react";
import type { Education } from "../types";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <li className="border-b border-line py-4">
      <h3 className="font-display text-xl font-semibold leading-[1.3]">
        {education.title}
      </h3>
      <div className="font-display text-sm text-muted">
        {education.institution}
        {education.period && ` · ${education.period}`}
      </div>
      <p className="mb-2 mt-2 text-base text-ink-soft">{education.description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
        {education.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </li>
  );
};

export default EducationCard;
