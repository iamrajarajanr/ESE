import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

import profileImg from "@/assets/profile.jpg";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-strong border-b border-border" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 font-display font-bold tracking-wider"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md gradient-border glow-cyan">
            <span className="font-mono text-primary text-sm">{"</>"}</span>
          </span>
          <span className="text-gradient hidden sm:block">RAJARAJAN.R</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {n.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <span className="absolute -inset-1 rounded-full bg-primary/40 blur animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Rajarajan R"
              className="relative h-10 w-10 rounded-full object-cover ring-2 ring-primary/60"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-background" />
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-md glass"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`h-px w-5 bg-primary transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-primary transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-primary transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-border"
          >
            <div className="px-6 py-4 grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
