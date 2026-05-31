import { motion } from "framer-motion";
import { FaMicrochip, FaTools, FaCode, FaGlobe } from "react-icons/fa";
import { Section } from "./Section";

const GROUPS = [
  {
    icon: FaMicrochip,
    title: "Embedded Systems",
    items: [
      ["Embedded C", 95], ["RTOS / FreeRTOS", 85], ["STM32", 92], ["ESP32", 90],
      ["Arduino", 95], ["UART / SPI / I²C", 92], ["CAN", 80], ["Modbus", 78],
    ],
  },
  {
    icon: FaTools,
    title: "Hardware",
    items: [
      ["PCB Design (KiCad)", 85], ["Circuit Design", 88], ["Sensors", 90],
      ["Power Electronics", 75], ["Testing / Validation", 82], ["Debugging (JTAG/SWD)", 87],
    ],
  },
  {
    icon: FaCode,
    title: "Programming",
    items: [["C", 95], ["C++", 88], ["Python", 85], ["JavaScript / TS", 80]],
  },
  {
    icon: FaGlobe,
    title: "Web & Cloud",
    items: [["React", 82], ["Node.js", 78], ["MongoDB", 72], ["Express", 75]],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skill.matrix"
      title={<>Engineering <span className="text-gradient">Capabilities</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {GROUPS.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="gradient-border rounded-xl p-6 hover:glow-cyan transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30">
                <g.icon size={18} />
              </div>
              <h3 className="font-display text-lg">{g.title}</h3>
            </div>

            <div className="space-y-3">
              {g.items.map(([name, pct]) => (
                <div key={name as string}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-foreground/90">{name}</span>
                    <span className="text-primary">{pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
