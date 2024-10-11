"use client";

import styles from "./progresscircle.module.css";
import { IBM_Plex_Sans } from "next/font/google";

const sans = IBM_Plex_Sans({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

interface progressCircle {
  colour?: string;
  percentage?: number;
  size: number;
  fontSize?: string;
  strokeSize?: string;
}

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

interface propsCircle {
  colour?: string;
  pct?: number;
  size: number;
  strokeSize?: string;
}
const Circle = ({ colour, pct = 0, size, strokeSize }: propsCircle) => {
  const r = size / 2 - size * 0.15;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct + 5) * circ) / 100;
  return (
    <circle
      className={styles.circle}
      r={r}
      cx={size / 2}
      cy={size / 2}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={strokeSize}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const ProgressCircle = ({
  percentage = 0,
  size,
  fontSize,
  strokeSize,
}: progressCircle) => {
  const pct = cleanPercentage(percentage);
  let colour = "";

  if (percentage <= 40) {
    colour = "#E54545";
  } else if (percentage <= 60) {
    colour = "#FF8800";
  } else {
    colour = "#4DA14F";
  }

  return (
    <svg width={size} height={size} className={styles.svgProgress}>
      <g transform={`rotate(-${size - size * 0.1} ${size / 2} ${size / 2})`}>
        <Circle size={size} colour="#21212199" strokeSize={strokeSize} />
        <Circle size={size} colour={colour} pct={pct} strokeSize={strokeSize} />
      </g>
      <text
        className={`${sans.className} ${styles.text}`}
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={fontSize}
      >
        {percentage.toFixed(0)}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
