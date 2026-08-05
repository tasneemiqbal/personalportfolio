import {
  BARLOW_CONDENSED,
  MONO,
  CardGrid,
  Callout,
  CaseStudyFoot,
  CaseStudyHero,
  ComparisonTable,
  Figure,
  Gallery,
  Prose,
  Section,
} from "../components/case-study";

import prototypeImg from "../assets/schedaddle.png";
import landingImg from "../assets/marketing-landing.png";
import scheduleImg from "../assets/schedule.png";

// BASE_URL is '/personalportfolio/' on the GitHub Pages build and '/' elsewhere,
// so a bare path would resolve locally and 404 there.
const SPEC = `${import.meta.env.BASE_URL}Schedaddle_Product_Spec.pdf`;

const findings = [
  { title: "Constant changes", text: "Every change means another round of manual updates." },
  { title: "Fragmented tools", text: "Availability in When2Meet, schedules in Sheets, updates in Discord." },
  { title: "Manual comms", text: "Updates get buried in message threads." },
  {
    title: "Priced for teams of five",
    text: "Every option they'd tried was built for a company, not a club.",
  },
];

const modules = [
  {
    title: "Dashboard",
    sub: "Central hub for all activity",
    features: ["Announcements", "Polls", "Schedule updates"],
    why: "Key info gets lost in chats; the dashboard keeps it visible.",
  },
  {
    title: "Availability Poll",
    sub: "Collect team availability efficiently",
    features: [
      "Click or drag selection",
      "Prioritize specific people",
      "Remove participants",
      "Highlight best times visually",
    ],
    why: "Fixes When2Meet's poor contrast, clumsy selection, and lack of prioritization.",
  },
  {
    title: "Announcements",
    sub: "Structured communication channel",
    features: ["Group-specific messages", "Persistent, organized posts", "Reaches everyone on the team"],
    why: "A schedule change needs to stay findable next week. A group text doesn't. Announcements hold the things you have to look up again.",
  },
  {
    title: "Shift Schedule",
    sub: "Real-time scheduling system",
    features: [
      "Live calendar updates",
      "Notifications for changes",
      "Shift swap functionality",
      "Auto-fill for call-outs",
    ],
    why: "Addresses schedule volatility and manual coordination.",
  },
  {
    title: "Create Team",
    sub: "Manage team structure",
    features: ["Group organization", "Targeted communication"],
    why: "Polls and announcements need an audience. The team is that audience.",
  },
];

const comparison: [string, string, string][] = [
  [
    "Dashboard",
    "Multiple tools (Sheets, When2Meet, Teams, Discord)",
    "Announcements, schedules, and to-dos in one place",
  ],
  [
    "Availability Poll",
    "When2Meet: limited dragging, hard to prioritize or remove people",
    "Repeatable drag selection and the ability to prioritize specific people",
  ],
  [
    "Announcements",
    "Easily missed or lost in message threads",
    "Centralized and organized, recent updates clearly visible",
  ],
  [
    "Shift Scheduling",
    "Manually notify people and find replacements",
    "App identifies the gap and notifies others to fill in",
  ],
  [
    "Creating Teams",
    "Teams created across different messaging platforms",
    "Team creation and management inside one app",
  ],
];

