import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import Script from "next/script";
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

const title = "Consultoría de Inventarios y Almacenes | Inventory Control";
const description =
  "Consultoría, capacitaciones y servicios de valor agregado para el control de inventarios y almacenes en México: diagnóstico, implementación y seguimiento.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: {
    canonical: "/",
    types: { "text/plain": [{ url: "/llms.txt", title: "LLM summary" }] },
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${manrope.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
        <WhatsAppButton />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
        </Script>
      </body>
    </html>
  );
}
