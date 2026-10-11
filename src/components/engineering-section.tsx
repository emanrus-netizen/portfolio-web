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
        <section className="border-t border-[#C9C1B4] py-16">
            <p className="text-xs uppercase tracking-widest text-[#AD583B]">
                Engineering Note / {String(index).padStart(2, "0")}
            </p>

            <h2 className="mt-6 font-serif text-4xl text-[#1B1B19] md:text-5xl">
                {decision.title}
            </h2>

            {/* Build the remaining sections here */}
            <p>{decision.problem}</p>

            <ul className="space-y-3">
                {decision.constraints.map((constraint) => (
                    <li key={constraint}>
                        {constraint}
                    </li>
                ))}
            </ul>
            <p>{decision.approach}</p>
            <ul className="space-y-3">
                {decision.validation.map((item) => (
                    <li key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul className="space-y-3">
                {decision.lessons.map((lesson) => (
                    <li key={lesson}>
                        {lesson}
                    </li>
                ))}
            </ul>
        </section>
    );
}