import React from "react";
import type { WorkExperience } from "../types";

interface WorkExperienceCardProps {
  experience: WorkExperience;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  experience,
}) => {
  return (
    <article className="rounded-[10px] border border-line bg-white px-6 py-[22px]">
      {experience.period && (
        <div className="font-display text-[13px] font-semibold text-muted">
          {experience.period}
        </div>
      )}
      <h3 className="font-display text-xl font-semibold leading-[1.3]">
        {experience.title}
      </h3>
      <div className="font-display text-sm text-muted">{experience.company}</div>
      <p className="mb-2.5 mt-2 text-[15px] text-ink-soft">
        {experience.description}
      </p>
      {experience.details && (
        <ul className="mb-2.5 list-disc space-y-1 pl-5 text-[15px] text-ink-soft">
          {experience.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
        {experience.links.map((link) => (
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
    </article>
  );
};

export default WorkExperienceCard;
