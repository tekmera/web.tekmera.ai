import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        Four-Month Engagements
      </h1>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-16 max-w-2xl">
        Every Tekmera engagement runs as a four-month sprint. We define a goal, build lean, and iterate fast.
      </p>

      {/* The Motion */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">The Motion</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Translate</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We sit with the person who knows and surface the reasoning they don't know they're running. The real product or system is always underneath what's described — this is where we find it.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Shape</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We build a rough model. You correct it. Each correction reveals what you actually know — the implicit judgment, the unstated constraints, the reasoning you've never had to articulate. The real product emerges through refinement, not specification.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Execute</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We build it. AI at the center. Lean, fast iterations. Ship it.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">What You Get</h2>
        <p className="text-secondary-foreground leading-relaxed">
          A built first version at the end of four months. Something that works — validated, functional, and grounded in what you actually know instead of what you thought you needed.
        </p>
      </section>

      {/* Flexible by Design */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Flexible by Design</h2>
        <p className="text-secondary-foreground leading-relaxed">
          Engagements are scoped around a goal, not a fixed spec. The shape of the product changes as extraction reveals what's actually there. That's the point — rigidity kills the extraction process. We stay flexible so the right thing gets built.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-border pt-12">
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            See if we're a fit →
          </a>
        </Button>
      </section>
    </article>
  </Layout>
);

export default HowWeWork;
