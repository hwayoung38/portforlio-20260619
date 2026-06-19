import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { WORKS } from "@/lib/works-data";

/* ── Vivid palette (WaxyWeb mood) ── */
const CREAM = "#F4EFE6";
const INK = "#141414";
const LIME = "#CBFF57";
const PINK = "#FF7BB0";
const YELLOW = "#FFD84D";
const BLUE = "#6C8CFF";
const ORANGE = "#FF9A4D";

const MARQUEE_TEXT =
  "UX Design \u00a0✦\u00a0 Galaxy Watch \u00a0✦\u00a0 Galaxy Buds \u00a0✦\u00a0 Samsung Electronics \u00a0✦\u00a0 User Experience \u00a0✦\u00a0 Product Design \u00a0\u00a0\u00a0\u00a0";

const CAREER = [
  {
    period: "2020 — Now",
    title: "Galaxy Watch & Buds UX",
    desc: "웨어러블 디바이스의 유기적인 경험 설계 및 시스템 UX 고도화",
    color: LIME,
  },
  {
    period: "2017 — 2020",
    title: "Bixby UX",
    desc: "AI 음성 인식 및 인터랙션 모델 설계, 사용자 맞춤형 지능형 플랫폼 UX 스탠다드 정립",
    color: PINK,
  },
  {
    period: "2010 — 2016",
    title: "Communication Apps UX",
    desc: "연락처·메시지 등 커뮤니케이션 서비스 UI/UX 설계 및 사용성 개선",
    color: BLUE,
  },
] as const;

const FOCUS_TAGS = [
  "Wearable UX",
  "System UX",
  "AI Interaction",
  "Design System",
  "Prototyping",
] as const;

