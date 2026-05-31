import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";
import { Section } from "./Section";

const STATS = [
  { icon: FaGithub, label: "Contributions", value: "1,284" },
  { icon: FaCodeBranch, label: "Repositories", value: "42" },
  { icon: FaStar, label: "Stars Earned", value: "318" },
  { icon: FaUsers, label: "Followers", value: "210" },
];

const LANGS = [
  { name: "C", pct: 38, color: "#38BDF8" },
  { name: "C++", pct: 22, color: "#22D3EE" },
  { name: "Python", pct: 18, color: "#67E8F9" },
  { name: "JavaScript", pct: 14, color: "#0EA5E9" },
  { name: "Other", pct: 8, color: "#475569" },
];

const REPOS = [
  { name: "stm32-rtos-motor", desc: "FOC BLDC motor controller on FreeRTOS", lang: "C", stars: 84 },
  { name: "esp32-iot-hub", desc: "MQTT + BLE smart-home hub", lang: "C++", stars: 67 },
  { name: "pcb-trace-ai", desc: "Computer-vision PCB defect detector", lang: "Python", stars: 53 },
];

export function GitHubStats() {
  return (
    <Section
      id="github"
      eyebrow="// github.analytics"
      title={<>Open Source <span className="text-gradient">Footprint</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="gradient-border rounded-xl p-5 text-center"
          >
            <s.icon className="mx-auto text-primary mb-2" size={22} />
            <div className="font-display text-3xl text-gradient">{s.value}</div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wide mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="gradient-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg">Contribution Activity</h3>
            <span className="font-mono text-xs text-emerald-400">last 12 months</span>
          </div>
          <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
            {Array.from({ length: 26 * 7 }).map((_, i) => {
              const intensity = (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 0.5 + 0.5;
              const lvl = Math.floor(intensity * 4);
              const colors = ["#1A2238", "#0F4F6E", "#0EA5E9", "#38BDF8", "#67E8F9"];
              return (
                <span
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{ background: colors[lvl] }}
                />
              );
            })}
          </div>
        </div>

        <div className="gradient-border rounded-xl p-6">
          <h3 className="font-display text-lg mb-4">Top Languages</h3>
          <div className="space-y-3">
            {LANGS.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span>{l.name}</span>
                  <span style={{ color: l.color }}>{l.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full"
                    style={{ background: l.color, boxShadow: `0 0 12px ${l.color}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-6">
        {REPOS.map((r) => (
          <a
            key={r.name}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border rounded-xl p-5 hover:glow-cyan transition group"
          >
            <div className="flex items-center gap-2 text-primary">
              <FaCodeBranch size={14} />
              <span className="font-mono text-sm group-hover:underline">{r.name}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
            <div className="mt-3 flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" />{r.lang}</span>
              <span className="inline-flex items-center gap-1"><FaStar /> {r.stars}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
