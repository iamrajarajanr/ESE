import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "./Section";
import iot from "@/assets/project-iot.jpg";
import stm32 from "@/assets/project-stm32.jpg";
import esp32 from "@/assets/project-esp32.jpg";
import can from "@/assets/project-can.jpg";
import drone from "@/assets/project-drone.jpg";
import sensor from "@/assets/project-sensor.jpg";

const PROJECTS = [
  {
    img: iot,
    name: "PCB-AI Trace Analyzer",
    desc: "Computer-vision tool that inspects PCB photos for trace breaks and solder defects using a Python+OpenCV pipeline.",
    tags: ["Python", "OpenCV", "PCB"],
    repo: "https://github.com",
  },
  {
    img: stm32,
    name: "STM32 RTOS Motor Controller",
    desc: "FreeRTOS firmware driving a 3-phase BLDC with closed-loop FOC, deterministic ISR-driven SVPWM at 20 kHz.",
    tags: ["STM32", "FreeRTOS", "C", "FOC"],
    repo: "https://github.com",
  },
  {
    img: esp32,
    name: "ESP32 Smart Home Hub",
    desc: "MQTT-based hub managing 20+ devices over Wi-Fi & BLE, with OTA firmware updates and a React dashboard.",
    tags: ["ESP32", "MQTT", "React", "OTA"],
    repo: "https://github.com",
  },
  {
    img: can,
    name: "Automotive CAN Gateway",
    desc: "Dual-CAN gateway translating between vehicle and diagnostic networks, hardened with watchdog & CRC validation.",
    tags: ["CAN", "STM32", "Embedded C"],
    repo: "https://github.com",
  },
  {
    img: drone,
    name: "Quad Flight Controller",
    desc: "Custom 4-layer PCB & ARM firmware running PID stabilisation with IMU sensor fusion and PPM/SBUS input.",
    tags: ["ARM", "PID", "KiCad", "Sensors"],
    repo: "https://github.com",
  },
  {
    img: sensor,
    name: "Industrial Sensor Mesh",
    desc: "LoRa-based mesh of low-power nodes streaming Modbus data to an InfluxDB+Grafana monitoring stack.",
    tags: ["LoRa", "Modbus", "Python", "IoT"],
    repo: "https://github.com",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// projects.git"
      title={<>Things I've <span className="text-gradient">Built</span></>}
      subtitle="A selection of embedded, hardware, and full-stack engineering projects."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative gradient-border rounded-xl overflow-hidden hover:-translate-y-1 hover:glow-cyan-strong transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-lg glass-strong text-primary opacity-0 group-hover:opacity-100 transition">
                <FaExternalLinkAlt size={12} />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg group-hover:text-primary transition">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                <FaGithub /> View on GitHub
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
