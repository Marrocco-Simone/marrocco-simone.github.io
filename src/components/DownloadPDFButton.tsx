import React from "react";
import { Download } from "lucide-react";
import { generateAndDownloadDocx } from "../utils/generateDocx";

export default function DownloadDocxButton() {
  return (
    <button
      type="button"
      onClick={generateAndDownloadDocx}
      className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-accent px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
    >
      <Download size={16} aria-hidden="true" />
      Download CV
    </button>
  );
}
