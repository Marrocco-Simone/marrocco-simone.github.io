import React from "react";
import type { SkillCategory } from "../types";

interface SkillsCardProps {
  skillCategory: SkillCategory;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skillCategory }) => {
  return (
    <div className="rounded-[10px] border border-line bg-white px-6 py-[22px]">
      <h3 className="mb-2 font-display text-lg font-semibold leading-[1.3]">
        {skillCategory.title}
      </h3>
      <ul className="list-disc space-y-1 pl-5 text-[15px] text-ink-soft">
        {skillCategory.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
