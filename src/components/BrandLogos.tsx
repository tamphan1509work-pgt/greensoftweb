import React from 'react';

interface PartnerLogoProps {
  id: string;
  name: string;
  className?: string;
  size?: number;
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({ id, name, className = '', size = 24 }) => {
  switch (id) {
    case 'google':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      );

    case 'microsoft':
      return (
        <svg viewBox="0 0 23 23" width={size} height={size} className={className} fill="none" aria-label={name}>
          <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
          <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
          <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
          <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M7.74 12.16c0-.58.12-1.04.37-1.38.25-.34.62-.51 1.11-.51.48 0 .85.16 1.1.48.25.32.38.77.38 1.34 0 .58-.12 1.04-.37 1.37-.25.33-.63.5-1.13.5-.48 0-.84-.16-1.09-.49-.24-.32-.37-.76-.37-1.31zm-1.8 0c0 .92.26 1.67.77 2.24.51.57 1.25.86 2.21.86.6 0 1.12-.13 1.58-.38.45-.25.79-.6 1.03-1.03v1.27h1.63V7.52h-1.63v1.27c-.24-.44-.59-.78-1.04-1.03-.45-.25-.97-.38-1.57-.38-.96 0-1.7.29-2.21.86-.51.57-.77 1.32-.77 2.24zm8.62 3.1h1.66V7.52h-1.66v7.74zM18.8 6.13c-.3 0-.55.1-.76.3-.2.21-.3.46-.3.76s.1.55.3.76c.21.2.46.3.76.3s.55-.1.75-.3c.21-.21.31-.46.31-.76s-.1-.55-.31-.76c-.2-.2-.45-.3-.75-.3zm-2.02 12.7c-4.63 2.56-10.43 1.36-14.73-1.84-.25-.19-.07-.46.22-.31 4.14 2.11 9.4 2.37 13.9.4.45-.2.82.26.61.55v1.2zm1.6-1.57c-.52-.39-2.73-1.08-3.32-.47-.21.21-.1 1.05.37 1.38 1.13.8 2.65.34 2.95-.91z" fill="#FF9900"/>
        </svg>
      );

    case 'openai':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-label={name}>
          <path d="M22.28 9.37a5.99 5.99 0 0 0-.52-4.94 6.08 6.08 0 0 0-6.47-2.9 6.03 6.03 0 0 0-4.57-2.03 6.07 6.07 0 0 0-5.8 4.22 6.03 6.03 0 0 0-4.22 3.06 6.07 6.07 0 0 0 .8 7.07 6.02 6.02 0 0 0 .52 4.94 6.08 6.08 0 0 0 6.47 2.9 6.04 6.04 0 0 0 4.58 2.03 6.07 6.07 0 0 0 5.8-4.22 6.03 6.03 0 0 0 4.22-3.06 6.07 6.07 0 0 0-.81-7.07zm-7.78 12.3a4.57 4.57 0 0 1-2.9-.84l.15-.09 4.8-2.77a.78.78 0 0 0 .39-.68v-6.79l2.03 1.17v6.33a4.6 4.6 0 0 1-4.47 3.67zm-8.86-3.86a4.58 4.58 0 0 1-.54-2.98l.15.09 4.8 2.78c.24.13.53.13.77 0l5.88-3.4v2.35l-5.48 3.16a4.6 4.6 0 0 1-5.58-2zm-1.63-9.52a4.58 4.58 0 0 1 2.36-2.14v.18l.01 5.54a.78.78 0 0 0 .39.68l5.88 3.4-2.03 1.17-5.48-3.16a4.6 4.6 0 0 1-1.13-5.67zm13.1 3.07-5.88-3.4 2.03-1.17 5.48 3.16a4.6 4.6 0 0 1 1.13 5.67 4.58 4.58 0 0 1-2.36 2.14v-.18l-.01-5.54a.78.78 0 0 0-.39-.68zm3.08-3.44l-.15-.09-4.8-2.77a.78.78 0 0 0-.77 0l-5.88 3.39V6.2l5.48-3.16a4.6 4.6 0 0 1 6.12 4.98zm-9.35 5.4-2.35-1.36 2.35-1.36 2.35 1.36-2.35 1.36z"/>
        </svg>
      );

