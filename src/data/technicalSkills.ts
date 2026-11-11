import type { SkillCategory } from "../types";

export const technicalSkills: SkillCategory[] = [
  {
    title: "AI Agents & LLMs",
    skills: [
      "Vercel AI SDK, tool-calling agents and subagents",
      "context compaction and prompt caching",
      "document retrieval (RAG) and OCR",
      "Claude, Gemini, Open weight models via Fireworks and OpenRouter",
    ],
  },
  {
    title: "Software Architecture",
    skills: [
      "Docker and Kubernetes",
      "Google Cloud (Build, Run, Storage)",
      "Nginx",
      "Load Testing (Locust.io, K6.io)",
      "Network testing (Wireshark, Kathará)",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "JS libraries: React, Svelte",
      "JS frameworks: NextJS, Astro",
      "APIs: Node/Express, Java Spring",
      "Mobile: Expo and React Native, Flutter",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Low level: C, C++, CUDA",
      "OOP: Rust, C#, Java",
      "JIT: JavaScript, TypeScript, Python",
      "Database: SQL, MongoDB",
    ],
  },
];
