import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prototype to Production",
  description:
    "You have a prototype that proves the idea. Tekmera turns the gap into a lean build plan: the simplest version to build first, the route to scale, the team it takes, and what it costs. Real engineering estimates you can verify, grounded in what you actually built.",
  openGraph: {
    title: "Prototype to Production | Tekmera",
    description:
      "You have a prototype that proves the idea. Tekmera turns the gap into a lean build plan: the simplest version to build first, the route to scale, the team it takes, and what it costs. Real engineering estimates you can verify, grounded in what you actually built.",
  },
};

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

export default function PrototypeToProductionPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-8">
        Prototype to Production
      </h1>

      <div className="text-secondary-foreground leading-relaxed space-y-4 mb-16">
        <p>
          You&apos;ve got a prototype that proves the idea. Now people want the real thing, and you need a clear read on what it will actually take to get there.
        </p>
        <p>
          Tekmera turns the gap into a lean build plan: the simplest version to build first, the route to scale, the team it takes, and what it costs. These are real engineering estimates you can verify, grounded in what you actually built and in having shipped this at every size.
        </p>
      </div>

      {/* What you get */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">What you get</h2>
        <ul className="space-y-3 text-secondary-foreground">
          <li className="border-l-2 border-primary pl-5">
            <span className="text-foreground font-medium">An honest read on the current build:</span> what&apos;s solid, what needs to change
          </li>
          <li className="border-l-2 border-primary pl-5">
            <span className="text-foreground font-medium">The MVP:</span> the simplest end-to-end version to build first
          </li>
          <li className="border-l-2 border-primary pl-5">
            <span className="text-foreground font-medium">The route to scale:</span> what comes next, in the right order
          </li>
          <li className="border-l-2 border-primary pl-5">
            <span className="text-foreground font-medium">The team it takes:</span> the roles the build actually requires
          </li>
          <li className="border-l-2 border-primary pl-5">
            <span className="text-foreground font-medium">What it costs:</span> realistic cost and timeline estimates
          </li>
        </ul>
      </section>

      {/* How it works */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">How it works</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-foreground mb-3">1. A 30-minute fit call</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Free. We go through what you&apos;ve built and where you&apos;re trying to take it. You leave knowing where the biggest risk sits and whether the full plan is worth doing. No pitch, and nothing to prepare.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">2. The build plan</h3>
            <p className="text-secondary-foreground leading-relaxed">
              $2,500 fixed, one product. A working session or two while we dig into what you&apos;ve actually built, then the written plan in your hands within about a week. Everything above, costed and sequenced, in a document you can act on and hold a developer&apos;s quote up against.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">3. Build it</h3>
            <p className="text-secondary-foreground leading-relaxed">
              If you bring us in to build it, the $2,500 is credited toward the build, and the plan you already paid for becomes the blueprint the work runs on. If you take it elsewhere, it is still yours to hand to whoever does.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border pt-12">
        <p className="text-secondary-foreground mb-6">
          Have a prototype and a real build decision in front of you? Start with a fit call.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book a 30-minute fit call →
          </a>
        </Button>
      </section>
    </article>
  );
}
