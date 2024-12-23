import React from "react";
import {
  Mail,
  Github,
  Globe,
  Code,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

const CVWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Marrocco Simone</h1>
            <h2 className="text-2xl mb-6">
              Full Stack MERN Developer & Software Architecture Engineer
            </h2>
            <div className="flex flex-wrap gap-4">
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
                  React, NextJS). All APIs are fully documented and accessible.
                </p>
                <a
                  href="http://judoincloud.com"
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
                <p className="text-gray-600">
                  Six-month internship developing a web application for hotel
                  and B&B management using Express and React.
                </p>
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
                  development project.
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
                <p className="text-gray-600">Currently pursuing</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Exchange Program</h3>
                <h4 className="text-blue-600 mb-2">
                  Aalto University, Helsinki
                </h4>
                <p className="text-gray-600">Erasmus exchange period</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor's in Computer Science
                </h3>
                <h4 className="text-blue-600 mb-2">University of Trento</h4>
                <p className="text-gray-600">
                  Graduated with full marks cum laude
                </p>
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
                  <li>React with NextJS</li>
                  <li>AngularJS, SvelteJS</li>
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
                  <li>TypeScript</li>
                </ul>
              </div>
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
                  <Award size={16} className="text-blue-600" />
                  English C1 Cambridge CAE Certification
                </li>
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-blue-600" />
                  BUCA'24 Workshop Participation Certificate
                </li>
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-blue-600" />
                  Industrial AI Challenge Certification
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Marrocco Simone. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Born in Trento, 23/10/2000</p>
        </div>
      </footer>
    </div>
  );
};

export default CVWebsite;
