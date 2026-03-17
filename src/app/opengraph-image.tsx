import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hexallo — Discover Exclusive Travel Deals & Destinations';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a0a00 0%, #3d1f00 50%, #6b3a10 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'rgba(174, 112, 41, 0.25)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(174, 112, 41, 0.15)',
            display: 'flex',
          }}
        />

        {/* Brand name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: '#FFF6DF',
            letterSpacing: '-2px',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          Hexallo
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: '#e8c98a',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          Discover Exclusive Travel Deals &amp; Destinations
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #AE7029, #e8c98a, #AE7029)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
