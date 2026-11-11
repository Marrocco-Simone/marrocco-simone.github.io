import React from "react";
import type { Publication } from "../types";

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <ul>
      {publications.map((publication) => (
        <li key={publication.href} className="border-b border-line py-3.5 text-base">
          <span className="mr-2 whitespace-nowrap rounded bg-soft px-2 py-1 align-[2px] font-display text-xs font-extrabold tracking-[0.06em] text-ink">
            {publication.venue}
          </span>
          <a
            href={publication.href}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {publication.title}
          </a>
          <br />
          <span className="text-[15px] text-muted">
            {publication.authors} — {publication.details}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Publications;
