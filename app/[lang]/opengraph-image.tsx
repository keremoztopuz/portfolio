import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { locales } from "@/lib/i18n";

export const alt = "Berat Kerem Öztopuz · Computer Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Plain typographic card shown when the site link is shared.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "#fafaf9",
          color: "#18181b",
        }}
      >
        <div style={{ fontSize: 28, color: "#52525b" }}>Computer Engineer · Ankara</div>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 36, color: "#52525b", marginTop: 12 }}>
          ML, Backend and Game Development
        </div>
      </div>
    ),
    size,
  );
}
