import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, FileText, Lock, Brain, MessageSquare, Search, Zap, Layers, LineChart } from "lucide-react";
import { MagButton } from "@/components/mag-button";
import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Tools — Airet Lab" },
      {
        name: "description",
        content:
          "AcadAIsist and the next generation of AI tools built at Airet Lab for research and education.",
      },
      { property: "og:title", content: "Products & Tools — Airet Lab" },
      { property: "og:description", content: "AcadAIsist and upcoming tools from Airet Lab." },
    ],
  }),
  component: Products,
});

const FEATURES = [
  { icon: Search, title: "Semantic paper search", desc: "Find related work across your library and the open web." },
  { icon: Brain, title: "Grounded reasoning", desc: "Answers cite the exact passages they were drawn from." },
  { icon: MessageSquare, title: "Dialogue over PDFs", desc: "Ask, refine, and iterate against your reading stack." },
  { icon: LineChart, title: "Writing analytics", desc: "Track argument structure, novelty, and coverage." },
  { icon: Layers, title: "Multi-agent workflows", desc: "Compose reviewers, summarizers, and critics." },
  { icon: Zap, title: "Offline-first drafts", desc: "Your notes stay on your device by default." },
];

const TECH = ["LLMs", "LangChain", "Python", "React", "PostgreSQL", "pgvector"];

const ROADMAP = [
  { q: "Q1 · 2026", t: "Closed alpha", d: "Internal rollout with 3 partner labs." },
  { q: "Q2 · 2026", t: "Public pilot", d: "Open cohort of 50 scholars." },
  { q: "Q3 · 2026", t: "Institutional plan", d: "Library-scale ingestion and SSO." },
  { q: "Q4 · 2026", t: "Agentic workflows", d: "Composable review and critique agents." },
  { q: "Q1 · 2027", t: "1.0 release", d: "Stable API, self-hosting, and audit trails." },
];

function Roadmap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div ref={ref} className="relative mt-8">
      <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--ember)] to-[var(--teal)] md:left-1/2 md:-translate-x-1/2"
      />
      <ul className="space-y-10">
        {ROADMAP.map((m, i) => {
          const flip = i % 2 === 1;
          return (
            <li key={m.t} className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-[var(--ember)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--ember)_25%,transparent)] md:left-1/2 md:-translate-x-1/2"
              />
              <Reveal className={flip ? "md:col-start-2" : ""}>
                <div className={`rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur ${flip ? "md:text-left" : "md:text-right"}`}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ember)]">{m.q}</div>
                  <div className="mt-1 font-display text-lg font-bold">{m.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.d}</div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <SectionHeading
        eyebrow="Products & tools"
        title={<>Built in the lab. Deployed in the wild.</>}
        sub="Software that turns our research into everyday leverage for scholars and educators."
      />

      {/* Featured product */}
      <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-border/60">
        <div className="pointer-events-none absolute -inset-px rounded-[2rem] [background:linear-gradient(120deg,var(--ember),var(--teal))] opacity-40 blur-2xl" />
        <div className="relative rounded-[2rem] bg-card/80 p-8 backdrop-blur md:p-12">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--teal)]/40 bg-[var(--teal)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--teal)] animate-pulse" /> Active pilot
              </div>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">AcadAIsist</h3>
              <p className="mt-2 max-w-xl text-lg text-muted-foreground">
                An academic co-pilot for scholars — reads, reasons, and writes with you.
              </p>
            </div>
            <div className="flex gap-3">
              <MagButton href="#" variant="outline">
                <Github className="h-4 w-4" /> GitHub
              </MagButton>
              <MagButton href="#" variant="outline">
                <FileText className="h-4 w-4" /> Publications
              </MagButton>
            </div>
          </div>

          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">
            AcadAIsist grounds every answer in your own reading stack, cites its sources, and lets you compose
            multi-agent workflows — reviewers, summarizers, critics — that plug into your research process.
          </p>

          {/* Features */}
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group flex gap-3 rounded-2xl border border-border/60 bg-background/40 p-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--ember)_14%,transparent)] text-[var(--ember)] transition-transform group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </Stagger>

          {/* Tech */}
          <div className="mt-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Built with</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {TECH.map((t) => (
                <span key={t} className="rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Demo mockups */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-background shadow-xl"
              >
                <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--ember)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--teal)]/70" />
                </div>
                <div className="grid h-40 place-items-center bg-gradient-to-br from-[color-mix(in_oklab,var(--ember)_10%,transparent)] to-[color-mix(in_oklab,var(--teal)_12%,transparent)] text-xs text-muted-foreground">
                  Screenshot {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="mt-14">
            <h4 className="font-display text-2xl font-bold">Roadmap</h4>
            <Roadmap />
          </div>

          {/* Publications */}
          <div className="mt-14">
            <h4 className="font-display text-2xl font-bold">Related publications</h4>
            <ul className="mt-4 divide-y divide-border/60">
              {[
                "Grounded generation for scholarly workflows — LAK '26",
                "Retrieval augmented tutoring at scale — EMNLP '25",
                "Evaluating agentic reviewers — NeurIPS D&B '25",
              ].map((p) => (
                <li key={p} className="group flex items-center justify-between py-3 text-sm">
                  <span>{p}</span>
                  <a href="#" className="text-[var(--ember)] opacity-70 transition-opacity group-hover:opacity-100">
                    Read →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Coming soon */}
      <div className="mt-20">
        <SectionHeading eyebrow="Coming soon" title="More in the pipeline." />
        <Stagger className="mt-8 grid gap-6 md:grid-cols-3">
          {["Teacher Copilot", "PeerReview.ai", "Curriculum Studio"].map((n) => (
            <motion.div key={n} variants={staggerItem}>
              <TiltCard glow={false} className="opacity-80">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-border/60">
                  <Lock className="h-5 w-5 animate-pulse text-muted-foreground" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Coming soon
                </div>
                <div className="mt-1 font-display text-xl font-bold text-muted-foreground/80 blur-[0.5px]">
                  {n}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
