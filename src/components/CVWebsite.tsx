import React from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  Award,
  FileBadge,
  Sparkles,
} from "lucide-react";

// Import components
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import WorkExperienceCard from "./WorkExperienceCard";
import EducationCard from "./EducationCard";
import SkillsCard from "./SkillsCard";
import DocumentLinks from "./DocumentLinks";

// Import data
import { personalInfo } from "../data/personalInfo";
import { workExperience } from "../data/workExperience";
import { education } from "../data/education";
import { documents } from "../data/documents";
import { technicalSkills } from "../data/technicalSkills";
import { softSkills } from "../data/softSkills";
import { certifications } from "../data/certifications";

const CVWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header personalInfo={personalInfo} />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience Section */}
          <Section
            icon={<Briefcase className="text-blue-600" size={24} />}
            title="Work Experience"
          >
            <div className="space-y-6">
              {workExperience.map((experience, index) => (
                <WorkExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </Section>

          {/* Education Section */}
          <Section
            icon={<GraduationCap className="text-blue-600" size={24} />}
            title="Education"
          >
            <div className="space-y-6">
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} />
              ))}
            </div>
          </Section>

          {/* Documents Section */}
          <Section
            icon={<FileBadge className="text-blue-600" size={24} />}
            title="Documents & Publications"
          >
            <DocumentLinks documents={documents} />
          </Section>

          {/* Technical Skills Section */}
          <Section
            icon={<Code className="text-blue-600" size={24} />}
            title="Technical Skills"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skillCategory, index) => (
                <SkillsCard key={index} skillCategory={skillCategory} />
              ))}
            </div>
          </Section>

          {/* Soft Skills Section */}
          <Section
            icon={<Sparkles className="text-blue-600" size={24} />}
            title="Soft Skills"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skillCategory, index) => (
                <SkillsCard key={index} skillCategory={skillCategory} />
              ))}
            </div>
          </Section>

          {/* Certifications Section */}
          <Section
            icon={<Award className="text-blue-600" size={24} />}
            title="Certifications & Achievements"
          >
            <DocumentLinks documents={certifications} isAward={true} />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CVWebsite;
