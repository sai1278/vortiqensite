import React from 'react';

/**
 * Vortiqen Custom Brand Icon
 * Bespoke geometric vortex 'V' emblem designed with faceted 3D precision,
 * multi-stop lighting depth, and central quantum vortex nexus.
 */
export default function VortiqenLogo({ className = "w-5 h-5", glow = true }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Vortiqen Brand Logo"
    >
      <defs>
        {/* Lighting depth gradients */}
        <linearGradient id="vq-left-facet" x1="4" y1="4" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="vq-right-facet" x1="20" y1="4" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.75" />
        </linearGradient>

        <linearGradient id="vq-inner-chevron" x1="12" y1="4.5" x2="12" y2="15.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#67e8f9" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="vq-spark" x1="10" y1="2.5" x2="14" y2="7.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Left Aerodynamic Facet */}
      <path
        d="M4.2 4.5C3.8 4.5 3.5 4.8 3.6 5.2L11.5 21C11.7 21.4 12.3 21.4 12.5 21L12.5 15.5L7.8 4.5H4.2Z"
        fill="url(#vq-left-facet)"
      />

      {/* Right Aerodynamic Facet with Depth */}
      <path
        d="M19.8 4.5C20.2 4.5 20.5 4.8 20.4 5.2L12.5 21C12.3 21.4 11.7 21.4 11.5 21L11.5 15.5L16.2 4.5H19.8Z"
        fill="url(#vq-right-facet)"
      />

      {/* Inner Vortex Crystal Facet */}
      <path
        d="M7.8 4.5L12 15.5L16.2 4.5L12 8.2L7.8 4.5Z"
        fill="url(#vq-inner-chevron)"
      />

      {/* Floating Apex Vortex Diamond */}
      <path
        d="M12 2.2L13.8 4.8L12 7.4L10.2 4.8L12 2.2Z"
        fill="url(#vq-spark)"
      />
    </svg>
  );
}
