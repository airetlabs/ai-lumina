import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion-primitives";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Æther Lab" },
      {
        name: "description",
        content:
          "Meet the researchers, scholars, and interns behind Æther Lab — a collective advancing AI for education.",
      },
      { property: "og:title", content: "Who We Are — Æther Lab" },
      {
        property: "og:description",
        content: "The people building AI for learning at Æther Lab.",
      },
    ],
  }),
  component: WhoWeAre,
});

const CORE = [
  { name: "Oswald", role: "Technical Head", focus: "Systems · LLMs · Retrieval", bio: "Leads the technical direction of the lab and its production tooling. Interested in agentic systems and evaluation." },
  { name: "Anu", role: "Pedagogy Head", focus: "Learning science · Curriculum", bio: "Shapes how the lab's tools meet real classrooms. Bridges cognitive science with practical instruction design." },
  { name: "Dr. R. Iyer", role: "Coordinator", focus: "Partnerships · Programs", bio: "Coordinates cross-institutional programs, funding, and lab operations." },
];

const SCHOLARS = [
  { name: "Kiran Menon", role: "PhD Scholar", area: "Adaptive assessment", lab: "Leads work on IRT + LLM hybrids." },
  { name: "Priya Rao", role: "PhD Scholar", area: "Human-AI dialogue", lab: "Studies teacher-in-the-loop tutoring." },
  { name: "Aditya Bose", role: "Research Associate", area: "Retrieval systems", lab: "Owns the lab's core RAG stack." },
  { name: "Maya Fernandes", role: "PhD Scholar", area: "Multimodal learning", lab: "Video + speech understanding for classrooms." },
];

const INTERNS = [
  { name: "Ravi K.", project: "Prompt evaluation UI" },
  { name: "Nia S.", project: "Dataset curation" },
  { name: "Arjun V.", project: "Teacher dashboard" },
  { name: "Lea M.", project: "Speech pipeline" },
  { name: "Diego P.", project: "Assessment agents" },
  { name: "Yuki T.", project: "Design system" },
];

function Avatar({ name, size = "lg" }: { name: string; size?: "lg" | "sm" }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const d = size === "lg" ? "h-20 w-20 text-xl" : "h-14 w-14 text-sm";
  return (
    <div className={`grid ${d} shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--ember)] to-[var(--teal)] font-display font-bold text-[var(--ink)] shadow-lg`}>
      {initials}
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <SectionHeading
        eyebrow="Who we are"
        title={<>A collective at the edge of <span className="text-gradient-static">learning</span> and machine intelligence.</>}
        sub="Faculty, scholars, and interns collaborating across ML, HCI, and learning science."
      />

      {/* CORE TEAM */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Core team</h3>
        </Reveal>
        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE.map((p) => (
            <motion.div key={p.name} variants={staggerItem}>
              <TiltCard className="h-full">
                <div className="flex items-start gap-4">
                  <Avatar name={p.name} />
                  <div>
                    <div className="font-display text-lg font-bold">{p.name}</div>
                    <div className="text-sm text-[var(--ember)]">{p.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                <div className="mt-4 inline-flex rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-xs">
                  {p.focus}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>

      {/* SCHOLARS */}
      <div className="mt-24">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Scholars</h3>
        </Reveal>
        <Stagger className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOLARS.map((s) => (
            <motion.div key={s.name} variants={staggerItem}>
              <TiltCard className="h-full">
                <div className="flex items-start gap-4">
                  <Avatar name={s.name} />
                  <div>
                    <div className="font-display text-base font-bold">{s.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.role}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <span className="text-muted-foreground">Research area · </span>
                  <span className="text-[var(--teal)]">{s.area}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.lab}</p>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>

      {/* INTERNS */}
      <div className="mt-24">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Interns</h3>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {INTERNS.map((i) => (
            <motion.div key={i.name} variants={staggerItem}>
              <TiltCard className="h-full">
                <div className="flex items-center gap-3">
                  <Avatar name={i.name} size="sm" />
                  <div>
                    <div className="font-display font-semibold">{i.name}</div>
                    <div className="text-xs text-muted-foreground">{i.project}</div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
