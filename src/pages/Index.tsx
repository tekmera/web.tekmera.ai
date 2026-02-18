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
          <h2 className="text-2xl md:text-3xl text-foreground mb-10">Sound familiar?</h2>
          <ul className="space-y-5 text-secondary-foreground leading-relaxed">
            <li className="border-l-2 border-primary pl-5">The person who built your system left. Nobody knows how it works.</li>
            <li className="border-l-2 border-primary pl-5">Decision logic lives in one person's head. They're the bottleneck for everything.</li>
            <li className="border-l-2 border-primary pl-5">Every handoff creates rework because the reasoning was never captured.</li>
            <li className="border-l-2 border-primary pl-5">AI pilots that work in demos and stall the moment someone says "production."</li>
            <li className="border-l-2 border-primary pl-5">You're scaling by adding people because the system itself is opaque.</li>
            <li className="border-l-2 border-primary pl-5">Nobody fully understands what was built or why it was built that way.</li>
          </ul>
          <p className="mt-10 text-foreground font-medium">
            These are knowledge problems. The person who understood it is gone. The reasoning went with them.
          </p>
        </div>
      </section>

      {/* Urgency Block */}
      <section className="border-t border-border bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl text-foreground mb-10">If any of this is on your calendar</h2>
          <ul className="space-y-5 text-secondary-foreground leading-relaxed">
            <li className="border-l-2 border-primary pl-5">You're about to modify a live system and the person who built it is gone.</li>
            <li className="border-l-2 border-primary pl-5">You're scaling past the one senior person who holds everything together.</li>
            <li className="border-l-2 border-primary pl-5">You're onboarding a team into something nobody documented.</li>
            <li className="border-l-2 border-primary pl-5">You're deploying AI into a workflow that already breaks under pressure.</li>
            <li className="border-l-2 border-primary pl-5">You're handing off a system and there's no clean way to explain how it works.</li>
          </ul>
          <p className="mt-10 text-foreground font-medium">
            These are the moments where the cost of unclear systems shows up. Talk to us before you're in the middle of it.
          </p>
        </div>
      </section>

      {/* Services Overview */}

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