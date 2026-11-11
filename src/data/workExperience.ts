import type { WorkExperience } from "../types";

export const workExperience: WorkExperience[] = [
  {
    title: "Teaching Assistant - Computer Networks (Reti)",
    company: "University of Trento - DISI",
    period: "a.a. 2025/2026 (90 hours) and 2026/2027 (80 hours)",
    description:
      "Laboratory assistant for the Computer Networks course (Bachelor's in Computer Science, Prof. Paolo Casari): teaching of the Wireshark and Kathará network emulation labs, student support, didactic-integrative activities and supervision of lab exams.",
    links: [
      {
        text: "View teaching activities",
        href: "https://webapps.unitn.it/du/it/Persona/PER0197435/Didattica",
      },
      {
        text: "Kathará lab repository",
        href: "https://github.com/Marrocco-Simone/reti-lab-kathara",
      },
    ],
  },
  {
    title: "University Tutor - Palestra di Algoritmi (Olympiad in Informatics)",
    company: "University of Trento - DISI & secondary schools",
    period: "Since a.a. 2023/2024 - ongoing",
    description:
      "Training of high-school teams for the Italian Olympiad in Informatics on behalf of the DISI (with Prof. Alberto Montresor). Courses held in C++ and Python on algorithms and data structures, across multiple editions and schools:",
    details: [
      "2023/2024 - Liceo Scientifico Galilei, Trento (advanced course)",
      "2024/2025 - Liceo Galilei and ITT Buonarroti, Trento",
      "2025/2026 - ITT Buonarroti, Trento (students from Galilei, Da Vinci, Buonarroti; Rosmini online)",
      "2026/2027 - Liceo Rosmini, Rovereto and ITT Buonarroti, Trento",
      "TeacherDojo 2023, 2025 and 2026 - teacher-training workshop on algorithms and competitive programming",
    ],
    links: [
      {
        text: "Training material repository",
        href: "https://github.com/Marrocco-Simone/palestradialgoritmi",
      },
    ],
  },
  {
    title: "Solo Founder & Developer",
    company: "Judo in Cloud",
    period: "2023 - ongoing",
    description:
      "Solo founder and developer of a SaaS for managing judo and martial arts competitions. Handles product, sales, support and on-site deployment with a fleet of about 24 laptops, 18 tablets, TVs and cameras, up to national championships. Modules: online registration and payment reconciliation, categories, poules and draw sheets, live scoreboards and results, kata judging on tablets and club websites. Stack: Bun, Express, MongoDB, NextJS, Docker, Google Cloud Build and Cloud Run. 40+ competitions and about 14,000 athletes managed for different organisations.",
    links: [
      {
        text: "Visit Project",
        href: "https://judoincloud.com",
      },
    ],
  },
  {
    title: "Developer",
    company: "CARE System - open source, part of Judo in Cloud",
    period: "2023 - ongoing",
    description:
      "Open-source video replay system for judo referees (Camera Assistant Referee Enhanced). Records the webcam in the browser to IndexedDB and plays it back with DVR controls: rewind, slow motion, frame-by-frame and zoom, fully offline. The Electron desktop app streams to YouTube over HLS with one hardware H.264 encoder. Vanilla JavaScript, MediaSource API, Electron.",
    links: [
      {
        text: "Visit Project",
        href: "https://care.judoincloud.com",
      },
      {
        text: "Visit Repo",
        href: "https://github.com/Marrocco-Simone/Judo-in-Cloud-CARE-System",
      },
    ],
  },
  {
    title: "Founder & Developer",
    company: "UnlockGPT",
    period: "2025 - ongoing",
    description:
      "AI productivity agent that connects Gmail, Outlook, Google Workspace, Calendar, Dropbox and GitHub, and lets users work across multiple accounts in natural language. Multi-step agent with specialised subagents (email, calendar, files, web research), proactive background analysis, context compaction, prompt caching, vectorless document retrieval, OCR, per-user encryption and usage budgets. Stack: Bun, Express, MongoDB, NextJS, Vercel AI SDK, Google Cloud Run.",
    links: [
      {
        text: "Visit Project",
        href: "https://unlockgpt.ai",
      },
    ],
  },
  {
    title: "Consultant & Solo Developer",
    company: "Compify",
    period: "2025 - ongoing (Milano Sake Challenge 2025 and 2026)",
    description:
      "Solo developer of a platform for managing sake and beverage competitions: producer registration, jury assignment and scoring, rankings and medals, PDF reports and labels, Stripe payments, and a mobile app for judges in five languages. Stack: Bun, Express, MongoDB, TanStack Start, Expo, Google Cloud Run. Used for the Milano Sake Challenge, one of the biggest sake competitions in Europe with over 1000 bottles from Japan and all over the world.",
    links: [
      {
        text: "Visit Project",
        href: "https://compify.io",
      },
      {
        text: "Visit the event page",
        href: "https://milanosakechallenge.com",
      },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "CiaoManager - Hotel in Cloud",
    period: "Dec 2021 - May 2022",
    description:
      "Six-month internship developing a web application for hotel and B&B management using Express, MySQL and React.",
    links: [
      {
        text: "Visit Website",
        href: "https://www.hotelincloud.com/",
      },
    ],
  },
  {
    title: "Software Developer",
    company: "University of Trento - EMPATHY project (PRIN 2017)",
    period: "May 2023 - Dec 2023",
    description:
      "Contract developer for SmarterGame, a NextJS web app to run and control primary-school math exercises. It connects to a tangible tool through MQTT (Node-RED) and to a gamification engine through a REST API, with one interface for children and one for teachers.",
    links: [
      {
        text: "Visit Repo",
        href: "https://github.com/SmarterGame/new-sensation",
      },
    ],
  },
];
