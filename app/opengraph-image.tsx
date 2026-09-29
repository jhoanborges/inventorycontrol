import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/logo-data-url";
import { site } from "@/lib/site";

export const alt = `${site.name} · Consultoría de inventarios y almacenes`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await logoDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: 80,
        background: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)",
        color: "#0b1f4b",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img only */}
      <img src={logo} width={300} height={302} alt="" />
      <div
        style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}
      >
        <div style={{ fontSize: 76, lineHeight: 1 }}>{site.name}</div>
        <div style={{ fontSize: 44, lineHeight: 1.2, color: "#1d4ed8" }}>
          Consultoría de inventarios y almacenes
        </div>
        <div style={{ fontSize: 30, color: "#0b1f4bb3" }}>
          Diagnóstico · Implementación · Seguimiento
        </div>
      </div>
    </div>,
    size,
  );
}
