import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Online Trucks Parts Catalogue — ZIA Tech Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const brands = [
  "BPW", "Daf", "Hino", "Isuzu", "Iveco",
  "Knorr", "MAN", "Mercedes", "Mitsubishi FUSO", "Nissan",
  "Renault", "Saf Holland", "Scania", "Schmitz", "Setra",
  "TecDoc", "Thermo King", "Volvo", "Wabco", "Wielton",
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0f172a 0%, #162447 60%, #1f3460 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "52px 60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#e43f5a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            🚛
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "36px", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
              Online Trucks Parts Catalogue
            </span>
            <span style={{ fontSize: "18px", color: "#8892b0", marginTop: "6px" }}>
              ZIA Tech Solutions · ziatechsolutions.com
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: "20px", color: "#ccd6f6", marginBottom: "28px" }}>
          20 major truck &amp; trailer brands — access genuine parts catalogues online
        </div>

        {/* Brand grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                background: "#1f3460",
                border: "1px solid #2a4a7f",
                borderRadius: "8px",
                padding: "8px 18px",
                fontSize: "16px",
                color: "#ccd6f6",
                fontWeight: 500,
              }}
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "17px", color: "#64748b" }}>
            Tap the link · WhatsApp us for access
          </span>
          <div
            style={{
              background: "#25D366",
              borderRadius: "10px",
              padding: "12px 28px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            WhatsApp Us →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
