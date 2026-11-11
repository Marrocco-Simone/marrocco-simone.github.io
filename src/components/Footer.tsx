import React from "react";

const Footer: React.FC<{ name: string }> = ({ name }) => {
  return (
    <footer className="mt-[72px] bg-navy px-6 py-7 text-center font-display text-sm text-navy-text">
      © {name}
    </footer>
  );
};

export default Footer;
