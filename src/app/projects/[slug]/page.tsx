import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectCaseStudy from "@/components/project-case-study";

// Allow blocking rendering for this dynamic route.
export const instant = false;

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) notFound();

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) notFound();

  return <ProjectCaseStudy project={project} />;
}