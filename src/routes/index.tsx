import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Reveal, Counter } from "@/components/site/Reveal";
import hero from "@/assets/hero.jpg";
import imgPower from "@/assets/powerlifting.jpg";
import imgCali from "@/assets/calistenia.jpg";
import imgCult from "@/assets/culturismo.jpg";
import imgFunc from "@/assets/funcional.jpg";
import imgGym1 from "@/assets/gym-1.jpg";
import imgGym2 from "@/assets/gym-2.jpg";
import imgGym3 from "@/assets/gym-3.jpg";
import imgCoachP from "@/assets/coach-paco.jpg";
import imgCoachA from "@/assets/coach-ana.jpg";
import imgCafe from "@/assets/cafe.jpg";
import oniMark from "@/assets/oni-mark.jpg";

const SEO_TITLE = "Black Oni Strength · Gimnasio de fuerza en Las Torres de Cotillas, Murcia";
const SEO_DESC =
  "El templo de la fuerza en Murcia. Powerlifting, calistenia, culturismo y entrenamiento funcional en un gimnasio premium en Las Torres de Cotillas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESC },
      {
        name: "keywords",
        content:
          "gimnasio Las Torres de Cotillas, powerlifting Murcia, calistenia Murcia, culturismo Murcia, entrenamiento fuerza Murcia, Black Oni Strength",
      },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESC },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://blackonistrength.com/" }],
  }),
  component: Index,
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Black Oni Strength",
  image: "https://blackonistrength.com/og.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle del Milenio",
    addressLocality: "Las Torres de Cotillas",
    addressRegion: "Murcia",
    postalCode: "30565",
    addressCountry: "ES",
  },
  telephone: "+34 621 14 99 80",
  url: "https://blackonistrength.com/",
  sameAs: ["https://instagram.com/blackonistrength"],
  openingHours: ["Mo-Fr 06:00-23:30", "Sa-Su 09:00-21:00"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "59" },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <Sobre />
      <Especialidades />
      <Instalaciones />
      <Team />
      <Testimonios />
      <Horarios />
      <Tarifas />
      <Eventos />
      <Cafe />
      <Contacto />
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <img
        src={hero}
        alt="Atleta entrenando powerlifting en Black Oni Strength"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pt-32 pb-24">
        <Reveal>
          <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-border bg-card/40 backdrop-blur-sm rounded-full">
            <span className="h-2 w-2 rounded-full bg-primary animate-oni-pulse" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Las Torres de Cotillas · Murcia
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="font-display mt-6 text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tight">
            EL TEMPLO <br />
            DE LA <span className="text-primary text-glow">FUERZA</span>
            <br />
            <span className="text-stroke">EN MURCIA</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
            Powerlifting, calistenia y culturismo en un entorno creado para
            superar tus límites. Disciplina, comunidad y equipamiento de
            competición — sin filtros.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-3 px-7 py-4 bg-gradient-oni text-primary-foreground text-xs uppercase tracking-[0.3em] font-bold rounded-sm glow-red overflow-hidden"
            >
              <span className="relative z-10">Empieza hoy</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
            <a
              href="#instalaciones"
              className="group inline-flex items-center gap-3 px-7 py-4 border border-border hover:border-primary text-xs uppercase tracking-[0.3em] font-semibold rounded-sm transition-colors"
            >
              Ver instalaciones
              <span className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition">↗</span>
            </a>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={650}>
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-4xl">
            {[
              { v: <Counter to={59} suffix="+" />, l: "Reseñas reales" },
              { v: <Counter to={5.0} suffix="★" />, l: "Valoración Google" },
              { v: "365", l: "Días al año" },
              { v: "24/7", l: "Comunidad" },
            ].map((s, i) => (
              <div key={i} className="bg-background p-6">
                <div className="font-display text-4xl lg:text-5xl text-primary text-glow">
                  {s.v}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll
        </span>
        <div className="h-10 w-[1px] bg-border relative overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-3 bg-primary animate-scroll-dot" />
        </div>
      </div>

      {/* JP kanji floating */}
      <div className="hidden lg:block absolute right-10 top-1/3 font-jp text-[12rem] text-primary/10 leading-none select-none animate-float">
        鬼
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "POWERLIFTING",
    "CALISTENIA",
    "CULTURISMO",
    "FUERZA MÁXIMA",
    "COMUNIDAD",
    "DISCIPLINA",
    "STREET LIFTING",
    "鬼",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border py-6 bg-card/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10 font-display text-2xl tracking-[0.3em] text-muted-foreground">
            <span className={i % 3 === 1 ? "text-primary" : ""}>{t}</span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- SOBRE ---------- */
function Sobre() {
  return (
    <section id="sobre" className="relative py-32 lg:py-44">
      <div className="absolute inset-0 bg-radial-glow opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-6">
              01 — Sobre Black Oni
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              No somos un<br />
              gimnasio. <br />
              <span className="text-primary text-glow">Somos una</span><br />
              <span className="text-stroke">comunidad.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-12">
          <Reveal delay={200}>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Black Oni Strength nace en Las Torres de Cotillas con una idea
              clara: construir el gimnasio que siempre quisimos entrenar.
              Especializado en <span className="text-foreground">powerlifting, calistenia y culturismo</span>,
              con equipamiento de competición, ambiente cercano y una
              comunidad que empuja en cada serie.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <blockquote className="relative pl-8 border-l-2 border-primary">
              <p className="font-display text-2xl lg:text-3xl leading-tight">
                “No somos un gimnasio más. Somos una comunidad construida
                alrededor de la disciplina.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={400}>
            <div className="grid sm:grid-cols-3 gap-px bg-border">
              {[
                { k: "Equipamiento", v: "Calidad competición" },
                { k: "Ambiente", v: "Cercano y familiar" },
                { k: "Enfoque", v: "Rendimiento real" },
              ].map((b) => (
                <div key={b.k} className="bg-background p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">
                    {b.k}
                  </div>
                  <div className="font-display text-xl">{b.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-sm group">
                <img
                  src={imgGym1}
                  alt="Sala principal del gimnasio"
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="overflow-hidden rounded-sm group mt-12">
                <img
                  src={imgGym2}
                  alt="Discos calibrados"
                  loading="lazy"
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- ESPECIALIDADES ---------- */
const specialties = [
  {
    n: "01",
    title: "Powerlifting",
    img: imgPower,
    desc: "Racks de competición, tarimas y discos calibrados. Tu fuerza máxima, sin compromisos.",
    tags: ["Squat", "Bench", "Deadlift", "Calibrados"],
  },
  {
    n: "02",
    title: "Calistenia",
    img: imgCali,
    desc: "Barras, anillas y estructura completa para dominar tu peso corporal y la movilidad.",
    tags: ["Anillas", "Barras", "Mobility", "Skill"],
  },
  {
    n: "03",
    title: "Culturismo & Fitness",
    img: imgCult,
    desc: "Máquinas premium, poleas y peso libre. Hipertrofia con detalle y entorno cuidado.",
    tags: ["Hipertrofia", "Poleas", "Máquinas", "Pesos libres"],
  },
  {
    n: "04",
    title: "Funcional",
    img: imgFunc,
    desc: "Kettlebells, ropes y zona abierta para entrenamientos explosivos y de alto rendimiento.",
    tags: ["Kettlebells", "Ropes", "HIIT", "Movilidad"],
  },
];

function Especialidades() {
  return (
    <section id="especialidades" className="py-32 lg:py-44 bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                02 — Disciplinas
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] max-w-3xl">
                Cuatro caminos. <br />
                Una sola <span className="text-primary text-glow">obsesión</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-muted-foreground">
              Entrena con propósito. Cada zona del gimnasio está pensada
              para una disciplina y para empujarte un paso más allá.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {specialties.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-sm border border-border hover-lift bg-background">
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute top-6 left-6 font-display text-6xl text-primary/40 group-hover:text-primary transition-colors duration-500">
                    {s.n}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-4xl tracking-wide">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSTALACIONES ---------- */
function Instalaciones() {
  const grid = [
    { src: imgGym1, label: "Sala Principal", tag: "Premium Equipment", h: "lg:row-span-2" },
    { src: imgGym2, label: "Zona Powerlifting", tag: "Competición" },
    { src: imgPower, label: "Racks", tag: "High Performance" },
    { src: imgGym3, label: "Poleas & Máquinas", tag: "Premium" },
    { src: imgCali, label: "Calistenia", tag: "Skill Zone" },
  ];
  return (
    <section id="instalaciones" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              03 — Instalaciones
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Equipamiento <br />
              <span className="text-stroke">de competición.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 lg:auto-rows-[260px]">
          {grid.map((g, i) => (
            <Reveal key={i} delay={i * 80} className={g.h ?? ""}>
              <figure className="group relative h-full min-h-[260px] overflow-hidden rounded-sm border border-border">
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div className="font-display text-xl tracking-wide">{g.label}</div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TEAM ---------- */
const team = [
  {
    name: "Paco",
    role: "Head Coach · Fuerza",
    img: imgCoachP,
    quote: "La fuerza no se entrena. Se construye.",
    specs: ["Powerlifting", "Programación", "Rendimiento"],
    stats: [{ k: "Años", v: "10+" }, { k: "Atletas", v: "200+" }],
  },
  {
    name: "Ana",
    role: "Owner · Coach",
    img: imgCoachA,
    quote: "Aquí entrena gente real. Y se nota.",
    specs: ["Hipertrofia", "Movilidad", "Comunidad"],
    stats: [{ k: "Años", v: "8+" }, { k: "Comunidad", v: "365 días" }],
  },
];

function Team() {
  return (
    <section id="team" className="py-32 lg:py-44 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              04 — Coaches
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              El equipo <br />
              detrás del <span className="text-primary text-glow">templo</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 150}>
              <article className="group relative overflow-hidden rounded-sm border border-border bg-background">
                <div className="grid grid-cols-5">
                  <div className="col-span-2 relative overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                  </div>
                  <div className="col-span-3 p-8 lg:p-10">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                      {m.role}
                    </div>
                    <h3 className="font-display text-5xl mt-2">{m.name}</h3>
                    <p className="mt-5 font-jp italic text-lg text-foreground/90 leading-snug">
                      « {m.quote} »
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {m.specs.map((s) => (
                        <span key={s} className="text-[10px] uppercase tracking-[0.25em] px-2.5 py-1 border border-border text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {m.stats.map((s) => (
                        <div key={s.k}>
                          <div className="font-display text-3xl text-primary">{s.v}</div>
                          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                            {s.k}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIOS ---------- */
const reviews = [
  {
    text: "Es el único gimnasio que ha conseguido que sea constante y me motive de verdad a entrenar.",
    name: "Lucía M.",
  },
  {
    text: "Da gusto entrenar en un gimnasio tan bien equipado. Material de calidad y ambiente brutal.",
    name: "Daniel R.",
  },
  {
    text: "Templo del street lifting. Aquí se viene a entrenar duro y a sumar.",
    name: "Javi P.",
  },
  {
    text: "Trato cercano, comunidad real y un sitio donde apetece estar. 100% recomendable.",
    name: "Sara G.",
  },
];

function Testimonios() {
  return (
    <section className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
                05 — Comunidad
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
                <span className="text-primary text-glow">★ 5.0</span> en Google. <br />
                Avalado por nuestra gente.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group relative h-full p-7 rounded-sm border border-border bg-card/40 backdrop-blur-sm hover-lift">
                <div className="text-primary tracking-[0.4em]">★★★★★</div>
                <p className="mt-5 text-foreground/90 leading-relaxed">
                  “{r.text}”
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-9 w-9 rounded-full bg-gradient-oni flex items-center justify-center font-display text-sm">
                    {r.name[0]}
                  </div>
                  <div className="text-sm">{r.name}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HORARIOS ---------- */
function Horarios() {
  const now = new Date();
  const day = now.getDay(); // 0 sun
  const hour = now.getHours() + now.getMinutes() / 60;
  const open =
    (day >= 1 && day <= 5 && hour >= 6 && hour < 23.5) ||
    ((day === 0 || day === 6) && hour >= 9 && hour < 21);

  const rows = [
    { d: "Lunes — Viernes", h: "06:00 — 23:30" },
    { d: "Sábado", h: "09:00 — 21:00" },
    { d: "Domingo", h: "09:00 — 21:00" },
  ];
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              06 — Horarios
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95]">
              Abierto <br />
              <span className="text-stroke">los 365 días.</span>
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 border border-border rounded-full bg-background">
              <span className={`h-2.5 w-2.5 rounded-full ${open ? "bg-primary animate-oni-pulse" : "bg-muted-foreground"}`} />
              <span className="text-xs uppercase tracking-[0.3em]">
                {open ? "Abierto ahora" : "Cerrado ahora"}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="divide-y divide-border border border-border rounded-sm overflow-hidden bg-background">
            {rows.map((r) => (
              <div key={r.d} className="flex items-center justify-between p-6 hover:bg-card/60 transition-colors">
                <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {r.d}
                </div>
                <div className="font-display text-2xl text-foreground">{r.h}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TARIFAS ---------- */
const plans = [
  {
    name: "Mensual Completo",
    desc: "Acceso ilimitado a todas las zonas e instalaciones.",
    perks: ["Acceso 24/7 al equipamiento", "Powerlifting, calistenia, cardio", "Comunidad y eventos"],
  },
  {
    name: "Black Oni Pro",
    desc: "El plan más elegido. Compromiso real con tu progreso.",
    perks: ["Acceso completo", "Programación personalizada", "Soporte de coach", "Eventos premium"],
    featured: true,
  },
  {
    name: "Horario Reducido",
    desc: "Acceso en franjas valle. Ideal si entrenas mañanas.",
    perks: ["Acceso L-V hasta 16:00", "Todo el equipamiento", "Eventos abiertos"],
  },
  {
    name: "Personal Training",
    desc: "Entrenamiento 1 a 1 con uno de nuestros coaches.",
    perks: ["Sesiones 1:1", "Plan a medida", "Seguimiento semanal"],
  },
];

function Tarifas() {
  return (
    <section id="tarifas" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              07 — Tarifas
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Planes hechos <br />
              para <span className="text-primary text-glow">entrenar en serio</span>.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground max-w-xl">
              Sin sorpresas. Pasa por el gimnasio o escríbenos y te
              contamos en detalle qué plan encaja contigo.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative h-full p-7 rounded-sm border flex flex-col ${
                  p.featured
                    ? "border-primary bg-gradient-to-b from-primary/10 to-background glow-red"
                    : "border-border bg-card/40"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-7 px-3 py-1 bg-gradient-oni text-[10px] uppercase tracking-[0.3em] font-bold rounded-sm">
                    Popular
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Plan
                </div>
                <h3 className="font-display text-3xl mt-2">{p.name}</h3>
                <div className="mt-6">
                  <div className="font-display text-5xl text-primary">A consultar</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Precio personalizado
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.perks.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] uppercase tracking-[0.3em] font-semibold rounded-sm transition ${
                    p.featured
                      ? "bg-gradient-oni text-primary-foreground hover:scale-[1.02]"
                      : "border border-border hover:border-primary"
                  }`}
                >
                  Solicitar información →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EVENTOS ---------- */
const events = [
  { date: "Próx.", title: "Open Powerlifting Black Oni", desc: "Competición interna abierta a la comunidad.", tag: "Powerlifting" },
  { date: "Mensual", title: "Escuela de Calistenia", desc: "Sesiones técnicas en grupo para todos los niveles.", tag: "Calistenia" },
  { date: "Estacional", title: "Black Oni Challenge", desc: "Reto físico colectivo con premios y merch.", tag: "Comunidad" },
];
function Eventos() {
  return (
    <section className="py-32 lg:py-44 bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              08 — Eventos
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Más que entrenar. <br />
              <span className="text-stroke">Vivirlo.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <a
                href="#contacto"
                className="group flex flex-col md:flex-row md:items-center gap-6 p-6 lg:p-8 border border-border bg-background rounded-sm hover-lift"
              >
                <div className="md:w-40 shrink-0">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    {e.date}
                  </div>
                  <div className="font-display text-3xl mt-1">{e.tag}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl lg:text-3xl">{e.title}</h3>
                  <p className="text-muted-foreground mt-2">{e.desc}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary shrink-0 group-hover:translate-x-1 transition-transform">
                  Quiero participar →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CAFÉ ---------- */
function Cafe() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm group">
            <img
              src={imgCafe}
              alt="Espacio café y zona social del gimnasio"
              loading="lazy"
              className="w-full h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              09 — Café & Comunidad
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Entrena duro. <br />
              Descansa <span className="text-primary text-glow">en familia</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Tras la última serie, te quedas. Café, charla y ese ambiente
              cercano que convierte un gimnasio en un sitio al que apetece
              volver cada día.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-border">
              {[
                { k: "Café", v: "De especialidad" },
                { k: "Espacio", v: "Lounge social" },
                { k: "Vibe", v: "Familiar" },
              ].map((b) => (
                <div key={b.k} className="bg-background p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                    {b.k}
                  </div>
                  <div className="font-display text-lg">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CONTACTO ---------- */
function Contacto() {
  return (
    <section id="contacto" className="py-32 lg:py-44 bg-card/30">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              10 — Contacto
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95]">
              Pásate por <br />
              <span className="text-primary text-glow">el templo</span>.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              La mejor forma de conocernos es viniendo. Te enseñamos las
              instalaciones y resolvemos cualquier duda en persona.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <span className="font-display text-primary text-2xl shrink-0">📍</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Dirección</div>
                  <div className="mt-1">Calle del Milenio · 30565 Las Torres de Cotillas, Murcia</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-display text-primary text-2xl shrink-0">📞</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Teléfono</div>
                  <a href="tel:+34621149980" className="mt-1 block hover:text-primary">+34 621 14 99 80</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-display text-primary text-2xl shrink-0">◎</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Instagram</div>
                  <a href="https://instagram.com/blackonistrength" className="mt-1 block hover:text-primary">@blackonistrength</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="font-display text-primary text-2xl shrink-0">f</span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Facebook</div>
                  <div className="mt-1">Black Oni Strength · Las Torres de Cotillas</div>
                </div>
              </li>
            </ul>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Black+Oni+Strength+Las+Torres+de+Cotillas"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary text-xs uppercase tracking-[0.3em] rounded-sm"
            >
              Cómo llegar →
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Gracias! Te contactaremos en breve.");
            }}
            className="p-8 lg:p-10 border border-border rounded-sm bg-background space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="name" />
              <Field label="Teléfono" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
                placeholder="Cuéntanos qué quieres entrenar..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-oni text-primary-foreground text-xs uppercase tracking-[0.3em] font-bold rounded-sm glow-red hover:scale-[1.01] transition-transform"
            >
              Enviar mensaje →
            </button>

            <div className="pt-4">
              <iframe
                title="Mapa Black Oni Strength"
                src="https://www.google.com/maps?q=Las+Torres+de+Cotillas,+Murcia&output=embed"
                className="w-full h-56 rounded-sm border border-border grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-foreground transition-colors"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative pt-24 pb-10 bg-background border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={oniMark} alt="Black Oni" width={48} height={48} className="h-12 w-12" />
              <div>
                <div className="font-display text-3xl tracking-widest">BLACK ONI</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  Strength · 鬼
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-muted-foreground">
              El templo de la fuerza en Murcia. Powerlifting, calistenia y
              culturismo para los que entrenan en serio.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Explorar
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-foreground">Sobre</a></li>
              <li><a href="#especialidades" className="hover:text-foreground">Disciplinas</a></li>
              <li><a href="#instalaciones" className="hover:text-foreground">Instalaciones</a></li>
              <li><a href="#tarifas" className="hover:text-foreground">Tarifas</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Horarios
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>L-V · 06:00 — 23:30</li>
              <li>Sáb · 09:00 — 21:00</li>
              <li>Dom · 09:00 — 21:00</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              Contacto
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Calle del Milenio</li>
              <li>30565 Las Torres de Cotillas</li>
              <li>Murcia · España</li>
              <li><a href="tel:+34621149980" className="hover:text-foreground">+34 621 14 99 80</a></li>
              <li><a href="https://instagram.com/blackonistrength" className="hover:text-foreground">@blackonistrength</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="font-display text-3xl lg:text-5xl tracking-widest">
            FORGED BY <span className="text-primary text-glow">DISCIPLINE</span>.
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Black Oni Strength
          </div>
        </div>
      </div>
    </footer>
  );
}
