import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, Newspaper, ArrowRight } from "lucide-react";
import { MagButton } from "@/components/mag-button";
import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion-primitives";
import { TiltCard } from "@/components/tilt-card";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities, News & Events — Airet Lab" },
      {
        name: "description",
        content: "Open positions, latest news, and upcoming events from Airet Lab.",
      },
      { property: "og:title", content: "Opportunities, News & Events — Airet Lab" },
      { property: "og:description", content: "Join us, read the latest, mark your calendar." },
    ],
  }),
  component: Opportunities,
});

const TABS = [
  { id: "opps", label: "Opportunities", icon: Briefcase },
  { id: "news", label: "News", icon: Newspaper },
  { id: "events", label: "Events", icon: Calendar },
] as const;

type TabId = typeof TABS[number]["id"];

const OPPS = [
  { title: "Faculty", desc: "Any department.No prerequisites" },
  { title: "PhD. Scholars", desc: "No prerequisites" },
  { title: "Research Interns", desc: "No prerequisites" },
  { title: "Collaborators", desc: "No prerequisites" },
];

const NEWS = [
  { title: "Paper accepted at LAK 2026", date: "Nov 12, 2025", desc: "Our work on grounded generation for scholars." },
  { title: "AcadAIsist enters public pilot", date: "Oct 03, 2025", desc: "50-scholar cohort opens for applications." },
  { title: "New partnership with Athena Institute", date: "Sep 18, 2025", desc: "Joint research on classroom AI." },
  { title: "Talk at EMNLP 2025", date: "Aug 22, 2025", desc: "Anu presents on teacher-in-the-loop tutoring." },
  { title: "Grant awarded from EduFuture", date: "Jul 01, 2025", desc: "3-year support for K-12 tooling." },
  { title: "Open-sourced retrieval eval kit", date: "Jun 12, 2025", desc: "Released under Apache 2.0." },
];

const EVENTS = [
  { date: "Jan 22", title: "AI × Pedagogy Workshop", desc: "Half-day workshop with partner faculty." },
  { date: "Feb 14", title: "Applications close — Spring cohort", desc: "AcadAIsist scholar cohort." },
  { date: "Mar 08", title: "Public seminar: Grounded reasoning", desc: "Speech on retrieval-grounded systems." },
  { date: "Apr 04", title: "LAK 2026 — Airet Lab presenting", desc: "Two long papers and a poster." },
  { date: "May 20", title: "Summer internship kickoff", desc: "Onboarding for the incoming intern cohort." },
];

function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div ref={ref} className="relative mt-8 pl-6">
      <div className="absolute left-2 top-0 h-full w-px bg-border" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-[var(--ember)] to-[var(--teal)]"
      />
      <ul className="space-y-8">
        {EVENTS.map((e) => (
          <li key={e.title} className="relative">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -left-[18px] top-2 h-3 w-3 rounded-full bg-[var(--ember)] shadow-[0_0_0_4px_color-mix(in_oklab,var(--ember)_25%,transparent)]"
            />
            <Reveal>
              <div className="rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur">
                <div className="flex items-baseline gap-3">
                  <div className="font-display font-bold text-[var(--ember)]">{e.date}</div>
                  <div className="font-display text-lg font-semibold">{e.title}</div>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{e.desc}</div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Opportunities() {
  const [tab, setTab] = useState<TabId>("opps");
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <SectionHeading
        title={<>Opportunities, news & events</>}
        sub="Open positions, latest news, and what's on the calendar."
      />

      {/* Tabs */}
      <div className="mt-4 inline-flex rounded-full border border-border/60 bg-card/60 p-1 backdrop-blur">
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
            >
              {active && (
                <motion.span
                  layoutId="opp-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--ember)] to-[var(--teal)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative flex items-center gap-2 ${active ? "text-[var(--ink)]" : "text-foreground/80"}`}>
                <t.icon className="h-4 w-4" />
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {tab === "opps" && (
          <Stagger className="grid gap-6 md:grid-cols-2">
            {OPPS.map((o) => (
              <motion.div key={o.title} variants={staggerItem}>
                <TiltCard className="flex h-full flex-col justify-between">
                  <div>
                    <div className="font-display text-xl font-bold">{o.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{o.desc}</p>
                  </div>
                  <div className="mt-6">
                    <MagButton href="#" variant="outline">
                      Apply <ArrowRight className="h-4 w-4" />
                    </MagButton>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </Stagger>
        )}

        {tab === "news" && (
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((n) => (
              <motion.div key={n.title} variants={staggerItem}>
                <TiltCard className="h-full overflow-hidden !p-0">
                  <div className="h-40 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-[color-mix(in_oklab,var(--ember)_20%,transparent)] to-[color-mix(in_oklab,var(--teal)_25%,transparent)] transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-widest text-[var(--teal)]">{n.date}</div>
                    <div className="mt-1 font-display text-lg font-bold leading-tight">{n.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{n.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </Stagger>
        )}

        {tab === "events" && <Timeline />}
      </div>
    </div>
  );
}
