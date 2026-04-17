import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "David Kershaw. Fifteen years of enterprise systems architecture across Fortune 100 organizations.",
  openGraph: {
    title: "About | Tekmera",
    description:
      "David Kershaw. Fifteen years of enterprise systems architecture across Fortune 100 organizations.",
  },
};

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

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      {/* David Kershaw */}
      <section className="mb-16">
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-8">
          <Image
            src="/david-kershaw.png"
            alt="David Kershaw"
            width={144}
            height={144}
            className="w-36 h-36 rounded-full object-cover object-top flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
              David Kershaw
            </h1>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              Fifteen years of enterprise systems architecture across Fortune 100 organizations. The ability to sit with someone, hear what they&apos;re describing, see what it actually is, and build it.
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
              <p className="text-secondary-foreground leading-relaxed italic mb-2">&ldquo;{t.quote}&rdquo;</p>
              <footer className="text-sm text-muted-foreground">&mdash; {t.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Button variant="cta" size="lg" asChild>
        <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer">
          See if we&apos;re a fit →
        </a>
      </Button>
    </article>
  );
}
