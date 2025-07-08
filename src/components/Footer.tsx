import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
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
  );
};

export default Footer;
