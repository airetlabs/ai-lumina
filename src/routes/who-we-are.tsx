import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/tilt-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion-primitives";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who We Are — Airet Lab" },
      {
        name: "description",
        content:
          "Meet the researchers, scholars, and interns behind Airet Lab — a collective advancing AI for education.",
      },
      { property: "og:title", content: "Who We Are — Airet Lab" },
      {
        property: "og:description",
        content: "The people building AI for learning at Airet Lab.",
      },
    ],
  }),
  component: WhoWeAre,
});

const CORE = [
  {
    name: "Dr.-Ing. Prince Gideon Kubendran Amos",
    role: "Coordinator",
    focus: "Partnerships · Programs",
    bio: "Coordinates cross-institutional programs, funding, and lab operations.",
    image: "/images/faculty/prince_sir.png",
  },
  {
    name: "Dr.C Oswald",
    role: "Technical Head",
    focus: "Systems · LLMs · Retrieval",
    bio: "Leads the technical direction of the lab and its production tooling. Interested in agentic systems and evaluation.",
    image: "/images/faculty/oswald_sir.png",
  },
  {
    name: "Dr. Anu Kuriakose",
    role: "Pedagogy Head",
    focus: "Learning science · Curriculum",
    bio: "Shapes how the lab's tools meet real classrooms. Bridges cognitive science with practical instruction design.",
    image: "/images/faculty/anu_mam.png",
  },
];

const SCHOLARS = [
  {
    name: "Abhijith Balan",
    role: "PhD Scholar",
    area: "Adaptive assessment",
    lab: "Leads work on IRT + LLM hybrids.",
    image: "/images/scholars/Abhijith_Balan.png",
  },
];

const INTERNS = [
  {
    name: "K.Preetham Reddy",
    project: "SLM",
    image: "/images/students/PreethamReddy.png",
  },
  {
    name: "Aditi Baskaran",
    project: "Frontend and Backend",
    image: "/images/students/AditiBaskaran.png",
  },
  {
    name: "Nooh",
    project: "RAG",
    image: "/images/students/Nooh_K.png",
  },
  {
    name: "Adarsh",
    project: "RAG",
    image: "/images/students/Adarsh.png",
  },
  {
    name: "Madhu Parameswari",
    project: "Frontend",
    image: "/images/students/MadhuParameswariGanesan.png",
  },
];

function WhoWeAre() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-2 pt-16">
      <SectionHeading
        title={<>Meet the researchers, scholars, and interns behind Airet Lab</>}
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
                  <Avatar className="h-20 w-20 text-lg">
                    {p.image ? (
                      <AvatarImage src={p.image} alt={p.name} />
                    ) : (
                      <AvatarFallback>{p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</AvatarFallback>
                    )}
                  </Avatar>
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
                  <Avatar className="h-20 w-20 text-lg">
                    {s.image ? (
                      <AvatarImage src={s.image} alt={s.name} />
                    ) : (
                      <AvatarFallback>{s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</AvatarFallback>
                    )}
                  </Avatar>
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
                  <Avatar className="h-20 w-20 text-lg">
                    {i.image ? (
                      <AvatarImage src={i.image} alt={i.name} />
                    ) : (
                      <AvatarFallback>{i.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</AvatarFallback>
                    )}
                  </Avatar>
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
