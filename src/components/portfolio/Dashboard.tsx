import { motion } from "framer-motion";
import { FaMicrochip, FaCode, FaRocket, FaSatelliteDish, FaBookOpen } from "react-icons/fa";
import { Section } from "./Section";

const WIDGETS = [
  { icon: FaRocket, label: "Current Focus", value: "Embedded Systems & IoT", color: "from-cyan-400 to-blue-500" },
  { icon: FaSatelliteDish, label: "Latest Project", value: "Smart Sensor Monitoring System", color: "from-blue-400 to-indigo-500" },
  { icon: FaCode, label: "Primary Languages", value: "C  ·  C++  ·  Python", color: "from-cyan-400 to-teal-500" },
  { icon: FaMicrochip, label: "Hardware Platforms", value: "STM32  ·  ESP32  ·  Arduino", color: "from-sky-400 to-cyan-500" },
  { icon: FaBookOpen, label: "Currently Learning", value: "FreeRTOS  ·  CAN Protocol", color: "from-indigo-400 to-cyan-400" },
];

export function Dashboard() {
  return (
    <Section
      id="dashboard"
      eyebrow="// engineering_dashboard.live"
      title={<>System <span className="text-gradient">Telemetry</span></>}
      subtitle="A real-time snapshot of what I'm building, learning, and shipping."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {WIDGETS.map((w, i) => (
          <motion.div
            key={w.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative gradient-border rounded-xl p-6 group hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br ${w.color} text-background`}>
                <w.icon size={18} />
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                LIVE
              </div>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {w.label}
            </div>
            <div className="mt-1 font-display text-lg text-foreground">{w.value}</div>
            {/* fake signal bars */}
            <div className="mt-4 flex items-end gap-1 h-6">
              {[...Array(20)].map((_, j) => (
                <span
                  key={j}
                  className="flex-1 bg-primary/40 rounded-sm"
                  style={{
                    height: `${30 + ((i * 7 + j * 13) % 70)}%`,
                    opacity: 0.4 + ((j % 5) * 0.12),
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
