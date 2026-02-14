import Link from "next/link";
import { ExternalLink, Users, Building2 } from "lucide-react";

const SOURCES = ["Congreso", "JNE", "ONPE", "Contraloría"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0b0b0f]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
            <h3 className="text-sm font-semibold tracking-widest text-white/90">
              SOBRE EL PROYECTO
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Plataforma ciudadana de transparencia política. Información
              verificada y actualizada sobre el Congreso del Perú.
            </p>

            <Link
              href="/mision"
              className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-white/25 hover:bg-white/10"
            >
              Conocer más
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
            <h3 className="text-sm font-semibold tracking-widest text-white/90">
              EXPLORA
            </h3>

            <nav className="mt-4 space-y-3 text-sm">
              <FooterLink
                href="/legisladores"
                label="Congresistas"
                hint="Ver"
              />
              <FooterLink
                href="/partidos"
                label="Partidos Políticos"
                hint="Ver"
              />
            </nav>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold tracking-widest text-white/90">
                DATOS Y FUENTES
              </h3>
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Información recopilada de portales oficiales (Congreso, JNE, ONPE,
              Contraloría) y medios periodísticos verificados. Datos públicos
              procesados para facilitar tu acceso.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {SOURCES.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                <span className="m-auto h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Actualizado frecuentemente
              </span>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {year} VotaBienPeru.com • Hecho para promover transparencia.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  hint,
}: {
  href: string;
  label: string;
  hint: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between text-white/70 hover:text-white"
    >
      <div className="flex flex-row justify-start">
        {label === "Partidos Políticos" ? (
          <Building2 className="w-4 h-4 text-primary" />
        ) : (
          <Users className="w-4 h-4 text-primary" />
        )}
        <span className="relative ml-1">
          {label}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 transition-all group-hover:w-full" />
        </span>
      </div>
      <span className="text-xs text-white/40 group-hover:text-white/60">
        {hint}
      </span>
    </Link>
  );
}
