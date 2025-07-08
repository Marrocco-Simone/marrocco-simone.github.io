import React from "react";
import { FileBadge, Award } from "lucide-react";
import type { DocumentLink } from "../types";

interface DocumentLinksProps {
  documents: DocumentLink[];
  isAward?: boolean;
}

const DocumentLinks: React.FC<DocumentLinksProps> = ({
  documents,
  isAward = false,
}) => {
  const Icon = isAward ? Award : FileBadge;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <ul className="space-y-4 text-gray-600">
        {documents.map((document, index) => (
          <li key={index} className="flex items-center gap-2">
            <a
              href={document.href}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={16} className="text-blue-600 w-16" />
              {document.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentLinks;
