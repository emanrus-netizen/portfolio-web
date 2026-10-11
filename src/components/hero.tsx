
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-[#F2EDE2] px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top editorial metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#C9C1B4] py-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
            Software Developer / Based in the Philippines
          </p>

          <p className="font-mono text-[10px] uppercase tracking-wider text-[#6B665E]">
            Portfolio / 2026
          </p>
        </div>

        {/* Main hero composition */}
        <div className="grid items-center gap-12 py-16 md:grid-cols-2 md:gap-8 lg:py-20">
          {/* Left column */}
          <div className="relative z-10 flex flex-col items-start gap-7">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-700" />

              <span className="text-xs text-[#6B665E]">
                Open to Software Engineering Opportunities
              </span>
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                Hello, I'm Emmanuel.
              </p>

              <h1 className="max-w-2xl font-serif text-[clamp(3.5rem,6vw,6.5rem)] leading-[0.98] tracking-[-0.055em] text-[#1B1B19]">
                Good software solves{" "}
                <em className="font-normal text-[#AD583B]">
                  real
                </em>{" "}
                problems.
              </h1>
            </div>

            <p className="max-w-lg text-base leading-8 text-[#6B665E] md:text-lg">
              I'm Emmanuel G. Rusiana Jr., a Full-Stack
              Software Developer who enjoys turning complex
              ideas into practical, thoughtful, and reliable
              software.
            </p>

            {/* Calls to action */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#1B1B19] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#38332E]"
              >
                Explore My Work
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="mailto:mmanrusiana@gmail.com"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-[#A99E8F] px-6 py-3 text-sm font-medium text-[#1B1B19] transition-colors hover:bg-[#E8E1D4]"
              >
                Get In Touch
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            {/* Small editorial statistics */}
            <div className="mt-5 flex flex-wrap items-center gap-8 border-t border-[#C9C1B4] pt-7">
              <div>
                <p className="font-serif text-3xl text-[#1B1B19]">
                  04
                </p>
                <p className="mt-1 text-xs text-[#6B665E]">
                  Featured Projects
                </p>
              </div>

              <div className="h-10 w-px bg-[#C9C1B4]" />

              <div>
                <p className="font-serif text-3xl text-[#1B1B19]">
                  01
                </p>
                <p className="mt-1 text-xs text-[#6B665E]">
                  Company Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="relative mx-auto w-full max-w-lg md:ml-auto">
            {/* Decorative background shapes */}
            <div className="absolute -left-5 top-10 h-[75%] w-[75%] bg-[#D8CCB8]" />

            <div className="absolute -right-3 bottom-8 h-[55%] w-[65%] bg-[#777962]/35" />

            {/* Portrait */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/emmanuel.png"
                alt="Emmanuel G. Rusiana Jr., Full-Stack Software Developer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </div>

            {/* Small editorial signature */}
            <div className="absolute bottom-5 right-0 bg-[#1B1B19] px-5 py-4 text-[#F2EDE2] shadow-lg sm:-right-4">
              <p className="font-mono text-[10px] uppercase leading-5 tracking-widest">
                Full-Stack Developer
                <br />
                Problem Solver
                <br />
                Lifelong Learner
              </p>
            </div>
          </div>
        </div>

        {/* Bottom editorial strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#C9C1B4] py-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B665E]">
            Featured / Kompra · Life Queue · Abang PH · E-Sumbong
          </p>

          <Link
            href="/#projects"
            className="text-xs font-medium text-[#AD583B] hover:underline"
          >
            Scroll to Explore ↓
          </Link>
        </div>
      </div>
    </section>
  );
}
