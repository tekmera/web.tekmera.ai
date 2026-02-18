import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const About = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-12">
        About Tekmera
      </h1>

      <section className="mb-16">
        <div className="text-secondary-foreground leading-relaxed space-y-4">
          <p>
            Tekmera came from 15+ years inside complex enterprise environments. Fortune 100 programs across financial services, telecom, retail, and professional services. Dozens of large-scale initiatives from discovery through long-term operations. The same pattern kept showing up everywhere.
          </p>
          <p>
            The reasoning behind complex systems doesn't survive. People build, people leave, and the logic, intent, and decisions behind what was built disappear with them. What remains is a system nobody fully understands.
          </p>
          <p>
            Tekmera exists to fix that. We make the thinking behind complex systems visible, durable, and transferable, first through consulting, and eventually through technology that does it at scale.
          </p>
          <p className="text-muted-foreground text-sm mt-6">Based in Fredericton, New Brunswick.</p>
        </div>
      </section>

      <section className="border-t border-border pt-12 mb-16">
        <h2 className="text-2xl text-foreground mb-8">What Tekmera believes</h2>
        <ul className="space-y-5 text-secondary-foreground leading-relaxed">
          <li className="border-l-2 border-primary pl-5">
            Clarity before building. The thinking matters more than the tooling.
          </li>
          <li className="border-l-2 border-primary pl-5">
            Expert judgment is an organizational asset. It should be captured and transferable.
          </li>
          <li className="border-l-2 border-primary pl-5">
            Systems should be understandable by anyone who works with them.
          </li>
          <li className="border-l-2 border-primary pl-5">
            The best products come from doing the work first and letting the patterns reveal themselves.
          </li>
        </ul>
      </section>

      <Button variant="cta" size="lg" asChild>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
          Book an Introductory Strategy Call
        </a>
      </Button>
    </article>
  </Layout>
);

export default About;