export function Schedaddle() {
  return (
    <main>
      <CaseStudyHero
        kicker="Case study · Senior project"
        title="Schedaddle"
        lede="One lightweight platform that unifies availability polling, scheduling, and announcements, so small teams stop juggling three tools to plan one week."
        meta={[
          ["My role", "Product lead"],
          ["Timeline", "Jan 2026 to present"],
          ["Tools", "Figma, User Interviews"],
        ]}
        links={[
          {
            label: "View Figma prototype",
            href: "https://www.figma.com/design/fGiV23UznJOeMfHrsKR7J2/Schedaddle---Web-App-Design?node-id=1-2&t=vpP9H1s8e4xnplIQ-0",
          },
          { label: "Read the product spec", href: SPEC },
        ]}
      />

      <Section heading="Coordination shouldn't take three apps">
        <Figure
          src={prototypeImg}
          alt="Schedaddle Figma prototype screens"
          caption="Selected screens from the interactive Figma prototype"
        />
        <Prose>
          Schedaddle is a lightweight scheduling tool for small teams. It combines availability polling, shift
          scheduling, and announcements in one place, replacing the patchwork of When2Meet, Sheets, and group chats
          that most clubs and student orgs run on.
        </Prose>
        <Prose>
          It started as a CS senior project on a team of five. I was the product lead: I ran the user interviews,
          co-authored the spec, and drove the Figma prototype. The work below is the reasoning that got us from a
          vague complaint about scheduling to five modules we could defend.
        </Prose>
      </Section>

      <Section heading="What the interviews told us">
        <Prose>
          We talked to three people who run recurring schedules for small teams. The tools they needed all existed.
          None of them talked to each other.
        </Prose>
        <CardGrid items={findings} />
        <div className="mt-10">
          <Prose>
            Two things surprised us. First, people cared how it <em>looked</em>. "Cute" came up unprompted, and it
            wasn't a throwaway. A tool you open every week has to be pleasant to open. We had assumed design was the
            part nobody would notice.
          </Prose>
          <Prose>
            Second, they wanted their calendar and their availability poll in one place, and their group text left
            exactly where it was. That second half is the finding that shaped the product, and it's the opposite of
            what we were planning to build.
          </Prose>
        </div>
      </Section>

      <Section heading="Five core modules, one source of truth">
        <Prose>Each module maps back to a research insight.</Prose>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mt-8">
          {modules.map((m) => (
            <article key={m.title} className="bg-background p-6 flex flex-col">
              <h3
                className="text-2xl font-bold uppercase tracking-tight leading-none mb-2"
                style={BARLOW_CONDENSED}
              >
                {m.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-5" style={MONO}>
                {m.sub}
              </p>
              <ul className="mb-5">
                {m.features.map((f) => (
                  <li
                    key={f}
                    className="py-2 border-b border-border text-sm text-foreground/70"
                    style={{ fontWeight: 300 }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/60 leading-relaxed mt-auto" style={{ fontWeight: 300 }}>
                <span className="text-foreground">Why: </span>
                {m.why}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section heading="A look at the prototype">
        <Prose>
          Fifteen screens, clickable end to end. The landing page had to explain the product to someone who had never
          heard of it, and the schedule view had to survive the thing our interviews kept describing: a week that
          changes after it has already been posted.
        </Prose>
        <Gallery>
          <Figure src={landingImg} alt="Marketing landing page" caption="Marketing landing page" />
          <Figure src={scheduleImg} alt="Shift schedule screen" caption="Shift schedule view" />
        </Gallery>
      </Section>

      <Section heading="Consolidating the workflow">
        <Prose>Schedaddle pulls every job into one system.</Prose>
        <ComparisonTable headings={["Feature", "Current workflow", "Our solution"]} rows={comparison} />
      </Section>

      <Section heading="We cut the chat feature we came in wanting to build">
        <Callout label="The decision">
          Real-time messaging was in our original plan. The interviews killed it: people were happy with their group
          text and had no interest in moving it. We shipped one-way announcements instead: Partiful-style,
          persistent, searchable.
        </Callout>
        <Prose>
          It was also the cheap decision, which is worth being honest about: building chat would have meant
          encryption, moderation, and notification infrastructure we had no time for. But we didn't cut it because it
          was expensive. We cut it because nobody asked for it, and I'd have argued for cutting it even if it had
          been free.
        </Prose>
      </Section>

      <Section heading="Where it actually stands">
        <Prose>
          There is a 15-screen clickable prototype and a spec covering five modules. Our professor has walked it end
          to end and didn't get stuck.
        </Prose>
        <Prose>
          That is not validation and I'm not going to call it that. No one outside the team has used it yet. The next
          thing that matters is putting it in front of the people we interviewed. The availability poll is the one
          screen everything else depends on, and we don't yet know whether it survives contact with a real team
          trying to plan a real week.
        </Prose>
      </Section>

      <CaseStudyFoot nextLabel="Next: DIG Magazine" nextTo="/work/dig" />
    </main>
  );
}
