
import { experiences } from "@/data/experience";
import EditorialSection from "./editorial-section";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 bg-[#F2EDE2] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Render the section label only once */}
        <EditorialSection
          label="04 / PROFESSIONAL EXPERIENCE"
          secondLabel="THE JOURNEY SO FAR"
        />

        {/* Main heading */}
        <div className="grid gap-10 border-b border-[#C9C1B4] py-16 md:grid-cols-12 md:items-end md:py-20">

          <div className="md:col-span-7">
            <h2
              id="experience-heading"
              className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-[#1B1B19] sm:text-6xl lg:text-7xl"
            >
              Where ideas meet{" "}
              <em className="block font-normal text-[#AD583B]">
                real-world systems.
              </em>
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="h-0.5 w-12 bg-[#AD583B]" />

            <p className="max-w-md text-base leading-8 text-[#514A40] md:text-lg">
              A look at the work, challenges, and engineering
              experience shaping my career.
            </p>
          </div>
        </div>

        {/* Repeated experience entries */}
        <div className="divide-y divide-[#C9C1B4]">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              {/* LEFT: Employer information */}
              <div className="lg:col-span-4">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[#AD583B]">
                  {String(index + 1).padStart(2, "0")} / Experience
                </p>

                <h3 className="max-w-md font-serif text-4xl leading-tight tracking-tight text-[#1B1B19] sm:text-5xl">
                  {experience.company}
                </h3>

                <p className="mt-4 text-base font-medium text-[#514A40]">
                  {experience.role}
                </p>

                <div className="mt-8 hidden h-px w-16 bg-[#AD583B] lg:block" />
              </div>

              {/* RIGHT: Work and contributions */}
              <div className="flex min-w-0 flex-col lg:col-span-8">

                {/* Featured project */}
                <div className="border-b border-[#C9C1B4] pb-8">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#AD583B]">
                    Featured Project
                  </p>

                  <h4 className="font-serif text-4xl leading-tight tracking-tight text-[#1B1B19] sm:text-5xl">
                    Building{" "}
                    <em className="font-normal text-[#AD583B]">
                      {experience.project}.
                    </em>
                  </h4>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B665E]">
                    {experience.description}
                  </p>
                </div>

                {/* Contributions */}
                <div className="py-8">
                  <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#514A40]">
                    Key Contributions
                  </p>

                  <ul className="space-y-5">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-4"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-[#AD583B]"
                        >
                          ↗
                        </span>

                        <span className="text-sm leading-7 text-[#6B665E] md:text-base">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology stack */}
                <div className="border-t border-[#C9C1B4] pt-8">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#514A40]">
                    Technologies Used
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-[#CFC5B6] bg-[#E8E1D4] px-3 py-2 text-xs text-[#514A40]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case study link */}
                <div className="mt-10">
                  <Link
                    href={`/projects/${experience.id}`}
                    className="group inline-flex items-center gap-3 border-b border-[#AD583B] pb-2 text-sm font-medium text-[#AD583B] transition-colors hover:text-[#753D2B]"
                  >
                    Explore the Case Study

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none"
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
