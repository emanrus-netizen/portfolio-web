export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
};


export const projects: Project[] = [
    {
        id: "kompra",
        title: "Kompra",
        subtitle: "Business Management Ecosystem",
        category: "Professional Experience",
        description:
            "An integrated business platform supporting retail operations, inventory management, supplier relationships, wholesale ordering, and enterprise workflows.",
        technologies: [
            "React Native",
            "Next.js",
            "GraphQL",
            "Prisma",
            "PostgreSQL",
            "Redis",
        ],
    },
    {
        id: "life-queue",
        title: "Life Queue",
        subtitle: "Your Next Best Action",
        category: "Mobile Application",
        description:
            "A smart productivity application that recommends what to work on next based on priorities, routines, time, and energy.",
        technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "AsyncStorage",
        ],
    },
    {
        id: "abang-ph",
        title: "Abang PH",
        subtitle: "Rental Management Made Simple",
        category: "Web Application",
        description:
            "A rental management application designed to help landlords organize properties, tenants, rental payments, and everyday operations.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
        ],
    },
    {
        id: "e-sumbong",
        title: "E-Sumbong",
        subtitle: "Digital Reporting Platform",
        category: "Web Development",
        description:
            "A digital reporting application designed to support structured report submission and management.",
        technologies: ["JavaScript"],
    },
];