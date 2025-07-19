"use client"

export function HeroSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9433E8" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ec4899" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#BF2BA2" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9433E8" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#BF2BA2" />
        </linearGradient>

        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>

        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="400" height="300" fill="url(#bgGradient)" />

      {/* Floating particles */}
      <circle cx="50" cy="50" r="3" fill="#9433E8" opacity="0.3">
        <animate attributeName="cy" values="50;30;50" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="350" cy="80" r="2" fill="#ec4899" opacity="0.4">
        <animate attributeName="cy" values="80;60;80" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="250" r="2.5" fill="#BF2BA2" opacity="0.3">
        <animate attributeName="cy" values="250;230;250" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Main device mockup - Desktop */}
      <g transform="translate(50, 40)">
        {/* Desktop screen */}
        <rect x="0" y="0" width="300" height="180" rx="12" fill="url(#screenGradient)" filter="url(#shadow)" />

        {/* Screen bezel */}
        <rect x="8" y="8" width="284" height="164" rx="8" fill="#1e293b" />

        {/* Browser bar */}
        <rect x="12" y="12" width="276" height="24" rx="4" fill="#374151" />

        {/* Browser dots */}
        <circle cx="24" cy="24" r="3" fill="#ef4444" />
        <circle cx="36" cy="24" r="3" fill="#f59e0b" />
        <circle cx="48" cy="24" r="3" fill="#10b981" />

        {/* URL bar */}
        <rect x="70" y="18" width="120" height="12" rx="6" fill="#4b5563" />
        <text x="75" y="27" fontSize="8" fill="#9ca3af">
          alberow.com
        </text>

        {/* Code content */}
        <g transform="translate(20, 45)">
          {/* Code lines */}
          <rect x="0" y="0" width="60" height="4" rx="2" fill="url(#primaryGradient)">
            <animate attributeName="width" values="60;80;60" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="12" width="45" height="4" rx="2" fill="#ec4899" />
          <rect x="0" y="24" width="70" height="4" rx="2" fill="#BF2BA2" />
          <rect x="0" y="36" width="55" height="4" rx="2" fill="#9433E8" />

          {/* Code symbols */}
          <text x="90" y="8" fontSize="12" fill="#9433E8" fontFamily="monospace">
            &lt;/&gt;
          </text>
          <text x="90" y="24" fontSize="12" fill="#ec4899" fontFamily="monospace">
            {}
          </text>
          <text x="90" y="40" fontSize="12" fill="#BF2BA2" fontFamily="monospace">
            []
          </text>
        </g>

        {/* Desktop stand */}
        <rect x="140" y="180" width="20" height="15" rx="2" fill="#6b7280" />
        <rect x="120" y="195" width="60" height="8" rx="4" fill="#6b7280" />
      </g>

      {/* Mobile device */}
      <g transform="translate(320, 120)">
        <rect x="0" y="0" width="50" height="90" rx="8" fill="url(#screenGradient)" filter="url(#shadow)" />
        <rect x="4" y="8" width="42" height="74" rx="4" fill="#1e293b" />

        {/* Mobile screen content */}
        <rect x="8" y="12" width="34" height="3" rx="1.5" fill="url(#primaryGradient)" />
        <rect x="8" y="20" width="25" height="3" rx="1.5" fill="#ec4899" />
        <rect x="8" y="28" width="30" height="3" rx="1.5" fill="#BF2BA2" />

        {/* Home indicator */}
        <rect x="20" y="85" width="10" height="2" rx="1" fill="#6b7280" />
      </g>

      {/* Tablet device */}
      <g transform="translate(280, 200)">
        <rect x="0" y="0" width="80" height="60" rx="6" fill="url(#screenGradient)" filter="url(#shadow)" />
        <rect x="4" y="4" width="72" height="52" rx="3" fill="#1e293b" />

        {/* Tablet content */}
        <rect x="8" y="8" width="50" height="3" rx="1.5" fill="url(#primaryGradient)" />
        <rect x="8" y="16" width="35" height="3" rx="1.5" fill="#ec4899" />
        <rect x="8" y="24" width="45" height="3" rx="1.5" fill="#BF2BA2" />
      </g>

      {/* Floating icons */}
      <g transform="translate(30, 150)">
        {/* Code icon */}
        <circle cx="0" cy="0" r="15" fill="url(#primaryGradient)" opacity="0.2">
          <animate attributeName="cy" values="0;-10;0" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="-6" y="4" fontSize="12" fill="#9433E8" fontFamily="monospace">
          &lt;/&gt;
        </text>
      </g>

      <g transform="translate(360, 180)">
        {/* Globe icon */}
        <circle cx="0" cy="0" r="12" fill="#ec4899" opacity="0.2">
          <animate attributeName="cy" values="0;-8;0" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="0" cy="0" r="8" stroke="#ec4899" strokeWidth="1.5" fill="none" />
        <path d="M-8,0 Q0,-8 8,0 Q0,8 -8,0" stroke="#ec4899" strokeWidth="1" fill="none" />
      </g>

      {/* Connecting lines */}
      <path
        d="M200,150 Q250,120 320,140"
        stroke="url(#primaryGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeDasharray="5,5"
      >
        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}
