import { motion, useMotionValue, useSpring, useTransform, type MotionProps } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> {
  variant?: Variant;
  to?: string;
  href?: string;
  children: ReactNode;
  magnetic?: boolean;
}

export function MagButton({
  variant = "primary",
  to,
  href,
  children,
  className,
  magnetic = true,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.28);
    y.set(my * 0.28);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ember)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles: Record<Variant, string> = {
    primary: "btn-gradient hover:btn-gradient-hover",
    outline: "border border-border/70 bg-transparent hover:border-[var(--ember)] hover:text-[var(--ember)]",
    ghost: "hover:bg-secondary",
  };

  const content = (
    <motion.span
      style={{ x: tx, y: ty }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link
        to={to}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(base, styles[variant], className)}
      >
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(base, styles[variant], className)}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, styles[variant], className)}
      {...rest}
    >
      {content}
    </button>
  );
}
