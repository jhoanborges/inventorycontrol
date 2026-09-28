const barcode = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 1, 3, 1, 2];

const bars = [
  { x: 31, h: 14, fill: "#60a5fa" },
  { x: 42, h: 22, fill: "#3b82f6" },
  { x: 53, h: 30, fill: "#1d4ed8" },
  { x: 64, h: 40, fill: "#0b1f4b" },
];

/** Brand mark from the business card: growth bars, boxes and barcode in a blue ring. */
export function Logo({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  let x = 30;
  const stripes = barcode.map((w, i) => {
    const rect = { x, w: w * 0.9, dark: i % 2 === 0 };
    x += w * 0.9 + 0.9;
    return rect;
  });

  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className ?? ""} ${animated ? "logo-animated" : ""}`}
      role="img"
      aria-label="Inventory Control"
    >
      <defs>
        <linearGradient id="logo-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f5fe0" />
          <stop offset="0.55" stopColor="#1537a8" />
          <stop offset="1" stopColor="#0b1f4b" />
        </linearGradient>
        <clipPath id="logo-inner">
          <circle cx="60" cy="60" r="45" />
        </clipPath>
      </defs>

      <circle cx="60" cy="60" r="51" fill="#fff" />
      <circle
        cx="60"
        cy="60"
        r="51"
        fill="none"
        stroke="url(#logo-ring)"
        strokeWidth="10"
      />
      <circle
        cx="60"
        cy="60"
        r="45.5"
        fill="none"
        stroke="#0b1f4b"
        strokeOpacity=".18"
      />

      <g clipPath="url(#logo-inner)">
        {stripes.map((s) =>
          s.dark ? (
            <rect
              key={s.x}
              x={s.x}
              y="82"
              width={s.w}
              height="16"
              fill="#0b1f4b"
            />
          ) : null,
        )}
      </g>

      {bars.map((b, i) => (
        <rect
          key={b.x}
          className="logo-bar"
          style={{ animationDelay: `${0.25 + i * 0.12}s` }}
          x={b.x}
          y={80 - b.h}
          width="8"
          height={b.h}
          rx="1"
          fill={b.fill}
        />
      ))}

      <g className="logo-boxes" fill="#fff" stroke="#0b1f4b" strokeWidth="2.2">
        <rect x="70" y="64" width="17" height="15" rx="1" />
        <rect x="76" y="52" width="13" height="12" rx="1" />
        <path d="M78.5 64v4M82.5 52v3" />
      </g>

      <path
        className="logo-arrow"
        d="M27 62 Q52 56 79 33"
        pathLength={1}
        fill="none"
        stroke="#1d4ed8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        className="logo-arrowhead"
        d="M75 29 L88 25 L84 38 Z"
        fill="#1d4ed8"
      />
    </svg>
  );
}
