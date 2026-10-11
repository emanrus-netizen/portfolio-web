
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";


export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-24 bg-[#F2EDE2] px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Editorial section label */}
                <div className="flex items-center justify-between border-b border-[#C9C1B4] pb-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                        02 / Selected Work
                    </span>

                    <span className="hidden font-mono text-xs text-[#6B665E] sm:block">
                        04 Featured Projects
                    </span>
                </div>

                {/* Section introduction */}
                <div className="grid gap-6 py-12 md:grid-cols-2 md:items-end">
                    <h2 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight text-[#1B1B19] md:text-7xl">
                        Things I've built and explored.
                    </h2>

                    <div className="max-w-md md:justify-self-end">
                        <p className="text-base leading-7 text-[#6B665E]">
                            A collection of projects, from enterprise systems
                            to personal tools — each built to solve meaningful
                            problems and explore new ideas.
                        </p>
                    </div>
                </div>

                {/* Reusable project gallery */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            index={index + 1}
                            title={project.title}
                            subtitle={project.subtitle}
                            category={project.category}
                            description={project.description}
                            technologies={project.technologies}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
