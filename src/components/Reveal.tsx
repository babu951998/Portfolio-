"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function RevealInner({ children, delay = 0, className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function Reveal(props: RevealProps) {
  return (
    <LazyMotion features={domAnimation}>
      <RevealInner {...props} />
    </LazyMotion>
  );
}
