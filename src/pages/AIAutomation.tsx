import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const AIAutomation = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-8">
        AI without architecture is just faster noise.
      </h1>

      <div className="text-secondary-foreground leading-relaxed space-y-4 mb-16">
        <p>
          Most AI rollouts create more artifacts and less clarity. Teams produce more code and review more. Ship faster and revert more. Generate documentation no one trusts. Run pilots that stall the moment someone says "production."
        </p>
        <p>
          Speed without structure creates artifact proliferation, false confidence, and systems nobody trusts. Tekmera brings an architectural lens to AI adoption, figuring out where AI actually reduces friction and where it needs guardrails to stop amplifying bad structure at scale.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">What we deliver</h2>
        <ul className="space-y-3 text-secondary-foreground">
          {[
            "AI strategy grounded in where your teams actually lose time",
            "Organizational AI rollout across engineering, operations, and delivery teams",
            "Architecture and guardrails that channel AI effort into useful outcomes",
            "Cross-platform, production-grade automation design and build",
            "AI-assisted developer lifecycle integration (PR review, testing, documentation, incident triage)",
            "Upstream clarity work in requirements, design review, and gap analysis, where AI reduces rework before it starts",
          ].map((item) => (
            <li key={item} className="border-l-2 border-primary pl-5">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">What makes Tekmera different</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            We've led AI rollouts with 100+ person software organizations and seen what actually sticks. The gains come from fewer reversals, fewer clarifications, and less rework.
          </p>
          <p>
            That requires architecture. Without strong boundaries, AI over-centralizes, ignores separation of concerns, and optimizes for quantity over clarity. Strong architecture channels AI. Weak architecture creates noise. Tekmera makes sure the architecture is in place before the tooling scales.
          </p>
          <p>What we've seen consistently:</p>
          <ul className="space-y-3 pl-5 list-disc marker:text-primary">
            <li>AI flattens low-value syntax decisions and accelerates templated work like scaffolding, tests, and documentation</li>
            <li>It catches small bugs before they become large downstream issues and narrows debugging earlier</li>
            <li>It reduces cognitive overhead during change and review</li>
            <li>Without guardrails, it generates artifacts faster than anyone can synthesize them, operates with partial context, and produces outputs that sound correct while degrading review discipline</li>
          </ul>
          <p className="text-foreground font-medium">
            The productivity is in reversing less. That's an architecture problem.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">Integrations we've built</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Workfront",
            "Salesforce",
            "Jira",
            "Monday.com",
            "AWS",
            "Database Systems",
            "SAP",
            "Custom APIs",
            "Internal Enterprise Systems",
          ].map((item) => (
            <span
              key={item}
              className="border border-border rounded-full px-4 py-2 text-sm text-secondary-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="text-xl text-foreground mb-6">If your team is:</h2>
        <ul className="space-y-3 text-secondary-foreground mb-6">
          <li className="border-l-2 border-primary pl-5">Producing more code and reviewing more</li>
          <li className="border-l-2 border-primary pl-5">Shipping faster and reverting more</li>
          <li className="border-l-2 border-primary pl-5">Generating documentation no one trusts</li>
          <li className="border-l-2 border-primary pl-5">Running pilots that stall in production</li>
          <li className="border-l-2 border-primary pl-5">Feeling slower even though the tooling is faster</li>
        </ul>
        <p className="text-foreground font-medium mb-8">
          You have an architecture problem.
        </p>
        <p className="text-secondary-foreground mb-8">If this is happening inside your team, let's talk.</p>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book an Introductory Strategy Call
          </a>
        </Button>
      </section>
    </article>
  </Layout>
);

export default AIAutomation;