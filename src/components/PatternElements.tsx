import React from 'react';

/**
 * Savanna Lines SVG pattern
 * Used in banners and footers for a subtle African aesthetic.
 */
export const SavannaPattern: React.FC<{ opacity?: number }> = ({ opacity = 0.05 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity }}
    aria-hidden="true"
  >
    <defs>
      <pattern id="savanna" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* Horizontal lines */}
        <line x1="0" y1="10" x2="40" y2="10" stroke="#FFBF00" strokeWidth="1" />
        <line x1="0" y1="30" x2="40" y2="30" stroke="#FFBF00" strokeWidth="0.5" />
        {/* Diagonal accent */}
        <line x1="0" y1="0" x2="20" y2="20" stroke="#fff" strokeWidth="0.5" />
        <line x1="20" y1="20" x2="40" y2="0" stroke="#fff" strokeWidth="0.5" />
        {/* Dot grid */}
        <circle cx="20" cy="20" r="1.5" fill="#FFBF00" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#savanna)" />
  </svg>
);

/**
 * Kente Geo SVG pattern
 * Used in balance cards and premium UI sections.
 */
export const KentePattern: React.FC<{ opacity?: number }> = ({ opacity = 0.05 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="0 0 60 60"
    aria-hidden="true"
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ opacity }}
  >
    <defs>
      <pattern id="kente" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="none" />
        <rect x="0"  y="0"  width="10" height="10" fill="#FFBF00" />
        <rect x="10" y="10" width="10" height="10" fill="#FFBF00" />
        <rect x="0"  y="10" width="5"  height="5"  fill="#ffffff" />
        <rect x="5"  y="0"  width="5"  height="5"  fill="#ffffff" />
        <rect x="15" y="0"  width="5"  height="5"  fill="#ffffff" />
        <rect x="10" y="5"  width="5"  height="5"  fill="#ffffff" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kente)" />
  </svg>
);
