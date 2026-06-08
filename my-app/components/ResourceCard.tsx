type ResourceCardProps = {
  category: string;
  title: string;
  description: string;
  type: string;
};

export default function ResourceCard({
  category,
  title,
  description,
  type,
}: ResourceCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-[#00233A] p-7 transition hover:-translate-y-1 hover:border-[#00C8C8]/50 hover:bg-[#003057]/60">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00C8C8]">
        {category}
      </p>

      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[#B7C7D9]">{description}</p>

      <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#B7C7D9]">
          {type}
        </span>

        <span className="text-sm font-semibold text-[#00C8C8] transition group-hover:translate-x-1">
          Read →
        </span>
      </div>
    </article>
  );
}