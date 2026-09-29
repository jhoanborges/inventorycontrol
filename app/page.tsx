import {
  ArrowIcon,
  BulbIcon,
  CapIcon,
  CheckIcon,
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  SparklesIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { services, site, steps, whatsappUrl } from "@/lib/site";

const serviceIcons = { bulb: BulbIcon, cap: CapIcon, sparkles: SparklesIcon };

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const capabilities = services.flatMap((s) => s.items);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/opengraph-image`,
  email: site.email,
  telephone: site.phone.href.replace("tel:", ""),
  areaServed: { "@type": "Country", name: "México" },
  founder: {
    "@type": "Person",
    name: site.consultant.name,
    jobTitle: site.consultant.role,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: services.map((s) => ({
      "@type": "OfferCatalog",
      name: s.title,
      itemListElement: s.items.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    })),
  },
};

export default function Home() {
  const wa = whatsappUrl(
    "Hola, me gustaría agendar un diagnóstico de inventario.",
  );
  const primaryCta = wa ?? `mailto:${site.email}`;
  const external = wa
    ? { target: "_blank", rel: "noopener noreferrer" }
    : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD built from site config
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-xl focus:bg-navy-900 focus:px-4 focus:py-3 focus:font-bold focus:text-white"
      >
        Saltar al contenido
      </a>
      <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-500 via-brand-600 to-navy-900" />

      {/* ---------- Header ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
        <div className="header-bar mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-transparent bg-white/60 px-4 py-2.5 backdrop-blur-xl sm:px-5">
          <a href="#inicio" className="flex items-center gap-2.5">
            <Logo alt="" className="size-10" />
            <span className="leading-tight">
              <span className="block font-extrabold tracking-tight text-navy-900">
                {site.name}
              </span>
              <span className="hidden text-xs font-semibold text-sky-500 min-[400px]:block">
                {site.tagline}
              </span>
            </span>
          </a>
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex gap-8 text-sm font-semibold text-navy-900/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="transition-colors hover:text-brand-600"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={primaryCta}
            {...external}
            className="shrink-0 rounded-xl bg-sky-100 px-4 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-brand-600 hover:text-white"
          >
            <span className="sm:hidden">Contáctanos</span>
            <span className="hidden sm:inline">Agenda un diagnóstico</span>
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden px-4 pt-36 pb-20 sm:px-6 sm:pt-44">
          <div
            aria-hidden
            className="shape-l pointer-events-none absolute top-24 -left-24 hidden sm:block"
          >
            <div className="drift h-64 w-40 -skew-x-[28deg] rounded-[2.5rem] border-2 border-navy-900/25" />
            <div className="mt-28 ml-24 h-28 w-40 -skew-x-[28deg] rounded-3xl bg-sky-100" />
          </div>
          <div
            aria-hidden
            className="shape-r pointer-events-none absolute top-28 -right-16 hidden sm:block"
          >
            <div className="drift h-36 w-56 -skew-x-[28deg] rounded-3xl bg-gradient-to-br from-brand-500 to-navy-700" />
            <div className="mt-24 -ml-10 h-60 w-48 -skew-x-[28deg] rounded-[2.5rem] border-2 border-brand-500/40" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-mist),transparent_65%)]"
          />

          <div className="hero-copy relative mx-auto max-w-4xl text-center">
            <a
              href="#servicios"
              className="rise inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white py-1 pr-3 pl-1 text-sm font-medium text-navy-900 shadow-sm transition hover:border-brand-600"
            >
              <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white">
                Nuevo
              </span>
              Capacitación en conteos cíclicos y montacargas
              <ArrowIcon className="size-4" />
            </a>

            <h1
              className="rise mt-7 text-5xl leading-[1.05] font-extrabold tracking-tight text-navy-900 sm:text-7xl"
              style={{ animationDelay: "120ms" }}
            >
              Tu inventario bajo control,{" "}
              <span className="font-serif font-semibold text-brand-600 italic">
                de principio a fin
              </span>
            </h1>

            <p
              className="rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-900/70 sm:text-xl"
              style={{ animationDelay: "240ms" }}
            >
              Consultoría, capacitación y diseño de almacenes para que cada
              pieza esté donde debe estar y tus números cuadren.
            </p>

            <div
              className="rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href={primaryCta}
                {...external}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 font-bold text-white shadow-[0_14px_30px_-10px] shadow-brand-600/70 transition hover:-translate-y-0.5 hover:bg-navy-700"
              >
                {wa && <WhatsAppIcon className="size-5" />}
                Solicita tu diagnóstico
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-4 font-bold text-navy-900 transition hover:text-brand-600"
              >
                Ver servicios <ArrowIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Showcase panel */}
          <div className="hero-panel relative mx-auto mt-20 max-w-6xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-700 to-brand-600 p-8 sm:p-14">
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/.06)_1px,transparent_1px)] bg-[size:44px_44px]"
              />
              <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
                <div className="space-y-4">
                  {["Revisión y Diagnóstico", "Implementación"].map((t, i) => (
                    <div
                      key={t}
                      className="float flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
                      style={{ animationDelay: `${i * -2}s` }}
                    >
                      <span className="grid size-9 place-items-center rounded-xl bg-white text-brand-600">
                        <CheckIcon className="size-5" />
                      </span>
                      <span className="font-semibold">{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mx-auto">
                  <div className="rounded-full bg-white/10 p-4 ring-1 ring-white/20">
                    <Logo
                      animated
                      className="size-52 drop-shadow-2xl sm:size-64"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {["Seguimiento", "Conteos cíclicos"].map((t, i) => (
                    <div
                      key={t}
                      className="float flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
                      style={{ animationDelay: `${-1 - i * 2}s` }}
                    >
                      <span className="grid size-9 place-items-center rounded-xl bg-sky-100 text-navy-900">
                        <CheckIcon className="size-5" />
                      </span>
                      <span className="font-semibold">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Marquee ---------- */}
        <section
          aria-label="Especialidades"
          className="overflow-hidden border-y border-navy-900/5 bg-mist py-6"
        >
          <div className="marquee flex w-max gap-4">
            {[...capabilities, ...capabilities].map((c, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: list is duplicated for the loop
                key={i}
                aria-hidden={i >= capabilities.length}
                className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 font-semibold whitespace-nowrap text-navy-900 shadow-sm"
              >
                <span className="size-2 rounded-full bg-brand-600" />
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- Servicios ---------- */}
        <section id="servicios" className="px-4 py-28 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="font-bold tracking-widest text-sky-500 uppercase">
                Nuestros servicios
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Todo lo que tu almacén necesita,{" "}
                <span className="font-serif font-semibold text-brand-600 italic">
                  en un solo aliado
                </span>
              </h2>
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => {
                const Icon = serviceIcons[s.icon];
                return (
                  <Reveal key={s.title} delay={i * 120}>
                    <article className="group relative h-full overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-8 shadow-[0_20px_50px_-30px] shadow-navy-900/40 transition duration-300 hover:-translate-y-2 hover:border-brand-600/30">
                      <div
                        aria-hidden
                        className="absolute -top-20 -right-20 size-48 rounded-full bg-sky-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                      />
                      <span className="relative grid size-16 place-items-center rounded-full bg-sky-100 text-brand-600 transition duration-300 group-hover:bg-brand-600 group-hover:text-white">
                        <Icon className="size-8" />
                      </span>
                      <h3 className="relative mt-6 text-2xl font-extrabold">
                        {s.title}
                      </h3>
                      <p className="relative mt-3 text-navy-900/65">
                        {s.summary}
                      </p>
                      <ul className="relative mt-6 space-y-3">
                        {s.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 font-semibold"
                          >
                            <CheckIcon className="mt-0.5 size-5 shrink-0 text-sky-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Proceso ---------- */}
        <section
          id="proceso"
          className="relative overflow-hidden bg-navy-950 px-4 py-28 text-white sm:px-6"
        >
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-bold tracking-widest text-sky-100/70 uppercase">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Un método probado en{" "}
                <span className="font-serif font-semibold text-sky-100 italic">
                  tres pasos
                </span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/70">
                No dejamos un reporte y nos vamos. Acompañamos a tu equipo desde
                el primer conteo hasta que los resultados se sostienen solos.
              </p>
            </Reveal>

            <ol className="relative space-y-6 pl-10">
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-[0.9rem] w-0.5 bg-white/10"
              />
              <span
                aria-hidden
                className="timeline-fill absolute top-2 bottom-2 left-[0.9rem] w-0.5 bg-gradient-to-b from-sky-100 to-brand-500"
              />
              {steps.map((step, i) => (
                <li key={step.title} className="relative">
                  <Reveal delay={i * 100}>
                    <span className="absolute top-7 -left-10 grid size-8 place-items-center rounded-full bg-brand-600 text-sm font-extrabold ring-4 ring-navy-950">
                      {i + 1}
                    </span>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:bg-white/10">
                      <h3 className="text-xl font-extrabold">{step.title}</h3>
                      <p className="mt-2 text-white/70">{step.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Nosotros ---------- */}
        <section id="nosotros" className="px-4 py-28 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-5 translate-y-5 -skew-y-3 rounded-[2rem] bg-sky-100"
                />
                <div className="relative rounded-[2rem] bg-white p-10 text-center shadow-[0_30px_60px_-30px] shadow-navy-900/40 ring-1 ring-navy-900/5">
                  <Logo className="mx-auto size-32" />
                  <p className="mt-6 text-2xl font-extrabold">
                    {site.consultant.name}
                  </p>
                  <p className="font-semibold text-sky-500">
                    {site.consultant.role}
                  </p>
                  <div className="mx-auto my-6 h-0.5 w-16 bg-sky-500" />
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-semibold text-navy-900/70 hover:text-brand-600"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-bold tracking-widest text-sky-500 uppercase">
                Quiénes somos
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Experiencia en piso,{" "}
                <span className="font-serif font-semibold text-brand-600 italic">
                  no solo en papel
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-navy-900/70">
                En {site.name} ayudamos a empresas a recuperar el control de sus
                existencias. Trabajamos directamente en tu almacén: contamos,
                clasificamos, rediseñamos y capacitamos, con un consultor senior
                a cargo de cada proyecto.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Atención directa del consultor",
                  "Planes a la medida",
                  "Capacitación práctica",
                  "Seguimiento de resultados",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-semibold">
                    <span className="grid size-7 place-items-center rounded-full bg-sky-100 text-brand-600">
                      <CheckIcon className="size-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- Contacto ---------- */}
        <section id="contacto" className="px-4 pb-28 sm:px-6">
          <Reveal className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-navy-900 px-6 py-16 text-center text-white sm:px-16 sm:py-20">
              <div
                aria-hidden
                className="drift absolute -top-16 -left-10 h-48 w-72 -skew-x-[28deg] rounded-3xl bg-white/10"
              />
              <div
                aria-hidden
                className="drift absolute -right-10 -bottom-16 h-56 w-64 -skew-x-[28deg] rounded-[2.5rem] border-2 border-white/20"
                style={{ animationDelay: "-6s" }}
              />
              <h2 className="relative mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                ¿Listo para tener{" "}
                <span className="font-serif font-semibold text-sky-100 italic">
                  inventarios exactos
                </span>
                ?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/80">
                Cuéntanos cómo opera tu almacén y te proponemos un plan de
                trabajo sin compromiso.
              </p>
              {wa && (
                <a
                  href={wa}
                  {...external}
                  className="relative mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-navy-900 transition hover:-translate-y-0.5 hover:bg-sky-100"
                >
                  <WhatsAppIcon className="size-5 text-[#25d366]" />
                  Escríbenos por WhatsApp
                </a>
              )}

              <ul className="relative mt-12 grid gap-4 text-left sm:grid-cols-3">
                {[
                  {
                    Icon: MailIcon,
                    label: "Correo",
                    value: site.email,
                    href: `mailto:${site.email}`,
                  },
                  {
                    Icon: PhoneIcon,
                    label: "Teléfono",
                    value: site.phone.display,
                    href: site.phone.href,
                  },
                  {
                    Icon: GlobeIcon,
                    label: "Web",
                    value: site.domain,
                    href: site.url,
                  },
                ].map(({ Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 transition hover:bg-white/15"
                    >
                      <Icon className="size-6 shrink-0 text-sky-100" />
                      <span className="min-w-0">
                        <span className="block text-sm text-white/60">
                          {label}
                        </span>
                        <span className="block truncate font-bold">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-navy-900/5 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-navy-900/70 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo alt="" className="size-8" />
            <span className="font-bold text-navy-900">{site.name}</span>
            <span>· {site.tagline}</span>
          </div>
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
