import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, BookOpen, Rocket, GraduationCap } from "lucide-react";
import { NeuralField } from "@/components/neural-field";
import { MagButton } from "@/components/mag-button";
import { CountUp, Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Airet Lab — AI Research & Educational Technology" },
      {
        name: "description",
        content:
          "An AI research and educational technology lab building tools, scholarship, and community at the frontier of learning.",
      },
      { property: "og:title", content: "Airet Lab" },
      { property: "og:description", content: "AI research and educational technology at the frontier of learning." },
    ],
  }),
  component: Home,
});

const HERO_WORDS = ["AIRET", "Lab"];

function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 -z-10 grid-bg opacity-[0.35]" />
        <NeuralField className="absolute inset-0 -z-10 h-full w-full" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--ember)] opacity-[0.18] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--teal)] opacity-[0.15] blur-[110px]" />

        <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-start px-6 pt-0 pb-0 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
          >
            {/* <Sparkles className="h-3 w-3 text-[var(--ember)]" />
            AI research × educational technology */}
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[6rem]">
  {HERO_WORDS.map((w, i) => (
    <motion.span
      key={w}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, y: 40, filter: "blur(12px)" }
      }
      animate={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        delay: 0.4 + i * 0.12,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={
        i === 0
          ? "inline-block font-black text-black"
          : "ml-5 inline-block font-medium text-black sm:ml-6"
      }
    >
      {w}
    </motion.span>
  ))}
</h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-6 max-w-2xl font-display text-lg font-medium text-muted-foreground sm:text-2xl"
          >
            Artificial Intelligence for Research on Educational Tools
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2"
          >
            <div className="rounded-2xl border border-border/60 bg-background/40 p-5 text-left backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ember)]">Mission</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI is being used across a wide range of applications, some truly useful and some less so. Can it be meaningfully adopted in education, particularly to gauge how well a learner has understood? To answer this quantitatively is our <span className="font-bold">mission</span>.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/40 p-5 text-left backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">Vision</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Once such an AI-based tool is developed and proven reliable, can it be used en masse? Put simply, can it transform, and eventually replace, the conventional way we conduct examinations? Our <span className="font-bold">vision</span> is to work towards this possibility.              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagButton to="/products" variant="primary">
              Explore our work <ArrowRight className="h-4 w-4" />
            </MagButton>
            <MagButton to="/contact" variant="outline">
              Join our community
            </MagButton>
          </motion.div>

          <Link
            to="/who-we-are"
            className="group mt-16 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-[var(--ember)]"
          >
            Who are we?
            <motion.span
              animate={reduce ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.span>
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-4">
        <div className="grid gap-6 rounded-3xl border border-border/60 bg-card/60 p-8 backdrop-blur sm:grid-cols-4">
          {[
            { n: 3, s: "", l: "Faculty" },
            { n: 1, s: "", l: "Scholars" },
            { n: 5, s: "", l: "Students" },
            { n: 0, s: "", l: "Partner Institutions" },
          ].map((s) => (
            <Reveal key={s.l} className="text-center">
              <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <CountUp to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PREVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-0">
        <SectionHeading
          eyebrow="Inside the lab"
          title={<>Research, tools, and the people behind them.</>}
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: GraduationCap,
              tag: "Who we are",
              title: "A collective of researchers, pedagogues, and builders.",
              desc: "Faculty, scholars, and interns collaborating across ML, HCI, and learning science.",
              to: "/who-we-are",
            },
            {
              icon: Rocket,
              tag: "Products",
              title: "AcadAIsist — an academic co-pilot for scholars.",
              desc: "A research assistant that reads, reasons, and writes with you. In active pilot.",
              to: "/products",
            },
            {
              icon: BookOpen,
              tag: "News & events",
              title: "Coming Soon",
              desc: "",
              to: "/opportunities",
            },
          ].map((p) => (
            <motion.div key={p.tag} variants={staggerItem}>
              <TiltCard className="h-full">
                <p.icon className="h-8 w-8 text-[var(--ember)] transition-transform group-hover:-rotate-6" />
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">{p.tag}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--ember)]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </section>
    </>
  );
}
