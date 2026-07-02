import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#171717",
          color: "#F3F0E9",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#A8583C", textTransform: "uppercase" }}>
          Adelaide, South Australia
        </div>
        <div style={{ display: "flex", fontSize: 76, marginTop: 24, lineHeight: 1.1 }}>Hills &amp; Harbour</div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 24, color: "#C9B9A3" }}>{siteConfig.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
