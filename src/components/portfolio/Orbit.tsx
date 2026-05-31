import { FaMicrochip } from "react-icons/fa";
import { Section } from "./Section";

const TECHS = [
  "STM32", "ESP32", "Arduino", "Embedded C", "C++",
  "Python", "React", "Node.js", "MongoDB", "IoT", "RTOS", "PCB",
];

export function Orbit() {
  return (
    <Section
      id="orbit"
      eyebrow="// tech_orbit"
      title={<>Tools in <span className="text-gradient">Constant Rotation</span></>}
      subtitle="The stack I use to design, build, and ship embedded products."
    >
      <div className="relative mx-auto aspect-square w-full max-w-2xl">
        {/* rings */}
        {[100, 75, 50].map((p, i) => (
          <div
            key={p}
            className="absolute rounded-full border border-dashed border-primary/20"
            style={{ inset: `${(100 - p) / 2}%` }}
          />
        ))}

        {/* center */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative h-28 w-28 grid place-items-center rounded-2xl gradient-border glow-cyan-strong">
            <FaMicrochip className="text-primary" size={48} />
            <div className="absolute -inset-3 rounded-2xl border border-primary/30 animate-spin-slow" />
          </div>
        </div>

        {/* Orbiting badges - two concentric rotating rings */}
        {[0, 1].map((ring) => {
          const items = TECHS.slice(ring * 6, ring * 6 + 6);
          const radius = ring === 0 ? 36 : 48;
          return (
            <div
              key={ring}
              className={`absolute inset-0 ${ring === 0 ? "animate-spin-slow" : "animate-spin-reverse"}`}
              style={{ animationDuration: ring === 0 ? "30s" : "45s" }}
            >
              {items.map((t, i) => {
                const angle = (i / items.length) * Math.PI * 2;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return (
                  <div
                    key={t}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className={`glass px-3 py-1.5 rounded-full font-mono text-xs text-primary border border-primary/30 ${ring === 0 ? "animate-spin-reverse" : "animate-spin-slow"}`}
                      style={{ animationDuration: ring === 0 ? "30s" : "45s" }}
                    >
                      {t}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
