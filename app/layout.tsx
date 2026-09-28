import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.tagline}`,
  description:
    "Consultoría, capacitaciones y servicios de valor agregado para el control de inventarios y almacenes en México.",
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description:
      "Diagnóstico, implementación y seguimiento de procesos de inventario y almacén.",
    url: site.url,
    siteName: site.name,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
