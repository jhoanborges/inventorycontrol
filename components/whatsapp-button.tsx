import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  const href = whatsappUrl(
    "Hola, me interesa conocer los servicios de Inventory Control.",
  );
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
      className="wa-float group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-[#25d366] p-4 text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,.7)] transition-transform hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#25d366] sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="relative size-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-[max-width] duration-300 group-hover:max-w-40 sm:inline">
        ¿Hablamos?
      </span>
    </a>
  );
}
