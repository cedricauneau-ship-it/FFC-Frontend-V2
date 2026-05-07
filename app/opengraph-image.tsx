import { ImageResponse } from "next/og";
import { CLUB } from "@/lib/seo";

/**
 * OG image generee dynamiquement a 1200x630 (standard Facebook/Twitter/WhatsApp).
 * Servie automatiquement a /opengraph-image et /twitter-image par Next.js.
 */
export const alt = CLUB.legalName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #f57c00 0%, transparent 45%), radial-gradient(circle at 85% 80%, #f57c00 0%, transparent 40%)",
          padding: "70px",
          fontFamily: "system-ui, sans-serif",
          color: "white",
          gap: "24px",
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#f57c00",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Football Club - 95190
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "white",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Fontenay-en-Parisis
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            opacity: 0.9,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Football Club
        </div>
        <div
          style={{
            marginTop: "30px",
            fontSize: 32,
            color: "white",
            opacity: 0.85,
            maxWidth: "950px",
            lineHeight: 1.35,
            display: "flex",
          }}
        >
          {"Ecole de foot U6 a Veterans - 3 terrains en herbe - Licence 180 EUR/an"}
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: 26,
            color: "#f57c00",
            fontWeight: 600,
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          {"FFF - DISTRICT VAL-D'OISE - LIGUE PARIS-IDF"}
        </div>
      </div>
    ),
    { ...size }
  );
}
