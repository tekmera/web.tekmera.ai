import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tekmera. Book an introductory strategy call or email us directly.",
  openGraph: {
    title: "Contact | Tekmera",
    description:
      "Get in touch with Tekmera. Book an introductory strategy call or email us directly.",
  },
};

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

export default function ContactPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        See if we&apos;re a fit
      </h1>

      <p className="text-secondary-foreground leading-relaxed mb-12">
        Tell me what you&apos;re working on.
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
  );
}
