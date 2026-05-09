import { useEffect, useState } from "react";
import oniMark from "@/assets/oni-mark.jpg";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "especialidades", label: "Disciplinas" },
  { id: "instalaciones", label: "Instalaciones" },
  { id: "team", label: "Team" },
  { id: "tarifas", label: "Tarifas" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...links.map((l) => l.id)];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src={oniMark}
            alt="Black Oni Strength"
            width={36}
            height={36}
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-6"
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-widest">BLACK ONI</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Strength · 鬼
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-xs uppercase tracking-[0.25em] transition-colors relative py-2 ${
                active === l.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute left-0 right-0 -bottom-0.5 mx-auto h-px bg-primary transition-all duration-500 ${
                  active === l.id ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.25em] font-semibold bg-gradient-oni text-primary-foreground rounded-sm glow-red hover:scale-[1.03] transition-transform"
          >
            Empieza hoy
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[420px]" : "max-h-0"
        } bg-background/95 backdrop-blur-xl border-b border-border`}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-[0.25em] border-b border-border/40"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 text-center px-5 py-3 text-xs uppercase tracking-[0.25em] font-semibold bg-gradient-oni text-primary-foreground rounded-sm"
          >
            Empieza hoy
          </a>
        </nav>
      </div>
    </header>
  );
}