const STATS = [
  { value: "14+", label: "Years in UX", sub: "삼성전자 재직" },
  { value: "3", label: "Product Lines", sub: "Watch · Buds · Bixby" },
  { value: "∞", label: "Pixels Crafted", sub: "one at a time" },
] as const;

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Home() {
  return (
    <div style={{ background: CREAM, color: INK }}>
      {/* ════════════════════ HERO (light) ════════════════════ */}
      <section
        id="hero"
        className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 md:px-10"
      >
        {/* Top bar */}
        <BlurFade delay={0} direction="up">
        <header className="flex items-center justify-end">
          <nav className="hidden items-center gap-2 sm:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-black/15 px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-black hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:hwayoung38.song@samsung.com"
            className="rounded-full px-4 py-1.5 text-xs font-bold text-black sm:hidden"
            style={{ background: LIME }}
          >
            Contact
          </a>
        </header>
        </BlurFade>

        {/* Info row */}
        <BlurFade delay={0.08} direction="up">
        <div className="mt-6 border-t border-black/10 pt-4 text-[11px] font-medium text-black/55">
          <div className="flex flex-col gap-0.5">
            <span>EST. 2010 — Seoul, Korea</span>
            <span>Senior UX Designer</span>
          </div>
        </div>
        </BlurFade>

        {/* Center: headline + image */}
        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: big headline */}
          <div className="order-2 lg:order-1">
            <BlurFade delay={0.16} direction="up">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black"
                style={{ background: YELLOW }}
              >
                UX Designer · Samsung
              </span>
            </BlurFade>
            <BlurFade delay={0.24} direction="up">
              <h1
                className="mt-5 font-black uppercase leading-[0.85] tracking-tighter"
                style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
              >
                송화영
              </h1>
            </BlurFade>
            <BlurFade delay={0.32} direction="up">
              <p
                className="mt-2 font-black uppercase leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", color: ORANGE }}
              >
                Hwayoung Song
              </p>
            </BlurFade>
            <BlurFade delay={0.4} direction="up">
              <p className="mt-6 max-w-md text-base leading-relaxed text-black/65">
                갤럭시 워치와 버즈의 사용자 경험을 설계하며 웨어러블 생태계의
                시스템 UX를 고도화하는 일을 하고 있습니다.
              </p>
            </BlurFade>
          </div>

          {/* Right: shiba illustration blended into background */}
          <BlurFade delay={0.28} direction="up" className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Image
              src="/shiba.png"
              alt="시바견 일러스트"
              width={612}
              height={612}
              priority
              className="h-auto w-full max-w-[200px] object-contain [background:unset] sm:max-w-[240px] lg:max-w-[280px]"
            />
          </BlurFade>
        </div>

        {/* Bottom: quote + CTA */}
        <BlurFade delay={0.48} direction="up">
        <div className="flex flex-col items-start gap-5 border-t border-black/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-black/55">
            <span className="italic">“좋은 경험은 보이지 않는다”</span>
            <br />
            보이지 않는 흐름을 설계하는 디자이너.
          </p>
          <a
            href="mailto:hwayoung38.song@samsung.com"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-black px-7 py-3 text-sm font-bold transition-colors hover:bg-black hover:text-white"
          >
            연락하기
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        </BlurFade>
      </section>

      {/* ════════════════════ MARQUEE ════════════════════ */}
      <div
        aria-hidden
        className="overflow-hidden border-y-2 border-black"
        style={{ background: PINK }}
      >
        <div
          className="flex whitespace-nowrap py-3"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          <span className="text-sm font-black uppercase tracking-[0.15em] text-black">
            {MARQUEE_TEXT}
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* ════════════════════ STORY (dark) ════════════════════ */}
      <section id="about" style={{ background: INK }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <BlurFade delay={0.1} inView direction="up">
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: LIME }}
                >
                  — About
                </span>
              </BlurFade>
              <BlurFade delay={0.18} inView direction="up">
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                  Designing
                  <br />
                  the Invisible
                </h2>
              </BlurFade>
            </div>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-white/70">
              <BlurFade delay={0.26} inView direction="up">
                <p>
                  삼성전자에서 Galaxy Watch와 Galaxy Buds의 UX를 담당하고
                  있습니다. 작은 화면과 보이지 않는 인터랙션 속에서, 사용자가
                  의식하지 못할 만큼 자연스러운 경험을 만드는 데 집중합니다.
                </p>
              </BlurFade>
              <BlurFade delay={0.34} inView direction="up">
                <p className="text-white/55">
                  커뮤니케이션 앱에서 시작해 AI 어시스턴트 Bixby, 그리고
                  웨어러블 생태계까지 — 14년간 사람과 기술 사이의 거리를 좁히는
                  일을 해왔습니다.
                </p>
              </BlurFade>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
            {STATS.map(({ value, label, sub }, i) => (
              <BlurFade key={label} delay={0.42 + i * 0.1} inView direction="up">
                <div className="bg-white/[0.03] p-8">
                  <p
                    className="text-5xl font-black tabular-nums"
                    style={{ color: LIME }}
                  >
                    {value}
                  </p>
                  <p className="mt-3 font-semibold">{label}</p>
                  <p className="mt-1 text-sm text-white/40">{sub}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ WORKS (light) ════════════════════ */}
      <section id="works" style={{ background: CREAM }} className="text-black">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <BlurFade delay={0.1} inView direction="up">
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: ORANGE }}
            >
              — Selected Works
            </span>
          </BlurFade>
          <BlurFade delay={0.18} inView direction="up">
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-5xl">
              Works
            </h2>
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map(({ slug, title, tagline, thumbnail, accentColor }, i) => (
              <BlurFade key={slug} delay={0.26 + i * 0.08} inView direction="up">
                <Link
                  href={`/works/${slug}`}
                  className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                    <Image
                      src={thumbnail}
                      alt={title}
                      fill
                      className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <div
                    className="border-l-4 p-5"
                    style={{ borderColor: accentColor }}
                  >
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm text-black/60">{tagline}</p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CAREER (colored bars) ════════════════════ */}
      <section id="career" style={{ background: INK }} className="text-white">
        <div className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
              Career
            </h2>
            <span
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: PINK }}
            >
              2010 — Now
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {CAREER.map(({ period, title, desc, color }) => (
              <article
                key={period}
                className="group grid items-center gap-4 rounded-2xl border-2 border-black p-6 text-black transition-transform hover:-translate-y-1 md:grid-cols-[180px_1fr_auto] md:p-8"
                style={{ background: color }}
              >
                <time className="text-sm font-black uppercase tabular-nums">
                  {period}
                </time>
                <div>
                  <h3 className="text-xl font-black md:text-2xl">{title}</h3>
                  <p className="mt-1 text-sm font-medium text-black/70">
                    {desc}
                  </p>
                </div>
                <ArrowUpRight className="hidden size-7 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block" />
              </article>
            ))}
          </div>

          {/* Focus tags */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              Focus
            </span>
            {FOCUS_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CONTACT / FOOTER ════════════════════ */}
      <footer id="contact" style={{ background: LIME, color: INK }}>
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]">
            — Let&apos;s talk
          </p>
          <h2
            className="mt-4 font-black uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 9vw, 6rem)" }}
          >
            함께
            <br />
            만들어요
          </h2>

          <a
            href="mailto:hwayoung38.song@samsung.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-80"
          >
            <Mail className="size-5" />
            hwayoung38.song@samsung.com
          </a>

          <div className="mt-16 flex flex-col gap-4 border-t-2 border-black/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold">
              © 2025 송화영 (Hwayoung Song)
            </p>
            <nav className="flex gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
