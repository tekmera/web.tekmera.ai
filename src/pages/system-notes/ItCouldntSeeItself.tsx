import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const ItCouldntSeeItself = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link to="/system-notes" className="hover:text-foreground transition-colors">
            System Notes
          </Link>
          {" "}/ Clarity Audit
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          It Couldn't See Itself
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          A single extra space turned a stable automation into a self-replicating loop of duplicate records.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Context
        </p>
        <p>
          Each Clarity Audit documents a real system engagement. Not as a case study. As an architectural readout. The goal isn't to celebrate fixes. It's to surface structure.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Problem
        </p>
        <p>
          An automation implementing a standard "search before create" pattern, designed to be idempotent, created over 30,000 duplicate records across 1,000 work items. Despite checking for existing records before creation, every search returned "not found," triggering new entries each run.
        </p>
        <p className="text-foreground font-medium">The system couldn't recognize what it had already created.</p>

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
        <p>The root cause was a single space. The real problem was that nothing in the system's design would have caught it.</p>
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
          A single space was the trigger. But the real gap was architectural. Any system that must recognize the same entity twice needs one method of identification, shared across every operation that constructs or compares keys. Tested. Normalized. Visible.
        </p>
        <p className="text-foreground font-medium mt-6">
          Without that, the system can't see itself. And when a system can't see itself, it duplicates, contradicts, and erodes trust in every record it touches.
        </p>
      </div>

      <div className="border-t border-border mt-16 pt-8">
        <Link to="/system-notes" className="text-primary font-medium hover:underline">
          ← Back to System Notes
        </Link>
      </div>
    </article>
  </Layout>
);

export default ItCouldntSeeItself;
