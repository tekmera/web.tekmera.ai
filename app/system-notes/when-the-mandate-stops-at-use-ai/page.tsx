import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When the mandate stops at \"use AI\"",
  description:
    "Teams are being asked to implement AI without being told why or with what. How I choose between the Workfront API, MCP, Fusion and AI Collaborators, and why identity is usually the real decision.",
  openGraph: {
    title: "When the mandate stops at \"use AI\" | Tekmera",
    description:
      "Teams are being asked to implement AI without being told why or with what. How I choose between the Workfront API, MCP, Fusion and AI Collaborators, and why identity is usually the real decision.",
  },
};

export default function WhenTheMandateStopsPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-14">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link href="/system-notes" className="hover:text-foreground transition-colors">
            From the Field
          </Link>
          {" "}/ Principles
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6 text-balance">
          When the mandate stops at &ldquo;use AI&rdquo;
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed mb-3">
          Choosing between the Workfront API, MCP, Fusion and AI Collaborators
        </p>
        <p className="text-sm text-muted-foreground">
          Written by David Kershaw — Tekmera Founder
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-6">
        <p>
          A lot of teams are being asked to implement AI, and the ask often stops there. It doesn&apos;t say why, how, or what to use, so the team is left with the tool question. When do you use the Workfront API, when do you use MCP, and when do you use Fusion? AI Collaborators add another option, and now Fusion itself has AI modules.
        </p>
        <p>
          I keep hearing versions of this question. Several of these tools can touch the same Workfront data, and choosing one means choosing what you&apos;ll run and maintain afterward.
        </p>
        <p>
          The usual advice is to start with the use case and pick the best fit. I agree, but if four use cases lead to four different platforms, you&apos;ve also given yourself four footprints. So before I compare features, I go a layer above the question. What are we trying to accomplish, what are we willing to own, and what have we already decided to run? Once those are clear, the tool choice gets easier.
        </p>
        <p>
          Here&apos;s where I land. Where the work happens gives you the platform answer. If the work happens in Adobe, work within what Adobe provides. If it happens in Microsoft, work within Microsoft.
        </p>
        <p>
          You could go fully custom and integrate across every platform yourself, but that&apos;s the footprint problem again, at a much larger scale. My bias is toward the platform&apos;s products over building your own. If the work really does span several platforms, that&apos;s where n8n or another general platform fits.
        </p>
        <p>
          If the work is in Adobe and the steps are known, that&apos;s a standard Fusion scenario or the API, with no AI at run time. If a person wants their own assistant working in Workfront, that&apos;s Workfront MCP on their own account. If an agent should take on work inside a Workfront project, that&apos;s an AI Collaborator. Before building anything custom, work out whose identity Workfront will see, because that&apos;s where the real decision is. The version most teams build first, one assistant for everyone on a shared integration account, is the one I&apos;d avoid.
        </p>
        <figure className="my-10">
          <img
            src="/use-ai-decision-flow.png"
            alt="Where I usually land: start with where the work happens, then the kind of Adobe work, then check whose identity Workfront will see before building anything custom."
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            Where I usually land.
          </figcaption>
        </figure>
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-14">
          The layer above
        </p>
        <p>
          AI covers a lot of ground, so I start with what the work needs. A lot of work is deterministic. The steps are known, and part of the value is that it runs the same way every time. That kind of work doesn&apos;t need AI at run time. The Workfront API handled it before this wave of AI, and it still does.
        </p>
        <p>
          There&apos;s also a build versus buy question that gets skipped. Most organizations aren&apos;t AI companies, even when AI is a big part of their plans. If AI isn&apos;t the business you&apos;re in, building and maintaining your own version of a capability that a platform is rapidly adding deserves a higher bar. Most organizations have only paid for the build so far, and most of the cost of maintaining it is still ahead of them.
        </p>
        <p>
          At some point you&apos;re placing a bet. When the landscape is unsettled, the old &ldquo;nobody gets fired for choosing Microsoft&rdquo; instinct is the right one. You choose something you can operate, accept its limits, and resist adding another system every time a new term arrives.
        </p>
        <p>
          And the terms do arrive quickly. MCP was the new thing, then agent-to-agent, and now agent factories. Some of that is new capability, and some of it is a new name for something that already existed. If every announcement changes the plan for a deployment, it&apos;s hard to finish anything. Teams don&apos;t need their architecture at the bleeding edge to make good decisions.
        </p>
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-14">
          Identities, always identities
        </p>
        <p>
          Identity is fundamental to this decision, and in a lot of cases it is the decision. It&apos;s also easy to overlook. Teams work through it as a gate on the way to getting something running. They find a credential, get access approved, and move on. It rarely gets treated as a requirement with its own design.
        </p>
        <p>
          Who asked for the work, and whose credentials does Workfront actually see? Those are often different. Someone asks an assistant a question, and the assistant reaches Workfront through an integration account. The answer looks like it was retrieved for that person, but Workfront only sees the account, and the account&apos;s permissions decide what comes back. That gap is easy to create by accident, so design and approve it on purpose.
        </p>
        <figure className="my-10">
          <img
            src="/use-ai-identity-gap.png"
            alt="Who asked, and whose credentials Workfront sees. A custom build on one integration account: a person asks, a custom assistant answers, Workfront sees the integration account. The platform route: a person&#x27;s own assistant through MCP, and Workfront sees the person."
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            Who asked, and whose credentials Workfront sees.
          </figcaption>
        </figure>
        <p>
          This is also where the build versus buy question comes back. The platform&apos;s own options can carry the identity for you. Workfront MCP, connected through a person&apos;s own sign-in, acts as that person, and an AI Collaborator gets an access level the way a user does. A custom build has to bring its own identity to reach the platform, usually an integration account, and that&apos;s where the gap between the person asking and the credential Workfront sees starts.
        </p>
        <p>
          The platform route still needs checking. Workfront MCP can also be called with a service credential, and a Fusion scenario runs on whatever connection someone set up.
        </p>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          How identity breaks
        </h3>
        <p>
          I want to know how that identity breaks, too. What can the credential read or change, and is that limit enforced by the target system? Can we trace an action back to the person who asked for it? What happens if an agent can use a connection with more access than the task requires? These are ordinary enterprise software questions, and they&apos;re easy to miss when the conversation starts with what the agent can do.
        </p>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          A single pane of glass
        </h3>
        <p>
          Then there&apos;s the question of a single pane of glass for agents. Products for it exist now, and what they&apos;re for is governance: knowing which agents you have and keeping them in check. The question is where that governance belongs.
        </p>
        <p>
          We don&apos;t keep a live view of everything employees do. We give them an account with the access their job needs, a manager who knows their work, and audit logs to check when something goes wrong.
        </p>
        <p>
          An agent that works on its own can be governed the same way, at the identity layer you already run. It gets its own account, separate from any person&apos;s and from shared integration accounts, with the least access the job needs and an owner. A person&apos;s own assistant is different, because it acts on that person&apos;s behalf and Workfront sees the person.
        </p>
        <p>
          Either way, the inventory belongs in the identity layer: which agents exist, who owns them, and what they can reach. Each business area then sees its agents&apos; work in the platforms where it happens, the way a collaborator shows up in its Workfront project.
        </p>
        <p>
          Watching across all of it, reviewing permissions and flagging unusual activity, is already a product category in identity and security, and those tools are extending to agents. The rule is the same as everywhere else in this piece: use the version your identity or security platform provides instead of building your own.
        </p>
        <p>
          Agents do differ from people in a few ways. They act much faster, so a bad permission does damage sooner. They can be left running after the person who built them has moved on. And a prompt can push them into something their owner never intended. Each of those points back to access and ownership more than to watching closely, so that&apos;s where the effort goes first.
        </p>
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-14">
          One ask, all the way through
        </p>
        <p>
          Here&apos;s an ask a lot of teams get. A group of people want to ask an AI assistant about the work in Workfront: what&apos;s late, what&apos;s at risk, what changed this week. Some of them live in Workfront every day. Others rarely log in, and a few don&apos;t have their own access.
        </p>
        <p>
          At the tool level, this looks easy. It&apos;s a person asking questions and following up on the answers, which is exactly what an assistant is good at. There are a few ways to build it, and they all work in a demo.
        </p>
        <figure className="my-10">
          <img
            src="/use-ai-three-options.png"
            alt="One ask, three ways to build it: each person&#x27;s own assistant through Workfront MCP, one assistant for everyone on an integration account and the API, or specific data provided through a curated feed. For each, who it serves, the identity Workfront sees, what people get, and what you run."
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            One ask, three ways to build it.
          </figcaption>
        </figure>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          Their own assistant
        </h3>
        <p>
          The first is for each person to connect their own assistant through Workfront MCP. Workfront then sees that person&apos;s account, and they get what their own permissions allow. Any action in Workfront is recorded against that account, and the option adds no new system to run, only settings to manage. The catch is that it only serves the people who already have Workfront access and are comfortable with an AI assistant, and those often aren&apos;t the people the ask came from.
        </p>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          One assistant for everyone
        </h3>
        <p>
          The second is to build an assistant that everyone can use, backed by a single integration account calling the API. It serves the whole group, and it&apos;s the version that gets built first.
        </p>
        <p>
          At the layer above, it looks different. Workfront sees one account for every question, so unless the assistant enforces each person&apos;s own access itself, everyone gets that account&apos;s access, including people whose own access would show them far less, or nothing. Tracing a question back to a person means relying on the assistant&apos;s logs instead of Workfront&apos;s.
        </p>
        <p>
          Building that enforcement is real work, and it&apos;s part of a custom build that becomes a new system to run. Someone owns its hosting, its maintenance, its credential, and its failures for as long as it runs.
        </p>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          Specific data, provided
        </h3>
        <p>
          The third is narrower. Work out what the group needs to see, and provide that specific data to the assistant instead of giving it broad access to Workfront. It&apos;s less impressive in a demo, but the access is bounded by design, the data owner decides what leaves the system, and when it breaks, the owner is clear.
        </p>
        <p>
          It has costs, too. Bounding the data doesn&apos;t settle who may receive it. Some of the group have no Workfront access, so the data owner still has to approve sharing it with them, even through a curated feed. That approval is the identity question again, moved to a different point.
        </p>
        <p>
          The assistant can also only answer questions inside that data. Someone has to keep it current, usually with a feed on a platform you already run, and a follow-up question that falls outside it gets no answer. That turns scope into a conversation with the data owner, which is where it belongs.
        </p>
        <h3 className="text-foreground font-semibold text-lg pt-4">
          Where I&apos;d start
        </h3>
        <p>
          Each of them answers the ask for at least part of the group. What separates them is the caller, the credential, what that credential can reach, and who answers for it when something goes wrong. In a case like this, I start with the third and let people who already have access use MCP on their own accounts. I&apos;d avoid the second, even though it looks most like the ask.
        </p>
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-14">
          Placing the other tools
        </p>
        <p>
          Most asks are simpler than that. Say an approved Workfront project needs to create a record in another system. The trigger and fields are known. That&apos;s a standard Fusion scenario if the connectors and operating model fit, or a direct API integration if it belongs inside an application. A model choosing the steps at run time adds nothing there.
        </p>
        <p>
          The person in the first option above is who I&apos;ve had in mind when I&apos;ve called MCP a power user tool. I use the Workfront MCP server when I&apos;m building on top of Workfront, but I&apos;m not a Workfront user in the everyday sense. The person who gets the most out of it is the AI-native admin who lives in Workfront and wants their assistant to reach into it. Ali Spittel captured the preference well: <a href="https://x.com/ASpittel/status/2090889137062826240" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">&ldquo;i really don&apos;t want to use your agent, i want to use my agent to use your thing.&rdquo;</a>
        </p>
        <figure className="my-10">
          <img
            src="/use-ai-ali-spittel-agent-post.png"
            alt="Ali Spittel on X: &quot;i really don&#x27;t want to use your agent, i want to use my agent to use your thing.&quot; August 21, 2026"
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            Ali Spittel on X, August 21, 2026.
          </figcaption>
        </figure>
        <p>
          That preference doesn&apos;t rule out AI Collaborators. If an agent is assigned a review or a task as part of a Workfront project, the work belongs in the project. A person&apos;s assistant reaching into Workfront and an agent receiving a Workfront assignment can both make sense, even in the same organization.
        </p>
        <p>
          Collaborators also make the identity question concrete. Each one gets its own access level in Workfront, assigned the way you&apos;d assign a user. An external agent, such as one built in Copilot Studio, also runs on its own platform&apos;s credentials, so it has a second identity outside Workfront with whatever access that platform gives it.
        </p>
        <p>
          Fusion also has its own MCP server, and it&apos;s for work on Fusion itself. The main uses I see so far are documenting scenarios automatically, a build agent that helps put scenarios together, and a monitoring agent that watches executions. In those cases Fusion is the data the agent works with, instead of the iPaaS running the work.
        </p>
        <p>
          A scenario can call MCP itself through the Workfront MCP or MCP Agent module, both in beta, and like any other module it runs on the connection configured for it.
        </p>
        <p>
          The pattern I&apos;d reach for first in a scenario is narrower, and I&apos;ve used it for things like triaging phone calls. A model classifies unstructured text into a category, and the scenario routes on the result with standard modules.
        </p>
        <p>
          If I need an automation footprint for Adobe work, Fusion is where I start. Its Workfront and Adobe connections are a strength.
        </p>
        <p>
          But if the mandate is to integrate work across the whole company, I wouldn&apos;t assume Fusion should run it all just because it can connect. No one&apos;s buying the Adobe stack because Fusion exists. That&apos;s where I&apos;d compare n8n or another general platform, and I&apos;d be deliberate if both end up running. I don&apos;t want two systems quietly writing to the same system of record with no clear owner.
        </p>
        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-14">
          A reference
        </p>
        <p>
          This covers what happens at run time. Whether AI helps you build the integration is a separate question. Treat each row as a starting place, then work through the identity and ownership questions above before settling on it.
        </p>
        <div className="overflow-x-auto my-10 not-prose">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium text-foreground align-bottom">The work looks like</th>
                <th className="py-2 pr-4 font-medium text-foreground align-bottom">Usually starts with</th>
                <th className="py-2 pr-4 font-medium text-foreground align-bottom">Who or what acts</th>
                <th className="py-2 pr-4 font-medium text-foreground align-bottom">Watch for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">Known steps between systems, on a trigger or schedule</td>
                <td className="py-3 pr-4">A standard Fusion scenario</td>
                <td className="py-3 pr-4">The scenario&apos;s connections</td>
                <td className="py-3 pr-4">Who owns failures and retries</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">Known steps that belong inside an application</td>
                <td className="py-3 pr-4">The Workfront API</td>
                <td className="py-3 pr-4">Depends on the integration&apos;s design</td>
                <td className="py-3 pr-4">Maintenance cost of a custom build</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">A person exploring Workfront with their own assistant</td>
                <td className="py-3 pr-4">Workfront MCP</td>
                <td className="py-3 pr-4">The person&apos;s own Workfront account</td>
                <td className="py-3 pr-4">What the assistant is allowed to change</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">An agent given a task or review inside a Workfront project</td>
                <td className="py-3 pr-4">An AI Collaborator</td>
                <td className="py-3 pr-4">The collaborator&apos;s own Workfront access level; an external agent also runs on its own platform&apos;s credentials</td>
                <td className="py-3 pr-4">What an external agent can reach outside Workfront</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">Documenting, building or monitoring Fusion scenarios</td>
                <td className="py-3 pr-4">Fusion MCP</td>
                <td className="py-3 pr-4">The person&apos;s Fusion access</td>
                <td className="py-3 pr-4">Write access to production scenarios</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">Integration work that spans the company&apos;s platforms</td>
                <td className="py-3 pr-4">n8n or another general platform</td>
                <td className="py-3 pr-4">That platform&apos;s connections</td>
                <td className="py-3 pr-4">One clear owner for writes to each system of record</td>
              </tr>
              <tr className="border-b border-border align-top">
                <td className="py-3 pr-4">Text that needs classifying before routing</td>
                <td className="py-3 pr-4">A Fusion scenario with a model step that picks a category</td>
                <td className="py-3 pr-4">The scenario&apos;s connections</td>
                <td className="py-3 pr-4">Keeping the category list fixed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The table won&apos;t produce the answer by itself, and the example above is why. Every option there would have matched a row. The choice came from the caller, the credential, and who owns it, which is the layer above the original question. Those are also the parts a mandate to &ldquo;use AI&rdquo; leaves out, and a team has to work them out before the tool question has an answer.
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