    case 'datastax':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="#00C49F" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 7l10 5 10-5M12 12v10" stroke="#00C49F" strokeWidth="2"/>
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M12 2c-.3 0-.6.2-.7.4C10 5 7 10 7 14c0 3.3 2.2 6.1 5 6.9.1 0 .2.1.3.1.2 0 .4-.1.5-.2.1-.1.2-.2.2-.4V2.4c0-.2-.3-.4-.7-.4z" fill="#00ED64"/>
          <path d="M12 2c.3 0 .6.2.7.4C14 5 17 10 17 14c0 3.3-2.2 6.1-5 6.9-.1 0-.2.1-.3.1-.2 0-.4-.1-.5-.2-.1-.1-.2-.2-.2-.4V2.4c0-.2.3-.4.7-.4z" fill="#00684A"/>
          <path d="M12 20.9v2.1c0 .6-.5 1-1 1s-1-.4-1-1v-2.1c.3.1.7.1 1 0 .3.1.7.1 1 0z" fill="#00ED64"/>
        </svg>
      );

    case 'darktrace':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <circle cx="12" cy="12" r="9" stroke="#E50914" strokeWidth="2.2" strokeDasharray="4 2"/>
          <circle cx="12" cy="12" r="4" fill="#E50914"/>
        </svg>
      );

    case 'splunk':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M6 5l8 7-8 7" stroke="#F15B2A" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="19" r="2" fill="#F15B2A"/>
        </svg>
      );

    case 'synopsys':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M4 17l8-10 8 10M8 12h8" stroke="#682A8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'adobe':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M2.5 3h6.2L3.5 21H2.5V3zm12.8 0h6.2v18h-1l-5.2-18zm-4.7 9.8l3.4 8.2h-2.9l-1.3-3.3h-3.2l4-4.9z" fill="#FA0F00"/>
        </svg>
      );

    case 'cisco':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-label={name}>
          <rect x="2" y="11" width="2" height="6" rx="1" fill="#1BA0D7"/>
          <rect x="6" y="7" width="2" height="10" rx="1" fill="#1BA0D7"/>
          <rect x="11" y="3" width="2" height="14" rx="1" fill="#1BA0D7"/>
          <rect x="16" y="7" width="2" height="10" rx="1" fill="#1BA0D7"/>
          <rect x="20" y="11" width="2" height="6" rx="1" fill="#1BA0D7"/>
        </svg>
      );

    case 'databricks':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M12 2L2 7.5l10 5.5 10-5.5L12 2z" fill="#FF3621"/>
          <path d="M2 12l10 5.5 10-5.5" stroke="#FF3621" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M2 16.5l10 5.5 10-5.5" stroke="#FF3621" strokeWidth="2.5" strokeLinejoin="round"/>
        </svg>
      );

    case 'accenture':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <path d="M3 17l9-12 9 12" stroke="#A100FF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 13l2-2.5 2 2.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'informatica':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" aria-label={name}>
          <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="#FF5400" strokeWidth="2.2" fill="#FF5400" fillOpacity="0.15"/>
          <polygon points="12,6 18,10 18,14 12,18 6,14 6,10" fill="#FF5400"/>
        </svg>
      );

    default:
      return null;
  }
};

interface CustomerBrandProps {
  id: string;
  name: string;
  className?: string;
}

/**
 * High-fidelity vector logos precisely matching the user's provided CUSTOMERS slide:
 * - GHN: Blue & orange 3D layered parcel box + italic orange bold wordmark + subtext
 * - Trung Nguyên Legend: Dong Son sun/compass circular medallion with heart + "TRUNG NGUYÊN Legend"
 * - EXIMBANK: Navy blue heavy bold wordmark + blue/cyan circular sphere segmented icon
 * - VPBank: Red 4-petal dynamic bloom flower + green bold "VPBank"
 * - ĐẠI HỌC VĂN LANG: Red shield with stylized V crest + red uppercase bold "ĐẠI HỌC VĂN LANG"
 * - Fulbright University Việt Nam: Dark blue detailed round seal + two-line blue serif wordmark
 * - Prudential: Iconic Prudence face with flowing hair + bold red PRUDENTIAL
 * - Generali: Venetian Winged Lion of St. Mark + bold serif GENERALI
 * - Manulife: 3 green vertical pillars (middle tall) + dark MANULIFE wordmark
 * - MB Ageas: Blue MB badge + multi-colored 8-pointed star burst + ageas
 * - VNVC: Gold shield with white medical cross + blue VNVC + Vietnam Vaccine JSC
 * - LOTTE: Red rounded badge with flowing cursive 'l' + bold LOTTE
 * - CIMB: Dark red square badge with white chevron wedge + bold dark CIMB
 * - THACO: Deep blue bold geometric sans-serif THACO wordmark
 * - RMIT University: Red diamond emblem + bold RMIT + UNIVERSITY VIETNAM
 * - Yamaha: Red triple tuning forks circle emblem + italic red YAMAHA + Revs your Heart
 * - Häfele: Bold clean uppercase HÄFELE wordmark with umlaut
 * - Heineken: Red five-pointed star with circular flourishes + green HEINEKEN
 * - MSB: Triple reddish-orange circular overlapping petals + bold dark MSB
 * - Panasonic: Pure classic blue PANASONIC bold wordmark
 * - Honda: Classic red HONDA bold wordmark + "The Power of Dreams"
 * - MG: Iconic red octagonal MG badge with silver border
 * - Nestlé: Brown nest with mother bird feeding chicks + NESTLÉ wordmark
 * - FrieslandCampina: Vibrant colorful 6-petal starburst + script wordmark
 * - TH true MILK: Deep blue serif "TH" + golden 6-point star sparkle
 * - VitaDairy: Pure cyan-blue cursive "VitaDairy" with nutrition droplet
 * - TCP: Red & blue dynamic energy bulls / bold energetic "tcp"
 * - Samsung: Iconic blue tilted ellipse badge with white SAMSUNG
 * - Sabeco: Golden imperial dragon standing upright + bold red SABECO
 * - Acecook: Chef kid with pot + "Cook happiness ACECOOK" red ribbon
 */
