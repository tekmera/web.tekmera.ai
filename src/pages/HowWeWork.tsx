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
        The motion is the same every time — translate, shape, execute — but what that looks like depends on who you are and what you're carrying.
      </p>

      {/* For Founders */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">For Founders</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You have domain expertise and a product idea — but what you're describing isn't quite the product. The real thing is underneath. You can feel it, but you can't spec it.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          We sit with you, decompose how you think about the problem, and find the product you're actually building. Then we build the first version.
        </p>
        <p className="text-secondary-foreground font-medium mb-3">This is for you if:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-secondary-foreground leading-relaxed mb-6">
          <li>You keep explaining your idea and people nod but don't get it</li>
          <li>You've talked to dev shops and the quotes don't match what you're trying to do</li>
          <li>You know your space deeply but you've never built software before</li>
          <li>You have a prototype that works but isn't the right product</li>
          <li>You need someone who can see what you see and actually build it</li>
        </ul>
        <p className="text-secondary-foreground leading-relaxed italic">
          You leave with a working product grounded in what you actually know — not what you thought you needed to spec.
        </p>
      </section>

      {/* For Enterprises */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">For Enterprises</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          Your senior people can't be everywhere. The judgment that makes your best operators effective is locked in their heads, and no amount of training, documentation, or shadowing has transferred it.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          We extract that reasoning, find the decision points your experts don't know they're running, and encode it into AI-driven tools the rest of your team can use.
        </p>
        <p className="text-secondary-foreground font-medium mb-3">This is for you if:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-secondary-foreground leading-relaxed mb-6">
          <li>Quality depends on who's in the room and you can't grow past that</li>
          <li>You've tried documenting tribal knowledge and it didn't stick</li>
          <li>Your junior people are competent but miss the connections your seniors see automatically</li>
          <li>You're scaling a team and the expertise isn't transferring</li>
          <li>You need AI that reasons, not just automates</li>
        </ul>
        <p className="text-secondary-foreground leading-relaxed italic">
          You leave with a system that lets your team operate at a level that previously required your best people in the room.
        </p>
      </section>

      {/* For Non-Profits */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">For Non-Profits & Social Impact</h2>
        <p className="text-secondary-foreground leading-relaxed mb-4">
          You have a mission, a small team, and operational knowledge that nobody's been able to turn into something scalable. You've seen what AI can do but don't know where it fits or how to avoid wasting money on the wrong thing.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          We start with what your team actually knows and find where AI creates real leverage — not automation for its own sake, but systems that let your impact scale without scaling your headcount.
        </p>
        <p className="text-secondary-foreground font-medium mb-3">This is for you if:</p>
        <ul className="list-disc list-outside pl-5 space-y-2 text-secondary-foreground leading-relaxed mb-6">
          <li>Your team's expertise is the program, and it doesn't survive turnover</li>
          <li>You've been pitched AI solutions that feel like tech looking for a problem</li>
          <li>You need to do more with the same budget and the same people</li>
          <li>You want something built, not a strategy deck</li>
          <li>You need someone who understands the mission before touching the technology</li>
        </ul>
        <p className="text-secondary-foreground leading-relaxed italic">
          You leave with a working system your team can use — built around what you actually do, not what a vendor assumed you needed.
        </p>
      </section>

      {/* The Motion */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-10">The Motion</h2>
        <p className="text-secondary-foreground leading-relaxed mb-10">
          Every engagement follows the same three phases:
        </p>
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
              We build a rough model. You correct it. Each correction reveals what you actually know — the implicit judgment, the unstated constraints. The real product emerges through refinement, not specification.
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

      {/* Flexible by Design */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-2xl text-foreground mb-6">Flexible by Design</h2>
        <p className="text-secondary-foreground leading-relaxed">
          Engagements are scoped around a goal, not a fixed spec. The shape changes as extraction reveals what's actually there. Rigidity kills the process.
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
