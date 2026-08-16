import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { MagButton } from "@/components/mag-button";
import { Reveal } from "@/components/motion-primitives";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Airet Lab" },
      { name: "description", content: "Get in touch with Airet Lab — collaborations, questions, applications." },
      { property: "og:title", content: "Contact — Airet Lab" },
      { property: "og:description", content: "Reach out to Airet Lab." },
    ],
  }),
  component: Contact,
});

// 🔑 Same EmailJS config/usage as Page 1's form
const EMAILJS_SERVICE_ID = "service_t45zms1";
const EMAILJS_TEMPLATE_ID = "template_dq284ef";
const EMAILJS_PUBLIC_KEY = "5ISd_sKvuFsWpgHj1";

/* ---------- Form sub-components (copied exactly from Page 1) ---------- */

function FloatingField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="eyebrow font-bold text-xs sm:text-[13px] mb-2 block tracking-wider">{label}</label>
      {children}
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow font-bold text-xs sm:text-[13px] mb-2 block tracking-wider">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ink transition-all"
      />
    </div>
  );
}

function Contact() {
  /* ---------- Form state + handleSend (copied exactly from Page 1) ---------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    affiliation: "",
    subject: "Research collaboration",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          affiliation: form.affiliation,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        affiliation: "",
        subject: "Research collaboration",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16">
      <div className="pointer-events-none absolute -top-24 left-10 -z-10 h-72 w-72 rounded-full bg-[var(--ember)] opacity-20 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 -z-10 h-72 w-72 rounded-full bg-[var(--teal)] opacity-20 blur-[100px]" />

      <div className="grid gap-12 md:grid-cols-2">
      
        {/* ---------- Left column: unchanged from Page 2 ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[var(--ember)]">Contact</div>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Get in touch.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            For collaborations, media, or applications — we usually reply within a few days.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--ember)]" />
              <span>Airet Lab · Room 303<br></br> Computer Science and Engineering Department<br />NIT Thiruchirappalli</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[var(--ember)]" />
              <a href="mailto:airetlabs@gmail.com" className="hover:text-[var(--ember)] transition-colors">
                airetlabs@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[var(--ember)]" />
              <span>0431-250-3223</span>
            </li>
          </ul>

         <div className="mt-10 flex gap-2">
  {[
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/school/takshashila-b.ed.-college-halvad/",
      label: "LinkedIn",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
    {
      Icon: Github,
      href: "https://github.com/airetlabs",
      label: "GitHub",
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@NITTiruchirappalliOfficial",
      label: "YouTube",
    },
  ].map(({ Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group grid h-11 w-11 place-items-center rounded-full border border-border/60 transition-all hover:border-[var(--ember)] hover:bg-[color-mix(in_oklab,var(--ember)_12%,transparent)]"
    >
      <Icon className="h-4 w-4 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
    </a>
  ))}
</div>
        </motion.div>

        {/* ---------- Right column: form JSX copied exactly from Page 1 ---------- */}
        <motion.form
          whileHover={{ y: -2 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSend}
          className="space-y-6 rounded-3xl bg-surface ring-1 ring-border p-8 lg:p-10 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] hover:ring-ink/20 transition-all"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Full name"
              placeholder="Your name"
              value={form.name}
              onChange={update("name")}
              required
            />
            <Field
              label="Email"
              type="email"
              placeholder="you@institute.edu"
              value={form.email}
              onChange={update("email")}
              required
            />
          </div>

          <Field
            label="Affiliation"
            placeholder="University, company or organization"
            value={form.affiliation}
            onChange={update("affiliation")}
          />

          <FloatingField label="Subject">
            <select
              value={form.subject}
              onChange={update("subject")}
              className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink transition-all"
            >
              <option>Research collaboration</option>
              <option>Doctoral admission inquiry</option>
              <option>Industry partnership</option>
              <option>Other</option>
            </select>
          </FloatingField>

          <FloatingField label="Message">
            <textarea
              rows={6}
              placeholder="Tell us briefly about your interest..."
              value={form.message}
              onChange={update("message")}
              required
              className="w-full rounded-xl bg-canvas ring-1 ring-border px-4 py-3 text-sm focus:outline-none focus:ring-ink focus:ring-2 resize-none transition-all"
            />
          </FloatingField>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ y: -2, boxShadow: "0 14px 32px -12px color-mix(in_oklab, var(--ember) 70%, transparent)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ember)] text-[var(--ink)] px-6 py-3 text-sm font-semibold shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] transition-colors hover:bg-[color-mix(in_oklab,var(--ember)_85%,black_15%)] disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </motion.button>
            {status === "sent" && (
              <span className="text-sm text-accent">Message sent — thank you!</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-500">Something went wrong. Try again.</span>
            )}
          </div>
        </motion.form>
      </div>

      {/* ---------- Bottom CTA: unchanged from Page 2 ---------- */}
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