export const CustomerBrandLogo: React.FC<CustomerBrandProps> = ({ id, name, className = '' }) => {
  switch (id) {
    // Exact 12 customer logos from user's attached slide image (2 rows of 6)
    case 'nhg':
      // NHG: Nguyen Hoang Group - Green "NH" + Green/Red split "G" + "Nguyen Hoang Group" text
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <path d="M8 11 H20 V23 H30 V11 H42 V37 H30 V27 H20 V37 H8 Z" fill="#00A651" />
          {/* Letter G top half green */}
          <path d="M46 24 C46 16.5 53 11 63 11 C72 11 77 15 79 19.5 L70 21.5 C69 19 66 17 63 17 C57.5 17 53.5 20 53.5 24 Z" fill="#00A651" />
          {/* Diagonal white dividing slant */}
          {/* Letter G bottom half red */}
          <path d="M53.5 24 C53.5 28.5 57.5 31.5 63 31.5 C67 31.5 70 29.5 71 27 H62 V22.5 H79 V32.5 C75 36 69.5 37.5 63 37.5 C52 37.5 46 31 46 24 Z" fill="#E30613" />
          <text x="83" y="24" fill="#1C1C1E" fontSize="7.5" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            Nguyen Hoang
          </text>
          <text x="83" y="34.5" fill="#1C1C1E" fontSize="8" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif">
            Group
          </text>
        </svg>
      );

    case 'gia-dinh':
      // GIA DINH UNIVERSITY: Golden wreath with navy shield + "GĐ" monogram + POPULARIS banner
      return (
        <svg viewBox="0 0 160 52" className={`w-auto h-11 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(12, 1)">
            {/* Left wreath leaves */}
            <path d="M8 22 C4 18 5 12 9 8 C10 12 9 17 12 21 Z" fill="#C5A059" />
            <path d="M5 16 C1 13 2 8 6 5 C7 9 6 13 9 16 Z" fill="#C5A059" />
            <path d="M9 10 C6 7 7 2 11 1 C11 5 10 9 12 11 Z" fill="#C5A059" />
            {/* Right wreath leaves */}
            <path d="M30 22 C34 18 33 12 29 8 C28 12 29 17 26 21 Z" fill="#C5A059" />
            <path d="M33 16 C37 13 36 8 32 5 C31 9 32 13 29 16 Z" fill="#C5A059" />
            <path d="M29 10 C32 7 31 2 27 1 C27 5 28 9 26 11 Z" fill="#C5A059" />
            {/* Navy Shield with gold border */}
            <path d="M12 4 L26 4 L26 18 C26 24 19 28 19 28 C19 28 12 24 12 18 Z" fill="#0E2A63" stroke="#C5A059" strokeWidth="1.2" />
            {/* Shield Center GD monogram */}
            <text x="19" y="16" fill="#C5A059" fontSize="6.5" fontWeight="bold" fontFamily="serif" textAnchor="middle">
              GĐ
            </text>
            {/* Blue Banner with POPULARIS */}
            <path d="M9 27 L29 27 L28 31.5 L10 31.5 Z" fill="#0E2A63" stroke="#C5A059" strokeWidth="0.6" />
            <text x="19" y="30.5" fill="#C5A059" fontSize="3.6" fontWeight="bold" letterSpacing="0.4" textAnchor="middle">
              POPULARIS
            </text>
          </g>
          {/* Typography: GIA DINH UNIVERSITY */}
          <text x="64" y="21" fill="#B88A3B" fontSize="12" fontWeight="700" fontFamily="'Georgia', serif" letterSpacing="1">
            GIA DINH
          </text>
          <text x="64" y="33" fill="#B88A3B" fontSize="8.5" fontWeight="600" fontFamily="'Georgia', serif" letterSpacing="1.2">
            UNIVERSITY
          </text>
        </svg>
      );

    case 'masterise-homes':
      // MASTERISE HOMES: Architectural bronze/gold M icon + "MASTERISE HOMES"
      return (
        <svg viewBox="0 0 160 52" className={`w-auto h-11 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(68, 3)">
            {/* Architectural M: vertical pillars & dual peaks */}
            <path d="M0 6 L4.5 6 L4.5 24 L0 24 Z" fill="#B58D59" />
            <path d="M19.5 6 L24 6 L24 24 L19.5 24 Z" fill="#B58D59" />
            <path d="M6.5 6 L12 0 L12 20 L8 24 L8 9 Z" fill="#B58D59" />
            <path d="M17.5 6 L12 0 L12 20 L16 24 L16 9 Z" fill="#B58D59" />
          </g>
          <text x="80" y="42" fill="#B58D59" fontSize="7.8" fontWeight="700" letterSpacing="1.8" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">
            MASTERISE HOMES
          </text>
        </svg>
      );

    case 'druce':
      // DRUCE: Golden rosette/pinwheel emblem + classic serif DRUCE
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(16, 12)">
            {/* Swirling Pinwheel / Rosette */}
            <circle cx="12" cy="12" r="11" stroke="#B58D59" strokeWidth="1" fill="none" />
            <path d="M12 1 C16 6 16 11 12 12 C8 11 8 6 12 1 Z" stroke="#B58D59" strokeWidth="0.9" fill="none" />
            <path d="M23 12 C18 16 13 16 12 12 C13 8 18 8 23 12 Z" stroke="#B58D59" strokeWidth="0.9" fill="none" />
            <path d="M12 23 C8 18 8 13 12 12 C16 13 16 18 12 23 Z" stroke="#B58D59" strokeWidth="0.9" fill="none" />
            <path d="M1 12 C6 8 11 8 12 12 C11 16 6 16 1 12 Z" stroke="#B58D59" strokeWidth="0.9" fill="none" />
            <circle cx="12" cy="12" r="2.5" fill="#B58D59" />
          </g>
          <text x="48" y="30" fill="#B58D59" fontSize="21" fontWeight="600" fontFamily="'Georgia', serif" letterSpacing="2">
            DRUCE
          </text>
        </svg>
      );

    case 'millennia':
      // millennia EDUCATION + Triple Shield Wings icon
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="10" y="24" fill="#0A2540" fontSize="16" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
            millennia
          </text>
          <text x="12" y="35" fill="#0A2540" fontSize="6.5" fontWeight="600" letterSpacing="1.2" fontFamily="system-ui, -apple-system, sans-serif">
            EDUCATION
          </text>
          {/* Triple forward shields */}
          <g transform="translate(112, 10)">
            <path d="M4 2 L14 8 L14 18 L4 24 L2 22 L2 4 Z" fill="#0A2540" />
            <path d="M12 2 L22 8 L22 18 L12 24 L10 22 L10 4 Z" fill="#1E40AF" />
            <path d="M20 2 L28 8 L28 18 L20 24 L18 22 L18 4 Z" fill="#2563EB" />
          </g>
        </svg>
      );

    case 'modale':
      // MODALE: Portal arch ∏ + O D A L E in warm bronze
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Stylized Arch Portal ∏ for M */}
          <g transform="translate(16, 13)">
            <rect x="0" y="0" width="18" height="3.5" fill="#A87B4B" />
            <rect x="0" y="3.5" width="3.5" height="15.5" fill="#A87B4B" />
            <rect x="14.5" y="3.5" width="3.5" height="15.5" fill="#A87B4B" />
          </g>
          {/* ODALE letters */}
          <text x="42" y="30" fill="#A87B4B" fontSize="18" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="3.5">
            ODALE
          </text>
        </svg>
      );

    case 'imes-pro':
      // IMES PRO: Cyan wave loop with dot + dark IMES + cyan PRO
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(10, 8)">
            {/* Azure / Cyan looping node symbol */}
            <circle cx="21" cy="5" r="2.5" fill="#00A0E9" />
            <path d="M8 20 C4 20 2 16 5 12 C9 7 17 8 20 13 C23 18 29 20 32 16 C34 13 32 10 28 10 C24 10 20 14 18 19" stroke="#00A0E9" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M12 11 C8 15 15 22 24 15" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
          <text x="48" y="29.5" fill="#334155" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">
            IMES
          </text>
          <text x="94" y="29.5" fill="#00A0E9" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            PRO
          </text>
        </svg>
      );

    case 'smartland':
      // Smartland: Red cursive S + red martland + yellow underline under land
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Flowing script S */}
          <g transform="translate(14, 8)">
            <path d="M18 4 C10 4 6 8 8 13 C10 18 18 20 15 26 C12 30 5 29 0 26 C3 29 10 32 16 30 C22 28 23 21 19 16 C15 11 12 8 15 6 C17 4 21 5 24 7" stroke="#D32F2F" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          </g>
          {/* martland in red sans-serif */}
          <text x="36" y="27" fill="#D32F2F" fontSize="18" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.2">
            martland
          </text>
          {/* Yellow accent underline beneath 'land' */}
          <rect x="74" y="32" width="40" height="2.5" rx="1.2" fill="#FBC02D" />
        </svg>
      );

    case 'inmatech':
      // INMATECH: Red dual chevron diamonds icon + Navy INMATECH
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(12, 13)">
            {/* Red geometric icon: two facing chevron diamonds with a diamond negative center */}
            <polygon points="12,0 24,10 12,20 0,10" fill="#EF4444" />
            <polygon points="12,4 19,10 12,16 5,10" fill="#FFF" />
            <polygon points="12,6 16,10 12,14 8,10" fill="#EF4444" />
          </g>
          {/* Navy bold INMATECH */}
          <text x="42" y="28.5" fill="#0F3460" fontSize="16.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.4">
            INMATECH
          </text>
        </svg>
      );

    case 'stormbird':
      // STORMBIRD: Dark navy rectangular badge + white flight emblem + STORMBIRD
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Dark Navy / Black Background Plate */}
          <rect x="10" y="3" width="140" height="42" rx="4" fill="#070D1E" />
          <g transform="translate(68, 6)">
            {/* Stylized sharp white bird wings in flight */}
            <path d="M0 6 L18 6 L24 2 L22 8 L8 8 Z" fill="#FFF" />
            <path d="M4 9 L20 9 L23 12 L10 12 Z" fill="#FFF" />
            <path d="M8 13 L22 13 L24 16 L14 16 Z" fill="#FFF" />
            <line x1="2" y1="18" x2="26" y2="18" stroke="#FFF" strokeWidth="0.8" />
          </g>
          <text x="80" y="36.5" fill="#FFF" fontSize="8" fontWeight="800" letterSpacing="2" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">
            STORMBIRD
          </text>
        </svg>
      );

    case 'tsp':
      // TSP: Teal "TS" + Navy "P" with camera eye iris inside P + base line
      return (
        <svg viewBox="0 0 160 50" className={`w-auto h-11 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(16, 5)">
            {/* Teal "T" and "S" */}
            <path d="M0 6 L16 6 L16 11 L10.5 11 L10.5 28 L5.5 28 L5.5 11 L0 11 Z" fill="#009688" />
            <path d="M18 20 C18 16 21 14 26 14 C31 14 34 16 34 20 L30 20 C30 18 28 17 26 17 C24 17 22 18 22 20 C22 24 34 22 34 29 C34 33 30 35 25 35 C20 35 17 33 17 28 L21 28 C21 31 23 32 25 32 C28 32 30 31 30 29 C30 25 18 27 18 20 Z" fill="#009688" />
            {/* Navy "P" with iris inside */}
            <path d="M37 5 C46 5 53 10 53 19 C53 28 46 33 37 33 L37 40 L31 40 L31 5 L37 5 Z" fill="#102A5C" />
            {/* Circular teal eye / camera iris inside the bowl of P */}
            <circle cx="43" cy="19" r="6" fill="#009688" />
            <circle cx="43" cy="19" r="2.5" fill="#102A5C" />
            {/* Navy underline under TS connecting to P stem */}
            <rect x="0" y="32" width="35" height="5" fill="#102A5C" />
            {/* Registered Trademark symbol */}
            <circle cx="56" cy="6" r="2.5" stroke="#102A5C" strokeWidth="0.6" fill="none" />
            <text x="56" y="7.5" fill="#102A5C" fontSize="2.8" fontWeight="bold" textAnchor="middle">®</text>
          </g>
        </svg>
      );

    case 'we-angels':
      // WeAngels CAPITAL: Golden-orange geometric W + navy triangle + navy WeAngels + ― CAPITAL ―
      return (
        <svg viewBox="0 0 160 52" className={`w-auto h-11 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(62, 3)">
            {/* Golden-orange W wings */}
            <path d="M0 0 L10 16 L18 16 L8 0 Z" fill="#F59E0B" />
            <path d="M36 0 L26 16 L18 16 L28 0 Z" fill="#F59E0B" />
            {/* Navy triangle inside center */}
            <polygon points="18,5 23,14 13,14" fill="#0F2042" />
          </g>
          {/* WeAngels wordmark */}
          <text x="80" y="34.5" fill="#0F2042" fontSize="16" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.3" textAnchor="middle">
            WeAngels
          </text>
          {/* ― CAPITAL ― with horizontal flanking lines */}
          <line x1="36" y1="43.5" x2="56" y2="43.5" stroke="#0F2042" strokeWidth="0.8" />
          <text x="80" y="46" fill="#0F2042" fontSize="6.5" fontWeight="700" letterSpacing="2" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">
            CAPITAL
          </text>
          <line x1="104" y1="43.5" x2="124" y2="43.5" stroke="#0F2042" strokeWidth="0.8" />
        </svg>
      );

    case 'ghn':
      // GHN: 3D blue-orange parcel box + bold orange italic GHN + GIAO HÀNG NHANH
      return (
        <svg viewBox="0 0 160 46" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(4, 5)">
            <path d="M0 15 L14 4 L22 8 L8 19 Z" fill="#00386B" />
            <path d="M22 8 L32 0 L40 5 L30 13 Z" fill="#004D95" />
            <path d="M8 19 L24 9 L34 16 L18 26 Z" fill="#FF5E00" />
            <path d="M12 21 L22 14 L24 15 L14 22 Z" fill="#FFFFFF" fillOpacity="0.35" />
            <path d="M16 24 L26 17 L28 18 L18 25 Z" fill="#FFFFFF" fillOpacity="0.35" />
            <path d="M18 26 L34 16 L40 21 L24 31 Z" fill="#D35400" />
          </g>
          <text x="50" y="27" fill="#FF5E00" fontSize="23" fontWeight="900" fontStyle="italic" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
            GHN
          </text>
          <text x="50" y="39" fill="#00386B" fontSize="6.5" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">
            GIAO HÀNG NHANH
          </text>
        </svg>
      );

    case 'trung-nguyen':
      // Trung Nguyên Legend: Dong Son sun/compass circular medallion with heart + "TRUNG NGUYÊN Legend"
      return (
        <svg viewBox="0 0 140 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 4)">
            <circle cx="20" cy="20" r="17" stroke="#111" strokeWidth="1.6" fill="#FFF" />
            <circle cx="20" cy="20" r="13" stroke="#111" strokeWidth="0.9" strokeDasharray="1.5 1.5" />
            <polygon points="20,11 22,17 28,15 24,19 29,23 23,22 23,28 20,24 17,28 17,22 11,23 16,19 12,15 18,17" fill="#111" />
            <circle cx="20" cy="20" r="3.2" fill="#FFF" stroke="#111" strokeWidth="1" />
            <path d="M20 5 C19 3 17 3 17 5 C17 7 20 8.5 20 8.5 C20 8.5 23 7 23 5 C23 3 21 3 20 5 Z" fill="#111" />
          </g>
          <text x="52" y="21" fill="#222" fontSize="7.5" fontWeight="700" letterSpacing="1" fontFamily="system-ui, sans-serif">
            TRUNG NGUYÊN
          </text>
          <text x="52" y="38" fill="#111" fontSize="16" fontWeight="700" fontFamily="'Georgia', serif" fontStyle="italic">
            Legend
          </text>
        </svg>
      );

    case 'eximbank':
      // EXIMBANK: Navy blue heavy bold wordmark + blue/cyan circular sphere segmented icon
      return (
        <svg viewBox="0 0 156 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(18, 20)">
            <circle cx="0" cy="0" r="13" fill="#005BAA" />
            <path d="M-12 -3 A 12 12 0 0 1 3 -12 L 0 0 Z" fill="#00B0F0" />
            <path d="M2 -12 A 12 12 0 0 1 12 2 L 0 0 Z" fill="#005BAA" />
            <line x1="-13" y1="0" x2="13" y2="0" stroke="#FFF" strokeWidth="1.2" />
            <line x1="0" y1="-13" x2="0" y2="13" stroke="#FFF" strokeWidth="1.2" />
          </g>
          <text x="40" y="27" fill="#005BAA" fontSize="21" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            EXIMBANK
          </text>
        </svg>
      );

    case 'vpbank':
      // VPBank: Red 4-petal bloom flower + green bold VPBank
      return (
        <svg viewBox="0 0 148 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(4, 5)">
            <path d="M12 0 C16 6 15 14 12 24 C9 14 8 6 12 0 Z" fill="#E31837" />
            <path d="M14 8 C22 11 25 18 20 25 C16 20 13 15 14 8 Z" fill="#E31837" />
            <path d="M10 8 C2 11 -1 18 4 25 C8 20 11 15 10 8 Z" fill="#E31837" />
            <path d="M12 20 C18 23 20 27 16 30 C13 28 12 24 12 20 Z" fill="#E31837" />
          </g>
          <text x="44" y="27" fill="#00A850" fontSize="24" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.5">
            VPBank
          </text>
        </svg>
      );

    case 'van-lang':
      // ĐẠI HỌC VĂN LANG: Red shield with stylized V crest + red uppercase bold "ĐẠI HỌC VĂN LANG"
      return (
        <svg viewBox="0 0 156 42" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(4, 3)">
            <path d="M0 0 H24 V20 C24 28 12 34 12 34 C12 34 0 28 0 20 Z" fill="#C4161C" />
            <path d="M5 8 L12 22 L19 8 L15 8 L12 15 L9 8 Z" fill="#FFFFFF" />
            <path d="M12 22 L7 12 L9 12 L12 18 L15 12 L17 12 Z" fill="#FFFFFF" />
          </g>
          <text x="40" y="17" fill="#C4161C" fontSize="9" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.2">
            ĐẠI HỌC
          </text>
          <text x="40" y="32" fill="#C4161C" fontSize="15" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">
            VĂN LANG
          </text>
        </svg>
      );

    case 'fulbright':
      // Fulbright University Việt Nam: Dark blue detailed round seal + two-line blue serif wordmark
      return (
        <svg viewBox="0 0 160 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 4)">
            <circle cx="20" cy="20" r="18" stroke="#143264" strokeWidth="1.8" fill="#FFF" />
            <circle cx="20" cy="20" r="14.5" stroke="#143264" strokeWidth="0.8" />
            <path d="M20 10 V28 M16 14 Q20 18 20 22 M24 14 Q20 18 20 22 M14 18 Q18 21 20 24 M26 18 Q22 21 20 24" stroke="#143264" strokeWidth="1.2" strokeLinecap="round" />
            <text x="20" y="8" fill="#143264" fontSize="3.2" fontWeight="700" textAnchor="middle">FULBRIGHT</text>
            <text x="20" y="35" fill="#143264" fontSize="3.2" fontWeight="700" textAnchor="middle">VIỆT NAM</text>
          </g>
          <text x="56" y="20" fill="#143264" fontSize="13" fontWeight="700" fontFamily="'Georgia', serif">
            Fulbright
          </text>
          <text x="56" y="32" fill="#143264" fontSize="11" fontWeight="600" fontFamily="'Georgia', serif">
            University
          </text>
          <text x="56" y="44" fill="#143264" fontSize="10.5" fontWeight="700" fontFamily="'Georgia', serif">
            Việt Nam
          </text>
        </svg>
      );

    case 'prudential':
      // Prudential: Iconic Prudence face with flowing hair + bold red PRUDENTIAL
      return (
        <svg viewBox="0 0 156 42" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(18, 21)">
            <circle cx="0" cy="0" r="14" fill="#ED1B2D" />
            <circle cx="0" cy="-4" r="4.5" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
            <path d="M-5 6 C-5 0 -2 -2 0 -2 C2 -2 5 0 5 6 Z" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
            <path d="M-8 -3 Q-10 1 -7 4 M8 -3 Q10 1 7 4" stroke="#FFFFFF" strokeWidth="1" />
          </g>
          <text x="40" y="27" fill="#ED1B2D" fontSize="17" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">
            PRUDENTIAL
          </text>
        </svg>
      );

    case 'generali':
      // Generali: Venetian Winged Lion of St. Mark + bold serif GENERALI
      return (
        <svg viewBox="0 0 150 42" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 7)">
            <rect x="0" y="0" width="28" height="28" rx="3" fill="#C8102E" />
            <path d="M5 22 H23 V20 C23 17 19 16 17 16 C17 13 14 11 12 11 C10 11 8 13 7 16 C5 17 5 19 5 22 Z" fill="#FFF" />
            <path d="M17 14 Q23 9 23 16" stroke="#FFF" strokeWidth="1.5" fill="none" />
            <circle cx="9" cy="14" r="1" fill="#C8102E" />
          </g>
          <text x="42" y="27" fill="#C8102E" fontSize="17" fontWeight="800" fontFamily="'Georgia', serif" letterSpacing="1">
            GENERALI
          </text>
        </svg>
      );

    case 'manulife':
      // Manulife: 3 green vertical pillars + dark MANULIFE wordmark
      return (
        <svg viewBox="0 0 146 42" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(8, 10)">
            <rect x="0" y="4" width="5" height="15" rx="1.5" fill="#00A758" />
            <rect x="9" y="0" width="5" height="19" rx="1.5" fill="#00A758" />
            <rect x="18" y="4" width="5" height="15" rx="1.5" fill="#00A758" />
          </g>
          <text x="40" y="28" fill="#1C1C1E" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.3">
            Manulife
          </text>
        </svg>
      );

    case 'mb-ageas':
      // MB Ageas: Blue MB badge + multi-colored 8-pointed star burst + ageas life
      return (
        <svg viewBox="0 0 152 42" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="6" y="28" fill="#00358E" fontSize="21" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">
            MB
          </text>
          <g transform="translate(48, 21)">
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#FF6A13" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-10" y1="0" x2="10" y2="0" stroke="#00A3E0" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-7" y1="-7" x2="7" y2="7" stroke="#78BE20" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="-7" y1="7" x2="7" y2="-7" stroke="#7B2A88" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="0" r="2" fill="#FFF" />
          </g>
          <text x="64" y="27" fill="#58595B" fontSize="16" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif">
            ageas
          </text>
          <text x="110" y="23" fill="#00358E" fontSize="9" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            life
          </text>
        </svg>
      );

    case 'vnvc':
      // VNVC: Gold shield with white medical cross + blue VNVC + Vietnam Vaccine JSC
      return (
        <svg viewBox="0 0 148 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 6)">
            <path d="M0 2 L14 0 L28 2 V17 C28 25 14 31 14 31 C14 31 0 25 0 17 Z" fill="#F39200" />
            <path d="M14 7 V23 M6 15 H22" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </g>
          <text x="42" y="24" fill="#005BAA" fontSize="19" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            VNVC
          </text>
          <text x="42" y="34" fill="#005BAA" fontSize="6.5" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">
            Vietnam Vaccine JSC
          </text>
        </svg>
      );

    case 'lotte':
      // LOTTE: Red rounded badge with flowing cursive 'l' + bold LOTTE
      return (
        <svg viewBox="0 0 136 42" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(18, 21)">
            <ellipse cx="0" cy="0" rx="13" ry="14" fill="#ED1C24" />
            <path d="M-2 7 Q3 7 3 -1 Q3 -7 1 -7 Q-1 -7 -1 1 Q-1 6 4 6" stroke="#FFF" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          </g>
          <text x="40" y="27" fill="#ED1C24" fontSize="19" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.2">
            LOTTE
          </text>
        </svg>
      );

    case 'cimb':
      // CIMB: Dark red square badge with white chevron wedge + bold dark CIMB
      return (
        <svg viewBox="0 0 130 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(8, 6)">
            <rect x="0" y="0" width="26" height="26" rx="2" fill="#7D0000" />
            {/* Inverted white chevron wedge */}
            <polygon points="4,22 18,4 22,4 8,22" fill="#FFF" />
          </g>
          <text x="44" y="26" fill="#1C1C1E" fontSize="21" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            CIMB
          </text>
        </svg>
      );

    case 'thaco':
      // THACO: Deep blue bold geometric sans-serif THACO wordmark
      return (
        <svg viewBox="0 0 136 38" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="68" y="27" fill="#004A99" fontSize="23" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="2">
            THACO
          </text>
        </svg>
      );

    case 'rmit':
      // RMIT University Vietnam: Red diamond emblem + bold RMIT + UNIVERSITY VIETNAM
      return (
        <svg viewBox="0 0 146 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 12)">
            <polygon points="8,0 16,8 8,16 0,8" fill="#E60028" />
          </g>
          <text x="32" y="22" fill="#001489" fontSize="18" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            RMIT
          </text>
          <text x="33" y="32" fill="#58595B" fontSize="7" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            UNIVERSITY
          </text>
          <text x="33" y="40" fill="#58595B" fontSize="6.5" fontWeight="600" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.3">
            VIETNAM
          </text>
        </svg>
      );

    case 'yamaha':
      // Yamaha: Red triple tuning forks circle emblem + italic red YAMAHA + Revs your Heart
      return (
        <svg viewBox="0 0 146 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(6, 6)">
            <circle cx="12" cy="12" r="11" stroke="#E60012" strokeWidth="1.8" fill="none" />
            {/* 3 interlocking tuning forks */}
            <line x1="12" y1="12" x2="12" y2="2" stroke="#E60012" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="4" y2="18" stroke="#E60012" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="20" y2="18" stroke="#E60012" strokeWidth="2.2" strokeLinecap="round" />
          </g>
          <text x="36" y="21" fill="#E60012" fontSize="16" fontWeight="900" fontStyle="italic" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            YAMAHA
          </text>
          <text x="37" y="32" fill="#58595B" fontSize="8" fontStyle="italic" fontWeight="600" fontFamily="'Georgia', serif">
            Revs your Heart
          </text>
        </svg>
      );

    case 'hafele':
      // Häfele: Bold clean uppercase HÄFELE wordmark with red accent/dots
      return (
        <svg viewBox="0 0 136 38" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="68" y="27" fill="#888888" fontSize="21" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">
            HÄFELE
          </text>
        </svg>
      );

    case 'heineken':
      // Heineken: Red five-pointed star with circular flourishes + green HEINEKEN
      return (
        <svg viewBox="0 0 140 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Red 5-pointed star */}
          <polygon points="70,2 73,11 82,11 75,16 78,25 70,19 62,25 65,16 58,11 67,11" fill="#FF0000" />
          <text x="70" y="38" fill="#008200" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">
            Heineken
          </text>
        </svg>
      );

    case 'msb':
      // MSB: Triple reddish-orange circular overlapping petals + bold dark MSB
      return (
        <svg viewBox="0 0 136 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* 3 overlapping circles */}
          <g transform="translate(6, 8)">
            <circle cx="8" cy="12" r="7" fill="#E83C25" />
            <circle cx="18" cy="12" r="7" fill="#F47920" />
            <circle cx="13" cy="5" r="7" fill="#E83C25" fillOpacity="0.85" />
          </g>
          <text x="46" y="28" fill="#1C1C1E" fontSize="23" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.5">
            MSB
          </text>
        </svg>
      );

    case 'panasonic':
      // Panasonic: Pure classic blue PANASONIC bold wordmark
      return (
        <svg viewBox="0 0 156 38" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="78" y="26" fill="#004098" fontSize="21" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.8">
            Panasonic
          </text>
        </svg>
      );

    case 'honda':
      // Honda: Classic red HONDA bold wordmark + "The Power of Dreams"
      return (
        <svg viewBox="0 0 146 42" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="73" y="22" fill="#E40521" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.2">
            HONDA
          </text>
          <text x="73" y="34" fill="#333333" fontSize="7.5" fontWeight="600" textAnchor="middle" fontFamily="'Georgia', serif" fontStyle="italic">
            The Power of Dreams
          </text>
        </svg>
      );

    case 'mg':
      // MG: Iconic red octagonal MG badge with silver border
      return (
        <svg viewBox="0 0 120 44" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(44, 4)">
            <polygon points="16,0 28,5 32,18 28,30 16,36 4,30 0,18 4,5" fill="#D52B1E" stroke="#888888" strokeWidth="2" />
            <text x="16" y="24" fill="#FFFFFF" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
              MG
            </text>
          </g>
        </svg>
      );

    case 'nestle':
      // Nestlé: Brown nest with mother bird feeding chicks + NESTLÉ wordmark
      return (
        <svg viewBox="0 0 130 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(48, 2)">
            {/* Tree branch & nest */}
            <path d="M4 18 Q14 22 24 18 Q20 25 8 25 Z" fill="#6D5544" />
            {/* Mother bird */}
            <path d="M6 14 Q9 7 14 10 Q18 10 18 16" stroke="#6D5544" strokeWidth="1.8" fill="none" />
            {/* 2 Little chicks */}
            <circle cx="17" cy="15" r="2.2" fill="#6D5544" />
            <circle cx="21" cy="16" r="2" fill="#6D5544" />
          </g>
          <text x="65" y="41" fill="#6D5544" fontSize="12" fontWeight="800" textAnchor="middle" fontFamily="'Georgia', serif">
            Nestlé
          </text>
        </svg>
      );

    case 'friesland-campina':
      // FrieslandCampina: Colorful 6-petal starburst + script wordmark
      return (
        <svg viewBox="0 0 146 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Multi-colored starburst */}
          <g transform="translate(6, 6)">
            <path d="M12 0 C14 5 18 8 24 8 C18 9 14 13 12 18 C10 13 6 9 0 8 C6 8 10 5 12 0 Z" fill="#FFC82E" />
            <circle cx="6" cy="4" r="3" fill="#E30613" />
            <circle cx="18" cy="4" r="3" fill="#009640" />
            <circle cx="6" cy="14" r="3" fill="#0072CE" />
            <circle cx="18" cy="14" r="3" fill="#9B26B6" />
          </g>
          <text x="36" y="24" fill="#005BAA" fontSize="11" fontWeight="700" fontFamily="'Georgia', serif">
            FrieslandCampina
          </text>
        </svg>
      );

    case 'th-true-milk':
      // TH true MILK: Deep blue serif "TH" + golden 6-point star sparkle
      return (
        <svg viewBox="0 0 130 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="14" y="28" fill="#00548E" fontSize="24" fontWeight="800" fontFamily="'Georgia', serif">
            TH
          </text>
          {/* Golden star sparkles */}
          <g transform="translate(64, 10)">
            <polygon points="6,0 7.5,4.5 12,6 7.5,7.5 6,12 4.5,7.5 0,6 4.5,4.5" fill="#D4AF37" />
            <polygon points="14,8 15,11 18,12 15,13 14,16 13,13 10,12 13,11" fill="#D4AF37" />
          </g>
        </svg>
      );

    case 'vitadairy':
      // VitaDairy: Pure cyan-blue cursive "VitaDairy" with nutrition droplet
      return (
        <svg viewBox="0 0 140 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="6" y="26" fill="#0072CE" fontSize="21" fontWeight="700" fontStyle="italic" fontFamily="system-ui, -apple-system, sans-serif">
            VitaDairy
          </text>
          {/* Droplet above 'i' */}
          <circle cx="78" cy="11" r="2" fill="#00A3E0" />
        </svg>
      );

    case 'tcp':
      // TCP Group (Red Bull parent): Energetic bold lowercase tcp + red/gold dots
      return (
        <svg viewBox="0 0 120 44" className={`w-auto h-9 max-w-full ${className}`} fill="none" aria-label={name}>
          <text x="24" y="28" fill="#1C2E52" fontSize="26" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-1">
            tcp
          </text>
          <circle cx="78" cy="10" r="5" fill="#ED1C24" />
          <circle cx="88" cy="14" r="3.5" fill="#FDB913" />
        </svg>
      );

    case 'samsung':
      // Samsung: Iconic blue tilted ellipse badge with white SAMSUNG
      return (
        <svg viewBox="0 0 140 40" className={`w-auto h-8 max-w-full ${className}`} fill="none" aria-label={name}>
          <g transform="translate(70, 20) rotate(-12)">
            <ellipse cx="0" cy="0" rx="46" ry="14" fill="#034EA2" />
            <text x="0" y="5" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">
              SAMSUNG
            </text>
          </g>
        </svg>
      );

    case 'sabeco':
      // Sabeco: Golden imperial dragon standing upright + bold red SABECO
      return (
        <svg viewBox="0 0 120 54" className={`w-auto h-11 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Golden dragon standing upright */}
          <g transform="translate(48, 2)">
            <path d="M12 2 C16 4 18 8 16 11 C12 13 8 10 9 15 C10 18 16 19 15 23 C14 27 8 28 14 30 C12 30 6 27 8 22 C9 19 4 17 6 12 C8 8 4 6 12 2 Z" fill="#D4AF37" />
          </g>
          <text x="60" y="47" fill="#C4161C" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1">
            SABECO
          </text>
        </svg>
      );

    case 'acecook':
      // Acecook: Chef kid with pot + "Cook happiness ACECOOK" red ribbon
      return (
        <svg viewBox="0 0 140 48" className={`w-auto h-10 max-w-full ${className}`} fill="none" aria-label={name}>
          {/* Chef kid logo */}
          <g transform="translate(8, 4)">
            <circle cx="14" cy="16" r="11" fill="#FFFFFF" stroke="#ED1C24" strokeWidth="1.5" />
            {/* Chef Hat */}
            <path d="M7 10 Q14 2 21 10 Z" fill="#FFF" stroke="#ED1C24" strokeWidth="1.2" />
            {/* Happy eyes and smile */}
            <circle cx="10" cy="14" r="1.5" fill="#111" />
            <circle cx="18" cy="14" r="1.5" fill="#111" />
            <path d="M11 19 Q14 22 17 19" stroke="#ED1C24" strokeWidth="1.2" fill="none" />
          </g>
          <text x="44" y="16" fill="#ED1C24" fontSize="7" fontWeight="700" fontStyle="italic" fontFamily="'Georgia', serif">
            Cook happiness
          </text>
          <text x="44" y="32" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif">
            ACECOOK
          </text>
          <rect x="42" y="20" width="76" height="15" rx="3" fill="#ED1C24" />
          <text x="80" y="32" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
            ACECOOK
          </text>
        </svg>
      );

    default:
      return (
        <div className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-bold text-white">
          {name}
        </div>
      );
  }
};
