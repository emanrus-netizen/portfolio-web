
import type { ArchitectureNode } from "@/data/projects";
import { ArrowUpDown } from "lucide-react";
import { Fragment } from "react";
import { ArchitectureCard } from "./architecture-card";
type Props = {
  title: string;
  nodes: ArchitectureNode[];
};

export default function ArchitectureDiagram({
  title,
  nodes,
}: Props) {

  const recommendationNode = nodes.find(
    (node) => node.id === "engine"
  );

  const storageNode = nodes.find(
    (node) => node.id === "storage"
  );
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
      <div className="space-y-4">
        {nodes
          .filter((node) => node.id === "ui" || node.id === "state")
          .map((node, index) => (
            <Fragment key={node.id}>
              <ArchitectureCard node={node} number={index + 1} />

              <div className="flex justify-center py-3">
                <ArrowUpDown className="text-[#AD583B]" />
              </div>
            </Fragment>
          ))}

        {/* Two modules side by side */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {recommendationNode && (
            <ArchitectureCard node={recommendationNode} number={3} />
          )}

          {storageNode && (
            <ArchitectureCard node={storageNode} number={4} />
          )}
        </div>

        {/* Last module */}
        {nodes
          .filter((node) => node.id === "notifications")
          .map((node) => (
            <div key={node.id} className="space-y-4">
              <div className="flex justify-center py-3">
                <ArrowUpDown className="text-[#AD583B]" />
              </div>

              <ArchitectureCard node={node} number={5} />
            </div>
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
