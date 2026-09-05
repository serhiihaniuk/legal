export function AtlasIllustration() {
  return (
    <svg
      className="home-diagram"
      viewBox="0 0 480 420"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="home-diagram-grid" stroke="currentColor" strokeWidth="0.7">
        <path d="M40 60H440M40 160H440M40 260H440M40 360H440M90 30V390M190 30V390M290 30V390M390 30V390" />
        <circle cx="240" cy="210" r="156" />
        <circle cx="240" cy="210" r="109" strokeDasharray="2 6" />
      </g>
      <g
        className="home-diagram-connections"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path
          className="home-draw"
          pathLength="1"
          d="M90 106H128Q148 106 160 126L205 195"
        />
        <path
          className="home-draw home-draw-later"
          pathLength="1"
          d="M390 106H354Q334 106 320 126L277 195"
        />
        <path
          className="home-draw home-draw-later"
          pathLength="1"
          d="M90 310H134Q154 310 166 290L205 226"
        />
        <path
          className="home-draw"
          pathLength="1"
          d="M390 310H350Q330 310 316 290L277 226"
        />
      </g>
      <g className="home-diagram-pages">
        <rect
          x="187"
          y="142"
          width="124"
          height="154"
          rx="3"
          transform="rotate(10 249 219)"
        />
        <rect
          x="178"
          y="132"
          width="124"
          height="154"
          rx="3"
          transform="rotate(-6 240 209)"
        />
        <rect x="178" y="130" width="124" height="154" rx="3" />
        <path
          d="M195 150H218M195 264H285"
          stroke="currentColor"
          strokeWidth="0.7"
          opacity="0.35"
        />
        <text
          x="240"
          y="233"
          textAnchor="middle"
          className="home-diagram-section"
        >
          §
        </text>
      </g>
      <g className="home-diagram-labels" fill="currentColor">
        <text x="69" y="80">
          Факт
        </text>
        <text x="362" y="80">
          Норма
        </text>
        <text x="63" y="346">
          Доказ
        </text>
        <text x="377" y="346">
          Дія
        </text>
      </g>
      <g className="home-diagram-nodes" fill="currentColor">
        <circle cx="90" cy="106" r="4" />
        <circle cx="390" cy="106" r="4" />
        <circle cx="90" cy="310" r="4" />
        <circle cx="390" cy="310" r="4" />
      </g>
      <g className="home-diagram-grid" stroke="currentColor" strokeWidth="1">
        <path d="M234 38H246M240 32V44M234 382H246M240 376V388" />
      </g>
    </svg>
  )
}
