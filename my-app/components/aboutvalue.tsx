type AboutValueProps = {
  title: string;
  description: string;
};

export default function AboutValue({ title, description }: AboutValueProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#B7C7D9]">{description}</p>
    </div>
  );
}