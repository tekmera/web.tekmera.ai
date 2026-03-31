import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import davidPhoto from "@/assets/david-kershaw.png";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          Translate. Shape. Ship.
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed max-w-2xl mb-10">
          Tekmera translates expertise into systems that work without the expert in the room.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            See if we're a fit
          </a>
        </Button>
      </section>

      {/* The Problem */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-10">The Problem</h2>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>
              You know your domain. You've been in it for years. The product, the system, the judgment that runs your operation — it's all in your head. Getting it out is the hard part.
            </p>
            <p>
              The real product is always underneath the idea. The real system is underneath the process. Seeing it requires someone who understands the domain and the build deeply enough to surface what's actually there.
            </p>
          </div>
        </div>
      </section>

      {/* The Motion */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-12">The Motion</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl text-foreground mb-3">Translate</h3>
              <p className="text-secondary-foreground leading-relaxed">
                We sit with the person who knows and surface the reasoning they don't know they're running.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-foreground mb-3">Shape</h3>
              <p className="text-secondary-foreground leading-relaxed">
                We build a rough model. You correct it. Each correction reveals what you actually know. That's how the real product emerges.
              </p>
            </div>
            <div>
              <h3 className="text-xl text-foreground mb-3">Execute</h3>
              <p className="text-secondary-foreground leading-relaxed">
                We build it. AI at the center. Ship it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-10">Who This Is For</h2>
          <ul className="space-y-5 text-secondary-foreground leading-relaxed">
            <li className="border-l-2 border-primary pl-5">
              <span className="text-foreground font-medium">Founders</span> with real domain expertise who need the right product defined and built.
            </li>
            <li className="border-l-2 border-primary pl-5">
              <span className="text-foreground font-medium">Organizations</span> whose best people can't be everywhere. We encode their decision-making into tools the rest of the team can use.
            </li>
            <li className="border-l-2 border-primary pl-5">
              <span className="text-foreground font-medium">Enterprise teams</span> running systems no one fully understands. We make them legible and build what's needed to hold them together.
            </li>
          </ul>
        </div>
      </section>

      {/* Who's Behind This */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-8">Who's Behind This</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src={davidPhoto}
              alt="David Kershaw, Founder of Tekmera"
              className="w-36 h-36 rounded-full object-cover object-top flex-shrink-0"
            />
            <p className="text-secondary-foreground leading-relaxed">
              David Kershaw. Fifteen years of enterprise systems architecture across Fortune 100 organizations. The ability to sit with someone, hear what they're describing, see what it actually is, and build it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border bg-foreground">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl text-background mb-4 font-heading">Start a conversation</h2>
          <p className="text-background/70 mb-8">
            Tell us what you're dealing with. We'll tell you if we can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
                See if we're a fit →
              </a>
            </Button>
            <a href="mailto:contact@tekmera.ai" className="text-background/70 hover:text-background text-sm">
              contact@tekmera.ai
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
