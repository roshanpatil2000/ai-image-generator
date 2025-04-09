import { SparklesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <SparklesIcon className="size-8" strokeWidth={1.5} />
      <span className="text-lg font-semibold">Artzen AI</span>
    </Link>
  );
};

export default Logo;
