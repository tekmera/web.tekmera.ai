import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        How We Work
      </h1>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-4 max-w-2xl">
        Every Tekmera engagement runs as a four-month sprint. We define a goal, build lean, and ship something real.
      </p>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-16 max-w-2xl">
        The motion is the same every time — translate, shape, execute — but what that looks like depends on what you're carrying when you walk in.
      </p>

      {/* Founders */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Founders</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You've been explaining your idea for months. Some people nod. Nobody builds it right. Dev shops quote you on what you described, and what you described isn't the product — you know that, but you can't articulate what is.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          The product is underneath. It's in the judgment calls you make without thinking, the corrections you give when someone gets it wrong, the thing you keep saying that nobody writes down.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We find it. We build a rough version. You tell us what's wrong with it. Each correction gets us closer to the thing you actually meant. Four months later, it exists.
        </p>
      </section>

      {/* Enterprises */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Enterprises</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your best people can't be everywhere. The judgment that makes them effective — the thing they see that less experienced people miss — doesn't survive documentation, training, or shadowing. You've tried. It didn't stick.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          The problem isn't knowledge transfer. It's that the reasoning is invisible to the person who has it. They don't know what they know. They just react correctly and can't explain why.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We sit with those people, surface the decision points they're running without knowing it, and encode them into AI that reasons — not automates. Your team gets access to the judgment without needing the person in the room.
        </p>
      </section>

      {/* Non-Profits */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Non-Profits</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your team's expertise is the program. When someone leaves, institutional knowledge walks out the door. When demand grows, you don't have the budget to grow with it.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You've probably been pitched AI tools that feel disconnected from what your team actually does. Chatbots trained on your website. Automation layered on top of processes that don't work yet.
        </p>
        <p className="text-secondary-foreground leading-relaxed">
          We start with what your people know — the accumulated judgment from years of direct service — and find where AI creates real leverage. Not a strategy deck. A working system, built around how your team actually operates, that your people can use the week we hand it over.
        </p>
      </section>

      {/* The Motion */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">The Motion</h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Translate</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We sit with the person who knows and surface the reasoning they don't know they're running. The real product or system is always underneath what's described.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Shape</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We build a rough model. You correct it. Each correction reveals what you actually know — the implicit judgment, the unstated constraints. The real thing emerges through refinement, not specification.
            </p>
          </div>
          <div>
            <h3 className="text-xl text-foreground mb-3">Execute</h3>
            <p className="text-secondary-foreground leading-relaxed">
              We build it. AI at the center. Fast iterations. Ship it.
            </p>
          </div>
        </div>
        <p className="text-secondary-foreground leading-relaxed mt-10">
          Engagements are scoped around a goal, not a fixed spec. The shape changes as extraction reveals what's actually there. That's the point.
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
