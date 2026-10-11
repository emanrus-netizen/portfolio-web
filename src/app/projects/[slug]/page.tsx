import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({
    params,
}: Props) {

    const { slug } = await params;
    const project = projects.find((item) => item.id === slug)
    if (!project) {
        notFound();
    }
    return (
        <main>
            {/* Your project case study goes here */}
        </main>
    );
}