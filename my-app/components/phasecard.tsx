"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type PhaseStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function PhaseStep({ number, title, description }: PhaseStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-[#00C8C8]">
        {number}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="mt-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#00C8C8]/30 bg-[#00233A] text-xs text-[#7A9BB5]">
        image
      </div>

      <p className="mt-5 max-w-[220px] text-sm leading-6 text-[#B7C7D9]">
        {description}
      </p>
    </div>
  );
}