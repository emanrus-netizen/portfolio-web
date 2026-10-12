export type Experience = {
    id: string;
    company: string;
    role: string;
    project: string;
    description: string;
    highlights: string[];
    technologies: string[];
};

export const experiences: Experience[] = [
    {
        id: "kompra",
        company: "Right Apps Inc.",
        role: "Software Developer",
        project: "Kompra",
        description:
            "Contributed to a business management ecosystem supporting retail, inventory, and wholesale operations.",
        highlights: [
            "GraphQL APIs & business workflows",
            "Prisma & PostgreSQL data modeling",
            "Supplier procurement & inventory modules"
        ],
        technologies: [
            "TypeScript", "Graphql", "Prisma", "PostgresSQL", "Redis", "React-Native", "Expo"
        ],
    },
];