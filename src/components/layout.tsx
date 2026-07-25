import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X, Github, Linkedin, Twitter, Youtube, Sparkles } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "./theme-provider";

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
  const { theme, toggle } = useTheme();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="glass mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <LogoMark label="AI" />
          <span className="hidden font-display font-bold tracking-tight sm:inline">Æther Lab</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-[var(--ember)]"
              >
                <span className={active ? "text-[var(--ember)]" : "text-foreground/80"}>{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-0 -z-10 rounded-full bg-[color-mix(in_oklab,var(--ember)_14%,transparent)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LogoMark label="IIT" />
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-colors hover:bg-secondary"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid place-items-center"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] z-40 lg:hidden"
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
    <footer className="mt-32 border-t border-border/60 bg-[color-mix(in_oklab,var(--foreground)_4%,transparent)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark label="AI" />
            <LogoMark label="IIT" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Æther Lab — AI research and educational technology at the frontier of learning.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-[var(--ember)] transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Connect</h4>
          <div className="mt-4 flex gap-2">
            {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="group grid h-10 w-10 place-items-center rounded-full border border-border/60 transition-all hover:border-[var(--ember)] hover:bg-[color-mix(in_oklab,var(--ember)_12%,transparent)]"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Manifesto</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Sparkles className="mt-0.5 h-4 w-4 text-[var(--ember)]" />
            Research excellence · Educational impact · Open collaboration.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Æther Lab. All rights reserved. · Designed with{" "}
        <span className="text-[var(--ember)]">❤</span>
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
