import Image from "next/image";

type ExpertiseBlockProps = {
  image: string;
  title: string;
  description: string;
  points: string[];
};

export default function ExpertiseBlock({
  image,
  title,
  description,
  points,
}: ExpertiseBlockProps) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-[#00233A] p-7 transition hover:-translate-y-1 hover:border-[#00C8C8]/50 hover:bg-[#003057]/60">
      <div className="relative mb-6 h-12 w-12 overflow-hidden rounded-full border border-[#00C8C8]/30 bg-[#001828]">
        <Image
          src={image}
          alt={`${title} icon`}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-[#B7C7D9]">{description}</p>

      <ul className="mt-6 space-y-2">
        {points.map((point) => (
          <li key={point} className="text-sm text-[#B7C7D9]">
            <span className="mr-2 text-[#00C8C8]">—</span>
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
