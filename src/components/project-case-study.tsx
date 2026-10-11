
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import EngineeringSection from "./engineering-section";

type ProjectCaseStudyProps = {
    project: Project;
};

export default function ProjectCaseStudy({
    project,
}: ProjectCaseStudyProps) {
    return (
        <article className="bg-[#F2EDE2] text-[#1B1B19]">
            <div className="mx-auto max-w-6xl px-6 py-16">

                {/* Back navigation */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-[#AD583B] hover:underline"
                >
                    ← Back to Selected Work
                </Link>

                {/* Project introduction */}
                <header className="mt-12 border-b border-[#C9C1B4] pb-12">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                        Project Case Study / {project.category}
                    </p>

                    <h1 className="font-serif text-6xl tracking-tight md:text-8xl">
                        {project.title}.
                    </h1>

                    <p className="mt-5 max-w-3xl font-serif text-2xl text-[#514A40] md:text-3xl">
                        {project.subtitle}
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B665E]">
                        {project.description}
                    </p>
                </header>

                {/* Featured project image */}
                {project.image && (
                    <div className="relative mt-12 aspect-video overflow-hidden bg-[#E8E1D4]">
                        <Image
                            src={project.image}
                            alt={`${project.title} application screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 90vw"
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Project details */}
                <div className="grid gap-8 border-b border-[#C9C1B4] py-10 md:grid-cols-3">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                            Category
                        </p>
                        <p className="mt-2 font-medium">
                            {project.category}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                            Project
                        </p>
                        <p className="mt-2 font-medium">
                            {project.title}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                            Technologies
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-[#E8E1D4] px-3 py-1.5 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Overview */}
                {project.overview && (
                    <section className="grid gap-8 border-b border-[#C9C1B4] py-16 md:grid-cols-3">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                                01 / Overview
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <h2 className="font-serif text-4xl">
                                The Story Behind the Project
                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-[#6B665E]">
                                {project.overview}
                            </p>
                        </div>
                    </section>
                )}

                {/* Problem */}
                {project.problem && (
                    <section className="grid gap-8 border-b border-[#C9C1B4] py-16 md:grid-cols-3">
                        <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                            02 / The Problem
                        </p>

                        <div className="md:col-span-2">
                            <h2 className="font-serif text-4xl">
                                Understanding the Challenge
                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-[#6B665E]">
                                {project.problem}
                            </p>
                        </div>
                    </section>
                )}

                {/* Solution */}
                {project.solution && (
                    <section className="grid gap-8 border-b border-[#C9C1B4] py-16 md:grid-cols-3">
                        <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                            03 / The Approach
                        </p>

                        <div className="md:col-span-2">
                            <h2 className="font-serif text-4xl">
                                How We Approached It
                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-[#6B665E]">
                                {project.solution}
                            </p>
                        </div>
                    </section>
                )}

                {/* Contributions */}
                {project.contributions &&
                    project.contributions.length > 0 && (
                        <section className="grid gap-8 border-b border-[#C9C1B4] py-16 md:grid-cols-3">
                            <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                                04 / My Contributions
                            </p>

                            <div className="md:col-span-2">
                                <h2 className="font-serif text-4xl">
                                    What I Worked On
                                </h2>

                                <ul className="mt-8 space-y-5">
                                    {project.contributions.map((item) => (
                                        <li
                                            key={item}
                                            className="flex gap-4 text-[#6B665E]"
                                        >
                                            <span className="text-[#AD583B]">↗</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                {/* Challenges */}
                {project.challenges &&
                    project.challenges.length > 0 && (
                        <section className="grid gap-8 border-b border-[#C9C1B4] py-16 md:grid-cols-3">
                            <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                                05 / Engineering Challenges
                            </p>

                            <div className="md:col-span-2">
                                <h2 className="font-serif text-4xl">
                                    Problems Worth Solving
                                </h2>

                                <ul className="mt-8 space-y-5">
                                    {project.challenges.map((item) => (
                                        <li key={item} className="flex gap-4">
                                            <span className="text-[#AD583B]">—</span>
                                            <span className="leading-7 text-[#6B665E]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                {/* Lessons learned */}
                {project.learnings &&
                    project.learnings.length > 0 && (
                        <section className="grid gap-8 py-16 md:grid-cols-3">
                            <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                                06 / Lessons Learned
                            </p>

                            <div className="md:col-span-2">
                                <h2 className="font-serif text-4xl">
                                    What This Project Taught Me
                                </h2>

                                <ul className="mt-8 space-y-5">
                                    {project.learnings.map((item) => (
                                        <li key={item} className="flex gap-4">
                                            <span className="text-[#AD583B]">✳</span>
                                            <span className="leading-7 text-[#6B665E]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}
                {project.engineering?.map((decision, index) => (
                    <EngineeringSection
                        key={decision.title}
                        decision={decision}
                        index={index + 1}
                    />
                ))}
                {/* Bottom navigation */}
                <div className="mt-12 border-t border-[#C9C1B4] pt-10">
                    <Link
                        href="/#projects"
                        className="font-serif text-2xl text-[#AD583B] hover:underline"
                    >
                        ← Explore More Projects
                    </Link>
                </div>
            </div>
        </article>
    );
}
