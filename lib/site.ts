export const site = {
  name: "Inventory Control",
  tagline: "Consultoría y Servicios",
  url: "https://inventorycontrol.mx",
  domain: "inventorycontrol.mx",
  email: "flopez@inventorycontrol.mx",
  phone: { display: "+52 81 1243 2165", href: "tel:+528112432165" },
  gaId: "G-ZKRZ7D3S77",
  consultant: { name: "Felix López", role: "Consultor Senior" },
};

/** WhatsApp chat link built from NEXT_PUBLIC_WHATSAPP_NUMBER, or null when unset. */
export function whatsappUrl(message?: string): string | null {
  const digits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!digits) return null;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}

export const services = [
  {
    icon: "bulb",
    title: "Consultoría",
    summary:
      "Analizamos cómo se mueve tu inventario hoy y te acompañamos hasta que el nuevo proceso funcione solo.",
    items: ["Revisión y Diagnóstico", "Implementación", "Seguimiento"],
  },
  {
    icon: "cap",
    title: "Capacitaciones",
    summary:
      "Formamos a tu equipo en la operación diaria del almacén con práctica en piso, no solo teoría.",
    items: [
      "Realización de Inventarios",
      "Conteos cíclicos",
      "Manejo de Montacargas",
      "Clasificación de Inventario",
    ],
  },
  {
    icon: "sparkles",
    title: "Servicios de valor agregado",
    summary:
      "Rediseñamos espacios, procesos y relaciones con proveedores para que tu operación escale.",
    items: [
      "Diseño de Almacenes",
      "Desarrollo de Procesos",
      "Búsqueda y Gestión de Proveedores",
    ],
  },
] as const;

export const steps = [
  {
    title: "Revisión y Diagnóstico",
    text: "Visitamos tu almacén, auditamos existencias y detectamos dónde se pierden tiempo, espacio y dinero.",
  },
  {
    title: "Implementación",
    text: "Ponemos en marcha el plan: layout, procesos, clasificación y controles, junto con tu equipo.",
  },
  {
    title: "Seguimiento",
    text: "Medimos resultados, ajustamos lo necesario y aseguramos que la mejora se sostenga en el tiempo.",
  },
] as const;
