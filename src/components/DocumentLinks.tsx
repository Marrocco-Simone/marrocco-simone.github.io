import React from "react";
import type { DocumentLink } from "../types";

interface DocumentLinksProps {
  documents: DocumentLink[];
}

const DocumentLinks: React.FC<DocumentLinksProps> = ({ documents }) => {
  return (
    <ul>
      {documents.map((document) => (
        <li key={document.href} className="border-b border-line py-3 text-base">
          <a
            href={document.href}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {document.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DocumentLinks;
