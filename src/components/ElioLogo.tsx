import React from 'react';

interface ElioLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  height?: number;
}

export const ElioLogo: React.FC<ElioLogoProps> = ({
  className = 'h-8 md:h-10',
  theme = 'dark',
}) => {
  const fillColor = theme === 'light' ? '#FFFFFF' : '#161513';

  return (
    <div className={`inline-flex items-center select-none ${className}`} aria-label="ELIO">
      <svg
        viewBox="0 0 520 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        style={{ maxHeight: '100%' }}
      >
        <g fill={fillColor}>
          {/* Letter Є: High-contrast Didone capital with tapered median spur, heavy top beak, and delicate hairline upward-sweeping tail */}
          <path
            d="
              M 148 46
              C 138 31 114 24 84 24
              C 44 24 16 52 16 85
              C 16 118 44 146 84 146
              C 118 146 148 128 156 96
              C 150 123 120 143.5 84 143.5
              C 58 143.5 39 122 39 92
              C 47 92 57 89 74 88
              C 88 88 98 87 105 93
              L 105 77
              C 98 83 88 82 74 82
              C 57 81 47 78 39 78
              C 39 48 58 26.5 84 26.5
              C 108 26.5 128 34 136 44
              C 138 47 139 52 139 60
              L 148 46
              Z
            "
          />

          {/* Letter L: Classical Didone L with bold vertical stem, bracketed top serif, ultra-thin hairline horizontal base, and sharp upturned terminal */}
          <path
            d="
              M 178 28
              L 214 28
              L 214 30
              C 214 34 214 139.8 214 139.8
              L 266 139.8
              C 268 139.8 270 135 271 123
              L 272 142
              L 178 142
              L 178 139
              C 186 138 194 134 194 125
              L 194 45
              C 194 36 186 32 178 31
              Z
            "
          />

          {/* Letter I: Classical Didone column with bold central stem and bilateral bracketed serifs at top and bottom */}
          <path
            d="
              M 288 28
              L 330 28
              L 330 31
              C 321 32 317 36 317 45
              L 317 125
              C 317 134 321 138 330 139
              L 330 142
              L 288 142
              L 288 139
              C 297 138 301 134 301 125
              L 301 45
              C 301 36 297 32 288 31
              Z
            "
          />

          {/* Letter O: Classical Didone O with extreme contrast — bold vertical flanks and ultra-fine hairline top and bottom */}
          <path
            fillRule="evenodd"
            d="
              M 420 24
              C 459 24 490 51.3 490 85
              C 490 118.7 459 146 420 146
              C 381 146 350 118.7 350 85
              C 350 51.3 381 24 420 24
              Z
              M 420 26.2
              C 446.5 26.2 468 52.5 468 85
              C 468 117.5 446.5 143.8 420 143.8
              C 393.5 143.8 372 117.5 372 85
              C 372 52.5 393.5 26.2 420 26.2
              Z
            "
          />
        </g>
      </svg>
    </div>
  );
};
