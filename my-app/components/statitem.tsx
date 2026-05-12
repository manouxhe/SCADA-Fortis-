type StatItemProps = {
  number: string;
  label: string;
};

export default function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#00233A] p-6">
      <p className="text-3xl font-semibold text-[#00C8C8]">{number}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#B7C7D9]">
        {label}
      </p>
    </div>
  );
}
