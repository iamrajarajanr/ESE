import { useEffect, useState } from "react";

/** Mouse-tracking cyan glow. Disabled on touch devices. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="fixed pointer-events-none -z-[5] h-[400px] w-[400px] rounded-full"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          "radial-gradient(circle, rgba(56,189,248,0.18), rgba(34,211,238,0.05) 40%, transparent 70%)",
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
}
