import Link from "next/link";

const BOOKING_LINK = "https://tekmera.zohobookings.ca/#/13034000000058028";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-heading text-xl text-foreground mb-2">
            Tekmera
          </p>
          <p className="text-sm text-muted-foreground">Fredericton, New Brunswick, Canada</p>
          <a href="mailto:contact@tekmera.ai" className="text-sm text-primary hover:underline">
            contact@tekmera.ai
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/work-with-us" className="text-secondary-foreground hover:text-foreground">Work With Us</Link>
          <Link href="/system-notes" className="text-secondary-foreground hover:text-foreground">From the Field</Link>
          <Link href="/about" className="text-secondary-foreground hover:text-foreground">About</Link>
          <Link href="/contact" className="text-secondary-foreground hover:text-foreground">Contact</Link>
        </div>
        <div>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-primary hover:underline"
          >
            Book an Introductory Strategy Call →
          </a>
        </div>
      </div>
    </footer>
  );
}
