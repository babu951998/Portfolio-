"use client";

import { useEffect, useState } from "react";

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

function buildPath(values: number[], width: number, height: number): string {
  const min = Math.min(...values) - 1;
  const max = Math.max(...values) + 1;
  const range = max - min || 1;
  const stepX = width / Math.max(values.length - 1, 1);

  return values
    .map((v, idx) => {
      const x = (idx * stepX).toFixed(1);
      const y = (height - ((v - min) / range) * (height - 8) - 4).toFixed(1);
      return `${idx === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
}

export function TelemetryStream() {
  const [points, setPoints] = useState<TelemetryPoint[]>(INITIAL_POINTS);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

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
  const width = 320;
  const height = 76;
  const flowPath = buildPath(
    points.map((p) => p.flow),
    width,
    height
  );

  return (
    <aside
      aria-label="Simulated KarIoT 1-second MQTT telemetry stream"
      className="border border-line bg-surface/60 p-4 sm:p-5"
    >
      <div className="mb-3 flex items-center justify-between gap-4 border-b border-line pb-2.5">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span className="font-mono text-[11px] tracking-wider text-ink uppercase">
            MQTT → Socket.io Stream
          </span>
        </div>
        <span className="font-mono text-[11px] text-ink-muted">
          1 Hz · 5,000+ nodes
        </span>
      </div>

      <div className="my-2 overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-18 w-full"
          role="img"
          aria-label="Live sensor flow rate waveform"
        >
          <line
            x1="0"
            y1={height / 2}
            x2={width}
            y2={height / 2}
            stroke="var(--border-hairline)"
            strokeDasharray="3 3"
          />
          <path
            d={flowPath}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.75"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <dl className="mt-3 grid grid-cols-3 gap-3 border-t border-line pt-3 font-mono text-xs">
        <div>
          <dt className="text-[10px] tracking-wider text-ink-muted uppercase">
            Flow
          </dt>
          <dd className="mt-0.5 text-ink">{latest.flow} L/s</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-wider text-ink-muted uppercase">
            Pressure
          </dt>
          <dd className="mt-0.5 text-ink">{latest.pressure} bar</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-wider text-ink-muted uppercase">
            Tank Level
          </dt>
          <dd className="mt-0.5 text-ink">{latest.level}%</dd>
        </div>
      </dl>

      <p className="mt-3 font-mono text-[10px] text-ink-muted">
        kariot/site-104/pump-02 · seq #{1040 + tick} (illustrative telemetry)
      </p>
    </aside>
  );
}
