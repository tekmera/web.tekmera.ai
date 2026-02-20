import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const SystemNotes = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-4">
        From the Field
      </h1>
      <p className="text-secondary-foreground leading-relaxed mb-16">
        How systems break, why they drift, and what changes when they're rebuilt with intent.
      </p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-8">
        {/* Principles */}
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-6">
            Principles
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Core theses on architecture, governance, and system design.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                to="/system-notes/ai-without-architecture"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                AI Without Architecture Breaks Faster
              </Link>
            </li>
            <li>
              <Link
                to="/system-notes/structure-before-speed"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                Structure Before Speed
              </Link>
            </li>
            <li>
              <Link
                to="/system-notes/systems-show-themselves"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                Systems Show Themselves at the Edges
              </Link>
            </li>
          </ul>
        </div>

        {/* Field Work */}
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-6">
            Field Work
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            What we found inside real systems, and what changed.
          </p>
          <ul className="space-y-3">
            <li>
              <Link
                to="/system-notes/runaway-one-time-scenario"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                The Runaway "One-Time" Scenario
              </Link>
            </li>
            <li>
              <Link
                to="/system-notes/it-never-stopped-running"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                It Never Stopped Running
              </Link>
            </li>
            <li>
              <Link
                to="/system-notes/it-looked-like-a-tree"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                It Looked Like a Tree
              </Link>
            </li>
            <li>
              <Link
                to="/system-notes/it-couldnt-see-itself"
                className="text-foreground hover:text-primary transition-colors font-medium leading-snug block"
              >
                It Couldn't See Itself
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </Layout>
);

export default SystemNotes;
