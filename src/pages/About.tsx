import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import davidPhoto from "@/assets/david-kershaw.png";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const testimonials = [
  {
    quote: "You are meticulous, professional, and passionate. You have really pushed us forward over the several years that you have worked with us. We're better because you're on our team.",
    attribution: "Director, Enterprise Client",
  },
  {
    quote: "I am pretty sure that David is a unicorn as he blends development, user experience design, deep knowledge of our instance and business, and exceptional communication skills. I cannot fathom what we would do without him.",
    attribution: "SVP, Commercial Operations",
  },
  {
    quote: "David possesses a rare combination of having a depth of technical knowledge, excellent ability to coach and mentor other team members, and strong work ethic. One of the strongest technical leads I have ever worked with.",
    attribution: "Senior Engineering Leader",
  },
  {
    quote: "A great strength of his is the ability to see decisions within a larger context, integrating diverse technologies and designs to form a seamless and effective platform. Forward-thinking, thorough, and easy to work with.",
    attribution: "Cloud Software Engineer, AWS",
  },
];

const About = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      {/* David Kershaw */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
          <img
            src={davidPhoto}
            alt="David Kershaw"
            className="w-36 h-36 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
              David Kershaw
            </h1>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              Fifteen years of enterprise systems architecture across Fortune 100 organizations. The ability to sit with someone, hear what they're describing, see what it actually is, and build it.
            </p>
            <p className="text-muted-foreground text-sm mb-1">Based in Fredericton, New Brunswick.</p>
            <a href="mailto:contact@tekmera.ai" className="text-sm text-primary hover:underline">
              contact@tekmera.ai
            </a>
          </div>
        </div>
      </section>

      {/* What People Say */}
      <section className="border-t border-border pt-12 mb-16">
        <h2 className="text-2xl text-foreground mb-10">What People Say</h2>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-2 border-primary pl-5">
              <p className="text-secondary-foreground leading-relaxed italic mb-2">"{t.quote}"</p>
              <footer className="text-sm text-muted-foreground">— {t.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="border-t border-border pt-12 mb-16">
        <h2 className="text-2xl text-foreground mb-10">Track Record</h2>

        <h3 className="text-lg font-heading text-foreground mb-4">Enterprise</h3>
        <ul className="space-y-3 text-secondary-foreground leading-relaxed list-disc pl-5 mb-10">
          <li>Reduced automation operations by 50% across a major enterprise environment by replacing reactive webhook cascades with controlled batch processing</li>
          <li>Rebuilt a 250-module automation flow into 35 modules — cutting runtime from 60+ minutes to under 20 with zero loss in functionality</li>
          <li>Identified and resolved 30,000 duplicate records caused by a single whitespace inconsistency in key generation logic</li>
          <li>Caught a runaway "one-time" scenario that silently consumed 15 million operations over three months</li>
        </ul>

        <h3 className="text-lg font-heading text-foreground mb-4">Studio</h3>
        <p className="text-secondary-foreground leading-relaxed">
          First studio engagements are underway. Case studies will be published here as projects ship.
        </p>
      </section>

      {/* CTA */}
      <Button variant="cta" size="lg" asChild>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
          See if we're a fit →
        </a>
      </Button>
    </article>
  </Layout>
);

export default About;
