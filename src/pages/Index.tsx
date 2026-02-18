import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          The thinking behind your systems doesn't survive the people who built them.
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed max-w-2xl mb-10">
          We make your systems understandable to someone who didn't build them. So you can hand off, scale, and change things without starting from zero.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="cta" size="lg" asChild>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              Book an Introductory Strategy Call
            </a>
          </Button>
          <Button variant="ctaOutline" size="lg" asChild>
            <a href="#services">See how we work</a>
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-10">What we see</h2>
          <ul className="space-y-5 text-secondary-foreground leading-relaxed">
            <li className="border-l-2 border-primary pl-5">Your Workfront environment was configured three years ago. The person who set it up is gone. Nobody wants to touch the Fusion scenarios.</li>
            <li className="border-l-2 border-primary pl-5">Your AI pilot impressed leadership in demo. Six months later, it still isn't in production.</li>
            <li className="border-l-2 border-primary pl-5">You're paying a Workfront partner to configure things you could own if anyone on your team actually understood the architecture.</li>
            <li className="border-l-2 border-primary pl-5">Every integration breaks when something upstream changes because nobody mapped the dependencies.</li>
            <li className="border-l-2 border-primary pl-5">Your developers are generating more code with AI and shipping slower because review and rework doubled.</li>
            <li className="border-l-2 border-primary pl-5">The system works. Only one person knows why. They're tired.</li>
          </ul>
          <p className="mt-10 text-foreground font-medium mb-8">
            If this is happening inside your team, talk to us before you touch the next change.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              Book an Introductory Strategy Call
            </a>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="border-t border-border bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-12">What we do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl text-foreground mb-4">Adobe Workfront</h3>
              <p className="text-secondary-foreground leading-relaxed mb-6">
                Enterprise work management, engineered like enterprise software. Implementation, Fusion automation, and custom integrations, built by a team that understands both Workfront and the enterprise software it has to talk to.
              </p>
              <Link to="/services/workfront" className="text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl text-foreground mb-4">AI & Automation</h3>
              <p className="text-secondary-foreground leading-relaxed mb-6">
                AI without architecture is just faster noise. Strategy, rollout, and automation built around where your teams actually lose time.
              </p>
              <Link to="/services/ai-automation" className="text-primary font-medium hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "15+ years of experience across Fortune 100 programs",
              "30+ enterprise rollouts from discovery through long-term operations",
              "Active in New Brunswick's consulting, enterprise, and nonprofit sectors",
              "Propel ICT accelerator participant",
            ].map((item) => (
              <p key={item} className="text-secondary-foreground text-sm border-l-2 border-border pl-4">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Preview */}
      <section className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-12">How every engagement runs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understand", text: "We map what's actually happening before we touch anything." },
              { step: "02", title: "Design & Build", text: "We build with intent and discipline." },
              { step: "03", title: "Govern", text: "We make sure the system holds after the engagement ends." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-primary font-body text-sm font-semibold mb-2">{item.step}</p>
                <h3 className="text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/how-we-work" className="text-primary font-medium hover:underline">
              See our full approach →
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-6">Where we're going</h2>
          <div className="text-secondary-foreground leading-relaxed space-y-4">
            <p>
              Every organization has senior people whose judgment holds everything together. They know whether work is ready to start, whether the architecture will hold, whether the handoff will survive. They're also the bottleneck.
            </p>
            <p>
              Tekmera is building technology that captures that judgment, making it structured, transferable, and durable. So teams can scale their thinking alongside their headcount.
            </p>
            <p className="text-foreground font-medium">
              Our consulting is where we learn what breaks. Our product is how we fix it at scale. Automation is where we start. Clarity is what we're building.
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
                Book an Introductory Strategy Call
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
