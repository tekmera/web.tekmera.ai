import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const ItLookedLikeATree = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link to="/system-notes" className="hover:text-foreground transition-colors">
            From the Field
          </Link>
          {" "}/ Field Work
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          It Looked Like a Tree
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          Porting a Fusion scenario to Make.com wasn't just cleanup. It was an architectural reveal.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Context
        </p>
        <p>
          Each Clarity Audit documents a real system engagement. Not as a case study. As an architectural readout. The goal isn't to celebrate fixes. It's to surface structure.
        </p>

        <p className="text-foreground font-medium mt-10">
          The flow had over 250 modules. It ran for more than an hour. And it looked like it was working.
        </p>

        <p>
          It was built in Workfront Fusion, a no-code orchestration tool used to move project data from ServiceNow into Workfront. The job ran daily on a timer. Logic branched by project type, then by assignee, then by status and priority. Every fork spawned more forks. Each variation duplicated logic with minor edits. From a distance, it resembled a system.
        </p>
        <p>The goal was to make it make sense.</p>
        <p>
          The tree shape was the natural outcome of how the tool allows construction without variables or structural primitives.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          From 250 to 35
        </p>
        <p>When the flow was ported to Make.com, it was rebuilt from first principles:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>A single data table replaced dozens of hardcoded routing paths</li>
          <li>Variables replaced repeated lookups</li>
          <li>Subflows replaced parallel schedules</li>
          <li>Failures became isolated. One bad record no longer killed the batch</li>
          <li>Runtime dropped from 60+ minutes to under 20</li>
          <li>Module count: 35</li>
        </ul>
        <p>
          The numbers mattered less than what they represented. The system became governable. It no longer depended on continuity, luck, or tribal memory.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Where the Old System Broke
        </p>
        <p>Some failures were subtle.</p>
        <p>
          One branch tried to pull a project's parent but was actually pulling the parent of the parent. The wrong ID was written across dozens of records. The logic wasn't wrong everywhere. Just inconsistent in enough places to be dangerous.
        </p>
        <p>Other failures were louder.</p>
        <p>
          The original scenario was split into two scheduled flows, one to prepare, one to submit. They were designed to run in order. But the platform didn't enforce that. If the timing slipped, they ran in parallel. The result: every project duplicated. Every run created a second copy, and nothing deleted them.
        </p>
        <p>The system had no concept of orchestration. Only events.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          It Wasn't the Client's Fault
        </p>
        <p>The client said: "I'm not an expert in this stuff."</p>
        <p>Fair. And that's exactly the problem these platforms create.</p>
        <p>
          They promise that business users can automate complex workflows without understanding control flow, data structure, or execution context. They offer drag-and-drop interfaces and conceal the architecture underneath.
        </p>
        <p>Hiding complexity isn't the same as simplifying it.</p>
        <p>
          The tools abstract away the very concepts that make systems work, and in doing so, they encourage complexity to accumulate invisibly.
        </p>
        <p>
          Failures don't appear when you build. They appear when your assumptions no longer hold, and the system has no model to fall back on.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What This Really Was
        </p>
        <p>
          The original flow hadn't been designed. It had grown. Each branch solved a local problem. No one owned the shape. There was no vantage point. Just lineage.
        </p>
        <p>Rebuilding forced a single question: what is this system actually trying to do?</p>
        <p>
          Once that was answered, everything got smaller. Simpler. More durable. And representative of the business it was meant to support.
        </p>
        <p className="text-foreground font-medium mt-6">
          The system needed to be understandable to someone who didn't build it. Once it was, it lasted.
        </p>
      </div>

      <div className="border-t border-border mt-16 pt-8">
        <Link to="/system-notes" className="text-primary font-medium hover:underline">
          ← Back to From the Field
        </Link>
      </div>
    </article>
  </Layout>
);

export default ItLookedLikeATree;
