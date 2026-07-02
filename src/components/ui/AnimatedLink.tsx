import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Text link with a hover underline that reveals left-to-right. */
export function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-block w-fit text-current after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-editorial hover:after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
