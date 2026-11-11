import React from "react";
import type { Publication, UnderReviewPaper } from "../types";

interface PublicationsProps {
  publications: (Publication | UnderReviewPaper)[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <ul>
      {publications.map((publication) => (
        <li key={publication.title} className="border-b border-line py-3.5 text-base">
          <span className="mr-2 whitespace-nowrap rounded bg-soft px-2 py-1 align-[2px] font-display text-xs font-extrabold tracking-[0.06em] text-ink">
            {publication.venue}
          </span>
          {"href" in publication ? (
            <a
              href={publication.href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
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
