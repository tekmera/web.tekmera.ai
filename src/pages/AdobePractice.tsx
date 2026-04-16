import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const AdobePractice = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-8">
        Adobe Workfront &amp; Fusion Architecture
      </h1>

      <div className="text-secondary-foreground leading-relaxed space-y-4 mb-16">
        <p>
          Tekmera has operated Workfront implementations hosted in AWS at enormous scale since 2017. Enterprise development, software development, and architecture — through the lens of Adobe Workfront and Fusion. Platform integration, identity management, and large-scale process automation across Fortune 100 organizations, including some of the ten largest companies in the world.
        </p>
        <p>
          We don't just build scenarios. We design processes. Scenarios are just the way we express them.
        </p>
        <p>
          Fusion developers come to us when they have questions. Workfront consultants come to us when they want to know how Fusion should work with their ideas. Organizations come to us when they want to know how their Adobe practice integrates across their existing platforms at scale with AI.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">What we deliver</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            <span className="text-foreground font-medium">Enterprise process architecture.</span> Designing how work, content, and automation flow across an organization's Workfront and Fusion environment — and how that environment connects to everything around it.
          </p>
          <p>
            <span className="text-foreground font-medium">Custom Workfront API implementations.</span> Programmatic integrations and automations through the Workfront API. Building against the API since 2017.
          </p>
          <p>
            <span className="text-foreground font-medium">Fusion architecture at scale.</span> Design, build, optimization, and governance of complex Fusion automation systems. Dozens of Fusion automations across enterprise environments.
          </p>
          <p>
            <span className="text-foreground font-medium">AI-augmented automation.</span> Classification, content analysis, and intelligent routing integrated into Workfront and Fusion workflows. Enterprise architecture combined with hands-on AI implementation.
          </p>
          <p>
            <span className="text-foreground font-medium">Cross-platform integration.</span> How Adobe Workfront and Fusion fit into the broader stack — content supply chain, marketing operations, digital asset management, identity management, and cross-platform orchestration.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">Tekmera Explorer — Fusion Diagnostic Tooling</h2>
        <p className="text-secondary-foreground leading-relaxed mb-6">
          We built Tekmera Explorer because enterprise Fusion environments get complex enough that manual inspection stops working. It's a diagnostic platform that reads exported Fusion blueprints and turns them into structured, queryable analysis.
        </p>
        <p className="text-secondary-foreground leading-relaxed mb-8">Three core reports:</p>

        <div className="space-y-10">
          <div>
            <h3 className="text-xl text-foreground mb-3">Blueprint Summary</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Point it at a blueprint and get a full architectural breakdown — component counts, module types, routers, filters, error handlers, trigger analysis, connection mapping, risk indicators, and a change surface index. A 900-component scenario becomes a navigable report in seconds instead of hours of manual inspection.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-foreground mb-3">Cross-Blueprint Search</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Search for a field, a value, a module type, or any string across an entire blueprint collection. Results show exactly where the match lives — which blueprint, which component, which path through the flow — with full filter condition context so you can see how the match is being used, not just that it exists. Searched across 97 blueprints at a time during enterprise client work.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-foreground mb-3">Blueprint Diff</h3>
            <p className="text-secondary-foreground leading-relaxed">
              Compare two versions of a blueprint side by side. Change magnitude scoring, component-level change detection, and a structured breakdown of what moved between versions. Built for the reality of enterprise Fusion work where scenarios evolve across environments (production, sandbox) and teams need to understand what actually changed.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h3 className="text-xl text-foreground mb-3">Why this exists</h3>
          <p className="text-secondary-foreground leading-relaxed">
            Enterprise Fusion environments at Fortune 100 scale run dozens to hundreds of scenarios with thousands of components. When something breaks, or when a new team inherits an environment, or when an organization needs to understand what their automation landscape actually does — manual inspection doesn't scale. Tekmera Explorer was built from years of doing that work and needing better tools to do it.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">Credentials</h2>
        <ul className="space-y-3 text-secondary-foreground">
          {[
            "15+ years enterprise systems architecture and software development",
            "8+ years in the Adobe Workfront/Fusion ecosystem",
            "Adobe Fusion certified",
            "Workfront API development since 2017",
            "Dozens of custom Workfront implementations and Fusion automations",
            "Fortune 100 delivery including top-ten Fortune companies",
            "Enterprise platform integration experience across identity management, content operations, and process automation",
            "Proprietary diagnostic tooling built from enterprise Fusion practice",
          ].map((item) => (
            <li key={item} className="border-l-2 border-primary pl-5">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border pt-12">
        <p className="text-secondary-foreground mb-6">
          Tekmera works directly with enterprise Adobe practices and consultancies who need specialized Fusion architecture and AI implementation depth.
        </p>
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book an Introductory Strategy Call
          </a>
        </Button>
      </section>
    </article>
  </Layout>
);

export default AdobePractice;
