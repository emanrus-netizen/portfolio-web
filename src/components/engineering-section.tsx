
import type { EngineeringDecision } from "@/data/projects";

type Props = {
  decision: EngineeringDecision;
  index: number;
};

export default function EngineeringSection({
  decision,
  index,
}: Props) {
  return (
    <section className="border-t border-[#C9C1B4] py-16 md:py-24">

      {/* Editorial metadata */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#AD583B]">
          Engineering Note / {String(index).padStart(2, "0")}
        </p>

        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8C8377]">
          Technical Deep Dive
        </span>
      </div>

      {/* Main heading */}
      <div className="mb-14 max-w-3xl">
        <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#1B1B19] md:text-6xl">
          {decision.title}
        </h2>

        <div className="mt-7 h-px w-20 bg-[#AD583B]" />
      </div>

      {/* Problem and approach */}
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">

        {/* Problem */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#AD583B]">
            01 / The Problem
          </p>

          <h3 className="mb-4 font-serif text-3xl text-[#1B1B19]">
            Understanding the challenge.
          </h3>

          <p className="text-base leading-8 text-[#6B665E]">
            {decision.problem}
          </p>
        </div>

        {/* Approach */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#AD583B]">
            02 / The Approach
          </p>

          <h3 className="mb-4 font-serif text-3xl text-[#1B1B19]">
            Thinking through the solution.
          </h3>

          <p className="text-base leading-8 text-[#6B665E]">
            {decision.approach}
          </p>
        </div>
      </div>

      {/* Constraints */}
      <div className="my-14 bg-[#E8E1D4] p-7 md:p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-serif text-3xl text-[#1B1B19]">
            Engineering Constraints
          </h3>

          <span className="font-mono text-xs text-[#AD583B]">
            03 / CONSTRAINTS
          </span>
        </div>

        <ol className="divide-y divide-[#C9C1B4]">
          {decision.constraints.map((constraint, i) => (
            <li
              key={constraint}
              className="flex items-start gap-5 py-5 first:pt-0 last:pb-0"
            >
              <span className="shrink-0 font-mono text-xs text-[#AD583B]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="text-sm leading-7 text-[#514A40] md:text-base">
                {constraint}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Validation and lessons */}
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">

        {/* Validation */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#AD583B]">
            04 / Validation
          </p>

          <h3 className="mb-7 font-serif text-3xl text-[#1B1B19]">
            Testing the decisions.
          </h3>

          <ul className="space-y-5">
            {decision.validation.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 text-[#AD583B]"
                >
                  ↗
                </span>

                <p className="text-sm leading-7 text-[#6B665E]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons learned */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#AD583B]">
            05 / Lessons Learned
          </p>

          <h3 className="mb-7 font-serif text-3xl text-[#1B1B19]">
            What I took away.
          </h3>

          <ul className="space-y-5">
            {decision.lessons.map((lesson) => (
              <li
                key={lesson}
                className="flex items-start gap-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 text-[#AD583B]"
                >
                  ✳
                </span>

                <p className="text-sm leading-7 text-[#6B665E]">
                  {lesson}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
