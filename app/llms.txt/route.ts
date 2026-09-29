import { services, site, steps } from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text summary of the site for LLMs (https://llmstxt.org). */
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    "> Consultoría, capacitaciones y servicios de valor agregado para el control de inventarios y almacenes en México.",
    "",
    `${site.name} ayuda a empresas en México a ordenar y controlar su inventario y almacén: diagnóstico, implementación de procesos y seguimiento hasta que la mejora se sostiene.`,
    "",
    "## Secciones",
    "",
    `- [Servicios](${site.url}/#servicios): consultoría, capacitaciones y servicios de valor agregado`,
    `- [Proceso](${site.url}/#proceso): cómo trabajamos, del diagnóstico al seguimiento`,
    `- [Nosotros](${site.url}/#nosotros): quiénes somos`,
    `- [Contacto](${site.url}/#contacto): correo, teléfono y WhatsApp`,
    "",
    "## Servicios",
    "",
    ...services.flatMap((s) => [
      `### ${s.title}`,
      "",
      s.summary,
      "",
      ...s.items.map((item) => `- ${item}`),
      "",
    ]),
    "## Cómo trabajamos",
    "",
    ...steps.map((s, i) => `${i + 1}. **${s.title}**: ${s.text}`),
    "",
    "## Contacto",
    "",
    `- Consultor: ${site.consultant.name}, ${site.consultant.role}`,
    `- Correo: [${site.email}](mailto:${site.email})`,
    `- Teléfono: [${site.phone.display}](${site.phone.href})`,
    `- Sitio: [${site.domain}](${site.url})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
