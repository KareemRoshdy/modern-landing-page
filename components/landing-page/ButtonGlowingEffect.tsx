import { ChevronsRight } from "lucide-react";
import Link from "next/link";

interface ButtonGlowingProps {
  text: string;
  href?: string;
}

const ButtonGlowingEffect = ({ text, href = "#" }: ButtonGlowingProps) => {
  return (
    <div className="p-8 flex items-center justify-center">
      <Link
        href={href}
        className="group relative inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white transition-all hover:bg-white/5"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6a11cb] via-[#2575fc] to-[#12c2e9] opacity-70 blur-sm transition-all group-hover:opacity-100" />
        <span className=" absolute inset-0.5 rounded-full bg-black " />

        <span className="text-center relative flex items-center gap-2 font-medium">
          {text}
          <ChevronsRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
};

export default ButtonGlowingEffect;
