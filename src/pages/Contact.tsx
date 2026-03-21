import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

const Contact = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        See if we're a fit
      </h1>

      <p className="text-secondary-foreground leading-relaxed mb-12">
        Tell me what you're working on.
      </p>

      <div className="space-y-8">
        <Button variant="cta" size="lg" asChild>
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
            Book an Introductory Strategy Call
          </a>
        </Button>

        <p>
          <span className="text-muted-foreground text-sm block mb-1">Email</span>
          <a href="mailto:contact@tekmera.ai" className="text-primary hover:underline">
            contact@tekmera.ai
          </a>
        </p>
      </div>
    </article>
  </Layout>
);

export default Contact;
