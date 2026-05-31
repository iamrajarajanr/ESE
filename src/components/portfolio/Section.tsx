import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-10 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
                <span className="h-px w-8 bg-primary" />
                {eyebrow}
                <span className="h-px w-8 bg-primary" />
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
