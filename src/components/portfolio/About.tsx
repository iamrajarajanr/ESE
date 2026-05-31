import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "./Section";
import profileImg from "@/assets/profile.jpg";

const STATS = [
  { label: "Projects Completed", value: 32 },
  { label: "Certifications", value: 14 },
  { label: "Internships", value: 4 },
  { label: "Technologies Used", value: 25 },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}+</span>;
}

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about.me"
      title={<>The <span className="text-gradient">Engineer</span> Behind The Code</>}
    >
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden gradient-border glow-cyan">
            <img src={profileImg} alt="Rajarajan portrait" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
              <div className="font-mono text-xs text-primary">// ENGINEER_STATUS</div>
              <div className="text-sm text-foreground/90">Designing the unseen layer of intelligent hardware.</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/90 leading-relaxed">
            I'm an Embedded Systems Engineer specialising in low-level firmware,
            real-time control systems, and IoT device design. My work lives at
            the intersection of silicon and software — bringing up custom PCBs,
            writing memory-safe C/C++ for resource-constrained MCUs, and
            integrating sensors, radios, and motors into reliable products.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a background in Electronics & Communication Engineering and
            hands-on exposure to STM32, ESP32, ARM Cortex-M, FreeRTOS, and
            industrial communication protocols (UART, SPI, I²C, CAN, Modbus),
            I build solutions for automotive, industrial automation, and
            consumer IoT. My long-term goal is to contribute to next-generation
            semiconductor and edge-AI platforms.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="gradient-border rounded-xl p-4 text-center">
                <div className="font-display text-3xl text-gradient">
                  <Counter to={s.value} />
                </div>
                <div className="mt-1 text-xs font-mono uppercase text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
