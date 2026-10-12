
type EditorialSection = {
    label: string;
    secondLabel: string;
};

export default function EditorialSection({
    label,
    secondLabel,
}: EditorialSection) {

    return (

        <div className="flex items-center justify-between border-b border-[#C9C1B4] pb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AD583B]">
                {label}
            </span>

            <span className="hidden font-mono text-xs text-[#6B665E] sm:block">
                {secondLabel}
            </span>
        </div>
    )
}