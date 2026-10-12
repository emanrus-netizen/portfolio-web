
import Link from "next/link";

const aboutDetails = [
  {
    number: "01",
    label: "Development",
    value: "Full-Stack",
  },
  {
    number: "02",
    label: "Education",
    value: "BSIT",
  },
  {
    number: "03",
    label: "Mindset",
    value: "Always Learning",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#F2EDE2] px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl border-t border-[#C9C1B4]">

        {/* Editorial section label */}
        <div className="flex flex-col gap-2 border-b border-[#C9C1B4] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
            03 / The Person Behind the Code
          </p>

          <span className="font-mono text-xs uppercase text-[#6B665E]">
            About Me
          </span>
        </div>

        {/* Main editorial content */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24">

          {/* Headline: 7 of 12 columns */}
          <div className="md:col-span-7">
            <h2 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-[#1B1B19] sm:text-6xl lg:text-7xl">
              Curiosity led me here.{" "}
              <em className="font-normal text-[#AD583B]">
                Building
              </em>{" "}
              keeps me going.
            </h2>
          </div>

          {/* Description: 5 of 12 columns */}
          <div className="flex flex-col justify-end gap-6 md:col-span-5">

            {/* Decorative accent */}
            <div className="h-0.5 w-12 bg-[#AD583B]" />

            <p className="text-base leading-8 text-[#514A40] md:text-lg">
              I'm Emmanuel, a software developer who enjoys
              solving real problems, understanding how systems
              work, and creating applications that make
              people's lives easier.
            </p>

            <p className="text-sm leading-7 text-[#6B665E] md:text-base">
              As an Information Technology graduate,
              I'm passionate about full-stack development,
              thoughtful engineering, and continuously
              improving my skills through practical projects.
            </p>

            <Link
              href="/#projects"
              className="group mt-2 inline-flex w-fit items-center gap-3 border-b border-[#AD583B] pb-2 text-sm font-medium text-[#AD583B] transition-colors hover:text-[#753D2B]"
            >
              Explore My Work

              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Personal details */}
        <div className="grid gap-8 border-t border-[#C9C1B4] pt-8 md:grid-cols-3">
          {aboutDetails.map((detail) => (
            <div
              key={detail.number}
              className="border-b border-[#C9C1B4] pb-6 md:border-b-0"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#AD583B]">
                  {detail.label}
                </p>

                <span className="font-mono text-xs text-[#9C9285]">
                  {detail.number}
                </span>
              </div>

              <h3 className="font-serif text-3xl tracking-tight text-[#1B1B19] md:text-4xl">
                {detail.value}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
