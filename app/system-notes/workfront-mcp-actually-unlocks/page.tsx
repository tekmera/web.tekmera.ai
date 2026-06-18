import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What the Workfront MCP Actually Unlocks",
  description:
    "Two real workflows against Adobe's Workfront MCP server, what they produced, and the five patterns the protocol unlocks at the architecture level.",
  openGraph: {
    title: "What the Workfront MCP Actually Unlocks | Tekmera",
    description:
      "Two real workflows against Adobe's Workfront MCP server, what they produced, and the five patterns the protocol unlocks at the architecture level.",
  },
};

export default function WorkfrontMcpUnlocksPage() {
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
          What the Workfront MCP Actually Unlocks
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          Two real workflows against Adobe&apos;s Workfront MCP server, what they produced, and the five patterns the protocol unlocks at the architecture level.
        </p>
        <p className="text-sm text-muted-foreground">
          Written by David Kershaw — Tekmera Founder
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>
          Adobe shipped a Workfront MCP server this spring. It&apos;s a structural shift in how Workfront sits inside the enterprise stack. Workfront is becoming an agent-accessible substrate, something other systems read from, write to, and orchestrate against.
        </p>
        <p>
          I&apos;ve spent the last few weeks wiring Claude to Workfront via the MCP and running real workflows against it. This piece walks through two of them in depth, then steps back to what the protocol unlocks at the architecture level. It&apos;s what works today, with the gaps named.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What Adobe shipped
        </p>
        <p>
          In Adobe&apos;s framing, the server <em>&ldquo;connects your Workfront instance to an AI agentic platform such as Claude or ChatGPT,&rdquo;</em> letting users <em>&ldquo;find, create, update, and manage Workfront items by making natural-language requests&rdquo;</em> without knowing the Workfront API or the MCP protocol directly. Public documentation went live on June 12, 2026. It&apos;s currently US-region and AWS-only.
        </p>
        <p>The server exposes three tool families:</p>
        <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
          <div className="border border-border rounded-md p-4">
            <p className="text-foreground font-medium mb-1">Approvals</p>
            <p className="text-xs text-muted-foreground mb-3">~19 tools</p>
            <p className="text-sm leading-snug">Documents, approval workflows, reminders, templates, user lookups.</p>
          </div>
          <div className="border border-border rounded-md p-4">
            <p className="text-foreground font-medium mb-1">Planning</p>
            <p className="text-xs text-muted-foreground mb-3">~40 tools</p>
            <p className="text-sm leading-snug">Workspaces, record types, records, fields, views, templates.</p>
          </div>
          <div className="border border-border rounded-md p-4">
            <p className="text-foreground font-medium mb-1">Workflow</p>
            <p className="text-xs text-muted-foreground mb-3">6 polymorphic tools</p>
            <p className="text-sm leading-snug">Search, create, update, delete, and resolve field names across projects, tasks, issues, hours, assignments, programs, portfolios.</p>
          </div>
        </div>
        <p>Comments and Boards are on the public roadmap.</p>
        <p>
          Inside the broader Adobe narrative, the MCP server runs alongside two other AI patterns Adobe is pushing into Workfront. AI Assistant is the in-app chatbot already shipped to GA, reactive, scoped to the page you&apos;re on, useful for summarization, locating items, generating calculated-field formulas. AI Collaborator is the Workfront-resident agent type currently rolling out, starting with a Content Reviewer that checks assets against brand guidelines. Three paradigms running in parallel: embedded chatbot, embedded resource, external orchestration.
        </p>
        <p className="text-foreground font-medium">
          The piece below is about the third. The protocol layer is where the structural shift lives.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Why MCP versus a connector-style agent
        </p>
        <p>
          Before the walkthroughs, one architectural point that&apos;s underdiscussed.
        </p>
        <p>
          For decades, programmatic API access has lived outside enterprise identity architecture. Application A needs to call Application B&apos;s API. Application A authenticates as a service account with broad permissions. The user&apos;s identity, the SSO layer, the RBAC governance the enterprise actually invested in, none of it travels with the call. Every automation platform (Make, Zapier, in-house glue) works this way because that&apos;s the pattern the APIs themselves were designed around. Service accounts aren&apos;t a choice. They&apos;re how programmatic API access has worked since APIs existed.
        </p>
        <p>
          That&apos;s why most AI-in-Workfront patterns today look similar in shape: the LLM gets wrapped in a workflow that hits Workfront with a service account. The same architecture as decades of integrations, now with an LLM on top.
        </p>
        <p>
          Adobe took a different architectural approach with the Workfront MCP. The docs are explicit: it <em>&ldquo;uses your Workfront account, access level, and object permissions&rdquo;</em> and <em>&ldquo;only works if you have the corresponding access in Workfront.&rdquo;</em> The MCP client holds the user&apos;s auth. Each tool call carries the user&apos;s identity. The agent inherits the asking user&apos;s boundary. The identity architecture the enterprise already built is what governs the agent.
        </p>
        <p>
          The trade is real. With a service account, anyone can ask anything and the agent answers. With MCP, your users need the access to do their work, and if they don&apos;t, neither will the agent. I hit this in my own testing: read queries failed against admin-scoped data until I got system admin access in the sandbox. That&apos;s governance working as designed.
        </p>
        <p className="text-foreground font-medium">
          For enterprise scale: real audit trail, real attribution, real boundary inheritance. Identity attached at the protocol level lives in a different operating model than identity bolted on at the workflow layer.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Two walkthroughs
        </p>
        <p>
          What follows is two real workflows I ran against the MCP. They aren&apos;t curated &ldquo;best use cases&rdquo; or recommended starters. They&apos;re two shapes of work that showed up cleanly enough to write about. One sits at the operator-cleanup tier: a governance audit of unused project templates. The other sits at the executive-communication tier: a leadership-ready portfolio narrative with a PDF artifact at the end. Different audiences, different value, same tool surface. Pick whichever shape fits your team first.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Use case 1: governance — finding the templates nobody&apos;s using
        </p>
        <p>
          Every Workfront org accumulates dead templates. Active flag still set, no project built from them in months. Cleanup is a real cost when nobody&apos;s tracking it: confused users picking the wrong template, audit gaps, search noise.
        </p>
        <p>
          It&apos;s the kind of question that takes more pivots in the reporting UI than the question seems to need. Workfront&apos;s <code>lastUpdateDate</code> on a template is when the template definition was last edited, not when it was last used to create a project. Answering &ldquo;which templates haven&apos;t been used in a year&rdquo; requires joining template metadata against project entry dates. The advanced EXISTS-filter syntax that could express this isn&apos;t currently passable through the MCP tool surface, so the agent has to take the longer route.
        </p>
        <p>
          I gave Claude the question in plain English: <em>&ldquo;Show me active project templates and which haven&apos;t been used in the last year.&rdquo;</em>
        </p>
        <p>
          Claude flagged the <code>lastUpdateDate</code> ambiguity in its own first response, before pulling any data. Then it took the longer route: paginated through all template-derived projects created in the last 12 months, grouped them by template ID, diffed against the active-template list.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 py-6 border-y border-border not-prose">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~1,800</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">projects scanned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~40</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">templates used</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~45</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">dormant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~7 min</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">total time</div>
          </div>
        </div>

        <p>
          The dormant set sorted into two clean buckets. About half were genuinely dormant, templates created more than a year ago with no use this year. Cleanup candidates. The other half were new, created within the last year and not yet used, which is normal. Among the dormant, the standout cluster was around 15 templates from an older batch, all owned by the same two users, all clearly superseded by the current generation of templates and never retired. Plus around 10 abandoned drafts named &ldquo;Untitled Template.&rdquo;
        </p>

        <figure className="my-8">
          <img
            src="/workfront-mcp-cleanup-table.png"
            alt="Cleanup-candidate templates from the demo run"
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            Cleanup-candidate templates from the demo run.
          </figcaption>
        </figure>

        <p>
          The whole run took about seven minutes. Most of that was pagination. Claude offered to either export the full breakdown as CSV or batch-deactivate the dormant cluster on confirmation.
        </p>
        <p>
          Two things worth surfacing. The method transparency was unprompted: distinguishing <code>lastUpdateDate</code> from actual project-creation usage came from Claude on its own. That kind of &ldquo;let me get the question right before I answer&rdquo; is what you want a governance-tier agent to do. The pagination-and-diff approach was Claude&apos;s workaround for an MCP limit it ran into. The tool surface couldn&apos;t express the EXISTS filter directly, so it solved the problem the brute way. Both moves are operator-shaped.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Use case 2: portfolio narrative — leadership-ready in six minutes
        </p>
        <p>
          The second use case is where the MCP and Claude&apos;s reasoning combine into something neither does alone.
        </p>
        <p>
          Most quarterly portfolio updates take hours: pull the projects, check task status across each, identify what&apos;s stuck, write the narrative, format it for the audience. The PM who owns the portfolio knows this work intimately and also knows it&apos;s the work they&apos;d most like to push off their plate.
        </p>
        <p>
          I built a small fabricated portfolio in the sandbox: <em>Q4 2026 Holiday Launch</em>, four projects, mixed statuses. Then asked Claude:
        </p>

        <blockquote className="border-l-2 border-border pl-6 italic text-muted-foreground my-6">
          <p>
            &ldquo;Pull my active portfolio Q4 2026 Holiday Launch and generate a leadership-ready quarterly narrative. For each project: name, status, owner, percent complete, last update date. Flag risks — overdue tasks, blocked approvals, projects with no updates in the last 14 days. Output a markdown document with: executive summary, mermaid diagram of the portfolio grouped by status with risk indicators, wins, risks with recommended action, where leadership input is needed. Save the markdown to /tmp/portfolio-narrative.md. Render any mermaid diagrams to PNG using the mermaid CLI. Convert the full markdown to PDF with pandoc. Open the PDF when done.&rdquo;
          </p>
        </blockquote>

        <p>
          Claude pulled the portfolio, the four projects, and the task-level detail it needed for risk flagging. Identified that the Q4 Email Series project was 100% complete but stuck in approval, <em>Complete – pending approval</em> status, around 50 days past its original target date. Flagged the earliest-stage project as a watch. Verified the toolchain (pandoc was present; mermaid CLI needed to be fetched via npx and a permission error needed working around). Wrote the markdown. Rendered the mermaid diagram. Caught its own HTML-entity rendering bug in the first render, edited the source, re-rendered, verified visually. Built the PDF embedding the corrected diagram. Opened it.
        </p>

        <figure className="my-8">
          <img
            src="/workfront-mcp-portfolio-diagram.png"
            alt="Portfolio mermaid diagram showing four projects grouped by status with risk indicators"
            className="w-full rounded-md border border-border"
          />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">
            Portfolio diagram from the rendered PDF.{" "}
            <a
              href="/workfront-mcp-portfolio-narrative.pdf"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the full PDF →
            </a>
          </figcaption>
        </figure>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 py-6 border-y border-border not-prose">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">4</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~50 days</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">overdue flag</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">~6 min</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">total time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-medium text-foreground">1 PDF</div>
            <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">artifact</div>
          </div>
        </div>

        <p>
          Plenty of tools can generate a quarterly portfolio report from extracted data. The thing to notice here is the full chain: live MCP data, reasoning over it, a mermaid diagram, a multi-step rendering pipeline, self-correction when a render came back wrong, and a polished PDF artifact at the end. The MCP made the data accessible. The agent&apos;s reasoning shaped the deliverable. Bash, pandoc, and mermaid CLI produced the artifact. Each individual piece is well-understood. Connecting them in one prompt-driven flow is the new thing.
        </p>
        <p>
          Two operator-honest moments worth repeating from this run. Claude interpreted the <code>CPL:A</code> status code as &ldquo;complete pending approval&rdquo; from Workfront&apos;s convention rather than reading the approval-process record directly, and flagged the distinction. It also noted that &ldquo;no projects with stale updates&rdquo; was trivially true because the portfolio data was fresh. Both are the small honesty moments that build trust in an agent over time.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Some more things to try
        </p>
        <p>
          The two walkthroughs are governance and leadership communication. The MCP supports a wider set of patterns. A few worth exploring.
        </p>

        <p className="text-foreground font-medium mt-6">Day-to-day operational queries.</p>
        <p>
          <em>&ldquo;Find my overdue work across all my projects.&rdquo;</em> <em>&ldquo;Summarize the last 7 days of updates on project X.&rdquo;</em> <em>&ldquo;What approvals am I holding up?&rdquo;</em> Fast, useful, the kind of thing every Workfront user does in the UI ten times a day.
        </p>

        <p className="text-foreground font-medium mt-6">Cross-module reasoning.</p>
        <p>
          <em>&ldquo;List my Planning workspaces. For the Campaigns workspace, show which campaigns have linked execution projects vs. which don&apos;t.&rdquo;</em> Planning ↔ execution linking is one of the wiring patterns most teams are still working through, and an MCP-shaped query against live data makes the visibility easier to build.
        </p>

        <p className="text-foreground font-medium mt-6">Architecture and design review.</p>
        <p>
          <em>&ldquo;Review the custom forms on this project type. Any fields that overlap, contradict, or are unused?&rdquo;</em> <em>&ldquo;Look at this Planning workspace&apos;s record types. How could the taxonomy be improved?&rdquo;</em> Senior-consultant prompts. Claude won&apos;t replace the consultant. It can do a first pass against live structure faster than any human.
        </p>

        <p className="text-foreground font-medium mt-6">Cross-system orchestration (today, or soon).</p>
        <p>
          <em>&ldquo;Take this content brief PDF and submit it as a request in the Marketing intake queue.&rdquo;</em> <em>&ldquo;Sync overdue Workfront tasks to my Jira board.&rdquo;</em> Some of these need other MCPs to exist (AEM, Jira). Those are coming, with varying timelines.
        </p>

        <p className="mt-6">
          The prompts that work best are operator-shaped. Less &ldquo;show me a chart of project counts,&rdquo; more &ldquo;review this and tell me what to fix.&rdquo;
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What this opens at the architecture level
        </p>
        <p>
          Beyond individual prompts, the MCP enables five patterns that weren&apos;t reasonably available before. Worth thinking about even before you build them.
        </p>

        <p className="text-foreground font-medium mt-6">Standing agents that watch and act.</p>
        <p>
          A PMO oversight bot that wakes up daily, pulls portfolio status, pings about anomalies. An approval shepherd that catches stuck approvals and drafts nudges. A governance audit agent that runs weekly against your policies and surfaces violations. These handle the connective tissue work humans hate.
        </p>

        <p className="text-foreground font-medium mt-6">Multi-MCP cross-system orchestration.</p>
        <p>
          Workfront MCP alone is useful. Workfront plus Slack plus Jira plus Google Calendar plus AEM in one conversation is the bigger story. <em>&ldquo;Who&apos;s blocking what, where, and how do I unblock them?&rdquo;</em> answered across systems. Implementation work shifts toward composing existing MCPs rather than building bespoke integrations.
        </p>

        <p className="text-foreground font-medium mt-6">Brief-to-execution flows.</p>
        <p>
          PDF brief, parsed, structured Workfront record, project scaffolding, asset routing, review chain. This is the content supply chain Adobe is investing heavily in across the GenStudio stack. Operators with MCP and an LLM can build their first slice of it today, customized to their org while the broader Adobe-side pieces continue to roll out.
        </p>

        <p className="text-foreground font-medium mt-6">Decision-support against live state.</p>
        <p>
          <em>&ldquo;If I shift this project&apos;s end date three weeks, what downstream tasks are affected and who do I need to talk to?&rdquo;</em> <em>&ldquo;If I add Alex to this campaign team, where does the load go?&rdquo;</em> Counterfactuals against operational data. PMOs have wanted this forever.
        </p>

        <p className="text-foreground font-medium mt-6">Workfront as a source for other agents.</p>
        <p>
          The unlock isn&apos;t always &ldquo;Claude reads Workfront.&rdquo; Often it&apos;s &ldquo;every other agent reads Workfront.&rdquo; A sales CRM bot pulls active campaign status to brief account teams. A customer-success agent retrieves project state to brief customers on delivery. An internal-comms agent pulls portfolio results to draft an all-hands update. Workfront takes on a system-of-record role for the agentic stack, with other agents consuming from it.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What&apos;s still missing
        </p>
        <p>
          To be fair to the audience that has to build against this today:
        </p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>US region and AWS only. If your Workfront instance is in another region, you don&apos;t have access yet.</li>
          <li>Write actions are disabled by default. Your Workfront admin has to enable them, and they should (read-only is the right safety default), but it&apos;s a step every org has to take.</li>
          <li>Comments and Boards are on the roadmap.</li>
          <li>Advanced filter syntax (EXISTS modifiers) isn&apos;t currently passable through the tool surface. Claude works around it with brute pagination, at a cost in time.</li>
          <li>This is the user-attribution model, with all that implies. If your governance is loose today, this surfaces it.</li>
        </ul>
        <p className="mt-6">
          These are the boundary to plan around. None are blockers for getting started.
        </p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          What this changes for practitioners
        </p>
        <p>
          The Workfront practitioner role is moving. The shape now leans more toward &ldquo;stack architect who composes agentic flows across systems.&rdquo; MCP makes the composition possible. The work moves up the stack.
        </p>
        <p>
          For teams adopting this today: start with operator-shaped use cases. The governance audits, the portfolio narratives, the day-to-day finder queries. Build trust in the tool before you build agents that take action on its behalf. The cleanup-and-narrative tier is the right entry point because the outputs are verifiable against your existing reports. Once you trust the tool there, you&apos;re ready to consider the standing-agent and cross-system patterns.
        </p>
        <p>
          The two walkthroughs above took about thirteen minutes of execution time between them. Both produced artifacts a human PM or admin could put in front of leadership the same day. They were Tuesday work, done faster, with the method visible.
        </p>
        <p className="text-foreground font-medium">That&apos;s the shift.</p>

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          References
        </p>

        <p className="text-foreground font-medium mt-4">Adobe Workfront MCP server (Adobe Experience League):</p>
        <ul className="space-y-2 pl-5 list-disc marker:text-primary text-sm">
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/workfront/using/basics/workfront-mcp-server/workfront-mcp-server-overview" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Overview</a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/workfront/using/basics/workfront-mcp-server/workfront-mcp-server-tools" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Tools</a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/workfront/using/basics/workfront-mcp-server/use-workfront-mcp-server" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Use</a>
          </li>
          <li>
            <a href="https://experienceleague.adobe.com/en/docs/workfront/using/basics/workfront-mcp-server/configure-workfront-mcp-server" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Configure</a>
          </li>
        </ul>

        <p className="text-foreground font-medium mt-6">Model Context Protocol:</p>
        <ul className="space-y-2 pl-5 list-disc marker:text-primary text-sm">
          <li>
            <a href="https://modelcontextprotocol.io" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">modelcontextprotocol.io</a>
          </li>
          <li>
            <a href="https://www.anthropic.com/news/model-context-protocol" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Anthropic launch announcement</a>
          </li>
        </ul>

        <p className="text-foreground font-medium mt-6">Other Workfront MCP coverage:</p>
        <ul className="space-y-2 pl-5 list-disc marker:text-primary text-sm">
          <li>
            Vinay S., <a href="https://www.linkedin.com/pulse/how-adobe-workfront-mcp-server-transforming-work-management-shah-0lggc" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"><em>&ldquo;How Adobe Workfront MCP Server is Transforming Work Management&rdquo;</em></a>
          </li>
          <li>
            Nino Skuflic, <a href="https://www.ninoskuflic.com/en/insights/content-supply-chain/beyond-work-management-how-mcp-will-transform-adobe-workfront" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer"><em>&ldquo;Beyond Work Management: How MCP Will Transform Adobe Workfront&rdquo;</em></a>
          </li>
          <li>
            <a href="https://zapier.com/mcp/adobe-workfront" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Zapier MCP for Adobe Workfront</a> (third-party MCP server)
          </li>
        </ul>
      </div>

      <div className="border-t border-border mt-16 pt-8">
        <Link href="/system-notes" className="text-primary font-medium hover:underline">
          ← Back to From the Field
        </Link>
      </div>
    </article>
  );
}
