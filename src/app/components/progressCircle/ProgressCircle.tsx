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
}

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

interface propsCircle {
  colour?: string;
  pct?: number;
}
const Circle = ({ colour, pct = 0 }: propsCircle) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      className={styles.circle}
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.5rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage = 0 }: progressCircle) => {
  return (
    <text
      className={`${sans.className} ${styles.text}`}
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"2em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const ProgressCircle = ({ percentage = 0, colour }: progressCircle) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200} className={styles.svgProgress}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="white" />
        <Circle colour={colour} pct={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

export default ProgressCircle;
