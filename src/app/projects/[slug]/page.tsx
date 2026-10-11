
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/project-case-study";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({
    params,
}: Props) {
    const { slug } = await params;

    // Find the project matching the URL.
    const project = projects.find(
        (item) => item.id === slug
    );

    // Invalid project URLs display a 404 page.
    if (!project) {
        notFound();
    }

    return <ProjectCaseStudy project={project} />;
}
