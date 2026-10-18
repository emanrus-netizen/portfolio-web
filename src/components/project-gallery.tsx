import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectGallery({ project }: { project: Project }) {
  const screenshots =
    project.screenshots?.length
      ? project.screenshots
      : project.image
        ? [
            {
              src: project.image,
              alt: `${project.title} application screenshot`,
              caption: "Application preview",
            },
          ]
        : [];

  return (
    <section
      aria-label={`${project.title} project screenshots`}
      className="mt-12"
    >
      {screenshots.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {screenshots.map((shot, index) => {
            const fullWidth = screenshots.length === 1 ||
              (screenshots.length > 2 && index === 0);

            return (
              <figure
                key={shot.src}
                className={fullWidth ? "md:col-span-2" : undefined}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-[#C9C1B4] bg-white shadow-sm">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes={
                      fullWidth
                        ? "(max-width: 768px) 100vw, 90vw"
                        : "(max-width: 768px) 100vw, 45vw"
                    }
                    className="object-contain"
                  />
                </div>
                {shot.caption && (
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-[#6B665E]">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      ) : (
        <div className="flex min-h-64 flex-col justify-center rounded-xl border border-[#C9C1B4] bg-[#E8E1D4] p-8 md:min-h-96 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
            Interface preview
          </p>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-[#1B1B19] md:text-6xl">
            {project.title}
          </h2>
          <p className="mt-4 text-sm text-[#6B665E]">
            Screenshots coming soon.
          </p>
        </div>
      )}
    </section>
  );
}
