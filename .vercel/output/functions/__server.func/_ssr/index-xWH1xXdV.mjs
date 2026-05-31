import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as FaDownload, q as FaPaperPlane, F as FaArrowDown, k as FaGithub, n as FaLinkedin, D as SiStmicroelectronics, z as SiEspressif, S as SiArduino, x as SiC, y as SiCplusplus, C as SiPython, s as FaRocket, t as FaSatelliteDish, f as FaCode, p as FaMicrochip, b as FaBookOpen, v as FaTools, l as FaGlobe, j as FaExternalLinkAlt, g as FaCodeBranch, u as FaStar, w as FaUsers, d as FaChevronLeft, e as FaChevronRight, c as FaCertificate, i as FaEnvelope, r as FaPhone, o as FaMapMarkerAlt, m as FaInstagram, B as SiLeetcode, A as SiHackerrank, a as FaArrowUp } from "../_libs/react-icons.mjs";
import { A as AnimatePresence, m as motion, u as useInView } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const STEPS = [
  "Initializing Firmware...",
  "Loading Embedded Modules...",
  "Establishing I2C / SPI / UART Bus...",
  "Booting RTOS Kernel...",
  "Starting System...",
  "System Ready."
];
function BootScreen({ onDone }) {
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timers = [];
    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 380 * (i + 1)));
    });
    timers.push(setTimeout(onDone, 380 * STEPS.length + 500));
    return () => timers.forEach(clearTimeout);
  }, [onDone]);
  const progress = step / STEPS.length * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[100] bg-background flex items-center justify-center px-6",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-12 w-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-md gradient-border glow-cyan-strong" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center font-mono text-primary", children: "</>" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-gradient tracking-wider", children: "RAJARAJAN.R" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground", children: "EMBEDDED // BOOT SEQUENCE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg p-6 font-mono text-sm space-y-2", children: [
          STEPS.slice(0, step).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "[OK]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: s })
          ] }, i)),
          step < STEPS.length && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "[..]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: STEPS[step] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary animate-blink", children: "█" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "h-full bg-gradient-to-r from-primary to-accent",
                animate: { width: `${progress}%` },
                transition: { duration: 0.3 }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0x00" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                progress.toFixed(0),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0xFF" })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
