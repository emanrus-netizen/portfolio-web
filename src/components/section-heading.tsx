import type { ReactNode } from "react";

type Props = {
    title: string;
    label: string;
    children: ReactNode;
};

export default function SectionHeading({
    title,
    label,
    children,
}: Props) {
    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-xs uppercase tracking-widest text-[#AD583B]">
                    {label}
                </p>
                <h2 className="max-w-xl font-serif text-5xl leading-[1.05] tracking-tight text-[#1B1B19] md:text-7xl">
                    {title}
                </h2>

                {children}
            </div>
        </section>
    );
}
