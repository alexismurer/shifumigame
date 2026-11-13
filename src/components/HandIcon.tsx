import { useId } from "react";
import type { Choice } from "../game/rules";

const INK = "#0b0b14";
const SKIN = "#f4eee3";
const CUFF = "#2a2a40";

const line = { stroke: INK, strokeWidth: 2.2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
const skin = { fill: SKIN, ...line };
const crease = { stroke: INK, strokeWidth: 1.4, strokeLinecap: "round" as const, opacity: 0.35, fill: "none" };

// Finger centres, widths and tip heights for a front-facing right hand (palm towards the viewer).
const FINGERS = [
  { cx: 21, w: 7.4, tip: 11 },
  { cx: 28.6, w: 7.8, tip: 8 },
  { cx: 36.2, w: 7.4, tip: 10 },
  { cx: 43.2, w: 6.4, tip: 16 },
];
const BASE = 38;

type Pose = { up: [boolean, boolean, boolean, boolean]; spread: [number, number, number, number]; thumb: "out" | "across" };

const POSES: Record<Exclude<Choice, "lizard">, Pose> = {
  rock: { up: [false, false, false, false], spread: [0, 0, 0, 0], thumb: "across" },
  paper: { up: [true, true, true, true], spread: [-5, -1.5, 2, 6], thumb: "out" },
  scissors: { up: [true, true, false, false], spread: [-11, 7, 0, 0], thumb: "across" },
  spock: { up: [true, true, true, true], spread: [-9, -9, 10, 10], thumb: "out" },
};

type Paint = { fill: string; stroke?: string; strokeWidth?: number; strokeLinejoin?: "round" };

const PALM_D ="M17 31 Q17 28 20 28 H45 Q48 28 48 31 L47.5 44 Q47 53 39 55 H26 Q18 53 17.5 44 Z";
const THUMB_OUT = { x: 16, y: 27, width: 8.5, height: 24, rx: 4.25, transform: "rotate(-38 20 47)" };

function fingerRect(f: (typeof FINGERS)[number], angle: number) {
  return { x: f.cx - f.w / 2, y: f.tip, width: f.w, height: BASE - f.tip + 8, rx: f.w / 2, transform: `rotate(${angle} ${f.cx} ${BASE + 2})` };
}

function Hand({ pose }: { pose: Pose }) {
  const clip = useId();
  const extended = FINGERS.map((f, i) => (pose.up[i] ? fingerRect(f, pose.spread[i]) : null));

  // Palm, raised fingers and an outstretched thumb share one silhouette, so no seam is drawn where they join.
  const body = (paint: Paint) => (
    <>
      {pose.thumb === "out" && <rect {...THUMB_OUT} {...paint} />}
      {extended.map((r, i) => r && <rect key={i} {...r} {...paint} />)}
      <path d={PALM_D} {...paint} />
    </>
  );

  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={-20} width={64} height={49.5} />
        </clipPath>
      </defs>
      <rect x={22} y={53} width={21} height={9} rx={3} fill={CUFF} {...line} />
      {body({ fill: INK, stroke: INK, strokeWidth: 4.4, strokeLinejoin: "round" })}
      {body({ fill: SKIN })}
      <g clipPath={`url(#${clip})`}>
        {extended.map((r, i) => r && <rect key={i} {...r} fill="none" {...line} />)}
      </g>
      {FINGERS.map((f, i) => {
        if (!pose.up[i]) return null;
        const y = f.tip + (BASE - f.tip) * 0.42;
        return <path key={i} d={`M${f.cx - f.w / 4} ${y} h${f.w / 2}`} transform={`rotate(${pose.spread[i]} ${f.cx} ${BASE + 2})`} {...crease} />;
      })}
      {pose.thumb === "out" && <path d="M18.5 35 h3.5" transform={THUMB_OUT.transform} {...crease} />}
      {pose.thumb === "out" && <path d="M23 47 Q30 50 38 46" {...crease} />}

      {pose.up.map((up, i) => {
        if (up) return null;
        const cx = 21.4 + i * 7.6;
        return (
          <g key={i}>
            <rect x={cx - 3.9} y={25} width={7.8} height={15} rx={3.9} {...skin} />
            <path d={`M${cx - 1.8} 31.5 h3.6`} {...crease} />
          </g>
        );
      })}
      {pose.thumb === "across" && <rect x={14.5} y={38} width={pose.up[0] ? 29 : 25} height={9} rx={4.5} {...skin} />}
    </>
  );
}

function Lizard() {
  return (
    <g>
      <rect x={0} y={30} width={14} height={20} rx={3} fill={CUFF} {...line} />
      <path d="M14 42 Q36 43 50 45.5 Q55.5 46.5 54.5 51.5 Q53.5 56 48 55.5 Q32 54 14 52 Z" {...skin} />
      <path d="M11 32 Q12 21 25 20 H50 Q58 20 58 27 Q58 33 50 34 L28 35 Q24 36 23 41 Q22 48 14 49 Q10 48 10 42 Z" {...skin} />
      <path d="M28 27.5 H51" {...crease} />
      <circle cx={30} cy={17} r={5} {...skin} />
      <circle cx={31} cy={16.6} r={2.1} fill={INK} />
    </g>
  );
}

type Props = { choice: Choice; className?: string; title?: string };

export default function HandIcon({ choice, className, title }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title ?? choice}>
      {choice === "lizard" ? <Lizard /> : (
        <g transform="translate(0 -2)">
          <Hand pose={POSES[choice]} />
        </g>
      )}
    </svg>
  );
}
