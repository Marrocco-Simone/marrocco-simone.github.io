import React from "react";
import {
  Mail,
  Github,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Linkedin,
  FileBadge,
  BookCheck,
  Sparkles,
  Microscope,
} from "lucide-react";

const CVWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Marrocco Simone</h1>
            <h2 className="text-2xl mb-6">
              Full Stack MERN Developer & Software Architecture Engineer
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:marrocco.simone00@gmail.com"
                className="flex items-center gap-2 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
                marrocco.simone00@gmail.com
              </a>
              <a
                href="http://github.com/Marrocco-Simone"
                className="flex items-center gap-2 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/simone-marrocco"
                className="flex items-center gap-2 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
              <a
                href="https://marrocco-simone.github.io/"
                className="flex items-center gap-2 hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={20} />
                Personal website
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Founder & MERN Developer
                </h3>
                <h4 className="italic mb-2">Judo in Cloud</h4>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive web application for managing martial
                  arts competitions using the MERN stack (MongoDB, Express,
                  React, NextJS). Helped different organizations to manage over
                  4000 complessive athletes.
                </p>
                <a
                  href="https://judoincloud.com"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Visit Project
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Full Stack Developer
                </h3>
                <h4 className="italic mb-2">CiaoManager - Hotel in Cloud</h4>
                <p className="text-gray-600 mb-4">
                  Six-month internship developing a web application for hotel
                  and B&B management using Express, MySQL and React.
                </p>
                <a
                  href="https://www.hotelincloud.com/"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Visit Website
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Research Collaboration
                </h3>
                <h4 className="italic mb-2">
                  FBK (Bruno Kesler Research Foundation)
                </h4>
                <p className="text-gray-600 mb-4">
                  Contributed to SmartGame, an E-Learning application
                  development project. Web app made in NextJs.
                </p>
                <a
                  href="https://github.com/SmarterGame/new-sensation"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe size={16} />
                  Visit Repo
                </a>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Researcher in Telecommunication Security
                </h3>
                <h4 className="italic mb-2">University of Trento</h4>
                <p className="text-gray-600 mb-4">
                  Working with professors Segata Michele and Casari Paolo on
                  telecommunication security and privacy for cooperative
                  autonomous vehicles.
                </p>
                <a
                  href="https://webapps.unitn.it/du/it/Persona/PER0197435/Pubblicazioni"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Microscope size={16} />
                  University profile
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Master's in Computer Science
                </h3>
                <h4 className="italic mb-2">University of Trento</h4>
                <p className="text-gray-600 mb-4">
                  Graduated with full marks cum laude
                </p>
                <a
                  href="https://drive.google.com/file/d/16BduicjLgpSvjpTM7FD-Ybtio-rtKykW/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookCheck size={16} />
                  Degree & Grades
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Exchange Program</h3>
                <h4 className="italic mb-2">Aalto University, Helsinki</h4>
                <p className="text-gray-600 mb-4">Erasmus exchange period</p>
                <a
                  href="https://drive.google.com/file/d/1NX-fTekIQCbeTxfpHmWBgF0MdcK7BQYz/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookCheck size={16} />
                  Grades
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor's in Computer Science
                </h3>
                <h4 className="italic mb-2">University of Trento</h4>
                <p className="text-gray-600 mb-4">
                  Graduated with full marks cum laude
                </p>
                <a
                  href="https://drive.google.com/file/d/1dqj_6ackcfFEAO8rvdC84327qS6juLOI/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookCheck size={16} />
                  Degree & Grades
                </a>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Code className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Software Architecture
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Docker and Kubernetes</li>
                  <li>Google Cloud (Build, Run, Domain)</li>
                  <li>Nginx</li>
                  <li>Load Testing (Locust.io, K6.io)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>React, AngularJS, SvelteJS</li>
                  <li>NextJS, Astro</li>
                  <li>Flutter</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Backend Development
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>NodeJS/Express & Deno/Hono</li>
                  <li>Java Spring</li>
                  <li>MongoDB, Firebase</li>
                  <li>MySQL, PostgreSQL</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>C/C++ (including CUDA)</li>
                  <li>Rust</li>
                  <li>C# and Java</li>
                  <li>Javascript, TypeScript & Python</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Soft Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Leadership & Management
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>
                    Project Leadership - Led development of Judo in Cloud
                    managing 4000+ athletes
                  </li>
                  <li>
                    Strategic Planning - Developed and executed business
                    strategy for cloud-based solutions
                  </li>
                  <li>
                    Team Coordination - Experience in goal setting and team
                    direction
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Business & Analysis
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>
                    Business Development - Successfully launched and grew Judo
                    in Cloud platform
                  </li>
                  <li>
                    Strategic Analysis - Conducted cost and load analysis for
                    scalable applications
                  </li>
                  <li>
                    Market Research - Researched and published analysis on cloud
                    providers and open source
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Communication & Interpersonal
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>
                    Stakeholder Management - Coordinated with competition
                    organizers for the best possible outcome
                  </li>
                  <li>
                    Cross-cultural Communication - International experience
                    through Erasmus in Helsinki
                  </li>
                  <li>
                    Technical Communication - Published research papers and
                    technical documentation
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Problem-Solving & Innovation
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>
                    User-Centered Design - Developed intuitive solutions for
                    complex tournament management
                  </li>
                  <li>
                    Adaptability - Experience across multiple programming
                    languages and frameworks
                  </li>
                  <li>
                    Innovation Mindset - Created novel solutions for existing
                    problems
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Documents Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FileBadge className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">Documents & Publications</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1jS7MeY0iZA33X0UffKoNxZBHcLGOSCYx/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Master's dissertation - MIMO physical layer security using
                    multiple Reconfigurable Intelligent Surfaces
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://ieeexplore.ieee.org/document/11054099"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Poster: Multi-Receiver Physical Layer Security Using
                    Reconfigurable Intelligent Surfaces
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1GL6xkV0TNDhgiAwDzCbjxsiwcGI-l9Y-/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Predicting Economics Figures with Statistical Models
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/17jI1zyXzyaUpWyu4WjfayTT9-xjXnp0U/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Distributed Database in Akka.NET
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1fuAznWDFWW-ZVmwYUZ_RjczZf-YGEGbB/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Server Side Public License - Cloud providers and the future
                    of open source
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/19hU47HTiTprVjn8w--J3gGsfS0NYtGSM/view"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Bachelor's dissertation - Load Balancing for Web Apps
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold">
                Certifications & Achievements
              </h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1r-3B8__UoC5Ko2ETJhd0xASZi8NVOFU0/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award size={16} className="text-blue-600" />
                    English C1 Cambridge CAE Certification
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1-ofFOrPGhfmaUELdiykzbsKB38A0vOn0/view?usp=drive_link"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award size={16} className="text-blue-600" />
                    "Challenges in building Billion User Cloud Applications"
                    Workshop Participation Certificate
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/14H4_GW9OJcJfeWf-dz9biwY9VMt4y-BE/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award size={16} className="text-blue-600" />
                    Industrial AI Challenge Certification
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1UXNVs3jX8LPwYwCvTreQ6B0ggN5h3Zl6/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Award size={16} className="text-blue-600" />
                    National Judo Referee Certification
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Marrocco Simone</p>
        </div>
        <a
          href="https://github.com/Marrocco-Simone/marrocco-simone.github.io"
          className="flex items-center gap-2 hover:text-blue-200 justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          Website Repo
        </a>
      </footer>
    </div>
  );
};

export default CVWebsite;
