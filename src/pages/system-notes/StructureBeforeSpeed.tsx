import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const StructureBeforeSpeed = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link to="/system-notes" className="hover:text-foreground transition-colors">
            System Notes
          </Link>
          {" "}/ Principles
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          Structure Before Speed
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          The structural logic beneath everything Tekmera does.
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>
          Most teams have enough implementation help. What they lack is architectural clarity that scales with delivery.
        </p>
        <p>
          Delivery adds motion. But motion applied to a weak structure accelerates collapse. Most systems under pressure are reactive, siloed, and undocumented. Every new automation just adds weight to a frame that can't support it.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          The Delivery Misread: Mistaking Motion for Form
        </p>
        <p>
          The pressure to deliver is real. Remote work has only intensified it. Delivery is visible, reportable, and legible to leadership. Motion becomes the stand-in for value. Every status update rides on something moving.
        </p>
        <p>
          That motion creates good vibes up the chain of command. It signals alignment, even when none exists. But in the absence of reflection, systems drift. Informal syncs and shared planning environments have disappeared. What's left is velocity without form.
        </p>
        <p>
          Silos protect delivery at the expense of architecture. Structural integrity depends on shared context and cross-functional feedback, none of which appear in dashboards. So teams optimize for what can be shown. And what can be shown rarely reflects what works.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Why Systems Fail Under Pressure
        </p>
        <p>
          These patterns apply across no-code, custom software, and business operations. When delivery becomes reactive, systems drift or break quietly.
        </p>
        <p>
          Automations are often implemented without ground-truth process understanding. Teams start midstream. Consultants ship artifacts. End users adapt or work around. The system fractures.
        </p>
        <p>
          Organizations rarely pause to ask: what is this automation replacing? What shape did the manual process actually have? Most assume they can refine later. But later rarely comes.
        </p>
        <p>
          Rework is seen as failure. Momentum is rewarded. So systems grow without form, and the original context dissolves.
        </p>
        <p>And with that momentum, teams pave over:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Process deviations and edge cases</li>
          <li>Operability across human roles</li>
          <li>Any feedback loops that could correct the drift</li>
        </ul>
        <p>These are organizational defaults, accelerated by automation.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Making Structural Work Visible
        </p>
        <p>
          If your organization rewards speed over soundness, structure can feel like a hard sell. Infrastructure is invisible until it breaks. The work of system integrity often goes unnoticed because it operates quietly.
        </p>
        <p>To make it visible:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Translate technical debt into recurring cost: rework hours, repeated escalations, time-to-onboard</li>
          <li>Log tradeoffs systematically. Even if ignored, they accumulate weight when surfaced consistently.</li>
          <li>Pair every architectural ask with a before/after friction snapshot. Show what changes.</li>
        </ul>
        <p>
          Stakeholders need to see how structure reduces effort, risk, or noise. Show them why the team keeps tripping on the same loose plank.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          When Structure Is Worth It
        </p>
        <p>
          Not every team needs this right away. Two-person startups can afford mess that would destroy a 500-person operation. Structure matters when the cost of drift exceeds the cost of intervention.
        </p>
        <p>Early signals:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>You're firefighting the same failures across workflows</li>
          <li>You can't explain how data moves from one system to another</li>
          <li>Everyone's building, but nothing is aligning</li>
        </ul>
        <p>These are business costs: missed deadlines, burned time, customer friction.</p>
        <p className="text-foreground font-medium">Structure means not paying the same tax every sprint.</p>
        <p>
          Some costs are obvious, hours spent compensating for failure. Others are harder to measure: morale erosion, reputational slip, missed opportunities. You'll know it's time when every urgent fix feels like déjà vu.
        </p>
        <p>
          And it doesn't always work. Over-architecture is real. Teams can lock themselves in models that can't flex or ship. The cost of structure is justified when the cost of chaos becomes trackable, or when leadership is willing to bet on prevention instead of reaction. Not before.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Diagnose Before You Move
        </p>
        <p>
          The impulse to build is strong. It feels like progress. But speed on a cracked frame hides the cracks.
        </p>
        <p>Before you automate anything, ask: what process is this expressing? Whose work is it shaping?</p>
        <p>If the answer's unclear:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Sit with someone doing the work. Listen for friction. Ask what they avoid, what they dread, what they manually fix.</li>
          <li>Sketch the flow. Include what happens when something goes wrong.</li>
          <li>Mark what's judgment, what's delay, what's duct tape.</li>
        </ul>
        <p>
          You won't get perfect clarity. You don't need to. Most people don't narrate their work well, and that's fine. The goal is to notice where structure is being carried by habit.
        </p>
        <p className="text-foreground font-medium mt-6">
          Sometimes the fast fix is the right move. Just name the debt. Clarity isn't purity. It's awareness.
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

export default StructureBeforeSpeed;
