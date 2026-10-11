import type { ArchitectureNode } from "@/data/projects";

type Props = {
  node: ArchitectureNode;
  number: number;
};

export function ArchitectureCard({ node, number }: Props) {
  return (
    <article className="group flex min-h-48 flex-col justify-between border border-[#C9C1B4] bg-[#E8E1D4] p-6 transition-colors hover:border-[#AD583B]">
      <span className="font-mono text-xs text-[#AD583B]">
        {String(number).padStart(2, "0")}
      </span>

      <div className="mt-8">
        <h3 className="font-serif text-2xl text-[#1B1B19]">
          {node.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6B665E]">
          {node.description}
        </p>
      </div>
    </article>
  );
}