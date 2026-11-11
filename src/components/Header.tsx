import React from "react";
import type { PersonalInfo } from "../types";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const heroLink =
  "text-white underline decoration-1 underline-offset-[3px] focus-visible:outline-white";

const external = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

const renderInline = (text: string) =>
  text.split(/\[([^\]]+)\]\(([^)]+)\)/).map((part, i, parts) => {
    if (i % 3 === 0) return part;
    if (i % 3 === 2) return null;
    return (
      <a key={i} href={parts[i + 1]} className={heroLink} {...external(parts[i + 1])}>
        {part}
      </a>
    );
  });

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const emails = personalInfo.contacts.filter((c) => c.type === "email");
  const profiles = personalInfo.contacts.filter((c) => c.type !== "email");

  return (
    <div className="relative overflow-hidden bg-navy text-white">
      <div className="relative z-[1] mx-auto grid max-w-[1120px] gap-6 px-4 pb-[90px] pt-9 md:px-6 lg:grid-cols-[1fr_280px] lg:gap-12 lg:pb-[120px] lg:pt-16">
        <div className="min-w-0">
          <div className="mb-[18px] flex items-center gap-4">
            <img
              src="/simone.jpg"
              alt={personalInfo.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover lg:hidden"
            />
            <h1 className="min-w-0 font-display text-[42px] font-extrabold leading-none tracking-[-0.03em] lg:text-[64px]">
              {personalInfo.name}
            </h1>
          </div>
          <ul className="mb-[26px] flex flex-wrap gap-x-[18px] gap-y-2 font-display text-[15px] font-semibold text-navy-text">
            {personalInfo.roles.map((role, i) => (
              <li key={role} className="flex gap-[18px]">
                {i > 0 && (
                  <span aria-hidden="true" className="text-navy-dim">
                    /
                  </span>
                )}
                {role}
              </li>
            ))}
          </ul>
          {personalInfo.intro.map((paragraph) => (
            <p key={paragraph} className="mb-3 max-w-[640px] text-navy-body">
              {renderInline(paragraph)}
            </p>
          ))}
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-display text-sm lg:hidden">
            {personalInfo.contacts.map((contact) => (
              <li key={contact.href} className="min-w-0 break-all">
                <a href={contact.href} className={heroLink} {...external(contact.href)}>
                  {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <address className="hidden self-start rounded-[10px] border border-navy-line bg-navy2 p-[22px] font-display text-sm not-italic leading-[1.7] text-navy-text lg:block">
          <img
            src="/simone.jpg"
            alt={personalInfo.name}
            width={560}
            height={560}
            className="mb-4 aspect-square w-full rounded-[10px] object-cover"
          />
          {personalInfo.affiliation.map((line) => (
            <div key={line}>{line}</div>
          ))}
          <div className="mt-2.5">
            {emails.map((contact) => (
              <a key={contact.href} href={contact.href} className="block break-all text-white hover:underline focus-visible:outline-white">
                {contact.value}
              </a>
            ))}
            <div className="text-white">
              {profiles.map((contact, i) => (
                <React.Fragment key={contact.href}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <a href={contact.href} className="hover:underline focus-visible:outline-white" {...external(contact.href)}>
                    {contact.value}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </address>
      </div>
      <svg
        className="absolute -bottom-0.5 left-0 right-0 h-[110px] w-full"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 110 V80 L120 62 L210 74 L330 30 L400 52 L470 18 L540 44 L610 36 L700 70 L820 40 L900 58 L1010 12 L1080 40 L1160 30 L1260 66 L1360 50 L1440 64 V110Z"
          className="fill-navy2"
        />
        <path
          d="M0 110 V96 L160 84 L300 92 L460 70 L620 88 L760 74 L940 92 L1100 78 L1280 90 L1440 82 V110Z"
          className="fill-white"
        />
      </svg>
    </div>
  );
};

export default Header;
