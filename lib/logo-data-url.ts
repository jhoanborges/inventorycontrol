import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** public/logo.svg as a data URL, for ImageResponse-generated images. */
export async function logoDataUrl(): Promise<string> {
  const svg = await readFile(join(process.cwd(), "public/logo.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}
