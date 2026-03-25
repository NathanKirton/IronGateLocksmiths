import Image from "next/image";
import Link from "next/link";
import { Award, Clock3, MapPinned, ShieldCheck, Star, Wallet } from "lucide-react";

import { CallToActionBanner } from "@/components/shared/call-to-action-banner";
import { QuoteDialog } from "@/components/shared/quote-dialog";
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { areasCovered, services, siteConfig, trustBadges, whyChooseUs } from "@/lib/content";
import { getMetadata } from "@/lib/site";

export const metadata = getMetadata({
  title: "24/7 Emergency Locksmith South Shields",
  description: siteConfig.description,
  path: "/",
});

const heroStats = [
  { label: "Local rapid response", value: "Under 30 mins", icon: Clock3 },
  { label: "Emergency lockout labour", value: "From £44.99", icon: Wallet },
  { label: "Trusted workmanship", value: "DBS & insured", icon: ShieldCheck },
  { label: "Real local coverage", value: "South Shields + North East", icon: MapPinned },
];

export default function Home() {
  return (
    <div className="pb-24 lg:pb-0">
      <section className="container-shell grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="flex flex-col justify-center">
          <Badge>24 hour emergency locksmith</Badge>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            24/7 Emergency Locksmith South Shields
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Arrive in under 30 mins • From £44.99 • Local &amp; Trusted. Irongate Locksmiths provide lockouts, lock changes, UPVC door repairs, van locks and emergency boarding across South Shields and the North East.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a>
            </Button>
            <QuoteDialog />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <div className="font-semibold text-white">{badge.title}</div>
                <div className="mt-2 leading-6">{badge.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,212,255,0.22),_transparent_38%)]" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={siteConfig.heroImage}
              alt="Placeholder hero image showing a locksmith working carefully on a secure front door in evening light"
              width={1600}
              height={1200}
              priority
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Trusted local service</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Family based locksmith business in South Shields UK. No call centre, no hidden fees, and honest advice from a real local locksmith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-4 pb-12 sm:grid-cols-2 xl:grid-cols-4">
        {heroStats.map((item) => (
          <Card key={item.label}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">{item.label}</div>
                <div className="text-lg font-semibold text-white">{item.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="container-shell py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge>Services</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Locksmith services built around urgent local callouts</h2>
          </div>
          <Button asChild variant="ghost"><Link href="/services">View all services</Link></Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <Card key={service.slug} className="h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold text-cyan-200">{service.price}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8">
          <Badge>Why choose us</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white">A trustworthy local locksmith, not a faceless lead service</h2>
          <div className="mt-8 grid gap-4">
            {whyChooseUs.map((reason) => (
              <div key={reason} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                {reason}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3">
          <Image
            src={siteConfig.secondaryImage}
            alt="Placeholder supporting image showing a professional locksmith inspecting upgraded door hardware on a residential property"
            width={1400}
            height={1100}
            className="h-full min-h-[480px] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>Testimonials</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-white">Happy customers who needed honest, low cost locksmith help</h2>
            <p className="mt-4 max-w-xl text-slate-300">We always get a big thumbs up from our customers because we save them money and deliver a quality service.</p>
            <div className="mt-8 flex items-center gap-3 text-cyan-200">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3">
            <iframe
              src={siteConfig.mapEmbed}
              title="Map showing Irongate Locksmiths coverage around South Shields"
              className="h-[420px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 sm:p-8">
            <Badge>Areas covered</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-white">South Shields first, then the wider North East</h2>
            <p className="mt-4 text-slate-300">From Hebburn to Newcastle, Durham to Hartlepool, Irongate Locksmiths offer emergency callouts, repairs and security upgrades throughout the region.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {areasCovered.map((area) => (
                <span key={area} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{area}</span>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-slate-200">
              <Award className="mb-3 h-5 w-5 text-cyan-300" />
              Master locksmith trained, DBS checked, fully insured, and focused on explaining the issue clearly before work starts.
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-12">
        <CallToActionBanner />
      </section>
    </div>
  );
}
