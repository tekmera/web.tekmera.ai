import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "It Never Stopped Running",
  description:
    "When every time entry triggered a cascade, Friday meant failure. A clarity audit of reactive automation at enterprise scale.",
  openGraph: {
    title: "It Never Stopped Running | Tekmera",
    description:
      "When every time entry triggered a cascade, Friday meant failure. A clarity audit of reactive automation at enterprise scale.",
  },
};

export default function ItNeverStoppedRunningPage() {
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
          It Never Stopped Running
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          When every time entry triggered a cascade, Friday meant failure.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>
          Each Clarity Audit documents a real system engagement. An architectural readout. The goal is to surface structure.
        </p>

        <p className="text-foreground font-medium mt-10">Every Friday, the system buckled.</p>

        <p>
          Over 20,000 time entries were logged steadily throughout the day, often one every few seconds. Most came from offshore teams submitting weekly hours in bulk. The volume wasn&apos;t surprising. It was expected.
        </p>
        <p>But each of those entries triggered automation.</p>
        <p>Every single one.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Architecture
        </p>
        <p>The structure seemed logical at first glance:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>A time entry updated an hour record</li>
          <li>That hour update triggered a recalculation on the associated project</li>
          <li>The project update then triggered recalculation on the parent project</li>
        </ul>
        <p>
          The behavior was wired in. The system used event-based triggers to keep everything in sync. On paper, that looked like automation. In practice, it was a recursive loop with no limit and no boundaries.
        </p>
        <p>
          Each automation flow was scoped by name (hour logic, project rollup, aggregate flow) but not by execution context.
        </p>
        <p>One process updated another, which kicked off another, which reached back into the first.</p>
        <p>None of this was visible in a single place.</p>
        <p>
          Webhook storm chaos. An architecture where every small input is treated as an urgent event, without boundaries, batching, or orchestration.
        </p>
        <p>By Friday afternoon, the system was saturated.</p>
        <p>
          Operations queued indefinitely. New jobs couldn&apos;t start. Other automations failed outright, not because they were broken, but because the system couldn&apos;t recover.
        </p>
        <p>The only option was to shut everything down manually.</p>
        <p>
          Roll-up logic lagged. Project totals were incomplete. Reporting couldn&apos;t be trusted.
        </p>
        <p>And no one could tell whether the numbers were wrong or just not finished.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Fix
        </p>
        <p>The problem was the decision to treat every entry as urgent.</p>
        <p>The fix was structural.</p>
        <p>
          Instead of triggering a full chain of calculations for every time entry, a custom field was added to projects: <span className="text-foreground font-medium">requires time roll-up</span>.
        </p>
        <p>
          When an hour was logged, the related project was flagged. Once.
        </p>
        <p>
          If it was already flagged, nothing happened. Whether one person logged time or a hundred did, the result was the same: one tag.
        </p>
        <p>
          Then, every 12 hours, a scheduled process queried for flagged projects and ran the roll-up logic. Once per project, with full context.
        </p>
        <p>
          No more reactive triggering. No more hidden recursion. Just a timed, visible sweep of the work that actually needed to be done.
        </p>
        <p>
          The webhook was removed entirely, replaced with a flag and a controlled batch every 12 hours.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Result
        </p>
        <p>
          A 50% reduction in total automation operations across the environment. No loss in functionality. No more Friday shutdowns. Roll-up logic became observable and predictable, and data integrity was restored.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What People Noticed
        </p>
        <p>There were no objections to the delay.</p>
        <p>
          The truth is, no one had been relying on the numbers in the first place.
        </p>
        <p>
          They&apos;d been wrong for so long, noisy, incomplete, timing-sensitive, that most teams had stopped trusting them entirely.
        </p>
        <p>After the change, nothing felt slower.</p>
        <p>What people noticed was that the numbers were finally consistent. And finally usable.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What This Really Was
        </p>
        <p>
          The platform made it easy to react, to build flows that launched on every change. But the business process was batch. It needed rhythm. And integrity.
        </p>
        <p>
          The system expected regular input. What it got was thousands of people rushing to close their week. It was designed for data flow, not human behavior.
        </p>
        <p className="text-foreground font-medium mt-6">
          Replacing automatic reaction with buffered control didn&apos;t limit the system. It made the system finally do what it was meant to do.
        </p>
        <p className="text-foreground font-medium">
          Now it runs on purpose, at the right time, for the right reason. And the numbers can finally be trusted.
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
