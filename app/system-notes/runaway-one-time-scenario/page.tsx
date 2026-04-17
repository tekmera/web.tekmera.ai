import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'The Runaway "One-Time" Scenario',
  description:
    "Small fix, big governance signal. A scenario labeled 'one-time execution' burned through 15 million operations over three months.",
  openGraph: {
    title: 'The Runaway "One-Time" Scenario | Tekmera',
    description:
      "Small fix, big governance signal. A scenario labeled 'one-time execution' burned through 15 million operations over three months.",
  },
};

export default function RunawayOneTimeScenarioPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link href="/system-notes" className="hover:text-foreground transition-colors">
            From the Field
          </Link>
          {" "}/ Field Work
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          The Runaway &ldquo;One-Time&rdquo; Scenario
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          Small fix, big governance signal.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>Sometimes the biggest governance signals show up in the smallest fixes.</p>
        <p>
          During a routine scenario usage review, one stood out: operations were off the charts compared to everything else. A scenario labeled &ldquo;one-time execution&rdquo; had been running continuously from early May until discovery in mid-August. By then, it had quietly burned through roughly 15 million operations.
        </p>
        <p>
          The fix was trivial. Stop the scenario. But what it revealed was more interesting than what it cost:
        </p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li><span className="text-foreground font-medium">No mechanism to enforce execution intent.</span> A process labeled &ldquo;one-time&rdquo; can run forever and nothing stops it.</li>
          <li><span className="text-foreground font-medium">No monitoring to flag abnormal usage</span> before it ballooned.</li>
          <li><span className="text-foreground font-medium">No shared governance</span> between teams working in the same automation layer. Promotion, scope, and ownership were unaligned.</li>
        </ul>
        <p>
          A simple operations threshold alert or an approval step before promotion would have caught this in days. Without those guardrails, a single misstep consumed millions of operations over three months, unchecked.
        </p>
        <p className="text-foreground font-medium mt-6">
          Small failures expose governance gaps that scale into real costs. The scenario was easy to stop. The question it raised was harder: what else is running that nobody is watching?
        </p>
      </div>

      <div className="border-t border-border mt-16 pt-8">
        <Link href="/system-notes" className="text-primary font-medium hover:underline">
          ← Back to From the Field
        </Link>
      </div>
    </article>
  );
}
