import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Youtube, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/who-we-are", label: "Who We Are" },
  { to: "/products", label: "Products & Tools" },
  { to: "/opportunities", label: "Opportunities & News" },
  { to: "/contact", label: "Contact" },
] as const;

function LogoMark({ label = "AI" }: { label?: string }) {
  return (
    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--ember)] to-[var(--teal)] text-[var(--ink)] font-display font-bold text-sm shadow-lg">
      {label}
    </div>
  );
}

function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="relative mx-auto flex h-16 max-w-6xl items-center px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-bold"
        >
          <LogoMark />
          <span>Airet Lab</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--ember)]"
              >
                <span
                  className={
                    active
                      ? "text-[var(--ember)]"
                      : "text-foreground/80"
                  }
                >
                  {item.label}
                </span>

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-0 -z-10 rounded-full bg-[color-mix(in_oklab,var(--ember)_14%,transparent)]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-border/60 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            <div className="glass mx-3 mt-2 flex flex-col gap-1 rounded-3xl p-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-2xl px-4 py-3 text-lg font-display font-semibold hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );

}
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-4">
        <div>
          <div className="mt-4 max-w-xs text-sm text-slate-300">
  <div className="text-lg font-semibold">
    <span className="text-orange-400">A</span>
    <span className="text-orange-400">I</span>
    <span className="text-orange-400">R</span>
    <span className="text-orange-400">E</span>
    <span className="text-orange-400">T</span>
    <span className="ml-1 text-white">Labs</span>
  </div>

  <div className="mt-1">
    <span className="font-bold text-white">A</span>rtificial{" "}
    <span className="font-bold text-white">I</span>ntelligence for{" "}
    <span className="font-bold text-white">R</span>esearch and{" "}
    <span className="font-bold text-white">E</span>ducational{" "}
    <span className="font-bold text-white">T</span>ools.
  </div>
</div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-[var(--ember)] text-slate-300">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Connect</h4>
          <div className="mt-4 flex gap-2">
            {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="group grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all hover:border-[var(--ember)] hover:bg-[color-mix(in_oklab,var(--ember)_12%,transparent)]"
              >
                <Icon className="h-4 w-4 text-slate-200 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Manifesto</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-slate-300">
            <Sparkles className="mt-0.5 h-4 w-4 text-[var(--ember)]" />
            Research excellence · Educational impact · Open collaboration.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} AIRET Lab. All rights reserved.
      </div>
    </footer>
  );
}

export function PageTransition({ children, path }: { children: ReactNode; path: string }) {
  const reduce = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(6px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <Nav />
      <main>
        <PageTransition path={pathname}>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
