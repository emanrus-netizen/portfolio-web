
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
};

export default function ProjectCard({
  id,
  index,
  title,
  subtitle,
  category,
  description,
  technologies,
  image,
  featured
}: ProjectCardProps) {
  return (
    <article className={`group min-w-0 border-b border-[#C9C1B4] pb-10 `}>
      {/* Project image */}
      <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-[#DED7CA]">
        {image ? (
          <Image
            src={image}
            alt={`${title} application screenshot`}
            fill
            sizes={
              featured
                ? "(max-width: 767px) 100vw, 66vw"
                : "(max-width: 767px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Placeholder until you add your real screenshots.
          <div className="flex h-full items-center justify-center px-6">
            <span className="text-center font-serif text-4xl text-[#81786C]">
              {title}
            </span>
          </div>
        )}

        {/* Editorial project number */}
        <span className="absolute left-4 top-4 bg-[#F2EDE2] px-3 py-2 font-mono text-xs text-[#1B1B19]">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      {/* Category */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#AD583B]">
        {category}
      </p>

      {/* Title */}
      <h3 className="font-serif text-4xl tracking-tight text-[#1B1B19] md:text-5xl">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="mt-1 font-serif text-xl text-[#34312C]">
        {subtitle}
      </p>

      {/* Description */}
      <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B665E]">
        {description}
      </p>

      {/* Technology badges */}
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-[#E8E1D4] px-3 py-1.5 text-xs text-[#514A40]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project link */}
      <Link
        href={`/projects/${id}`}
        className="mt-6 inline-flex items-center gap-2 border-b border-[#AD583B] pb-1 text-sm font-medium text-[#AD583B] transition-colors hover:text-[#753D2B]"
      >
        Read Case Study
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
