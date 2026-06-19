import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { getWorkBySlug, WORKS } from "@/lib/works-data";

const CREAM = "#F4EFE6";
const INK = "#141414";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return WORKS.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return { title: "Work Not Found — 송화영" };
  }

  return {
    title: `${work.title} — 송화영`,
    description: work.tagline,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <div style={{ background: CREAM, color: INK }} className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-6 md:px-10 md:py-10">
        <BlurFade delay={0} direction="up">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 transition-colors hover:text-black"
          >
            <ArrowLeft className="size-4" />
            모든 작업물 보기
          </Link>
        </BlurFade>

        <BlurFade delay={0.08} direction="up">
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-black/10 bg-black/5">
            <Image
              src={work.heroImage}
              alt={work.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </BlurFade>

        <div className="mt-8">
          <BlurFade delay={0.16} direction="up">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black"
                style={{ background: work.accentColor }}
              >
                {work.year}
              </span>
              <span className="rounded-full border border-black/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/70">
                {work.role}
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.24} direction="up">
            <h1
              className="mt-6 font-black uppercase leading-[0.9] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
            >
              {work.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.32} direction="up">
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/70">
              {work.description}
            </p>
          </BlurFade>

          {work.links.length > 0 && (
            <BlurFade delay={0.4} direction="up">
              <div className="mt-10 flex flex-wrap gap-3">
                {work.links.map(({ label, href }) => (
                  <Button
                    key={label}
                    asChild
                    variant="outline"
                    className="rounded-full border-2 border-black px-6 py-5 text-sm font-bold hover:bg-black hover:text-white"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </div>
  );
}
