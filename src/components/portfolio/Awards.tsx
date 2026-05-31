import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Section } from "./Section";

const AWARDS = [
  { icon: "🏆", title: "Best Outgoing Student", desc: "Awarded by the Department of ECE for academic and leadership excellence." },
  { icon: "🏅", title: "Best Student of Department", desc: "Recognised for top performance and project contributions during the academic year." },
  { icon: "📋", title: "NBA Student Coordinator", desc: "Led documentation efforts for departmental NBA accreditation." },
  { icon: "🤝", title: "NSS Captain", desc: "Headed 50+ volunteers in community-driven initiatives and rural-electrification camps." },
  { icon: "🎤", title: "Motivational Speaker", desc: "Delivered keynotes on engineering, embedded careers, and student leadership." },
];

export function Awards() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % AWARDS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const a = AWARDS[i];
  return (
    <Section
      id="awards"
      eyebrow="// achievements.log"
      title={<>Awards & <span className="text-gradient">Activities</span></>}
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="relative h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 gradient-border rounded-2xl p-10 text-center flex flex-col items-center justify-center glow-cyan"
            >
              <div className="text-6xl mb-4">{a.icon}</div>
              <h3 className="font-display text-2xl text-gradient">{a.title}</h3>
              <p className="mt-3 text-muted-foreground max-w-xl">{a.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setI((x) => (x - 1 + AWARDS.length) % AWARDS.length)}
          className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full glass text-primary hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Previous"
        ><FaChevronLeft /></button>
        <button
          onClick={() => setI((x) => (x + 1) % AWARDS.length)}
          className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full glass text-primary hover:bg-primary hover:text-primary-foreground transition"
          aria-label="Next"
        ><FaChevronRight /></button>

        <div className="mt-6 flex justify-center gap-2">
          {AWARDS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
