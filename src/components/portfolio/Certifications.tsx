import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "./Section";

const CERTS = [
  { name: "Embedded Systems Specialisation", org: "Coursera · UC Boulder", date: "Mar 2024" },
  { name: "ARM Cortex-M Programming", org: "ARM Education", date: "Jan 2024" },
  { name: "ESP-IDF Professional", org: "Espressif Systems", date: "Oct 2023" },
  { name: "STM32 Bare-Metal Programming", org: "Udemy", date: "Aug 2023" },
  { name: "Introduction to FreeRTOS", org: "FreeRTOS.org", date: "Jun 2023" },
  { name: "IoT with AWS", org: "AWS Training", date: "Apr 2023" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="// credentials.signed"
      title={<>Certifications & <span className="text-gradient">Training</span></>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="gradient-border rounded-xl p-5 hover:-translate-y-1 hover:glow-cyan transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30">
                <FaCertificate />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">{c.date}</span>
            </div>
            <h3 className="font-display text-base mt-4">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.org}</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View Certificate <FaExternalLinkAlt size={10} />
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
