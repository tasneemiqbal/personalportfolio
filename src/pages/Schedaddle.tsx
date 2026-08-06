import {
  CardGrid,
  Callout,
  CaseStudyFoot,
  CaseStudyHero,
  ComparisonTable,
  Embed,
  Figure,
  Gallery,
  Prose,
  Section,
} from "../components/case-study";

import flowImg from "../assets/sched-flow.png";
import landingImg from "../assets/sched-landing.png";
import dashboardImg from "../assets/sched-dashboard.png";
import availabilityInputImg from "../assets/sched-availability-input.png";
import resultsImg from "../assets/sched-results.png";
import availabilityOverviewImg from "../assets/sched-availability-overview.png";
import scheduleImg from "../assets/sched-schedule.png";
import swapImg from "../assets/sched-swap.png";
import announcementsImg from "../assets/sched-announcements.png";
import composeImg from "../assets/sched-compose.png";
import teamsImg from "../assets/sched-teams.png";
import createTeamImg from "../assets/sched-create-team.png";
import joinTeamImg from "../assets/sched-join-team.png";

const findings = [
  { title: "Constant changes", text: "Every change means another round of manual updates." },
  { title: "Fragmented tools", text: "Availability in When2Meet, schedules in Sheets, updates in Discord." },
  { title: "Manual comms", text: "Updates get buried in message threads." },
  {
    title: "Priced for teams of five",
    text: "Every option they'd tried was built for a company, not a club.",
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
        ]}
      />

      <Section heading="Coordination shouldn't take three apps">
        <Figure
          src={dashboardImg}
          alt="The Schedaddle dashboard with a to-do list, a calendar, and pending responses from teammates"
          caption="The dashboard: what you owe people, what's coming, and who hasn't replied"
        />
        <Prose>
          Schedaddle is a lightweight scheduling tool for small teams. It combines availability polling, shift
          scheduling, and announcements in one place, replacing the patchwork of When2Meet, Sheets, and group chats
          that most clubs and student orgs run on.
        </Prose>
        <Prose>
          I was the product lead: I ran the user interviews, co-authored the spec, and drove the Figma prototype. The
          work below is the reasoning that got us from a vague complaint about scheduling to a prototype we could put
          in front of someone.
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

      <Section heading="Fifteen screens, wired end to end">
        <Embed
          src="https://embed.figma.com/design/fGiV23UznJOeMfHrsKR7J2/Schedaddle---Web-App-Design?node-id=1-3&embed-host=share"
          title="Schedaddle interactive Figma prototype"
          caption="The prototype itself. Click through it"
        />
        <Prose>
          Fifteen screens, clickable end to end, split into two flows so it could be walked two ways. The public flow
          runs a stranger from the landing page through sign-up. The logged-in flow drops you into a populated
          account and lets you reach every feature from anywhere, which is the only way to find out whether the
          navigation actually holds.
        </Prose>
        <Figure
          src={flowImg}
          alt="The Figma prototype flow view, showing fifteen connected screens across two flows"
          caption="The wiring behind it: two flows, fifteen screens, every connection drawn"
        />
        <Prose>
          Building it as one connected prototype rather than fifteen separate mockups is what made it testable.
          Loose frames let you defend any screen individually. A wired prototype makes you answer where a person goes
          next, and that is where the gaps show up.
        </Prose>
        <div className="mt-10">
          <Figure
            src={landingImg}
            alt="The Schedaddle marketing landing page with the headline Stop texting your team, start scheduling smarter"
            caption="The landing page had to explain the product to someone who had never heard of it"
          />
        </div>
      </Section>

      <Section heading="The availability poll is the screen everything else depends on">
        <Prose>
          If this screen fails, nothing downstream has data to work with. It is also the screen our interviews
          complained about most, because it is the one everybody has already used somewhere else and disliked.
        </Prose>
        <Gallery>
          <Figure
            src={availabilityInputImg}
            alt="The Add Availability screen with a drag-selectable week grid and a manual add-time panel"
            caption="Filling in your own week"
          />
          <Figure
            src={resultsImg}
            alt="The group availability results screen with a green density grid and a stated best time"
            caption="Reading the group's"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            Three decisions carry this pair. Drag selection is the primary input, but there is a manual add-time
            panel next to it, because drag-select is exactly the interaction that fails on a trackpad or a touch
            screen and leaves someone stuck with no other way in.
          </Prose>
          <Prose>
            The results grid uses green density for how many people are free, and then says the answer in words at
            the bottom rather than leaving you to squint at shades: best time Tue 8a or Wed 12p, all four responders
            available. When2Meet's contrast problem was the single most repeated complaint in our interviews, and
            reading a heat map is not the job. Knowing when to meet is.
          </Prose>
          <Prose>
            It also shows four of six responded, and names all six. A poll where you cannot see who is missing is a
            poll you have to chase in a group chat, which is the thing we were trying to stop.
          </Prose>
        </div>
      </Section>

      <Section heading="Chasing people is the actual job">
        <Figure
          src={availabilityOverviewImg}
          alt="The availability overview with a select-people reminder panel and a response tracker"
          caption="Select who to nudge, rather than messaging everyone again"
        />
        <Prose>
          Our interviews described the work as constant follow-up, not scheduling. So the overview is built around
          the follow-up: tick the people who haven't answered, send them a reminder, and watch the tracker move
          between pending, confirmed and scheduled. Nobody who already replied gets nudged again.
        </Prose>
        <Prose>
          This is where "prioritize specific people" from the research turns into something concrete. In When2Meet
          everyone counts the same and you chase in a group chat. Here the person organizing can act on the four who
          are holding things up without messaging the eleven who aren't.
        </Prose>
      </Section>

      <Section heading="A week that changes after it's already posted">
        <Prose>
          This was the thing the interviews kept returning to, and it is the case the schedule view had to survive.
        </Prose>
        <Gallery>
          <Figure
            src={scheduleImg}
            alt="The weekly team schedule with a four-state colour legend"
            caption="Four states, each labelled, not colour alone"
          />
          <Figure
            src={swapImg}
            alt="The shift swap screen with a numbered three-step flow and a note to the manager"
            caption="A swap is three steps and two confirmations"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            The schedule carries four states, scheduled, available, limited and unavailable, and every one is named
            in the legend rather than left to colour. Green and red carrying meaning on their own would have made the
            most important screen in the product unreadable to anyone with a colour vision deficiency.
          </Prose>
          <Prose>
            Swapping is numbered in three steps down the right side, and it ends in approval rather than in a change.
            Both the manager and the person you're swapping with have to confirm, and there's a note field for the
            reason. The interviews were clear that the hard part of a swap is not the calendar edit, it's getting
            everyone to agree to it and having a record that they did.
          </Prose>
        </div>
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
        <Gallery>
          <Figure
            src={announcementsImg}
            alt="The announcements feed with three persistent posts, each showing a reply count"
            caption="Posts stay findable, replies attached"
          />
          <Figure
            src={composeImg}
            alt="The new announcement composer with title, message and a pin to top of feed option"
            caption="Composing one, with a pin for what gets looked up again"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            The difference that matters is that a schedule change stays findable next week. Replies attach to the
            post instead of pushing it up a feed, and anything people need to look up repeatedly can be pinned. A
            group text does the opposite of all three.
          </Prose>
        </div>
      </Section>

      <Section heading="Polls and announcements need an audience">
        <Prose>
          Every other feature assumes a group already exists, so teams had to be cheap to make and cheap to join. One
          person is usually in several: a work team, a project, a class.
        </Prose>
        <Gallery columns={3}>
          <Figure
            src={teamsImg}
            alt="The teams screen showing three teams, a member list and team-specific activity"
            caption="Several teams per person, each with its own activity"
          />
          <Figure
            src={createTeamImg}
            alt="The create a team modal, with only the team name required"
            caption="Only the name is required"
          />
          <Figure
            src={joinTeamImg}
            alt="The join a team modal, which takes an invite code"
            caption="Joining takes a code, not an account hunt"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            Creating a team asks for a name and nothing else. Description and invites are both marked optional,
            because a setup form is the first thing a new user meets and the fastest way to lose them. Joining takes
            an invite code that expires after seven days, so a code leaked into a group chat doesn't stay a way in
            forever.
          </Prose>
        </div>
      </Section>

      <Section heading="Consolidating the workflow">
        <Prose>Schedaddle pulls every job into one system.</Prose>
        <ComparisonTable headings={["Feature", "Current workflow", "Our solution"]} rows={comparison} />
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
