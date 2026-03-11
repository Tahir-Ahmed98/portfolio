import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "sprouts",
    title: "Sprouts.ai",
    description:
      "AI-enabled ABM & GTM intelligence platform. Pre-integrated intelligent martech platform that replaces the need to buy multiple databases, intent products, and sales outreach platforms.",
    image: "https://placehold.co/800x450/6366f1/ffffff?text=Sprouts.ai",
    tags: [
      "AI",
      "SaaS",
      "Martech",
      "GTM",
      "Next JS",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    featured: true,
  },
  {
    id: "1",
    title: "Drivers Monitoring System (FYP)",
    description:
      "Android app using Machine Learning, image processing, and IoT. Monitors drivers for drowsiness and yawning, generates alerts, checks distance from other vehicles. Reports violations sent to a mobile app for daily, weekly, and monthly view by the organization.",
    image: "https://placehold.co/800x450/6366f1/ffffff?text=Driver+Monitoring",
    tags: ["Android", "Machine Learning", "Image Processing", "IoT"],
    featured: true,
  },
  {
    id: "2",
    title: "Reusable Component Library",
    description:
      "Library of reusable React components documented in Storybook, reducing development time by 40–50% across projects and ensuring design consistency.",
    image: "https://placehold.co/800x450/6366f1/ffffff?text=Component+Library",
    tags: ["React", "TypeScript", "Storybook", "Design System"],
    featured: true,
  },
  {
    id: "3",
    title: "Recruitment Chrome Extensions",
    description:
      "2+ Chrome extensions built with React and Manifest v3 for recruitment automation and seamless browser integration.",
    image: "https://placehold.co/800x450/6366f1/ffffff?text=Chrome+Extensions",
    tags: ["React", "Chrome Extensions", "Manifest v3"],
  },
];
