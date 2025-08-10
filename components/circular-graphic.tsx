import React from 'react';

export default function CircularGraphic() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Outer rings */}
      <div className="absolute inset-0 rounded-full border border-gray-800" />
      <div className="absolute inset-4 rounded-full border border-gray-700" />
      <div className="absolute inset-8 rounded-full border border-gray-600" />

      {/* Text along a full‑circle path */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 320 320" style={{
        transformBox: 'fill-box',        // use the SVG’s internal box
        transformOrigin: 'center center',// pivot at its center
        transform: 'rotate(250deg)',      // rotate 60°
      }} >

          <defs>
            {/* Start the path at 12 o’clock and make a full 360° loop */}
              <path
                d="M160,40 A120,120 0 1,1 159.99,40"
                fill="none"
                id="circle-path"
              />
          </defs>

          <text
            textAnchor="start"              /* anchor text at its start point */
            dominantBaseline="middle"       /* vertically center on the path */
            className="fill-purple-400 text-sm font-medium tracking-[0.2em]"
          >
            <textPath
              href="#circle-path"
              xlinkHref="#circle-path"       /* React compatibility */
              startOffset="0%"               /* begin exactly at 12 o’clock */
              method="align"                 /* keep your tracking intact */
            >
              CONTRIBUTE • CELEBRATE • CONNECT • SECRETE
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center heart */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 text-purple-500">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 
                 115.656 5.656L10 17.657l-6.828-6.829a4 
                 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
