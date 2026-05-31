import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane,
  FaLinkedin, FaGithub, FaInstagram, FaGlobe,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Section } from "./Section";

const INFO = [
  { icon: FaEnvelope, label: "Email", value: "rajarajan@example.com", href: "mailto:rajarajan@example.com" },
  { icon: FaPhone, label: "Phone", value: "+91 98000 00000", href: "tel:+919800000000" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Chennai, India", href: "#" },
];

const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com" },
  { icon: FaGlobe, label: "Portfolio", href: "#" },
  { icon: FaEnvelope, label: "Email", href: "mailto:rajarajan@example.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com" },
  { icon: SiHackerrank, label: "HackerRank", href: "https://hackerrank.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="// open.serial_port"
      title={<>Let's <span className="text-gradient">Connect</span></>}
      subtitle="Have an embedded project, role, or idea? My inbox is always open."
    >
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="gradient-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              <span className="text-emerald-400">STATUS:</span>
              <span className="text-foreground/80">AVAILABLE FOR NEW PROJECTS</span>
            </div>
            <div className="space-y-4">
              {INFO.map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <c.icon />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-muted-foreground">{c.label}</div>
                    <div className="text-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-xl p-6">
            <div className="font-mono text-xs text-muted-foreground uppercase mb-3">// social.network</div>
            <div className="grid grid-cols-4 gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="aspect-square grid place-items-center rounded-lg glass text-muted-foreground hover:text-primary hover:glow-cyan transition"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border rounded-xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project, role, or hello" />
          <div>
            <label className="text-xs font-mono uppercase text-muted-foreground">Message</label>
            <textarea
              required
              rows={6}
              maxLength={1000}
              placeholder="Tell me about your project..."
              className="mt-1 w-full rounded-md bg-muted/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none p-3 text-foreground placeholder:text-muted-foreground/60 resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium glow-cyan hover:glow-cyan-strong transition hover:-translate-y-0.5"
          >
            <FaPaperPlane /> {sent ? "Message Sent" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: {
  label: string; name: string; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-mono uppercase text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={255}
        placeholder={placeholder}
        className="mt-1 w-full rounded-md bg-muted/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none p-3 text-foreground placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
