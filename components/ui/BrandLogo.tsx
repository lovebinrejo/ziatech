/**
 * SVG brand mark representations for each supported brand.
 * These use each brand's distinctive geometric identity and official colours.
 */

interface BrandLogoProps {
  brand: string;
  size?: number;
}

export function BrandLogo({ brand, size = 40 }: BrandLogoProps) {
  const s = size;

  switch (brand) {
    /* ── Mercedes-Benz: three-pointed star in circle ── */
    case "Mercedes-Benz":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Mercedes-Benz">
          <circle cx="20" cy="20" r="19" fill="#1a1a2e" stroke="#00ADEF" strokeWidth="1.5"/>
          <circle cx="20" cy="20" r="14" fill="none" stroke="#C0C0C0" strokeWidth="1"/>
          {/* Three-pointed star */}
          <path d="M20 6 L20 20 L9.3 27.5" stroke="#C0C0C0" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M20 6 L20 20 L30.7 27.5" stroke="#C0C0C0" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M9.3 27.5 L20 20 L30.7 27.5" stroke="#C0C0C0" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="20" cy="6" r="1.5" fill="#C0C0C0"/>
          <circle cx="9.3" cy="27.5" r="1.5" fill="#C0C0C0"/>
          <circle cx="30.7" cy="27.5" r="1.5" fill="#C0C0C0"/>
        </svg>
      );

    /* ── Volvo: circle with diagonal arrow ── */
    case "Volvo":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Volvo">
          <rect width="40" height="40" rx="8" fill="#003057"/>
          <circle cx="18" cy="22" r="10" stroke="#fff" strokeWidth="2.2" fill="none"/>
          <path d="M25 15 L33 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M28 7 L33 7 L33 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    /* ── Scania: wordmark style ── */
    case "Scania":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Scania">
          <rect width="40" height="40" rx="8" fill="#041E42"/>
          {/* Griffin head simplified */}
          <ellipse cx="20" cy="14" rx="7" ry="5" fill="none" stroke="#f0c040" strokeWidth="1.5"/>
          <path d="M13 14 Q10 20 13 26 Q20 30 27 26 Q30 20 27 14" fill="none" stroke="#f0c040" strokeWidth="1.5"/>
          {/* Crown dots */}
          <circle cx="16" cy="10" r="1.5" fill="#f0c040"/>
          <circle cx="20" cy="9" r="1.5" fill="#f0c040"/>
          <circle cx="24" cy="10" r="1.5" fill="#f0c040"/>
          <text x="20" y="35" textAnchor="middle" fontSize="7" fontWeight="900" fill="#f0c040" fontFamily="Arial">SCANIA</text>
        </svg>
      );

    /* ── Renault: diamond/rhombus ── */
    case "Renault":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Renault">
          <rect width="40" height="40" rx="8" fill="#1a1a1a"/>
          <polygon points="20,4 30,20 20,36 10,20" fill="none" stroke="#EFDF00" strokeWidth="2.5"/>
          <polygon points="20,10 26,20 20,30 14,20" fill="#EFDF00"/>
        </svg>
      );

    /* ── MAN: bold letters ── */
    case "MAN":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="MAN">
          <rect width="40" height="40" rx="8" fill="#E3001B"/>
          <text x="20" y="27" textAnchor="middle" fontSize="17" fontWeight="900" fill="#fff" fontFamily="Arial Black,Arial">MAN</text>
        </svg>
      );

    /* ── Hino: stylised H ── */
    case "Hino":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Hino">
          <rect width="40" height="40" rx="8" fill="#CC0000"/>
          <rect x="10" y="10" width="4" height="20" rx="1.5" fill="#fff"/>
          <rect x="18" y="17" width="4" height="6" rx="1" fill="#fff"/>
          <rect x="26" y="10" width="4" height="20" rx="1.5" fill="#fff"/>
          <text x="20" y="37" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fff" fontFamily="Arial">HINO</text>
        </svg>
      );

    /* ── Hyundai: slanted H ── */
    case "Hyundai":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Hyundai">
          <rect width="40" height="40" rx="8" fill="#002C5F"/>
          <ellipse cx="20" cy="20" rx="16" ry="11" fill="none" stroke="#fff" strokeWidth="1.5"/>
          {/* Slanted H */}
          <path d="M13 26 L15 14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M25 26 L27 14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M14.3 21 L25.7 19" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );

    /* ── JCB: bold text ── */
    case "JCB":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="JCB">
          <rect width="40" height="40" rx="8" fill="#F5A800"/>
          <text x="20" y="28" textAnchor="middle" fontSize="17" fontWeight="900" fill="#1a1a1a" fontFamily="Arial Black,Arial">JCB</text>
        </svg>
      );

    /* ── Caterpillar: CAT in triangle ── */
    case "Caterpillar":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Caterpillar">
          <rect width="40" height="40" rx="8" fill="#1a1a1a"/>
          <polygon points="20,5 37,34 3,34" fill="none" stroke="#FFCD11" strokeWidth="2"/>
          <text x="20" y="29" textAnchor="middle" fontSize="11" fontWeight="900" fill="#FFCD11" fontFamily="Arial Black,Arial">CAT</text>
        </svg>
      );

    /* ── Iveco: wordmark ── */
    case "Iveco":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Iveco">
          <rect width="40" height="40" rx="8" fill="#CC0000"/>
          <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="900" fill="#fff" fontFamily="Arial Black,Arial">IVECO</text>
          <rect x="8" y="27" width="24" height="2" rx="1" fill="#fff" opacity="0.5"/>
        </svg>
      );

    /* ── TecDoc: book/catalogue icon ── */
    case "TecDoc":
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="TecDoc">
          <rect width="40" height="40" rx="8" fill="#0078D4"/>
          {/* Book shape */}
          <rect x="9" y="10" width="22" height="22" rx="2" fill="none" stroke="#fff" strokeWidth="1.8"/>
          <line x1="20" y1="10" x2="20" y2="32" stroke="#fff" strokeWidth="1.5"/>
          <line x1="12" y1="15" x2="18" y2="15" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="19" x2="18" y2="19" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="12" y1="23" x2="18" y2="23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
          <text x="20" y="37" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fff" fontFamily="Arial">TecDoc</text>
        </svg>
      );

    default:
      return (
        <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#1e3a8a"/>
          <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff" fontFamily="Arial">
            {brand.slice(0, 2).toUpperCase()}
          </text>
        </svg>
      );
  }
}
