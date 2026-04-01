import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        Work With Us
      </h1>

      {/* The Problem Is Translation */}
      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">The Problem Is Translation</h2>
        <div className="text-lg text-secondary-foreground leading-relaxed space-y-4 max-w-2xl">
          <p>Most teams do not fail because they cannot build.</p>
          <p>They fail because what needs to be built was never defined clearly enough in the first place.</p>
          <p>Founders know the opportunity but do not have a reliable path from idea to first version.</p>
          <p>Organizations know something critical is breaking, but the logic of the work still lives in a few experienced people.</p>
          <p>External teams build what was asked for. Internal teams inherit something that does not fit reality.</p>
          <p>That is a translation problem.</p>
          <p>Tekmera works with a small number of clients at a time to solve it.</p>
          <p>In focused four-month engagements, we turn strategy, expertise, and operational knowledge into working products and systems. We define what needs to exist, decide what gets built first, and ship the first version fast enough to learn from real use.</p>
          <p>First demo in two weeks. Continuous delivery from there.</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">Who We Work With</h2>

        <div className="mb-10">
          <h3 className="text-xl text-foreground mb-3">Founders With Deep Domain Insight and No Reliable Build Path</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>You do not need a long discovery process or a development shop waiting for perfect tickets. You need someone who can determine what the product actually is, cut scope aggressively, and get the first version into use.</p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-foreground mb-3">Organizations Where Critical Judgment Does Not Scale</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>Important decisions are being made correctly by a small number of experienced people and inconsistently by everyone else.</p>
            <p>The issue is not effort. The issue is that the logic of the work has never been turned into a usable system.</p>
            <p>Tekmera helps organizations translate that judgment into workflows, tools, and AI-supported systems that other people can actually use.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-foreground mb-3">Teams Applying AI Inside Real Constraints</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>Most AI work dies in one of two ways: it stays at the level of strategy, or it gets built without fitting the real environment.</p>
            <p>You need something that works inside actual constraints: architecture, governance, workflows, and delivery pressure.</p>
            <p>That is where Tekmera operates.</p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">What You Get</h2>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          Every engagement is designed to move from ambiguity to a working system quickly.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">You get:</p>
        <ul className="list-disc pl-6 text-secondary-foreground leading-relaxed space-y-2 mb-6">
          <li>A system definition with scoped first release</li>
          <li>A build sequence with hard decisions about what happens now, later, or not at all</li>
          <li>A working prototype or first production release</li>
          <li>Ongoing refinement based on real use</li>
        </ul>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>This is not a strategy engagement that ends in recommendations.</p>
          <p>It is not outsourced implementation detached from product judgment.</p>
          <p>The work is to determine the right system, then build it.</p>
        </div>
      </section>

      {/* How Tekmera Works */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">How Tekmera Works</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Translate</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Surface the real problem, the hidden logic of the work, and what the system actually needs to do.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Shape</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Decide scope and sequence. What gets built now. What waits. What gets removed.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Execute</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Ship the first working version. AI where it adds leverage. Lean systems everywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">The Outcome</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>A working system, not a document about one.</p>
          <p>Tekmera works with clients who need help deciding what should exist and need a partner who can carry that through into delivery.</p>
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
