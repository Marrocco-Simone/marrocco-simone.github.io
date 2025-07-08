import React from "react";
import type { SkillCategory } from "../types";

interface SkillsCardProps {
  skillCategory: SkillCategory;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ skillCategory }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{skillCategory.title}</h3>
      <ul className="space-y-2 text-gray-600 list-disc pl-4">
        {skillCategory.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
