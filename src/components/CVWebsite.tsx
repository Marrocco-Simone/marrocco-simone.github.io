import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import WorkExperienceCard from "./WorkExperienceCard";
import EducationCard from "./EducationCard";
import SkillsCard from "./SkillsCard";
import DocumentLinks from "./DocumentLinks";
import Publications from "./Publications";

import { personalInfo } from "../data/personalInfo";
import { workExperience } from "../data/workExperience";
import { education } from "../data/education";
import { publications, documents } from "../data/documents";
import { technicalSkills } from "../data/technicalSkills";
import { academicService } from "../data/academicService";
import { certifications } from "../data/certifications";
import { news } from "../data/news";

const CVWebsite = () => {
  return (
    <>
      <Header personalInfo={personalInfo} />

      <div className="mx-auto max-w-[1120px] px-4 md:px-6">
        <div className="relative z-[2] -mt-10 grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <aside aria-labelledby="news-heading" className="lg:col-start-2 lg:row-start-1">
            <div className="rounded-[10px] border border-line bg-white px-6 py-[22px] lg:sticky lg:top-20">
              <h2
                id="news-heading"
                className="mb-3 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-muted"
              >
                News
              </h2>
              <ul>
                {news.map((item) => (
                  <li key={item.text} className="border-t border-line py-2 text-[15px]">
                    <span className="font-display font-extrabold">{item.date}:</span>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="min-w-0 lg:col-start-1 lg:row-start-1 [&>section:first-child>h2]:mt-0 lg:[&>section:first-child>h2]:mt-16">
            <Section id="education" title="Education">
              <ul>
                {education.map((edu) => (
                  <EducationCard key={edu.title} education={edu} />
                ))}
              </ul>
            </Section>

            <Section id="experience" title="Work Experience">
              <div className="space-y-4">
                {workExperience.map((experience) => (
                  <WorkExperienceCard key={experience.title} experience={experience} />
                ))}
              </div>
            </Section>

            <Section id="publications" title="Documents & Publications">
              <Publications publications={publications} />
              <h3 className="mb-1 mt-8 font-display text-xl font-semibold leading-[1.3]">
                Other documents
              </h3>
              <DocumentLinks documents={documents} />
            </Section>

            <Section id="skills" title="Technical Skills">
              <div className="grid gap-4 md:grid-cols-2">
                {technicalSkills.map((skillCategory) => (
                  <SkillsCard key={skillCategory.title} skillCategory={skillCategory} />
                ))}
              </div>
            </Section>

            <Section id="service" title="Academic Service">
              <DocumentLinks documents={academicService} />
            </Section>

            <Section id="awards" title="Certifications & Achievements">
              <DocumentLinks documents={certifications} />
            </Section>
          </main>
        </div>
      </div>

      <Footer name={personalInfo.name} />
    </>
  );
};

export default CVWebsite;
