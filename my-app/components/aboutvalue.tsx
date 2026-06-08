type AboutValueProps = {
  number: string;
  title: string;
  description: string;
};

export default function AboutValue({
  number,
  title,
  description,
}: AboutValueProps) {
  return (
    <div className="border-t border-white/10 pt-6">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#00C8C8]">
        {number}
      </p>

      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>

      <p className="mt-4 max-w-sm text-sm leading-7 text-[#B7C7D9]">
        {description}
      </p>
    </div>
  );
}