"use client";

type CableFlowProps = {
  className?: string;
};

const SIGNAL_SPEED_MULTIPLIER = 2; // Adjust this value to speed up or slow down the signal animation

const cables = [
  {
    d: "M-240 455 C 100 455 260 440 430 455 C 720 485 930 270 1660 80",
    width: 1.35,
    opacity: 0.68,
    duration: 6.5,
    delay: 0,
  },
  {
    d: "M-240 462 C 140 462 315 470 510 475 C 770 485 980 390 1660 250",
    width: 1.15,
    opacity: 0.58,
    duration: 7.2,
    delay: -1.4,
  },
  {
    d: "M-240 470 C 150 470 320 500 520 535 C 800 585 1020 660 1660 780",
    width: 1.25,
    opacity: 0.54,
    duration: 8,
    delay: -2.8,
  },
  {
    d: "M-240 450 C 150 438 360 390 560 405 C 820 425 1080 180 1660 -30",
    width: 0.95,
    opacity: 0.42,
    duration: 8.8,
    delay: -3.5,
  },
  {
    d: "M-240 478 C 160 490 330 555 540 615 C 790 690 1080 825 1660 980",
    width: 0.95,
    opacity: 0.4,
    duration: 9.4,
    delay: -4.4,
  },
  {
    d: "M-240 460 C 160 460 380 455 600 445 C 890 430 1090 510 1660 450",
    width: 0.85,
    opacity: 0.36,
    duration: 7.6,
    delay: -2,
  },
  {
    d: "M-240 455 C 165 445 325 420 480 380 C 760 310 1010 340 1660 205",
    width: 0.8,
    opacity: 0.32,
    duration: 10,
    delay: -5.2,
  },
  {
    d: "M-240 480 C 155 488 340 520 535 570 C 820 645 1050 590 1660 655",
    width: 0.8,
    opacity: 0.32,
    duration: 10.8,
    delay: -6,
  },
  {
    d: "M-240 466 C 180 468 400 500 610 525 C 900 560 1120 545 1660 610",
    width: 0.75,
    opacity: 0.28,
    duration: 9.2,
    delay: -4.2,
  },
  {
    d: "M-240 452 C 190 450 390 430 620 370 C 910 295 1150 235 1660 120",
    width: 0.75,
    opacity: 0.28,
    duration: 10.4,
    delay: -5,
  },
  {
    d: "M-240 472 C 170 470 390 475 620 480 C 900 490 1130 405 1660 330",
    width: 0.8,
    opacity: 0.3,
    duration: 8.6,
    delay: -3.4,
  },
  {
    d: "M-240 485 C 165 500 365 570 600 650 C 890 748 1130 820 1660 900",
    width: 0.7,
    opacity: 0.25,
    duration: 11.6,
    delay: -7.2,
  },
];

function getDuration(seconds: number) {
  return `${seconds * SIGNAL_SPEED_MULTIPLIER}s`;
}

function getDelay(seconds: number) {
  return `${seconds * SIGNAL_SPEED_MULTIPLIER}s`;
}

export function CableFlow({ className = "" }: CableFlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cableBase" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#080616" stopOpacity="0" />
            <stop offset="18%" stopColor="#162E93" stopOpacity="0.42" />
            <stop offset="52%" stopColor="#2F2FE4" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#162E93" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="cableDepth" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1A1953" stopOpacity="0.08" />
            <stop offset="46%" stopColor="#162E93" stopOpacity="0.36" />
            <stop offset="100%" stopColor="#080616" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="signalGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F2FE4" stopOpacity="0" />
            <stop offset="38%" stopColor="#2F2FE4" stopOpacity="0" />
            <stop offset="47%" stopColor="#6D73FF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="53%" stopColor="#6D73FF" stopOpacity="0.85" />
            <stop offset="62%" stopColor="#2F2FE4" stopOpacity="0" />
            <stop offset="100%" stopColor="#2F2FE4" stopOpacity="0" />
          </linearGradient>

          <filter id="softCableGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="signalGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dark depth lines */}
        <g opacity="0.75">
          {cables.map((cable, index) => (
            <path
              key={`depth-${index}`}
              d={cable.d}
              stroke="url(#cableDepth)"
              strokeWidth={cable.width + 2}
              strokeOpacity="0.4"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Base cable lines */}
        <g filter="url(#softCableGlow)">
          {cables.map((cable, index) => (
            <path
              key={`base-${index}`}
              d={cable.d}
              stroke="url(#cableBase)"
              strokeWidth={cable.width}
              strokeOpacity={cable.opacity}
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* Wide glowing signal travelling left to right */}
        <g filter="url(#signalGlow)">
          {cables.slice(0, 9).map((cable, index) => (
            <path
              key={`signal-glow-${index}`}
              d={cable.d}
              stroke="url(#signalGradient)"
              strokeWidth={cable.width + 4}
              strokeLinecap="round"
              strokeDasharray="80 1220"
              strokeDashoffset="1300"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1300;-1300"
                dur={getDuration(cable.duration)}
                begin={getDelay(cable.delay)}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>

        {/* Sharp bright signal core */}
        <g>
          {cables.slice(0, 9).map((cable, index) => (
            <path
              key={`signal-core-${index}`}
              d={cable.d}
              stroke="#E6EAFF"
              strokeWidth={Math.max(cable.width + 0.4, 1.35)}
              strokeOpacity="0.92"
              strokeLinecap="round"
              strokeDasharray="28 1272"
              strokeDashoffset="1300"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1300;-1300"
                dur={getDuration(cable.duration)}
                begin={getDelay(cable.delay)}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>

        {/* Softer secondary signals */}
        <g filter="url(#softCableGlow)" opacity="0.7">
          {cables.slice(3, 12).map((cable, index) => (
            <path
              key={`secondary-signal-${index}`}
              d={cable.d}
              stroke="#2F2FE4"
              strokeWidth={cable.width + 0.8}
              strokeOpacity="0.72"
              strokeLinecap="round"
              strokeDasharray="44 1056"
              strokeDashoffset="1100"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="1100;-1100"
                dur={getDuration(cable.duration)}
                begin={getDelay(cable.delay)}
                repeatCount="indefinite"
              />
            </path>
          ))}
        </g>
      </svg>
    </div>
  );
}