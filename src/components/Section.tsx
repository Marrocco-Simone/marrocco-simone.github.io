import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="mb-[18px] mt-14 flex items-center gap-3.5 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] after:h-0.5 after:flex-1 after:bg-line after:content-[''] md:text-[30px]">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
