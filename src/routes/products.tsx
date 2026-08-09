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

const TECH = ["SLMs", "LangChain", "Python", "React", "PostgreSQL", "pgvector"];

const ROADMAP = [
  { q: "Q1 · 2026", t: "Closed alpha", d: "Internal rollout with 3 partner labs." },
  { q: "Q2 · 2026", t: "Public pilot", d: "Open cohort of 50 scholars." },
  { q: "Q3 · 2026", t: "Institutional plan", d: "Library-scale ingestion and SSO." },
  { q: "Q4 · 2026", t: "Agentic workflows", d: "Composable review and critique agents." },
  { q: "Q1 · 2027", t: "1.0 release", d: "Stable API, self-hosting, and audit trails." },
];

function Roadmap() {
  return (
    <div className="relative mt-10 overflow-x-auto pb-6">
      {/* Bold horizontal timeline */}
      <div className="absolute left-6 right-6 top-4 h-1 rounded-full bg-gradient-to-r from-[var(--ember)] to-[var(--teal)]" />

      <div className="relative grid min-w-[1000px] grid-cols-5 gap-5">
        {ROADMAP.map((m) => (
          <div key={m.q} className="relative pt-10">
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--ember)] ring-4 ring-[color-mix(in_oklab,var(--ember)_20%,transparent)]" />

            {/* Roadmap box */}
            <Reveal>
              <div className="flex h-[180px] flex-col rounded-2xl border border-border/60 bg-card/60 p-5 text-center backdrop-blur transition-all hover:-translate-y-1 hover:border-[var(--ember)]/50">
                
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ember)]">
                  {m.q}
                </div>

                <div className="mt-2 font-display text-lg font-bold">
                  {m.t}
                </div>

                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {m.d}
                </div>

              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-2 pt-8">
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

      
    </div>
  );
}
