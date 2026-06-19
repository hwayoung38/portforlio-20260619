"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

const LIME = "#CBFF57"

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

export function TallyForm() {
  const [submitted, setSubmitted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (
        e.data?.event === "Tally::FormSubmitted" ||
        e.data?.type === "tally-form-submitted"
      ) {
        setSubmitted(true)
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [])

  if (submitted) {
    return (
      <div className="mt-10 flex min-h-[240px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12">
        <div className="text-center">
          <p
            className="text-2xl font-black uppercase tracking-tight"
            style={{ color: LIME }}
          >
            ✓
          </p>
          <p className="mt-3 text-base font-semibold text-white">
            문의가 접수됐어요.
          </p>
          <p className="mt-1 text-sm text-white/50">
            확인 후 답장드릴게요.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.Tally?.loadEmbeds()}
      />
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <iframe
          ref={iframeRef}
          data-tally-src="https://tally.so/embed/J9GOl4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="500"
          frameBorder={0}
          title="함께 만들 프로젝트"
          className="block w-full"
        />
      </div>
    </>
  )
}