const profileImg = "/assets/profile-Dc_c_j90.jpg";
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass-strong border-b border-border" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => go("home"),
              className: "flex items-center gap-2 font-display font-bold tracking-wider",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-9 w-9 items-center justify-center rounded-md gradient-border glow-cyan", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary text-sm", children: "</>" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient hidden sm:block", children: "RAJARAJAN.R" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => go(n.id),
              className: "px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group",
              children: [
                n.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" })
              ]
            },
            n.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden sm:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-1 rounded-full bg-primary/40 blur animate-pulse-glow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: profileImg,
                  alt: "Rajarajan R",
                  className: "relative h-10 w-10 rounded-full object-cover ring-2 ring-primary/60"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-background" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((o) => !o),
                className: "lg:hidden h-10 w-10 grid place-items-center rounded-md glass",
                "aria-label": "Toggle menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-primary transition ${open ? "translate-y-1.5 rotate-45" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-primary transition ${open ? "opacity-0" : ""}` }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-px w-5 bg-primary transition ${open ? "-translate-y-1.5 -rotate-45" : ""}` })
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "lg:hidden overflow-hidden glass-strong border-t border-border",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 grid grid-cols-2 gap-2", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => go(n.id),
                className: "text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-primary/10",
                children: n.label
              },
              n.id
            )) })
          }
        ) })
      ]
    }
  );
}
const ROLES = [
  "Embedded Systems Engineer",
  "Firmware Developer",
  "IoT Engineer",
  "Electronics Engineer"
];
function useTyping() {
  const [text, setText] = reactExports.useState("");
  const [idx, setIdx] = reactExports.useState(0);
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
function Hero() {
  const typed = useTyping();
  const orbitIcons = [SiStmicroelectronics, SiEspressif, SiArduino, SiC, SiCplusplus, SiPython];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "home", className: "relative min-h-screen pt-32 pb-20 px-6 md:px-10 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 font-mono text-xs text-primary mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" }),
            "AVAILABLE FOR EMBEDDED ROLES"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight", children: [
            "Hi, I'm ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Rajarajan R" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-xl md:text-2xl text-primary h-8", children: [
            "> ",
            typed,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-blink", children: "█" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed", children: "Passionate Embedded Systems Engineer with expertise in firmware development, microcontrollers, IoT systems, and hardware-software integration. Dedicated to creating reliable, innovative embedded products that bridge silicon and software." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/resume.pdf",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium glow-cyan hover:glow-cyan-strong transition-all hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaDownload, { className: "group-hover:animate-bounce" }),
                  " Download CV"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => scrollTo("contact"),
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-md gradient-border text-foreground hover:text-primary transition-all hover:-translate-y-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaPaperPlane, {}),
                  " Hire Me"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => scrollTo("projects"),
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-md text-muted-foreground hover:text-primary transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowDown, {}),
                  " View Projects"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-5 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, { size: 22 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { size: 22 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs", children: "SCROLL ↓" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.85 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, delay: 0.2 },
        className: "relative mx-auto aspect-square w-full max-w-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full border border-primary/30 animate-spin-slower" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-6 rounded-full border border-dashed border-accent/40 animate-spin-reverse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-12 rounded-full border border-primary/20 animate-spin-slow" }),
          [0, 90, 180, 270].map((deg) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 rounded-full bg-primary glow-cyan",
              style: { transform: `rotate(${deg}deg) translateY(-50%) translateY(-${0}px)` }
            },
            deg
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-12 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full overflow-hidden ring-2 ring-primary/60 glow-cyan-strong", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImg, alt: "Rajarajan R", className: "h-full w-full object-cover" }) }),
          orbitIcons.map((Icon, i) => {
            const angle = i / orbitIcons.length * Math.PI * 2;
            const r = 48;
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute h-12 w-12 -ml-6 -mt-6 grid place-items-center rounded-lg glass text-primary",
                style: { left: `${x}%`, top: `${y}%` },
                animate: { y: [0, -8, 0] },
                transition: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 22 })
              },
              i
            );
          })
        ]
      }
    )
  ] }) });
}
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: `relative py-24 px-6 md:px-10 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    (eyebrow || title) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "text-center mb-16",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
            eyebrow,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" })
          ] }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl mx-auto", children: subtitle })
        ]
      }
    ),
    children
  ] }) });
}
const WIDGETS = [
  { icon: FaRocket, label: "Current Focus", value: "Embedded Systems & IoT", color: "from-cyan-400 to-blue-500" },
  { icon: FaSatelliteDish, label: "Latest Project", value: "Smart Sensor Monitoring System", color: "from-blue-400 to-indigo-500" },
  { icon: FaCode, label: "Primary Languages", value: "C  ·  C++  ·  Python", color: "from-cyan-400 to-teal-500" },
  { icon: FaMicrochip, label: "Hardware Platforms", value: "STM32  ·  ESP32  ·  Arduino", color: "from-sky-400 to-cyan-500" },
  { icon: FaBookOpen, label: "Currently Learning", value: "FreeRTOS  ·  CAN Protocol", color: "from-indigo-400 to-cyan-400" }
];
function Dashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "dashboard",
      eyebrow: "// engineering_dashboard.live",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "System ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Telemetry" })
      ] }),
      subtitle: "A real-time snapshot of what I'm building, learning, and shipping.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: WIDGETS.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          className: "relative gradient-border rounded-xl p-6 group hover:-translate-y-1 transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br ${w.color} text-background`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 font-mono text-[10px] text-emerald-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" }),
                "LIVE"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-wider text-muted-foreground", children: w.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg text-foreground", children: w.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-end gap-1 h-6", children: [...Array(20)].map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "flex-1 bg-primary/40 rounded-sm",
                style: {
                  height: `${30 + (i * 7 + j * 13) % 70}%`,
                  opacity: 0.4 + j % 5 * 0.12
                }
              },
              j
            )) })
          ]
        },
        w.label
      )) })
    }
  );
}
const STATS$1 = [
  { label: "Projects Completed", value: 32 },
  { label: "Certifications", value: 14 },
  { label: "Internships", value: 4 },
  { label: "Technologies Used", value: 25 }
];
function Counter({ to }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    "+"
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "about",
      eyebrow: "// about.me",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Engineer" }),
        " Behind The Code"
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "relative mx-auto w-full max-w-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl overflow-hidden gradient-border glow-cyan", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profileImg, alt: "Rajarajan portrait", className: "w-full aspect-[4/5] object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-primary", children: "// ENGINEER_STATUS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/90", children: "Designing the unseen layer of intelligent hardware." })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 leading-relaxed", children: "I'm an Embedded Systems Engineer specialising in low-level firmware, real-time control systems, and IoT device design. My work lives at the intersection of silicon and software — bringing up custom PCBs, writing memory-safe C/C++ for resource-constrained MCUs, and integrating sensors, radios, and motors into reliable products." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "With a background in Electronics & Communication Engineering and hands-on exposure to STM32, ESP32, ARM Cortex-M, FreeRTOS, and industrial communication protocols (UART, SPI, I²C, CAN, Modbus), I build solutions for automotive, industrial automation, and consumer IoT. My long-term goal is to contribute to next-generation semiconductor and edge-AI platforms." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4", children: STATS$1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-mono uppercase text-muted-foreground", children: s.label })
              ] }, s.label)) })
            ]
          }
        )
      ] })
    }
  );
}
const TECHS = [
  "STM32",
  "ESP32",
  "Arduino",
  "Embedded C",
  "C++",
  "Python",
  "React",
  "Node.js",
  "MongoDB",
  "IoT",
  "RTOS",
  "PCB"
];
function Orbit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "orbit",
      eyebrow: "// tech_orbit",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Tools in ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Constant Rotation" })
      ] }),
      subtitle: "The stack I use to design, build, and ship embedded products.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto aspect-square w-full max-w-2xl", children: [
        [100, 75, 50].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute rounded-full border border-dashed border-primary/20",
            style: { inset: `${(100 - p) / 2}%` }
          },
          p
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-28 w-28 grid place-items-center rounded-2xl gradient-border glow-cyan-strong", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaMicrochip, { className: "text-primary", size: 48 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-2xl border border-primary/30 animate-spin-slow" })
        ] }) }),
        [0, 1].map((ring) => {
          const items = TECHS.slice(ring * 6, ring * 6 + 6);
          const radius = ring === 0 ? 36 : 48;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute inset-0 ${ring === 0 ? "animate-spin-slow" : "animate-spin-reverse"}`,
              style: { animationDuration: ring === 0 ? "30s" : "45s" },
              children: items.map((t, i) => {
                const angle = i / items.length * Math.PI * 2;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -translate-x-1/2 -translate-y-1/2",
                    style: { left: `${x}%`, top: `${y}%` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `glass px-3 py-1.5 rounded-full font-mono text-xs text-primary border border-primary/30 ${ring === 0 ? "animate-spin-reverse" : "animate-spin-slow"}`,
                        style: { animationDuration: ring === 0 ? "30s" : "45s" },
                        children: t
                      }
                    )
                  },
                  t
                );
              })
            },
            ring
          );
        })
      ] })
    }
  );
}
const ITEMS = [
  {
    when: "Jan 2024 — Present",
    company: "NovaSilicon Labs",
    role: "Embedded Firmware Engineer",
    desc: "Leading firmware development for STM32-based industrial sensor nodes. Built FreeRTOS-driven CAN/Modbus gateways now deployed in 200+ field units.",
    tech: ["STM32", "FreeRTOS", "CAN", "Modbus", "C"]
  },
  {
    when: "Jun 2023 — Dec 2023",
    company: "EdgeCore IoT",
    role: "IoT Engineer (Intern)",
    desc: "Built ESP32 telemetry firmware streaming MQTT to a React/Node dashboard. Designed low-power sleep cycles extending battery life by 4×.",
    tech: ["ESP32", "MQTT", "React", "Node.js"]
  },
  {
    when: "Jan 2023 — May 2023",
    company: "Microtech Robotics",
    role: "Embedded Intern",
    desc: "Wrote BLDC motor control firmware on ARM Cortex-M4. Designed 4-layer PCBs in KiCad and brought up new hardware revisions.",
    tech: ["ARM Cortex-M4", "KiCad", "PCB", "C++"]
  },
  {
    when: "2022",
    company: "University R&D",
    role: "Research Assistant",
    desc: "Prototyped a smart agriculture sensor mesh using LoRa + ESP32. Co-authored a paper on low-power IoT topologies.",
    tech: ["LoRa", "ESP32", "Python"]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "experience",
      eyebrow: "// career.timeline",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Professional ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Trajectory" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: ITEMS.map((item, i) => {
          const isRight = i % 2 === 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6 },
              className: `relative grid md:grid-cols-2 gap-6 ${isRight ? "" : "md:[direction:rtl]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary glow-cyan ring-4 ring-background" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pl-12 md:pl-0 ${isRight ? "md:pr-12 md:text-right" : "md:pl-12 md:[direction:ltr]"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-primary", children: item.when }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl mt-1", children: item.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: item.company })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pl-12 md:pl-0 ${isRight ? "md:pl-12" : "md:pr-12 md:text-right md:[direction:ltr]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 text-sm leading-relaxed", children: item.desc }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: item.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20", children: t }, t)) })
                ] }) })
              ]
            },
            i
          );
        }) })
      ] })
    }
  );
}
const GROUPS = [
  {
    icon: FaMicrochip,
    title: "Embedded Systems",
    items: [
      ["Embedded C", 95],
      ["RTOS / FreeRTOS", 85],
      ["STM32", 92],
      ["ESP32", 90],
      ["Arduino", 95],
      ["UART / SPI / I²C", 92],
      ["CAN", 80],
      ["Modbus", 78]
    ]
  },
  {
    icon: FaTools,
    title: "Hardware",
    items: [
      ["PCB Design (KiCad)", 85],
      ["Circuit Design", 88],
      ["Sensors", 90],
      ["Power Electronics", 75],
      ["Testing / Validation", 82],
      ["Debugging (JTAG/SWD)", 87]
    ]
  },
  {
    icon: FaCode,
    title: "Programming",
    items: [["C", 95], ["C++", 88], ["Python", 85], ["JavaScript / TS", 80]]
  },
  {
    icon: FaGlobe,
    title: "Web & Cloud",
    items: [["React", 82], ["Node.js", 78], ["MongoDB", 72], ["Express", 75]]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "skills",
      eyebrow: "// skill.matrix",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Engineering ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Capabilities" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: GROUPS.map((g, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: idx * 0.08 },
          className: "gradient-border rounded-xl p-6 hover:glow-cyan transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", children: g.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: g.items.map(([name, pct]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-mono mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                  pct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${pct}%` },
                  viewport: { once: true },
                  transition: { duration: 1.2, ease: "easeOut" },
                  className: "h-full bg-gradient-to-r from-primary to-accent"
                }
              ) })
            ] }, name)) })
          ]
        },
        g.title
      )) })
    }
  );
}
const iot = "/assets/project-iot-BQLLeCeL.jpg";
const stm32 = "/assets/project-stm32-CYAxAu-u.jpg";
const esp32 = "/assets/project-esp32-DWI4F2JZ.jpg";
const can = "/assets/project-can-DHsWQK38.jpg";
const drone = "/assets/project-drone-CBCWOdYk.jpg";
const sensor = "/assets/project-sensor-CiT51eSx.jpg";
const PROJECTS = [
  {
    img: iot,
    name: "PCB-AI Trace Analyzer",
    desc: "Computer-vision tool that inspects PCB photos for trace breaks and solder defects using a Python+OpenCV pipeline.",
    tags: ["Python", "OpenCV", "PCB"],
    repo: "https://github.com"
  },
  {
    img: stm32,
    name: "STM32 RTOS Motor Controller",
    desc: "FreeRTOS firmware driving a 3-phase BLDC with closed-loop FOC, deterministic ISR-driven SVPWM at 20 kHz.",
    tags: ["STM32", "FreeRTOS", "C", "FOC"],
    repo: "https://github.com"
  },
  {
    img: esp32,
    name: "ESP32 Smart Home Hub",
    desc: "MQTT-based hub managing 20+ devices over Wi-Fi & BLE, with OTA firmware updates and a React dashboard.",
    tags: ["ESP32", "MQTT", "React", "OTA"],
    repo: "https://github.com"
  },
  {
    img: can,
    name: "Automotive CAN Gateway",
    desc: "Dual-CAN gateway translating between vehicle and diagnostic networks, hardened with watchdog & CRC validation.",
    tags: ["CAN", "STM32", "Embedded C"],
    repo: "https://github.com"
  },
  {
    img: drone,
    name: "Quad Flight Controller",
    desc: "Custom 4-layer PCB & ARM firmware running PID stabilisation with IMU sensor fusion and PPM/SBUS input.",
    tags: ["ARM", "PID", "KiCad", "Sensors"],
    repo: "https://github.com"
  },
  {
    img: sensor,
    name: "Industrial Sensor Mesh",
    desc: "LoRa-based mesh of low-power nodes streaming Modbus data to an InfluxDB+Grafana monitoring stack.",
    tags: ["LoRa", "Modbus", "Python", "IoT"],
    repo: "https://github.com"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "projects",
      eyebrow: "// projects.git",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Things I've ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Built" })
      ] }),
      subtitle: "A selection of embedded, hardware, and full-stack engineering projects.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.a,
        {
          href: p.repo,
          target: "_blank",
          rel: "noopener noreferrer",
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, delay: i * 0.05 },
          className: "group relative gradient-border rounded-xl overflow-hidden hover:-translate-y-1 hover:glow-cyan-strong transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.img,
                  alt: p.name,
                  loading: "lazy",
                  className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-lg glass-strong text-primary opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaExternalLinkAlt, { size: 12 }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg group-hover:text-primary transition", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20", children: t }, t)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-sm text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, {}),
                " View on GitHub"
              ] })
            ] })
          ]
        },
        p.name
      )) })
    }
  );
}
const STATS = [
  { icon: FaGithub, label: "Contributions", value: "1,284" },
  { icon: FaCodeBranch, label: "Repositories", value: "42" },
  { icon: FaStar, label: "Stars Earned", value: "318" },
  { icon: FaUsers, label: "Followers", value: "210" }
];
const LANGS = [
  { name: "C", pct: 38, color: "#38BDF8" },
  { name: "C++", pct: 22, color: "#22D3EE" },
  { name: "Python", pct: 18, color: "#67E8F9" },
  { name: "JavaScript", pct: 14, color: "#0EA5E9" },
  { name: "Other", pct: 8, color: "#475569" }
];
const REPOS = [
  { name: "stm32-rtos-motor", desc: "FOC BLDC motor controller on FreeRTOS", lang: "C", stars: 84 },
  { name: "esp32-iot-hub", desc: "MQTT + BLE smart-home hub", lang: "C++", stars: 67 },
  { name: "pcb-trace-ai", desc: "Computer-vision PCB defect detector", lang: "Python", stars: 53 }
];
function GitHubStats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Section,
    {
      id: "github",
      eyebrow: "// github.analytics",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Open Source ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Footprint" })
      ] }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10", children: STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.06 },
            className: "gradient-border rounded-xl p-5 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mx-auto text-primary mb-2", size: 22 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-gradient", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono text-muted-foreground uppercase tracking-wide mt-1", children: s.label })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg", children: "Contribution Activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-emerald-400", children: "last 12 months" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1", children: Array.from({ length: 26 * 7 }).map((_, i) => {
              const intensity = (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 0.5 + 0.5;
              const lvl = Math.floor(intensity * 4);
              const colors = ["#1A2238", "#0F4F6E", "#0EA5E9", "#38BDF8", "#67E8F9"];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "aspect-square rounded-sm",
                  style: { background: colors[lvl] }
                },
                i
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg mb-4", children: "Top Languages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-mono mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: l.color }, children: [
                  l.pct,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${l.pct}%` },
                  viewport: { once: true },
                  transition: { duration: 1 },
                  className: "h-full rounded-full",
                  style: { background: l.color, boxShadow: `0 0 12px ${l.color}` }
                }
              ) })
            ] }, l.name)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5 mt-6", children: REPOS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "gradient-border rounded-xl p-5 hover:glow-cyan transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FaCodeBranch, { size: 14 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm group-hover:underline", children: r.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: r.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-4 text-xs font-mono text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
                  r.lang
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaStar, {}),
                  " ",
                  r.stars
                ] })
              ] })
            ]
          },
          r.name
        )) })
      ]
    }
  );
}
const AWARDS = [
  { icon: "🏆", title: "Best Outgoing Student", desc: "Awarded by the Department of ECE for academic and leadership excellence." },
  { icon: "🏅", title: "Best Student of Department", desc: "Recognised for top performance and project contributions during the academic year." },
  { icon: "📋", title: "NBA Student Coordinator", desc: "Led documentation efforts for departmental NBA accreditation." },
  { icon: "🤝", title: "NSS Captain", desc: "Headed 50+ volunteers in community-driven initiatives and rural-electrification camps." },
  { icon: "🎤", title: "Motivational Speaker", desc: "Delivered keynotes on engineering, embedded careers, and student leadership." }
];
function Awards() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % AWARDS.length), 5e3);
    return () => clearInterval(t);
  }, []);
  const a = AWARDS[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "awards",
      eyebrow: "// achievements.log",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Awards & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Activities" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -40 },
            transition: { duration: 0.5 },
            className: "absolute inset-0 gradient-border rounded-2xl p-10 text-center flex flex-col items-center justify-center glow-cyan",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: a.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-gradient", children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl", children: a.desc })
            ]
          },
          i
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setI((x) => (x - 1 + AWARDS.length) % AWARDS.length),
            className: "absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full glass text-primary hover:bg-primary hover:text-primary-foreground transition",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaChevronLeft, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setI((x) => (x + 1) % AWARDS.length),
            className: "absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center rounded-full glass text-primary hover:bg-primary hover:text-primary-foreground transition",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaChevronRight, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center gap-2", children: AWARDS.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setI(k),
            className: `h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"}`,
            "aria-label": `Slide ${k + 1}`
          },
          k
        )) })
      ] })
    }
  );
}
const CERTS = [
  { name: "Embedded Systems Specialisation", org: "Coursera · UC Boulder", date: "Mar 2024" },
  { name: "ARM Cortex-M Programming", org: "ARM Education", date: "Jan 2024" },
  { name: "ESP-IDF Professional", org: "Espressif Systems", date: "Oct 2023" },
  { name: "STM32 Bare-Metal Programming", org: "Udemy", date: "Aug 2023" },
  { name: "Introduction to FreeRTOS", org: "FreeRTOS.org", date: "Jun 2023" },
  { name: "IoT with AWS", org: "AWS Training", date: "Apr 2023" }
];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "certifications",
      eyebrow: "// credentials.signed",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Certifications & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Training" })
      ] }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: CERTS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          className: "gradient-border rounded-xl p-5 hover:-translate-y-1 hover:glow-cyan transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaCertificate, {}) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: c.date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base mt-4", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: c.org }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline",
                children: [
                  "View Certificate ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaExternalLinkAlt, { size: 10 })
                ]
              }
            )
          ]
        },
        c.name
      )) })
    }
  );
}
const INFO = [
  { icon: FaEnvelope, label: "Email", value: "rajarajan@example.com", href: "mailto:rajarajan@example.com" },
  { icon: FaPhone, label: "Phone", value: "+91 98000 00000", href: "tel:+919800000000" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Chennai, India", href: "#" }
];
const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com" },
  { icon: FaGlobe, label: "Portfolio", href: "#" },
  { icon: FaEnvelope, label: "Email", href: "mailto:rajarajan@example.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com" },
  { icon: SiHackerrank, label: "HackerRank", href: "https://hackerrank.com" }
];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Section,
    {
      id: "contact",
      eyebrow: "// open.serial_port",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Let's ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Connect" })
      ] }),
      subtitle: "Have an embedded project, role, or idea? My inbox is always open.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 font-mono text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "STATUS:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: "AVAILABLE FOR NEW PROJECTS" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: INFO.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, className: "flex items-center gap-4 group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-mono uppercase text-muted-foreground", children: c.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: c.value })
                  ] })
                ] }, c.label)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border rounded-xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground uppercase mb-3", children: "// social.network" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: SOCIALS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: s.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": s.label,
                    className: "aspect-square grid place-items-center rounded-lg glass text-muted-foreground hover:text-primary hover:glow-cyan transition",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 18 })
                  },
                  s.label
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            onSubmit: submit,
            initial: { opacity: 0, x: 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "gradient-border rounded-xl p-6 space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "you@domain.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject", placeholder: "Project, role, or hello" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-mono uppercase text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 6,
                    maxLength: 1e3,
                    placeholder: "Tell me about your project...",
                    className: "mt-1 w-full rounded-md bg-muted/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none p-3 text-foreground placeholder:text-muted-foreground/60 resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  className: "inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium glow-cyan hover:glow-cyan-strong transition hover:-translate-y-0.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(FaPaperPlane, {}),
                    " ",
                    sent ? "Message Sent" : "Send Message"
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function Field({ label, name, type = "text", placeholder }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-xs font-mono uppercase text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: name,
        name,
        type,
        required: true,
        maxLength: 255,
        placeholder,
        className: "mt-1 w-full rounded-md bg-muted/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none p-3 text-foreground placeholder:text-muted-foreground/60"
      }
    )
  ] });
}
const LINKS = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Awards", "awards"],
  ["Contact", "contact"]
];
function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-border mt-12 pt-12 pb-8 px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 grid place-items-center rounded-md gradient-border glow-cyan font-mono text-primary text-sm", children: "</>" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "RAJARAJAN.R" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs", children: "Embedded Systems Engineer designing the intelligent edge — from silicon to cloud." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase text-primary mb-3", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: LINKS.map(([label, id]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => go(id),
            className: "text-left text-sm text-muted-foreground hover:text-primary transition",
            children: label
          },
          id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase text-primary mb-3", children: "Follow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [FaLinkedin, FaGithub, FaEnvelope, FaInstagram].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "social",
            className: "h-10 w-10 grid place-items-center rounded-lg glass text-muted-foreground hover:text-primary hover:glow-cyan transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {})
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Rajarajan R. All Rights Reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Designed & Developed with React.js · Framer Motion · Tailwind" })
    ] })
  ] });
}
function BackToTop() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      initial: { opacity: 0, scale: 0.6, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.6, y: 20 },
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      "aria-label": "Back to top",
      className: "fixed bottom-6 right-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-primary text-primary-foreground glow-cyan-strong hover:scale-110 transition",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowUp, {})
    }
  ) });
}
function PcbBackground() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 pointer-events-none -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pcb-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        className: "absolute inset-0 w-full h-full opacity-30",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "traceGrad", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#38BDF8", stopOpacity: "0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#38BDF8", stopOpacity: "0.8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#22D3EE", stopOpacity: "0" })
          ] }) }),
          [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.path,
            {
              d: `M ${100 + i * 200} 0 L ${100 + i * 200} ${200 + i * 60} L ${400 + i * 180} ${200 + i * 60} L ${400 + i * 180} ${600 + i * 40}`,
              stroke: "url(#traceGrad)",
              strokeWidth: "1.5",
              fill: "none",
              strokeDasharray: "6 8",
              initial: { strokeDashoffset: 200 },
              animate: { strokeDashoffset: 0 },
              transition: { duration: 6, repeat: Infinity, ease: "linear", delay: i * 0.4 }
            },
            i
          )),
          [...Array(20)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: i * 137 % 1600,
              cy: i * 211 % 900,
              r: "2",
              fill: "#22D3EE",
              opacity: "0.5"
            },
            `node-${i}`
          ))
        ]
      }
    )
  ] });
}
function Particles() {
  const dots = Array.from({ length: 30 }, (_, i) => i);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 pointer-events-none -z-10 overflow-hidden", children: dots.map((i) => {
    const left = i * 53 % 100;
    const delay = i % 10 * 0.6;
    const duration = 10 + i % 6 * 3;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "absolute h-1 w-1 rounded-full bg-primary",
        style: { left: `${left}%`, top: "100%", boxShadow: "0 0 8px #38BDF8" },
        initial: { y: 0, opacity: 0 },
        animate: { y: "-110vh", opacity: [0, 1, 0] },
        transition: { duration, delay, repeat: Infinity, ease: "linear" }
      },
      i
    );
  }) });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": true,
      className: "fixed pointer-events-none -z-[5] h-[400px] w-[400px] rounded-full",
      style: {
        left: pos.x - 200,
        top: pos.y - 200,
        background: "radial-gradient(circle, rgba(56,189,248,0.18), rgba(34,211,238,0.05) 40%, transparent 70%)",
        transition: "left 0.15s ease-out, top 0.15s ease-out"
      }
    }
  );
}
function Portfolio() {
  const [booting, setBooting] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: booting && /* @__PURE__ */ jsxRuntimeExports.jsx(BootScreen, { onDone: () => setBooting(false) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PcbBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: booting ? "opacity-0" : "opacity-100 transition-opacity duration-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Orbit, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubStats, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Awards, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BackToTop, {})
    ] })
  ] });
}
export {
  Portfolio as component
};
