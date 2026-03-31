import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        How We Work
      </h1>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-16 max-w-2xl">
        Every Tekmera engagement runs as a four-month sprint. We translate your strategy into a buildable system and decide what gets built, in what order, to deliver value and gather feedback as fast as possible. The focus is sequencing and scope, so you avoid long build cycles that produce the wrong thing.
      </p>

      {/* Founders */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Founders</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You understand your domain but don't have someone who can define and build the actual product.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We determine what needs to exist, scope the first version, and build it. AI where it adds leverage, lean everywhere else. Four months, working product.
        </p>
      </section>

      {/* Enterprises */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Enterprises</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your best people can't be everywhere. The judgment that makes them effective — the thing they see that less experienced people miss — is invisible even to them. They react correctly and can't explain why.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We sit with those people, map how they actually think, and encode it into AI that reasons the way they do. Your team gets access to the judgment without needing the person in the room.
        </p>
      </section>

      {/* Non-Profits */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Non-Profits</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your team does more with less, and critical knowledge sits with individuals. When demand grows, capacity does not.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We identify where AI creates leverage in your operation and build systems your team can use immediately, aligned with how they already work.
        </p>
      </section>

      {/* The Motion */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">The Motion</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Translate</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Convert your strategy and domain knowledge into a concrete system definition.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Shape</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Decide scope and sequencing: what gets built now, what waits, and what gets removed.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Execute</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Build and ship the first working version. AI where it adds leverage.
            </p>
          </div>
        </div>
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
