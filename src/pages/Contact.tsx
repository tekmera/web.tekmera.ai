import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Contact = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-8">
        Contact
      </h1>

      <p className="text-secondary-foreground leading-relaxed mb-12 max-w-xl">
        We work with organizations whose systems have outgrown the thinking behind them. If that sounds like your situation, reach out.
      </p>

      <div className="space-y-8">
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book an Introductory Strategy Call
          </a>
        </Button>

        <div className="space-y-3 text-secondary-foreground">
          <p>
            <span className="text-muted-foreground text-sm block mb-1">Email</span>
            <a href="mailto:contact@tekmera.ai" className="text-primary hover:underline">
              contact@tekmera.ai
            </a>
          </p>
          <p>
            <span className="text-muted-foreground text-sm block mb-1">Location</span>
            Fredericton, New Brunswick, Canada
          </p>
        </div>
      </div>
    </article>
  </Layout>
);

export default Contact;
