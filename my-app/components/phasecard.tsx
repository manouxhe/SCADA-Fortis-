import Image from "next/image";

type PhaseStepProps = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export default function PhaseStep({
  number,
  title,
  description,
  image,
}: PhaseStepProps) {
  return (
    <article className="group flex min-h-[360px] flex-col items-center justify-between rounded-[2rem] border border-white/10 bg-white/[0.025] px-8 py-9 text-center transition duration-300 hover:-translate-y-1 hover:border-[#00C8C8]/50 hover:bg-[#00233A]/60">
      <div>
        <p className="text-xs font-semibold tracking-[0.28em] text-[#00C8C8]">
          {number}
        </p>

        <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="relative my-8 h-28 w-28 overflow-hidden rounded-full border border-[#00C8C8]/40 bg-[#00233A] p-1 shadow-lg shadow-black/20">
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src={image}
            alt={`${title} phase`}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <p className="max-w-[240px] text-sm leading-6 text-[#B7C7D9]">
        {description}
      </p>

      <div className="mt-7 h-px w-10 bg-[#00C8C8]/40 transition duration-300 group-hover:w-20 group-hover:bg-[#00C8C8]" />
    </article>
  );
}