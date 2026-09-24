import React from 'react';

interface ElioLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  height?: number;
}

export const ElioLogo: React.FC<ElioLogoProps> = ({
  className = 'h-8',
  theme = 'dark',
}) => {
  const color = theme === 'light' ? '#FFFFFF' : '#161513';

  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="ELIO">
      <svg
        viewBox="0 0 460 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        style={{ maxHeight: '100%' }}
      >
        {/* Letter E with open oval curve and horizontal tapering spike */}
        <g fill={color}>
          {/* Outer and inner curve of E */}
          <path
            d="M 125 36 C 112 25 94 18 73 18 C 34 18 8 41 8 70 C 8 99 34 122 73 122 C 95 122 113 115 125 104 C 126 103 125 101 123 100 C 121 99 119 101 117 103 C 106 113 90 119 73 119 C 37 119 13 97 13 70 C 13 43 37 21 73 21 C 90 21 106 27 117 37 C 119 39 121 40 123 39 C 125 38 126 36 125 36 Z"
          />
          {/* Needle / wedge barb in E */}
          <path
            d="M 14 69.5 L 68 64.5 L 68 75.5 Z"
          />
        </g>

        {/* Letter L */}
        <g fill={color}>
          {/* Top serif */}
          <path d="M 152 24 L 176 24 L 176 27 C 171 28 168 31 168 36 L 168 110 C 168 114 170 116 175 117 L 175 120 L 222 120 C 232 120 238 117 241 108 L 243 108 L 241 122 L 152 122 L 152 119 C 157 118 160 115 160 110 L 160 36 C 160 31 157 28 152 27 Z" />
        </g>

        {/* Letter I */}
        <g fill={color}>
          <path d="M 264 24 L 302 24 L 302 27 C 295 28 292 31 292 36 L 292 110 C 292 115 295 118 302 119 L 302 122 L 264 122 L 264 119 C 271 118 274 115 274 110 L 274 36 C 274 31 271 28 264 27 Z" />
        </g>

        {/* Letter O */}
        <g fill={color}>
          <path
            d="M 390 18 C 352 18 328 41 328 70 C 328 99 352 122 390 122 C 428 122 452 99 452 70 C 452 41 428 18 390 18 Z M 390 120 C 358 120 338 98 338 70 C 338 42 358 20 390 20 C 422 20 442 42 442 70 C 442 98 422 120 390 120 Z"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
};
