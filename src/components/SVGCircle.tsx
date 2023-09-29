import { greyscaleBase, secondaryBase } from "./styled/variables";

interface ISVGCircleProps {
  title: string;
  value: string;
  text: string;
}

export const SVGCircle = ({ title, value, text }: ISVGCircleProps) => {
  return (
    <>
      <div style={{ width: "180px", margin: 0, padding: 0 }}>
        <h4>{title}</h4>
        <svg width="180" height="180">
          <g transform="rotate(-190 100 100)">
            <circle
              r="65"
              cx="109"
              cy="109"
              fill="transparent"
              stroke={greyscaleBase}
              strokeWidth="2rem"
              strokeDasharray="439.8"
              strokeDashoffset="0"
            ></circle>
            <circle
              r="65"
              cx="109"
              cy="109"
              fill="transparent"
              stroke={secondaryBase}
              strokeWidth="2rem"
              strokeDasharray="500"
              strokeDashoffset={value}
            ></circle>
          </g>
          <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
            {text}
          </text>
        </svg>
      </div>
    </>
  );
};
