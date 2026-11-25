"use client";

import { useEffect, useState } from "react";
import { heroContent } from "@/data/site";

interface TelemetryPoint {
  flow: number;
  pressure: number;
  level: number;
}

const INITIAL_POINTS: TelemetryPoint[] = [
  { flow: 42.4, pressure: 3.1, level: 78 },
  { flow: 43.1, pressure: 3.2, level: 78 },
  { flow: 41.8, pressure: 3.0, level: 79 },
  { flow: 44.2, pressure: 3.3, level: 79 },
  { flow: 43.7, pressure: 3.2, level: 80 },
  { flow: 45.0, pressure: 3.4, level: 80 },
  { flow: 44.4, pressure: 3.3, level: 81 },
  { flow: 43.9, pressure: 3.1, level: 81 },
  { flow: 46.1, pressure: 3.5, level: 82 },
  { flow: 45.3, pressure: 3.4, level: 82 },
  { flow: 44.8, pressure: 3.2, level: 81 },
  { flow: 45.6, pressure: 3.3, level: 82 },
  { flow: 46.4, pressure: 3.4, level: 83 },
  { flow: 45.9, pressure: 3.3, level: 83 },
  { flow: 44.5, pressure: 3.2, level: 82 },
  { flow: 45.2, pressure: 3.3, level: 82 },
];

function buildCoordinates(
  values: number[],
  width: number,
  height: number
): { x: number; y: number }[] {
  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;
  const range = max - min || 1;
  const stepX = (width - 12) / Math.max(values.length - 1, 1);

  return values.map((v, idx) => ({
    x: Number((4 + idx * stepX).toFixed(1)),
    y: Number((height - ((v - min) / range) * (height - 16) - 8).toFixed(1)),
  }));
}

export function TelemetryStream() {
  const [points, setPoints] = useState<TelemetryPoint[]>(INITIAL_POINTS);
  const [tick, setTick] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReducedMotion(true);
      return;
    }

    const interval = setInterval(() => {
      setTick((t) => t + 1);
      setPoints((prev) => {
        const last = prev[prev.length - 1];
        const nextFlow = Number(
          Math.max(
            38,
            Math.min(49, last.flow + (Math.random() - 0.48) * 1.8)
          ).toFixed(1)
        );
        const nextPressure = Number(
          Math.max(
            2.8,
            Math.min(3.8, last.pressure + (Math.random() - 0.5) * 0.2)
          ).toFixed(1)
        );
        const nextLevel = Math.max(
          72,
          Math.min(88, Math.round(last.level + (Math.random() - 0.48) * 1.4))
        );
        return [
          ...prev.slice(1),
          { flow: nextFlow, pressure: nextPressure, level: nextLevel },
        ];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const latest = points[points.length - 1];
  const width = 340;
  const height = 140;
  const coords = buildCoordinates(
    points.map((p) => p.flow),
    width,
    height
  );
  const flowPath = coords
    .map((pt, idx) => `${idx === 0 ? "M" : "L"}${pt.x},${pt.y}`)
    .join(" ");
  const lastPoint = coords[coords.length - 1];
  const gridYPositions = [0.2, 0.4, 0.6, 0.8].map((r) =>
    Math.round(height * r)
  );

  return (
    <aside
      aria-label="Simulated 1-second MQTT telemetry stream"
      className="border border-line bg-surface/60 p-5 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span className="font-mono text-xs tracking-wider text-ink uppercase">
            {heroContent.telemetryTitle}
          </span>
        </div>
        <span className="font-mono text-xs text-ink-muted">
          {heroContent.telemetryBadge}
        </span>
      </div>

      <div className="my-3 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-36 w-full"
          role="img"
          aria-label="Live sensor flow rate waveform"
        >
          {gridYPositions.map((yPos) => (
            <line
              key={yPos}
              x1="0"
              y1={yPos}
              x2={width}
              y2={yPos}
              stroke="var(--border-hairline)"
              strokeOpacity="0.65"
              strokeDasharray="3 3"
            />
          ))}
          <path
            d={flowPath}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.75"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {!reducedMotion && (
            <circle
              cx={lastPoint.x}
              cy={lastPoint.y}
              r="6"
              fill="var(--accent)"
              fillOpacity="0.25"
              className="animate-ping"
              style={{ transformOrigin: `${lastPoint.x}px ${lastPoint.y}px` }}
            />
          )}
          <circle
            cx={lastPoint.x}
            cy={lastPoint.y}
            r="3.2"
            fill="var(--accent)"
          />
        </svg>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4 font-mono text-xs">
        <div>
          <dt className="tracking-wider text-ink-muted uppercase">Flow</dt>
          <dd className="mt-1 text-sm text-ink">{latest.flow} L/s</dd>
        </div>
        <div>
          <dt className="tracking-wider text-ink-muted uppercase">Pressure</dt>
          <dd className="mt-1 text-sm text-ink">{latest.pressure} bar</dd>
        </div>
        <div>
          <dt className="tracking-wider text-ink-muted uppercase">Level</dt>
          <dd className="mt-1 text-sm text-ink">{latest.level}%</dd>
        </div>
      </dl>

      <p className="mt-4 font-mono text-xs text-ink-muted">
        {heroContent.telemetryNote} · seq #{1040 + tick}
      </p>
    </aside>
  );
}
