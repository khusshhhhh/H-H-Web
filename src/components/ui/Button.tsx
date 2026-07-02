"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonTone = "light" | "dark";

interface SharedProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: "md" | "lg";
  icon?: ReactNode;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = SharedProps & {
  href: string;
  external?: boolean;
};

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

type ButtonAsButton = SharedProps &
  NativeButtonProps & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<ButtonTone, Record<ButtonVariant, string>> = {
  light: {
    primary: "bg-terracotta text-cream hover:bg-terracotta-text",
    secondary: "bg-charcoal text-cream hover:bg-charcoal/85",
    outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5",
    ghost: "text-charcoal hover:text-terracotta-text",
  },
  dark: {
    primary: "bg-terracotta text-cream hover:bg-cream hover:text-charcoal",
    secondary: "bg-cream text-charcoal hover:bg-cream/85",
    outline: "border border-cream/30 text-cream hover:border-cream hover:bg-cream/10",
    ghost: "text-cream hover:text-sandstone",
  },
};

const sizeClasses = {
  md: "px-6 py-3 text-fluid-sm",
  lg: "px-8 py-4 text-fluid-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    tone = "light",
    size = "md",
    icon,
    magnetic = false,
    className,
    children,
    ...rest
  } = props;

  const { ref, x, y, handlePointerMove, handlePointerLeave, enabled } = useMagnetic({
    strength: 0.25,
  });

  const isGhost = variant === "ghost";
  const baseClasses = cn(
    "group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium tracking-wide transition-colors duration-300 ease-editorial",
    !isGhost && "rounded-full",
    isGhost ? "px-0 py-1 text-fluid-sm" : sizeClasses[size],
    variantClasses[tone][variant],
    className,
  );

  const motionProps = magnetic && enabled
    ? {
        style: { x, y },
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave,
      }
    : {};

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="inline-flex transition-transform duration-300 ease-editorial group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {isGhost && (
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-editorial group-hover:scale-x-100" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div ref={ref as React.Ref<HTMLDivElement>} {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      {...motionProps}
      {...(rest as NativeButtonProps)}
    >
      {content}
    </motion.button>
  );
}
