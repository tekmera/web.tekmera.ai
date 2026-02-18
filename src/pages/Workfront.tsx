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
          Workfront doesn't break in demo. It breaks two years later, when teams change, business priorities shift, and
          Fusion automations are running in production on assumptions no one remembers making.
        </p>
        <p>
          Tekmera approaches Workfront through an enterprise software development lens. That means clean data models,
          scalable architectures, integrations that hold when upstream systems evolve, and Fusion automations built with
          production-grade reliability.
        </p>
        <p>
          Since 2017, we've led 30+ enterprise Workfront rollouts across Fortune 500 organizations in financial services,
          telecom, retail, and professional services. That experience comes from seeing how implementations behave at
          scale, and designing them to endure.
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
            "System redesign for environments that have outgrown their original setup",
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
            Applying enterprise engineering discipline to a work management platform changes how systems hold up over
            time:
          </p>
          <ul className="space-y-3 pl-5 list-disc marker:text-primary">
            <li>Data models designed around real operational complexity</li>
            <li>Fusion automations built with error handling, logging, and maintainability</li>
            <li>Architectures that evolve with the organization</li>
            <li>Integrations engineered for change, not just stability</li>
            <li>Documented decision logic so your team can own the system after the engagement</li>
          </ul>
          <p>
            Tekmera combines certified Adobe Workfront expertise with enterprise software engineering depth.
          </p>
          <p>
            When the conversation extends beyond configuration, into integration design, data modeling, middleware
            coordination, or security alignment, it stays in one room, with one team.
          </p>
        </div>
      </section>

      <section className="border-t border-border pt-12">
        
        <p className="text-secondary-foreground mb-6">
          If your Workfront environment feels fragile, opaque, or increasingly dependent on tribal knowledge, the issue
          isn't configuration. It's architecture.
        </p>
        <p className="text-secondary-foreground mb-8">If that sounds familiar, let's talk.</p>
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
