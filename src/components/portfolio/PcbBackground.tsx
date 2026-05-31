import { motion } from "framer-motion";

/** Animated SVG of PCB-style traces, fixed full-screen background. */
export function PcbBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute inset-0 pcb-bg opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08),transparent_60%)]" />
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="traceGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${100 + i * 200} 0 L ${100 + i * 200} ${200 + i * 60} L ${
              400 + i * 180
            } ${200 + i * 60} L ${400 + i * 180} ${600 + i * 40}`}
            stroke="url(#traceGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 8"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={(i * 137) % 1600}
            cy={(i * 211) % 900}
            r="2"
            fill="#22D3EE"
            opacity="0.5"
          />
        ))}
      </svg>
    </div>
  );
}

/** Floating particles overlay. */
export function Particles() {
  const dots = Array.from({ length: 30 }, (_, i) => i);
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {dots.map((i) => {
        const left = (i * 53) % 100;
        const delay = (i % 10) * 0.6;
        const duration = 10 + (i % 6) * 3;
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary"
            style={{ left: `${left}%`, top: "100%", boxShadow: "0 0 8px #38BDF8" }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: "-110vh", opacity: [0, 1, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}
