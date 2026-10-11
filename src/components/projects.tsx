
import EditorialSection from "./editorial-section";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";
import SectionHeading from "./section-heading";


export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-24 bg-[#F2EDE2] px-6 py-24"
        >
            <div className="mx-auto max-w-7xl">
                {/* Editorial section label */}
                { }
                {/* Section introduction */}
                <SectionHeading label=" 02 / Selected Work" title="Things I've built and explored.">
                    <div className="max-w-md md:justify-self-end">
                        <p className="text-base leading-7 text-[#6B665E]">
                            A collection of projects, from enterprise systems
                            to personal tools — each built to solve meaningful
                            problems and explore new ideas.
                        </p>
                    </div>
                </SectionHeading>
                {/* Reusable project gallery */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={
                                project.featured
                                    ? "md:col-span-2"
                                    : "md:col-span-1"
                            }
                        >
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
                                featured={project.featured}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
