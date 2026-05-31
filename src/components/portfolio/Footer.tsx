import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const LINKS = [
  ["Home", "home"], ["About", "about"], ["Projects", "projects"],
  ["Skills", "skills"], ["Awards", "awards"], ["Contact", "contact"],
] as const;

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-border mt-12 pt-12 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display text-lg">
            <span className="h-9 w-9 grid place-items-center rounded-md gradient-border glow-cyan font-mono text-primary text-sm">{"</>"}</span>
            <span className="text-gradient">RAJARAJAN.R</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Embedded Systems Engineer designing the intelligent edge — from
            silicon to cloud.
          </p>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-primary mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-2">
            {LINKS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-left text-sm text-muted-foreground hover:text-primary transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-xs uppercase text-primary mb-3">Follow</div>
          <div className="flex gap-3">
            {[FaLinkedin, FaGithub, FaEnvelope, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social"
                className="h-10 w-10 grid place-items-center rounded-lg glass text-muted-foreground hover:text-primary hover:glow-cyan transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-muted-foreground">
        <span>© 2026 Rajarajan R. All Rights Reserved.</span>
        <span>Designed & Developed with React.js · Framer Motion · Tailwind</span>
      </div>
    </footer>
  );
}
