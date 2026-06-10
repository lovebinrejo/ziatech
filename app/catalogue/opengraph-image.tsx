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
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f1f3d 50%, #162447 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "52px 64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Live badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80" }} />
          <span style={{ fontSize: "14px", color: "#4ade80", letterSpacing: "0.05em" }}>
            LIVE CATALOGUE ACCESS
          </span>
        </div>

        {/* Title */}
        <div style={{ fontSize: "52px", fontWeight: 900, lineHeight: 1.1, marginBottom: "16px", display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#ffffff" }}>Online Trucks</span>
          <span style={{ color: "#f87171" }}>Parts Catalogue</span>
        </div>

        <div style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "32px" }}>
          20 major brands · Genuine parts · WhatsApp access · ZIA Tech Solutions, UAE
        </div>

        {/* Brand pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {brands.map((brand) => (
            <div
              key={brand}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                padding: "7px 16px",
                fontSize: "15px",
                color: "#cbd5e1",
                fontWeight: 500,
              }}
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "16px", color: "#475569" }}>ziatechsolutions.com/catalogue</span>
          <div style={{ background: "#25D366", borderRadius: "12px", padding: "12px 28px", fontSize: "18px", fontWeight: 700, color: "#fff" }}>
            WhatsApp Us →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
