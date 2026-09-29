import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/logo-data-url";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = await logoDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img only */}
      <img src={logo} width={160} height={161} alt="" />
    </div>,
    size,
  );
}
