import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { QuoteDialog } from "@/components/shared/quote-dialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

export function CallToActionBanner() {
  return (
    <section className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(0,212,255,0.2),_transparent_45%),linear-gradient(135deg,_rgba(10,37,64,0.92),_rgba(15,23,42,0.96))] p-8 sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Ready to help</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Need a local locksmith right now?</h2>
          <p className="mt-3 text-slate-300">Call Simon directly for lockouts, lock changes, UPVC door repairs, emergency boarding and security upgrades across South Shields and the North East.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={siteConfig.phoneHref}>
              <PhoneCall className="h-4 w-4" />
              Call {siteConfig.phoneDisplay}
            </a>
          </Button>
          <QuoteDialog triggerLabel="Get Instant Quote" />
          <Button asChild variant="ghost" size="lg">
            <Link href="/contact">
              Contact page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}