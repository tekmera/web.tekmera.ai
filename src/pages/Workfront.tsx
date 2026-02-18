import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Workfront = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-8">
        Enterprise work management, engineered like enterprise software.
      </h1>

      <div className="text-secondary-foreground leading-relaxed space-y-4 mb-16">
        <p>
          Workfront doesn't break in demo. It breaks two years later, when the team that built it has turned over, the
          business has changed, and the Fusion automations nobody documented are running in production on assumptions
          that no longer hold.
        </p>
        <p>
          Most Workfront partners come from project management or marketing operations backgrounds. They configure the
          platform. Tekmera comes from enterprise software development. We architect it. That means clean data models,
          scalable architectures, integrations that hold when upstream systems change, and Fusion automations built with
          production-grade reliability.
        </p>
        <p>
          30+ enterprise Workfront rollouts across Fortune 500 organizations in financial services, telecom, retail, and
          professional services. Since 2017. That's experience watching how implementations fail at scale and building
          the ones that don't.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">What we deliver</h2>
        <ul className="space-y-3 text-secondary-foreground">
          {[
            "Workfront implementation and configuration",
            "Workfront Fusion automation design and build",
            "Custom integrations with enterprise systems (SAP, Salesforce, Jira, internal platforms)",
            "Migration from legacy work management platforms",
            "System redesign for existing Workfront environments that have outgrown their original setup",
            "Ongoing architecture, optimization, and governance",
          ].map((item) => (
            <li key={item} className="border-l-2 border-primary pl-5">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-foreground mb-6">What makes Tekmera different</h2>
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            An enterprise software development lens applied to a work management platform changes everything about how
            an implementation is built:
          </p>
          <ul className="space-y-3 pl-5 list-disc marker:text-primary">
            <li>Data models designed for how the business actually operates</li>
            <li>Fusion automations built with error handling, logging, and maintainability</li>
            <li>Architectures that scale with the organization</li>
            <li>Integrations engineered to hold when upstream systems change</li>
            <li>
              Clean handoffs where every decision, dependency, and design choice is documented so your team can own it
              after the engagement ends
            </li>
          </ul>
          <p>
            The combination of certified Adobe Workfront expertise and enterprise software engineering discipline is
            rare. Tekmera has both.
          </p>
          <p>
            A client asks: can Workfront handle our approval workflow? Any partner can answer that. A client asks: can
            Workfront trigger a process in a custom ERP, pass data through a middleware layer, and write back to an
            internal API while respecting a security model? That's where most partners bring in someone else. Tekmera
            designs both sides, the Workfront implementation and the enterprise software it has to talk to. Same
            conversation. Same team.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="text-xl text-foreground mb-6">If your Workfront environment:</h2>
        <ul className="space-y-3 text-secondary-foreground mb-6">
          <li className="border-l-2 border-primary pl-5">Feels increasingly fragile</li>
          <li className="border-l-2 border-primary pl-5">Depends on one or two people to understand it</li>
          <li className="border-l-2 border-primary pl-5">Requires manual reconciliation across systems</li>
          <li className="border-l-2 border-primary pl-5">Breaks when upstream data shifts</li>
        </ul>
        <p className="text-foreground font-medium mb-8">
          You don't have a configuration problem. You have an architectural problem.
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

export default Workfront;
