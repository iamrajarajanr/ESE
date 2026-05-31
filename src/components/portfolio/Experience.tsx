import { motion } from "framer-motion";
import { Section } from "./Section";

const ITEMS = [
  {
    when: "Jan 2024 — Present",
    company: "NovaSilicon Labs",
    role: "Embedded Firmware Engineer",
    desc: "Leading firmware development for STM32-based industrial sensor nodes. Built FreeRTOS-driven CAN/Modbus gateways now deployed in 200+ field units.",
    tech: ["STM32", "FreeRTOS", "CAN", "Modbus", "C"],
  },
  {
    when: "Jun 2023 — Dec 2023",
    company: "EdgeCore IoT",
    role: "IoT Engineer (Intern)",
    desc: "Built ESP32 telemetry firmware streaming MQTT to a React/Node dashboard. Designed low-power sleep cycles extending battery life by 4×.",
    tech: ["ESP32", "MQTT", "React", "Node.js"],
  },
  {
    when: "Jan 2023 — May 2023",
    company: "Microtech Robotics",
    role: "Embedded Intern",
    desc: "Wrote BLDC motor control firmware on ARM Cortex-M4. Designed 4-layer PCBs in KiCad and brought up new hardware revisions.",
    tech: ["ARM Cortex-M4", "KiCad", "PCB", "C++"],
  },
  {
    when: "2022",
    company: "University R&D",
    role: "Research Assistant",
    desc: "Prototyped a smart agriculture sensor mesh using LoRa + ESP32. Co-authored a paper on low-power IoT topologies.",
    tech: ["LoRa", "ESP32", "Python"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// career.timeline"
      title={<>Professional <span className="text-gradient">Trajectory</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        <div className="space-y-12">
          {ITEMS.map((item, i) => {
            const isRight = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-6 ${isRight ? "" : "md:[direction:rtl]"}`}
              >
                {/* dot */}
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary glow-cyan ring-4 ring-background" />

                <div className={`pl-12 md:pl-0 ${isRight ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`}>
                  <div className="font-mono text-xs text-primary">{item.when}</div>
                  <div className="font-display text-xl mt-1">{item.role}</div>
                  <div className="text-muted-foreground">{item.company}</div>
                </div>

                <div className={`pl-12 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12 md:text-right md:[direction:ltr]"}`}>
                  <div className="gradient-border rounded-xl p-5">
                    <p className="text-foreground/90 text-sm leading-relaxed">{item.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
