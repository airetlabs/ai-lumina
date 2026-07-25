import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube, Check, Loader2 } from "lucide-react";
import { MagButton } from "@/components/mag-button";
import { Reveal } from "@/components/motion-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Æther Lab" },
      { name: "description", content: "Get in touch with Æther Lab — collaborations, questions, applications." },
      { property: "og:title", content: "Contact — Æther Lab" },
      { property: "og:description", content: "Reach out to Æther Lab." },
    ],
  }),
  component: Contact,
});

function Field({
  label,
  type = "text",
  required,
  as = "input",
  name,
}: {
  label: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  name: string;
}) {
  const cls =
    "peer w-full rounded-2xl border border-border/70 bg-background/40 px-4 pb-3 pt-6 text-sm outline-none transition-all placeholder-transparent backdrop-blur focus:border-[var(--ember)] focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--ember)_20%,transparent)]";
  return (
    <label className="relative block">
      {as === "input" ? (
        <input type={type} name={name} required={required} placeholder={label} className={cls} />
      ) : (
        <textarea name={name} required={required} rows={5} placeholder={label} className={cls} />
      )}
      <span className="pointer-events-none absolute left-4 top-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:text-[var(--ember)]">
        {label}
      </span>
    </label>
  );
}

function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };

  return (
    <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="pointer-events-none absolute -top-24 left-10 -z-10 h-72 w-72 rounded-full bg-[var(--ember)] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 -z-10 h-72 w-72 rounded-full bg-[var(--teal)] opacity-20 blur-[100px]" />

      <div className="grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ember)]">Contact</div>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Get in <span className="text-gradient-static">touch</span>.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            For collaborations, media, or applications — we usually reply within a few days.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--ember)]" />
              <span>Æther Lab · Room 402, Kalpana Building<br />Institute of Technology · India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[var(--ember)]" />
              <a href="mailto:hello@aetherlab.ai" className="hover:text-[var(--ember)] transition-colors">
                hello@aetherlab.ai
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[var(--ember)]" />
              <span>+91 · 000 000 0000</span>
            </li>
          </ul>

          <div className="mt-10 flex gap-2">
            {[Linkedin, Twitter, Github, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="group grid h-11 w-11 place-items-center rounded-full border border-border/60 transition-all hover:border-[var(--ember)] hover:bg-[color-mix(in_oklab,var(--ember)_12%,transparent)]"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" type="email" name="email" required />
            <Field label="Subject" name="subject" required />
            <Field label="Message" name="message" as="textarea" required />
            <button
              type="submit"
              disabled={state !== "idle"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full btn-gradient px-6 py-3 text-sm font-semibold hover:btn-gradient-hover disabled:opacity-80"
            >
              {state === "idle" && "Send message"}
              {state === "loading" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              )}
              {state === "done" && (
                <>
                  <Check className="h-4 w-4" /> Sent — talk soon
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>

      <Reveal>
        <div className="mt-24 overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-[color-mix(in_oklab,var(--ember)_18%,transparent)] to-[color-mix(in_oklab,var(--teal)_18%,transparent)] p-10 text-center backdrop-blur">
          <h3 className="font-display text-3xl font-bold sm:text-4xl">Interested in joining our lab?</h3>
          <p className="mt-3 text-muted-foreground">We're always open to talented scholars, engineers, and educators.</p>
          <div className="mt-6 flex justify-center">
            <MagButton href="#" variant="primary">
              Apply to join
            </MagButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
