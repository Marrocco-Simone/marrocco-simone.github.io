import React from "react";
import { Download } from "lucide-react";
import { generateAndDownloadDocx } from "../utils/generateDocx";

export default function DownloadDocxButton() {
  return (
    <button
      onClick={generateAndDownloadDocx}
      className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700 transition-colors fixed bottom-0 right-0 m-5 flex items-center gap-2 shadow-lg"
    >
      <Download size={20} />
      Download CV
    </button>
  );
}
