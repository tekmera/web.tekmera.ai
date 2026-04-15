import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const WhatAICodingWontTeachYou = () => (
  <Layout>
    <article className="max-w-3xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-body font-semibold mb-4">
          <Link to="/system-notes" className="hover:text-foreground transition-colors">
            From the Field
          </Link>
          {" "}/ Principles
        </p>
        <h1 className="text-3xl md:text-[2.75rem] md:leading-[1.15] text-foreground mb-6">
          What AI Coding Still Needs From You
        </h1>
        <p className="text-lg text-secondary-foreground leading-relaxed">
          Four truths that only show up where intent meets execution.
        </p>
        <p className="text-sm text-muted-foreground">
          Written by David Kershaw — Tekmera Founder
        </p>
      </div>

      <div className="text-secondary-foreground leading-relaxed space-y-4">
        <p>
          When I used to code by hand, the ticket would come in with a general direction. We want this. Go figure it out.
        </p>
        <p>
          I'd have a pretty good idea where to start. I almost never had a clear idea where I'd end up. That was part of the coding process.
        </p>
        <p>
          I'd start with an assumption. Write just enough to test it. Stack the next assumption on top. Like Lego bricks, I was qualifying my model one piece at a time, and often the piece I'd just added would fail under reality. That's where things got interesting.
        </p>
        <p>
          More often than not, what came back from the work was pushback to product. Model corrections. <em>I know our shape of it at the beginning was this. But under reality, it looks more like this.</em>
        </p>
        <p className="text-foreground font-medium">That pushback was the job.</p>

        <hr className="border-border my-8" />

        <p>
          There's a narrative now that everyone's a product manager. Anyone can build. Ideas are free, implementation is free, judgment is democratized. To me, that's too easy. It assumes perfection before first contact. It assumes judgment is the be-all and end-all of building anything.
        </p>
        <p>
          The narrative works because implementation really is free now. We do the upfront design. We do the product thinking. We express our ideas, and something builds a coherent version of them. If you're paying attention, you might see the shape form underneath. But the feedback loop is broken. The creative touching-reality, the figuring out the shape — it's all happening pre-build. It doesn't approach reality. It never touches reality.
        </p>
        <p>
          I'm not dragging AI. I almost exclusively code with AI at this point. I'm just noting that something specific used to happen, and now it doesn't.
        </p>

        <hr className="border-border my-8" />

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          A Small Example
        </p>
        <p>
          I was designing a system with a help desk style chat agent, where the model, to me, was case escalation. The user would chat to the agent, it would open a case, route it, escalate it, back and forth. It all made sense to me. Then I touched code, and that model fell apart. The conversation is the model, not the case.
        </p>
        <p className="text-foreground font-medium">
          That insight does not arrive pre-build. It only arrives at contact. I had judgment. I used it. It made sense. I was wrong.
        </p>

        <hr className="border-border my-8" />

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          A Different Domain
        </p>
        <p>
          When I played competitive pipe band drums, I'd write snare scores. The entire purpose of a snare score is to accompany, express, and elevate the bagpipe's music. Where notes are held, where they're emphasized, which to cut, which to play loud.
        </p>
        <p>
          I used to be meticulous. Try a pattern. It fits or it doesn't. Try another. Go with what fits best. But nothing survives until you play it on the drums with the bagpipes for the first time together. The bagpipe score changes day to day. You figure it out by iterating. Sometimes on the competition day.
        </p>
        <p className="text-foreground font-medium">Creativity that worked in isolation collapsed at contact.</p>

        <hr className="border-border my-8" />

        <p className="text-foreground font-medium text-sm uppercase tracking-wider border-b border-border pb-2 mb-6 mt-12">
          Contact Truths
        </p>
        <p>
          I've been trying to name what used to come from implementation. Four so far. Each one is a discovery. I'm calling them contact truths — they only show up where intent meets execution. With AI, you don't hit them unless you force it.
        </p>

        <p className="text-foreground font-medium mt-6">1. Domain Collapse.</p>
        <p>
          Writing the code is what shows you the model doesn't fit the system. <em>The conversation is the model, not the case.</em> You find out when you try to write it.
        </p>

        <p className="text-foreground font-medium mt-6">2. Path Discovery.</p>
        <p>
          The "what if this happens" questions you didn't think about until you had to code them. You thought you had three paths. You have fourteen.
        </p>

        <p className="text-foreground font-medium mt-6">3. Not Worth It.</p>
        <p>
          At some point you stop and ask if the thing is worth building at all. The cost piling up is the answer. With AI, the cost is invisible to you — so the question never gets asked. You finish a thing you should have stopped.
        </p>

        <p className="text-foreground font-medium mt-6">4. Learning from Doing.</p>
        <p>
          Building produces moves you couldn't reach by judgment alone. Cleaner abstractions, better metaphors, unexpected reuse. The work is the work.
        </p>

        <p className="mt-6">
          The first three are about the domain pushing back on you. The fourth is you pushing back on the domain.
        </p>


        <hr className="border-border my-8" />

        <p>Three of these might be recoverable through practice:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Pressure-test the model with use cases before you build. Walk real flows through it and find where it doesn't fit.</li>
          <li>Build a catch-all for the paths you didn't think of. The first version doesn't need to handle every case — it needs a clean fallback that holds them until you're ready.</li>
          <li>Trim by business value, not complexity. Sometimes the work is complicated and necessary — you do it. Sometimes the value isn't there — you don't. AI makes it easy to forget the difference because it'll build anything.</li>
        </ul>
        <p className="text-foreground font-medium mt-6">
          Learning from Doing doesn't have a substitute I've found. You have to do the work.
        </p>

        <hr className="border-border my-8" />

        <p>
          I won't be going back to coding by hand. AI has allowed me to move with precision and speed that's mostly better than coding by hand, with the caveat that it's taken a lot of practice to get there. My experience coding by hand is what allows me to move with that speed. It's important to acknowledge what we've lost. By slowing down and not forgetting to touch the thing we're building, we can ensure we don't lose the truth.
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

export default WhatAICodingWontTeachYou;
