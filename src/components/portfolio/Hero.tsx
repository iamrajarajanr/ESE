import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaPaperPlane, FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiC, SiCplusplus, SiPython, SiArduino, SiEspressif, SiStmicroelectronics } from "react-icons/si";
import profileImg from "@/assets/profile.jpg";

const ROLES = [
  "Embedded Systems Engineer",
  "Firmware Developer",
  "IoT Engineer",
  "Electronics Engineer",
];

function useTyping() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const typed = useTyping();
  const orbitIcons = [SiStmicroelectronics, SiEspressif, SiArduino, SiC, SiCplusplus, SiPython];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 md:px-10 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 font-mono text-xs text-primary mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            AVAILABLE FOR EMBEDDED ROLES
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Rajarajan R</span>
          </h1>

          <div className="mt-4 font-mono text-xl md:text-2xl text-primary h-8">
            {"> "}{typed}
            <span className="animate-blink">█</span>
          </div>

          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Passionate Embedded Systems Engineer with expertise in firmware
            development, microcontrollers, IoT systems, and hardware-software
            integration. Dedicated to creating reliable, innovative embedded
            products that bridge silicon and software.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium glow-cyan hover:glow-cyan-strong transition-all hover:-translate-y-0.5"
            >
              <FaDownload className="group-hover:animate-bounce" /> Download CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md gradient-border text-foreground hover:text-primary transition-all hover:-translate-y-0.5"
            >
              <FaPaperPlane /> Hire Me
            </button>
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-muted-foreground hover:text-primary transition-all"
            >
              <FaArrowDown /> View Projects
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaGithub size={22} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition"><FaLinkedin size={22} /></a>
            <div className="h-px flex-1 bg-border" />
            <div className="font-mono text-xs">SCROLL ↓</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Rotating circuit rings */}
          <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slower" />
          <div className="absolute inset-6 rounded-full border border-dashed border-accent/40 animate-spin-reverse" />
          <div className="absolute inset-12 rounded-full border border-primary/20 animate-spin-slow" />

          {/* corner nodes */}
          {[0, 90, 180, 270].map((deg) => (
            <span
              key={deg}
              className="absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 rounded-full bg-primary glow-cyan"
              style={{ transform: `rotate(${deg}deg) translateY(-50%) translateY(-${0}px)` }}
            />
          ))}

          {/* glow ring */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />

          {/* Profile image */}
          <div className="absolute inset-16 rounded-full overflow-hidden ring-2 ring-primary/60 glow-cyan-strong">
            <img src={profileImg} alt="Rajarajan R" className="h-full w-full object-cover" />
          </div>

          {/* Floating tech icons around */}
          {orbitIcons.map((Icon, i) => {
            const angle = (i / orbitIcons.length) * Math.PI * 2;
            const r = 48; // %
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            return (
              <motion.div
                key={i}
                className="absolute h-12 w-12 -ml-6 -mt-6 grid place-items-center rounded-lg glass text-primary"
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={22} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
