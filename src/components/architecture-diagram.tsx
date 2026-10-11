
import type { ArchitectureNode } from "@/data/projects";

type Props = {
  title: string;
  nodes: ArchitectureNode[];
};

export default function ArchitectureDiagram({
  title,
  nodes,
}: Props) {
  return (
    <section className="border-t border-[#C9C1B4] py-16 md:py-24">
      {/* Editorial section heading */}
      <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#AD583B]">
            Engineering / System Architecture
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#1B1B19] md:text-6xl">
            {title}
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-7 text-[#6B665E]">
          A closer look at the core modules, their
          responsibilities, and how the application is organized.
        </p>
      </div>

      {/* Architectural module grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node, index) => (
          <article
            key={node.id}
            className="group flex min-h-56 flex-col justify-between border border-[#C9C1B4] bg-[#E8E1D4] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#AD583B] hover:shadow-lg motion-reduce:transform-none"
          >
            {/* Module number */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#AD583B]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="h-2 w-2 rounded-full border border-[#AD583B] transition-colors group-hover:bg-[#AD583B]" />
            </div>

            {/* Module information */}
            <div className="mt-10">
              <h3 className="font-serif text-2xl leading-tight text-[#1B1B19] md:text-3xl">
                {node.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6B665E]">
                {node.description}
              </p>
            </div>

            {/* Decorative bottom rule */}
            <div className="mt-8 h-px w-full bg-[#C9C1B4] transition-colors group-hover:bg-[#AD583B]" />
          </article>
        ))}
      </div>

      {/* Architectural note */}
      <div className="mt-8 flex items-start gap-3 border-l-2 border-[#AD583B] bg-[#E8E1D4]/50 px-5 py-4">
        <span
          aria-hidden="true"
          className="font-serif text-2xl leading-none text-[#AD583B]"
        >
          *
        </span>

        <p className="text-sm leading-7 text-[#6B665E]">
          This overview describes the application's main modules
          and responsibilities. It is not a diagram of every
          runtime dependency or data flow.
        </p>
      </div>
    </section>
  );
}
