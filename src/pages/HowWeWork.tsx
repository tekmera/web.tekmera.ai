import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const HowWeWork = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        Every engagement follows the same discipline.
      </h1>
      <p className="text-lg text-secondary-foreground leading-relaxed mb-16 max-w-2xl">
        We understand before we build. We design before we deliver. And we make sure your team can own it after we leave.
      </p>

      <div className="text-secondary-foreground leading-relaxed mb-16">
        <p>
          This page describes how Tekmera approaches every engagement, whether it's a Workfront rollout, an AI implementation, or a system redesign. The services tell you what we do. This tells you how we think.
        </p>
      </div>

      {/* Phase 1 */}
      <section className="mb-16 border-t border-border pt-12">
        <p className="text-primary font-body text-sm font-semibold mb-2">Phase 01</p>
        <h2 className="text-2xl text-foreground mb-6">Understand. Before we touch anything.</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            We map what your system is actually doing. A fixed-scope diagnostic that surfaces hidden logic, structural risks, dependencies, and the assumptions holding everything together.
          </p>
          <p>
            It's a structural picture of your environment that tells you what's working, what's fragile, and what will break next.
          </p>
          <h3 className="text-foreground font-body font-semibold text-base mt-8 mb-3">What you get:</h3>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>A clear picture of what your system is optimizing for</li>
            <li>Identification of blind spots, single points of failure, and risk zones</li>
            <li>An honest assessment of what can be fixed and what needs rebuilding</li>
            <li>Visual system map and written report, delivered live</li>
          </ul>
          <p className="mt-6">
            <strong className="text-foreground">Who it's for:</strong> Teams scaling past their system's limits. Leaders who inherited something undocumented. Organizations preparing for AI who need to understand their foundation first.
          </p>
          <p><strong className="text-foreground">Format:</strong> Fixed scope. 1–4 weeks.</p>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="mb-16 border-t border-border pt-12">
        <p className="text-primary font-body text-sm font-semibold mb-2">Phase 02</p>
        <h2 className="text-2xl text-foreground mb-6">Design & Build. With intent and discipline.</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            When the current system won't hold or you're building something new, we design and build with intent. System redesign, automation, data pipelines, AI implementation, all built for production.
          </p>
          <h3 className="text-foreground font-body font-semibold text-base mt-8 mb-3">What you get:</h3>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>System model aligned to actual goals and constraints</li>
            <li>Defined process boundaries, roles, and orchestration layers</li>
            <li>Hands-on build and implementation</li>
            <li>Phased migration plan when replacing existing systems</li>
            <li>Full documentation and reference architecture</li>
            <li>Stakeholder walkthroughs so your team understands what was built and why</li>
          </ul>
          <p className="mt-6">
            <strong className="text-foreground">Who it's for:</strong> Teams post-audit who need a reset. Organizations deploying AI into real workflows. Leaders consolidating fragile tool stacks.
          </p>
          <p><strong className="text-foreground">Format:</strong> Scoped by project. Typically 3–8 weeks.</p>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="mb-16 border-t border-border pt-12">
        <p className="text-primary font-body text-sm font-semibold mb-2">Phase 03</p>
        <h2 className="text-2xl text-foreground mb-6">Govern. Make sure it holds after we leave.</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            This is where most engagements fail. The consultants leave, the system drifts, and six months later nobody understands it again. Tekmera's governance model is designed to prevent that.
          </p>
          <p>
            Ongoing architectural leadership embedded inside your team. Delivery teams move the system. We hold its shape, ensuring everything being built stays coherent, documented, and aligned as things change.
          </p>
          <h3 className="text-foreground font-body font-semibold text-base mt-8 mb-3">Three operating models:</h3>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li><strong className="text-foreground">Bring your own team</strong>: we embed as architect and governance lead</li>
            <li><strong className="text-foreground">Use a delivery partner</strong>: we oversee their work for coherence</li>
            <li><strong className="text-foreground">Let us bring delivery</strong>: we source trusted builders under our oversight</li>
          </ul>
          <h3 className="text-foreground font-body font-semibold text-base mt-8 mb-3">What you get:</h3>
          <ul className="space-y-2 pl-5 list-disc marker:text-primary">
            <li>Structural triage, architecture framing, tension tracking</li>
            <li>Oversight of all delivery, internal and external</li>
            <li>Real-time decision support across platforms and tools</li>
            <li>A system that stays governed while everything around it moves</li>
          </ul>
          <p className="mt-6">
            <strong className="text-foreground">Who it's for:</strong> Teams building fast without architectural continuity. Leaders juggling vendors and legacy logic. Anyone tired of systems that fall apart after the consultants leave.
          </p>
          <p><strong className="text-foreground">Format:</strong> Monthly retainer or project-based. Ongoing.</p>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border pt-12">
        <div className="text-secondary-foreground leading-relaxed space-y-4 mb-8">
          <p>
            These three phases are how every engagement runs, whether it takes two weeks or two years. The discipline is the same: understand first, design with intent, and make sure it holds.
          </p>
          <p>If this is how you want your next project to work, let's talk.</p>
        </div>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book an Introductory Strategy Call
          </a>
        </Button>
      </section>
    </article>
  </Layout>
);

export default HowWeWork;