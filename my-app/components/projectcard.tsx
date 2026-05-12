type ProjectCardProps = {
  title: string;
  client: string;
  year: string;
  status: string;
  type: string;
  description: string;
  scope: string[];
  tech: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  client,
  year,
  status,
  type,
  description,
  scope,
  tech,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      className={`rounded-[2rem] border border-white/10 bg-[#00233A] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#00C8C8]/50 hover:bg-[#003057]/70 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-[#00C8C8]/40 bg-[#00C8C8]/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#00C8C8]">
          {status}
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#B7C7D9]">
          {type}
        </span>

        <span className="ml-auto text-xs text-[#7A9BB5]">{year}</span>
      </div>

      <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#00C8C8]">
        {client}
      </p>

      <h3 className="text-2xl font-semibold leading-tight text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#B7C7D9]">{description}</p>

      <ul className="mt-6 space-y-2">
        {scope.map((item) => (
          <li key={item} className="text-sm leading-6 text-[#B7C7D9]">
            <span className="mr-2 text-[#00C8C8]">—</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#00C8C8]/20 bg-[#001828] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#B7C7D9]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}