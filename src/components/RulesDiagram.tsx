import HandIcon from "./HandIcon";
import { capitalize, rulesFor, type Choice } from "../game/rules";

// Circle order where each move beats the next one (and, with five, the one three ahead).
const ORDER_3: Choice[] = ["rock", "scissors", "paper"];
const ORDER_5: Choice[] = ["scissors", "paper", "rock", "lizard", "spock"];

const W = 340;
const H = 300;
const CX = W / 2;
const CY = H / 2 + 4;
const R = 96;
const NODE = 26;

export default function RulesDiagram({ choices }: { choices: string[] }) {
  const order = choices.length > 3 ? ORDER_5 : ORDER_3;
  const pos = Object.fromEntries(
    order.map((c, i) => {
      const a = (i / order.length) * Math.PI * 2 - Math.PI / 2;
      return [c, { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), ux: Math.cos(a), uy: Math.sin(a) }];
    })
  ) as Record<Choice, { x: number; y: number; ux: number; uy: number }>;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[340px]" role="img" aria-label="Which move beats which">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      {rulesFor(choices).map(([w, , l]) => {
        const a = pos[w], b = pos[l];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        const ux = dx / d, uy = dy / d;
        const gap = NODE + 6;
        return (
          <line
            key={`${w}-${l}`}
            x1={a.x + ux * gap} y1={a.y + uy * gap}
            x2={b.x - ux * gap} y2={b.y - uy * gap}
            stroke="#94a3b8" strokeOpacity={0.55} strokeWidth={1.6}
            markerEnd="url(#arrow)"
          />
        );
      })}
      {order.map((c) => (
        <g key={c}>
          <circle cx={pos[c].x} cy={pos[c].y} r={NODE} fill="#1b1b2c" stroke="#ffffff" strokeOpacity={0.12} />
          <foreignObject x={pos[c].x - 19} y={pos[c].y - 19} width={38} height={38}>
            <HandIcon choice={c} className="h-full w-full" />
          </foreignObject>
          <text
            x={pos[c].x + pos[c].ux * (NODE + 8)}
            y={pos[c].y + pos[c].uy * (NODE + 12)}
            textAnchor={Math.abs(pos[c].ux) < 0.3 ? "middle" : pos[c].ux > 0 ? "start" : "end"}
            dominantBaseline="middle" fontSize={10} fontWeight={600} fill="#ffffff" fillOpacity={0.55}>
            {capitalize(c)}
          </text>
        </g>
      ))}
    </svg>
  );
}
