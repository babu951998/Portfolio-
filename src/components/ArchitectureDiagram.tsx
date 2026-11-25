import type { CaseStudy } from "@/data/site";

interface ArchitectureDiagramProps {
  architecture: CaseStudy["architecture"];
  title: string;
}

export function ArchitectureDiagram({
  architecture,
  title,
}: ArchitectureDiagramProps) {
  const nodes = architecture.nodes;
  const nodeWidth = nodes.length <= 4 ? 210 : 176;
  const nodeHeight = 104;
  const gap = nodes.length <= 4 ? 42 : 30;
  const paddingX = 16;
  const paddingY = 20;
  const totalWidth =
    paddingX * 2 + nodes.length * nodeWidth + (nodes.length - 1) * gap;
  const totalHeight = nodeHeight + paddingY * 2;

  return (
    <figure className="border border-line bg-surface/50 p-4 sm:p-6">
      <div className="overflow-x-auto pb-2">
        <svg
          viewBox={`0 0 ${totalWidth} ${totalHeight}`}
          className="h-auto w-full min-w-[700px]"
          role="img"
          aria-label={`${title} system architecture diagram`}
        >
          <defs>
            <marker
              id="arch-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path
                d="M0,0.5 L6.5,3.5 L0,6.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.2"
              />
            </marker>
          </defs>

          {nodes.map((node, index) => {
            const x = paddingX + index * (nodeWidth + gap);
            const y = paddingY;
            const nextX = x + nodeWidth + gap;
            const midY = y + nodeHeight / 2;

            return (
              <g key={node.id}>
                <rect
                  x={x}
                  y={y}
                  width={nodeWidth}
                  height={nodeHeight}
                  fill="var(--bg-primary)"
                  stroke="var(--border-hairline)"
                  strokeWidth="1"
                />
                <rect
                  x={x}
                  y={y}
                  width={nodeWidth}
                  height="3"
                  fill={
                    index === 0 || index === nodes.length - 1
                      ? "var(--accent)"
                      : "var(--text-muted)"
                  }
                />
                <foreignObject
                  x={x + 14}
                  y={y + 14}
                  width={nodeWidth - 28}
                  height={nodeHeight - 22}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.25",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      {node.label}
                    </div>
                    <div
                      style={{
                        fontSize: "11.5px",
                        lineHeight: "1.35",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-jakarta), sans-serif",
                      }}
                    >
                      {node.detail}
                    </div>
                  </div>
                </foreignObject>

                {index < nodes.length - 1 && (
                  <line
                    x1={x + nodeWidth + 2}
                    y1={midY}
                    x2={nextX - 4}
                    y2={midY}
                    stroke="var(--accent)"
                    strokeWidth="1.25"
                    markerEnd="url(#arch-arrow)"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="mt-3 border-t border-line pt-3 font-mono text-xs text-ink-muted">
        {architecture.caption}
      </figcaption>
    </figure>
  );
}
