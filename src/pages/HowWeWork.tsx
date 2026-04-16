import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        Work With Us
      </h1>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-16 max-w-2xl">
        Every Tekmera engagement runs as a four-month sprint. We translate your strategy into a buildable system and decide what gets built, in what order, to deliver value and gather feedback as fast as possible. The focus is sequencing and scope, so you avoid long build cycles that produce the wrong thing.
      </p>

      {/* Founders */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Founders</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You have a product idea but no reliable way to get it built. Scope is still changing, and you don't trust a long build cycle to land on the right product.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You need something real, fast, that reflects what you actually mean.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We determine what needs to exist, scope the first version, and build it. AI where it adds leverage, lean everywhere else. First demo in two weeks. Continuous delivery from there.
        </p>
      </section>

      {/* Enterprises */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Enterprises</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Critical work moves slower than it should, and outcomes miss the mark. External teams don't integrate well, and internal teams don't have the capacity to push change through.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You need someone who can define what should exist and carry it through delivery inside real constraints.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We work inside your environment, identify where change creates the most impact, and build systems that fit your existing architecture, governance, and workflows. Delivered as working systems, not slide decks.
        </p>
      </section>

      {/* Non-Profits */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Non-Profits</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your capacity is limited, and critical knowledge sits with a small number of people. Demand grows, but your systems do not scale with it.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You need leverage without adding operational overhead.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We identify where AI creates meaningful leverage in your operation and build systems your team can use immediately, aligned with how they already work.
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

      {/* Practices */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Practices</h2>
        <Link
          to="/work-with-us/adobe-practice"
          className="block text-secondary-foreground hover:text-foreground transition-colors border-l-2 border-primary pl-5"
        >
          Adobe Workfront &amp; Fusion Architecture
        </Link>
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
