import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        Work With Us
      </h1>
      <div className="text-lg text-secondary-foreground leading-relaxed mb-6 max-w-2xl space-y-4">
        <p>
          Tekmera works with a small number of clients at a time in focused four-month engagements.
        </p>
        <p>
          We help founders and organizations turn expertise, strategy, and operational knowledge into working products and systems. That means defining what needs to exist, deciding what gets built first, and shipping the first version fast enough to learn from real use.
        </p>
        <p>
          The point is not a long planning cycle. The point is to get to a working system quickly, with the right scope and the right sequence, so you do not spend months building the wrong thing.
        </p>
        <p>
          First demo in two weeks. Continuous delivery from there.
        </p>
      </div>

      {/* Who This Is For */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">Who This Is For</h2>

        <div className="mb-10">
          <h3 className="text-xl text-foreground mb-3">Founders Turning Expertise Into a Product</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>
              You have a strong idea, real domain knowledge, and a clear sense that there is something valuable here. What you do not have is a reliable way to turn that into a product without wasting months in ambiguity, overbuilding, or cycling through the wrong technical help.
            </p>
            <p>
              You need someone who can help define the product properly, scope the first version, and get it into the world quickly.
            </p>
            <p>
              Tekmera works with you to identify what actually needs to exist, what can wait, and what should not be built at all. Then we build the first version and start learning from reality.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl text-foreground mb-3">Teams Where Critical Judgment Does Not Scale</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>
              Your best people know how to make the right calls. Everyone else is working from fragments, workarounds, and partial context. The result is slower execution, inconsistent decisions, and too much dependency on a small number of people.
            </p>
            <p>
              You need a system that captures how the work actually gets decided and makes that usable by the rest of the organization.
            </p>
            <p>
              Tekmera helps turn expert judgment into operational systems, workflows, and AI-supported tools that reduce bottlenecks without flattening the complexity of the work.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl text-foreground mb-3">Organizations Trying to Apply AI Without Creating Fragility</h3>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>
              There is pressure to do something with AI, but most options either stay at the level of demos and slide decks or introduce systems that do not fit your actual environment.
            </p>
            <p>
              You need AI to create leverage inside real constraints: existing workflows, governance, architecture, and operating realities.
            </p>
            <p>
              Tekmera works inside those constraints. We identify where AI creates practical advantage, define the right system around it, and deliver something your team can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* What the Engagement Looks Like */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">What the Engagement Looks Like</h2>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          Every engagement is structured to move from ambiguity to a working system quickly.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">You get:</p>
        <ul className="list-disc pl-6 text-secondary-foreground leading-relaxed space-y-2 mb-6">
          <li>A concrete definition of what needs to exist</li>
          <li>Clear scope for the first version</li>
          <li>Sequencing decisions about what gets built now, later, or not at all</li>
          <li>A working first release delivered early in the engagement</li>
          <li>Ongoing delivery and refinement based on real feedback</li>
        </ul>
        <p className="text-secondary-foreground leading-relaxed">
          This is not strategy in isolation, and it is not outsourced implementation without product judgment. The work is to determine the right system, then build it.
        </p>
      </section>

      {/* The Motion */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">The Motion</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Translate</h3>
            <div className="text-secondary-foreground leading-relaxed space-y-4">
              <p>We turn your domain knowledge, operating context, and strategic intent into a concrete system definition.</p>
              <p>This is where we identify what matters, what the actual problem is, and what the product or system needs to do.</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Shape</h3>
            <div className="text-secondary-foreground leading-relaxed space-y-4">
              <p>We decide scope and sequence.</p>
              <p>What gets built first. What gets deferred. What gets removed. What creates value fastest. What creates learning fastest.</p>
              <p>This is the difference between building something real and disappearing into a long backlog.</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Execute</h3>
            <div className="text-secondary-foreground leading-relaxed space-y-4">
              <p>We build and ship the first working version.</p>
              <p>AI where it adds leverage. Lean systems everywhere else. The goal is a working product or operational system that can be used, tested, and improved in the real world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">How We Work</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>Tekmera is deliberately hands-on. We do not deliver recommendations and leave your team to figure out implementation alone.</p>
          <p>We work with clients who need help deciding what should exist and need a partner who can carry that through into delivery.</p>
          <p>The outcome is a working system, not a document about one.</p>
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
