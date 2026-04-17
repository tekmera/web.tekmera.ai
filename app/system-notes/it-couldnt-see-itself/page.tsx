import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "It Couldn't See Itself",
  description:
    "A single extra space turned a stable automation into a self-replicating loop of duplicate records. 30,000 duplicates from one invisible character.",
  openGraph: {
    title: "It Couldn't See Itself | Tekmera",
    description:
      "A single extra space turned a stable automation into a self-replicating loop of duplicate records. 30,000 duplicates from one invisible character.",
  },
};

export default function ItCouldntSeeItselfPage() {
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
          It Couldn&apos;t See Itself
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          A single extra space turned a stable automation into a self-replicating loop of duplicate records.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>
          Each Clarity Audit documents a real system engagement. An architectural readout. The goal is to surface structure.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Problem
        </p>
        <p>
          An automation implementing a standard &ldquo;search before create&rdquo; pattern, designed to be idempotent, created over 30,000 duplicate records across 1,000 work items. Despite checking for existing records before creation, every search returned &ldquo;not found,&rdquo; triggering new entries each run.
        </p>
        <p className="text-foreground font-medium">The system couldn&apos;t recognize what it had already created.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Root Cause
        </p>
        <p>
          The search and create steps used slightly different formulas to generate lookup keys:
        </p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Search: concatenated three fields</li>
          <li>Create: concatenated the same fields but inserted one extra space between two values</li>
        </ul>
        <p>
          That invisible difference meant each newly created record was unrecognizable to subsequent searches. On average, each work item generated thirty duplicates before anyone noticed.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Contributing Factors
        </p>
        <p>A single space triggered 30,000 duplicates. Nothing in the system&apos;s design would have caught it.</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li><span className="text-foreground font-medium">No shared key definition.</span> Search and create formulas were written independently.</li>
          <li><span className="text-foreground font-medium">No normalization.</span> No trimming, case standardization, or whitespace handling before comparison.</li>
          <li><span className="text-foreground font-medium">No database guardrails.</span> No unique constraint or key hashing to reject duplicates.</li>
          <li><span className="text-foreground font-medium">No anomaly detection.</span> No monitoring of create frequency or volume spikes.</li>
        </ul>
        <p>Four layers where a safeguard could have existed. None did.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Resolution
        </p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Standardized the concatenation formulas across both operations</li>
          <li>Added trim and case normalization before all key comparisons</li>
          <li>Ran a deduplication job using normalized key expressions</li>
          <li>Implemented alerts for unusual creation volume</li>
        </ul>
        <p>Zero duplicate creations after deployment. Full cleanup completed within 24 hours.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What This Surfaced
        </p>
        <p className="text-foreground font-medium">The system had no definition of sameness.</p>
        <p>
          It could search. It could create. But it had no shared, normalized concept of identity across those two operations. Each one constructed its own version of what a record looked like, independently, and nobody tested whether they agreed.
        </p>
        <p>
          Any system that must recognize the same entity twice needs one method of identification, shared across every operation that constructs or compares keys. Tested. Normalized. Visible.
        </p>
        <p className="text-foreground font-medium mt-6">
          Without that, the system can&apos;t see itself. And when a system can&apos;t see itself, it duplicates, contradicts, and erodes trust in every record it touches.
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
