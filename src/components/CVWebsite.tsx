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
  FolderGit,
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
              >
                <Mail size={20} />
                marrocco.simone00@gmail.com
              </a>
              <a
                href="http://github.com/Marrocco-Simone"
                className="flex items-center gap-2 hover:text-blue-200"
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/simone-marrocco"
                className="flex items-center gap-2 hover:text-blue-200"
              >
                <Linkedin size={20} />
                LinkedIn Profile
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
                <h4 className="text-blue-600 mb-2">Judo in Cloud</h4>
                <p className="text-gray-600 mb-4">
                  Developed a comprehensive web application for managing martial
                  arts competitions using the MERN stack (MongoDB, Express,
                  React, NextJS). Helped different organizations to manage over
                  4000 complessive athletes.
                </p>
                <a
                  href="https://judoincloud.com"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <Globe size={16} />
                  Visit Project
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Full Stack Developer
                </h3>
                <h4 className="text-blue-600 mb-2">
                  CiaoManager - Hotel in Cloud
                </h4>
                <p className="text-gray-600 mb-4">
                  Six-month internship developing a web application for hotel
                  and B&B management using Express, MySQL and React.
                </p>
                <a
                  href="https://www.hotelincloud.com/"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <Globe size={16} />
                  Visit Website
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Research Collaboration
                </h3>
                <h4 className="text-blue-600 mb-2">
                  FBK (Bruno Kesler Research Foundation)
                </h4>
                <p className="text-gray-600">
                  Contributed to SmartGame, an E-Learning application
                  development project. Web app made in NextJs.
                </p>
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
                  Master's in Computer Science
                </h3>
                <h4 className="text-blue-600 mb-2">University of Trento</h4>
                <p className="text-gray-600 mb-4">Currently pursuing</p>
                <a
                  href="https://drive.google.com/file/d/16BduicjLgpSvjpTM7FD-Ybtio-rtKykW/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <BookCheck size={16} />
                  Grades
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Exchange Program</h3>
                <h4 className="text-blue-600 mb-2">
                  Aalto University, Helsinki
                </h4>
                <p className="text-gray-600 mb-4">Erasmus exchange period</p>
                <a
                  href="https://drive.google.com/file/d/1NX-fTekIQCbeTxfpHmWBgF0MdcK7BQYz/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <BookCheck size={16} />
                  Grades
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor's in Computer Science
                </h3>
                <h4 className="text-blue-600 mb-2">University of Trento</h4>
                <p className="text-gray-600 mb-4">
                  Graduated with full marks cum laude
                </p>
                <a
                  href="https://drive.google.com/file/d/1dqj_6ackcfFEAO8rvdC84327qS6juLOI/view?usp=sharing"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                >
                  <BookCheck size={16} />
                  Grades
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
                    href="https://drive.google.com/file/d/1GL6xkV0TNDhgiAwDzCbjxsiwcGI-l9Y-/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Predicting Economics Figures with Statistical Models
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/17jI1zyXzyaUpWyu4WjfayTT9-xjXnp0U/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                  >
                    <FileBadge size={16} className="text-blue-600" />
                    Distributed Database in Akka.NET
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1fuAznWDFWW-ZVmwYUZ_RjczZf-YGEGbB/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
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
                  >
                    <Award size={16} className="text-blue-600" />
                    English C1 Cambridge CAE Certification
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1-ofFOrPGhfmaUELdiykzbsKB38A0vOn0/view?usp=drive_link"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
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
                  >
                    <Award size={16} className="text-blue-600" />
                    Industrial AI Challenge Certification
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1UXNVs3jX8LPwYwCvTreQ6B0ggN5h3Zl6/view?usp=sharing"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
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
          <p>© 2024 Marrocco Simone.</p>
        </div>
      </footer>
    </div>
  );
};

export default CVWebsite;
