import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { BootScreen } from "@/components/portfolio/BootScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Dashboard } from "@/components/portfolio/Dashboard";
import { About } from "@/components/portfolio/About";
import { Orbit } from "@/components/portfolio/Orbit";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Awards } from "@/components/portfolio/Awards";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { PcbBackground, Particles } from "@/components/portfolio/PcbBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajarajan R — Embedded Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rajarajan R, an Embedded Systems Engineer building firmware, IoT systems, and hardware-software integrated products with STM32, ESP32, FreeRTOS, and modern web tech.",
      },
      { property: "og:title", content: "Rajarajan R — Embedded Systems Engineer" },
      {
        property: "og:description",
        content:
          "Firmware, microcontrollers, IoT, and hardware-software integration. Explore projects, skills, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <AnimatePresence>
        {booting && <BootScreen onDone={() => setBooting(false)} />}
      </AnimatePresence>

      <PcbBackground />
      <Particles />
      <CursorGlow />

      <div className={booting ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        <Navbar />
        <main>
          <Hero />
          <Dashboard />
          <About />
          <Orbit />
          <Experience />
          <Skills />
          <Projects />
          <GitHubStats />
          <Awards />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
