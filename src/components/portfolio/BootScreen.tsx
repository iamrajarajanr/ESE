import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BootScreenProps { onDone: () => void }

const STEPS = [
  "Initializing Firmware...",
  "Loading Embedded Modules...",
  "Establishing I2C / SPI / UART Bus...",
  "Booting RTOS Kernel...",
  "Starting System...",
  "System Ready.",
];

export function BootScreen({ onDone }: BootScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 380 * (i + 1)));
    });
    timers.push(setTimeout(onDone, 380 * STEPS.length + 500));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  const progress = (step / STEPS.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center px-6"
    >
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-md gradient-border glow-cyan-strong" />
            <div className="absolute inset-0 grid place-items-center font-mono text-primary">
              {"</>"}
            </div>
          </div>
          <div>
            <div className="font-display text-xl text-gradient tracking-wider">RAJARAJAN.R</div>
            <div className="font-mono text-xs text-muted-foreground">EMBEDDED // BOOT SEQUENCE</div>
          </div>
        </div>

        <div className="glass rounded-lg p-6 font-mono text-sm space-y-2">
          {STEPS.slice(0, step).map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-emerald-400">[OK]</span>
              <span className="text-foreground/80">{s}</span>
            </div>
          ))}
          {step < STEPS.length && (
            <div className="flex items-center gap-3">
              <span className="text-primary">[..]</span>
              <span>{STEPS[step]}</span>
              <span className="text-primary animate-blink">█</span>
            </div>
          )}
          <div className="mt-6">
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>0x00</span>
              <span>{progress.toFixed(0)}%</span>
              <span>0xFF</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
