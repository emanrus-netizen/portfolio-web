export type Project = {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    technologies: string[];
    image?: string;


    // Detailed case-study information
    overview?: string;
    problem?: string;
    solution?: string;

    contributions?: string[];
    challenges?: string[];
    learnings?: string[];
    engineering?: EngineeringDecision[];
    architecture?: ArchitectureNode[]
};

export type EngineeringDecision = {
    title: string;
    problem: string;
    constraints: string[];
    approach: string;
    validation: string[];
    lessons: string[];
};
export type ArchitectureNode = {
    id: string;
    title: string;
    description: string;
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

        overview:
            "Kompra is a business management ecosystem designed to connect retail operations, inventory management, supplier procurement, and wholesale commerce.",

        problem:
            "Retail businesses and suppliers often manage inventory, purchasing, and sales through disconnected workflows. Keeping information consistent across these operations requires careful system design.",

        solution:
            "The platform combines enterprise business workflows with backend services, structured data models, and applications for different organizational roles.",

        contributions: [
            "Developing and integrating GraphQL API functionality.",
            "Implementing business workflows for ERP and wholesale modules.",
            "Working with Prisma and PostgreSQL data models.",
            "Building supplier RFQ and purchasing functionality.",
            "Contributing to inventory and sales-related features.",
        ],

        challenges: [
            "Coordinating data across multiple business workflows.",
            "Handling complex relationships between organizations, suppliers, and outlets.",
            "Designing and debugging backend validation and business rules.",
        ],

        learnings: [
            "The importance of validating data at service boundaries.",
            "How database relationships influence application architecture.",
            "Why business workflows require careful state management.",
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

        overview:
            "Life Queue is a mobile productivity application designed to help users decide what to do next. Instead of simply displaying a traditional to-do list, it recommends tasks and routines based on priorities, available time, energy levels, and daily schedules.",

        problem:
            "Traditional productivity applications often require users to manually decide which task to work on next. When managing multiple responsibilities, changing energy levels, and personal routines, choosing the right task can become overwhelming. The challenge was to create a system that recommends meaningful actions while respecting the user's schedule, rest periods, and personal preferences.",

        solution:
            "Developed a mobile application using React Native, Expo, and TypeScript with a recommendation engine that evaluates task priority, urgency, context, and energy requirements. The application integrates task management, recurring routines, notifications, progress tracking, and bedtime-aware recommendations into a unified daily workflow.",

        contributions: [
            "Designed and implemented a task recommendation engine using priority, urgency, energy levels, and contextual eligibility.",
            "Developed task management functionality supporting creation, editing, completion, skipping, and snoozing.",
            "Implemented recurring routines with session tracking and completion states.",
            "Integrated local notifications and deep-link navigation to tasks and routines.",
            "Built productivity analytics covering daily activity, weekly summaries, and streak calculations.",
            "Implemented local data persistence using AsyncStorage.",
            "Developed responsive mobile interfaces using React Native and Expo Router.",
        ],

        challenges: [
            "Designing a recommendation algorithm that balances urgency, task priority, available time, and user energy.",
            "Managing task and routine lifecycle states while keeping the interface synchronized with application data.",
            "Handling notification scheduling and navigation when the application is opened from a notification.",
            "Preventing bedtime recommendations from conflicting with urgent tasks and active routines.",
            "Implementing accurate streak calculations across completed, missed, and intentional rest days.",
            "Maintaining TypeScript type safety across application state, components, and recommendation logic.",
        ],

        learnings: [
            "How to break complex recommendation algorithms into smaller, testable functions.",
            "The importance of clearly defined state transitions when managing tasks and recurring routines.",
            "How local persistence and notifications interact with mobile application lifecycles.",
            "Why automated tests are essential for date-based calculations and productivity analytics.",
            "How user context and behavioral patterns can influence personalized recommendations.",
            "The value of building software around real user behavior rather than simply adding features.",
        ],
        engineering: [
            {
                title: "Designing a Context-Aware Recommendation Engine",

                problem:
                    "A traditional task list shows unfinished work but leaves the user to decide what to tackle next. Life Queue needed a way to recommend a relevant task while considering the user's current circumstances.",

                constraints: [
                    "Completed or otherwise ineligible tasks must not be recommended.",
                    "Task priority and urgency should influence recommendations.",
                    "User energy and context can affect task suitability.",
                    "Bedtime and rest-related rules require special consideration.",
                ],

                approach:
                    "Separate task eligibility from recommendation scoring. Evaluate which tasks qualify, calculate scores for eligible candidates, and select a recommendation with an explanation of why it was chosen.",

                validation: [
                    "Test eligibility rules for different task states.",
                    "Compare recommendation behavior under different priorities and energy levels.",
                    "Inspect bedtime edge cases involving urgent tasks.",
                ],

                lessons: [
                    "Separating eligibility from scoring makes recommendation logic easier to reason about.",
                    "Rule interactions and edge cases are important when recommendations depend on time.",
                    "Clear explanations help users understand why a task was recommended.",
                ],
            },
        ],

        architecture: [
            {
                id: "ui",
                title: "React Native UI",
                description:
                    "Expo Router screens and reusable task and routine components.",
            },
            {
                id: "state",
                title: "Application State",
                description:
                    "Task and routine contexts manage application data and lifecycle transitions.",
            },
            {
                id: "engine",
                title: "Recommendation Engine",
                description:
                    "TypeScript functions evaluate task eligibility and calculate recommendation scores.",
            },
            {
                id: "storage",
                title: "AsyncStorage",
                description:
                    "Persists application data locally between sessions.",
            },
            {
                id: "notifications",
                title: "Expo Notifications",
                description:
                    "Schedules reminders and supports notification-driven navigation.",
            },
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

        overview:
            "Abang PH is a rental and property management web application designed for small landlords, boarding house operators, and property owners in the Philippines. It aims to simplify everyday rental operations by organizing properties, rentable spaces, tenants, rental payments, and financial records within a centralized system.",

        problem:
            "Small landlords often manage tenant information, rental payments, and property availability through notebooks, spreadsheets, or informal messaging. These disconnected processes can make it difficult to track outstanding balances, monitor occupied and vacant spaces, and maintain accurate financial records. The challenge was to design an accessible system that simplifies rental administration without introducing unnecessary complexity.",

        solution:
            "Designed a full-stack web application using Next.js, TypeScript, Prisma, and PostgreSQL. The system models properties, units, rentable spaces, and rental records using structured database relationships. It incorporates authentication, landlord-specific data access, monetary calculations, and dashboard views to support the development of a reliable rental management platform.",

        contributions: [
            "Designed the initial full-stack architecture using Next.js App Router and TypeScript.",
            "Created relational database models for properties, units, rentable spaces, and landlord accounts using Prisma.",
            "Integrated authentication using Better Auth.",
            "Implemented authorization checks to restrict property access to the associated landlord account.",
            "Developed property and rentable-space management functionality.",
            "Created monetary utility functions using integer-based cent calculations to avoid floating-point precision errors.",
            "Built initial dashboard interfaces for rental statistics, occupancy information, and payment summaries.",
            "Configured a PostgreSQL development environment using Docker.",
            "Implemented development seed data representing properties, tenants, and rental payment scenarios.",
        ],

        challenges: [
            "Designing database relationships that accurately represent properties, units, and independently rentable spaces.",
            "Ensuring landlords can only access and modify records belonging to their own accounts.",
            "Handling authentication schema compatibility and database migration changes.",
            "Representing monetary values safely without introducing floating-point rounding errors.",
            "Managing relational queries while maintaining data isolation between different landlords.",
            "Balancing flexible rental management requirements with a simple user experience.",
        ],

        learnings: [
            "The importance of designing database relationships before implementing complex business workflows.",
            "How authorization and tenant-specific data filtering protect sensitive application records.",
            "Why financial applications should use precise monetary representations instead of floating-point arithmetic.",
            "How Prisma migrations affect database integrity and why schema changes require careful review.",
            "The differences between authentication, authorization, and data ownership.",
            "How to structure reusable backend services with validation, security checks, and clear business responsibilities.",
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

        overview:
            "E-Sumbong is a web-based digital reporting application developed to provide a structured way for users to submit and manage reports. The project explores how digital platforms can make reporting processes more organized, accessible, and easier to manage.",

        problem:
            "Traditional reporting processes can involve manual documentation, fragmented communication, and inconsistent information collection. These limitations can make reports difficult to organize and process. The challenge was to explore how a web application could provide a more structured approach to collecting and managing submitted information.",

        solution:
            "Developed a JavaScript-based web application focused on organizing reporting workflows through a digital interface. The project emphasizes user interaction, structured information entry, and the application of web development principles to a practical reporting scenario.",

        contributions: [
            "Worked on the development of a JavaScript-based reporting web application.",
            "Developed user interface functionality for the reporting workflow.",
            "Structured application logic around report-related information and interactions.",
            "Applied JavaScript concepts to connect user actions with application behavior.",
            "Practiced organizing frontend code into maintainable application functionality.",
        ],

        challenges: [
            "Designing a reporting interface that users can navigate and understand easily.",
            "Organizing report-related information into a consistent application structure.",
            "Managing interactions between user input and application behavior.",
            "Maintaining readable code while implementing multiple interface features.",
        ],

        learnings: [
            "How JavaScript can be used to implement interactive web application functionality.",
            "The importance of clear user interfaces when collecting structured information.",
            "How breaking application logic into smaller functions improves maintainability.",
            "Why input validation and consistent data structures matter in reporting systems.",
            "How practical projects strengthen problem-solving and frontend development skills.",
        ],
    },
];