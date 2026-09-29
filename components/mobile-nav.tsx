"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";

/** Hamburger menu for small screens; closes on link click, Escape or outside click. */
export function MobileNav({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((o) => !o)}
        className="grid size-11 place-items-center rounded-xl text-navy-900 transition hover:bg-sky-100"
      >
        {open ? (
          <CloseIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>
      <nav
        id="mobile-nav"
        aria-label="Principal"
        hidden={!open}
        className="mobile-nav absolute inset-x-4 top-full mt-2 rounded-2xl bg-white p-2 shadow-[0_20px_50px_-20px] shadow-navy-900/40 ring-1 ring-navy-900/5 sm:inset-x-6"
      >
        <ul>
          {items.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-sky-100 hover:text-brand-600"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
