import {
  CardGrid,
  Callout,
  CaseStudyFoot,
  CaseStudyHero,
  ComparisonTable,
  Figure,
  Gallery,
  Prose,
  Section,
  Stats,
} from "../components/case-study";

import dashboardImg from "../assets/pennypal-dashboard.jpg";
import emptyImg from "../assets/pennypal-empty.jpg";
import tourNavImg from "../assets/pennypal-tour-nav.jpg";
import tourHeroImg from "../assets/pennypal-tour-hero.jpg";
import tourFinishImg from "../assets/pennypal-tour-finish.jpg";

const DEMO = "https://tasneemiqbal.github.io/pennypal-budget-app/";

// The reasoning column is last on purpose: ComparisonTable renders the final
// column at higher contrast than the ones before it, and the reasoning is the
// part worth reading. "Shipped" in the middle is just the verdict.
const cuts: [string, string, string][] = [
  [
    "Per-category budgets",
    "Cut, one monthly budget instead",
    "Category limits mean a setup screen with a row per category before the app does anything at all. Expenses still carry a category, so the reporting stayed per category even though the limit did not, and that is where most of the value was.",
  ],
  [
    "Receipt scanning",
    "Cut",
    "OCR was the largest engineering risk in the brief and the least differentiating thing in it. Committing to it meant risking having nothing to show.",
  ],
  [
    "Resettable periods",
    "Cut",
    "A user-configurable period touches every derived figure and every query in the app. Expensive, and nothing about it changes what the product is for.",
  ],
  [
    "Threshold alerts",
    "Partly shipped",
    "The dashboard warns you in place once you pass 30% of your budget. I cut the delivery mechanism, push and email, and kept the moment it was useful.",
  ],
  [
    "Income, goals, charts, sign-in",
    "Shipped",
    "The actual loop. Money in, money out, what is left, and where it went.",
  ],
];

// Both documents are still on file, dated 3/18/2025 and 5/9/2025. This is the
// section that makes the cut checkable rather than a story told afterwards.
const stories: [string, string, string][] = [
  [
    "Budgets",
    "Set a monthly budget for different categories",
    "Set a budget",
  ],
  [
    "Export",
    "Export my financial data so that I can share or back it up",
    "Sign in with Google to save time",
  ],
  [
    "Recurring entries",
    "Set recurring transactions so I don't have to manually input fixed expenses",
    "Delete my income as it keeps fluctuating",
  ],
  [
    "Password reset",
    "Reset my password if I forget it",
    "An alert to show if I have an account or not",
  ],
];

const failures = [
  {
    title: "Buried instruction",
    text: "Add income on the Budget & Goals page was the one sentence telling a new user what to do, and it sat in the hero subtitle, the least important text on the screen.",
  },
  {
    title: "Unlabelled action",
    text: "Add expense sits in the top bar on every page. Nothing said it was the only way spending data gets in.",
  },
  {
    title: "No stated order",
    text: "Every headline figure derives from income, so the app produces nothing at all until income exists. Nowhere did it say so.",
  },
  {
    title: "Self-describing panels",
    text: "Each empty panel explained that it was empty. None of them offered the action that would fill it.",
  },
];

export function PennyPal() {
  return (
    <main>
      <CaseStudyHero
        kicker="Case study · Product and build"
        title="PennyPal"
        lede="A class brief asked for per-category budgets, receipt scanning, resettable budget periods and threshold alerts, on a timeline of about seven weeks. I cut four of the five and shipped a budgeting app that works."
        meta={[
          ["My role", "Product lead"],
          ["Timeline", "Mar to May 2025"],
          ["Tools", "React, Flask, Firebase, Chart.js"],
        ]}
        links={[{ label: "Try the live demo", href: DEMO }]}
      />

      <Section heading="The brief was five features long. The timeline wasn't.">
        <Figure
          src={dashboardImg}
          alt="The PennyPal dashboard showing available balance, a budget bar, a spending chart and recent transactions"
          caption="The shipped Overview: what is left, what it went on, and what you logged"
        />
        <Prose>
          PennyPal is a personal budget manager. You tell it what you earn and what you want to cap yourself at, you
          log expenses as they happen, and it tells you what is left and where the rest went. I led it end to end:
          scope, design, and the build.
        </Prose>
        <Prose>
          The brief that started it was specific and long. Budgets set per category, receipts photographed and read
          automatically, budget periods the user could configure to reset on whatever day they liked, and alerts that
          fired at a percentage threshold. Reading that list against the calendar, the useful question was not how to
          build all of it. It was which of these was the product and which was decoration nobody would finish.
        </Prose>
      </Section>

      <Section heading="I cut four of the five features in the brief">
        <Prose>
          The reasoning came from looking hard at the apps that already do this. What they have in common is that they
          ask for a lot of setup before they give anything back, and that is where they lose people. That is desk
          research, not a study, and I am not going to dress it up as one. But it pointed at the same conclusion the
          timeline did, which is what turned the cut from a schedule concession into a product decision.
        </Prose>
        <ComparisonTable headings={["From the brief", "Shipped", "Why"]} rows={cuts} />
        <div className="mt-10">
          <Prose>
            What the cut bought: the entire first-run setup is one income figure and one budget figure. Everything
            else in the brief added cost before the app returned anything.
          </Prose>
          <Prose>
            What it cost: someone genuinely budgeting across categories cannot do it in PennyPal. That is a real user
            I chose not to serve. Given a second month it is the first thing I would build, and I would build it on
            top of the global budget rather than in place of it, so the simple path survives.
          </Prose>
        </div>
      </Section>

      <Section heading="The cuts are in the paperwork, not the retelling">
        <Prose>
          It is easy to narrate a scope cut after the fact as though it were deliberate. In this case the
          documentation settles it. The user stories were written in March and revised in May, both versions are on
          file, and four of the ten changed. The first row is the one that matters.
        </Prose>
        <ComparisonTable headings={["User story", "March", "May"]} rows={stories} />
      </Section>

      <Section heading="Financial data was the one place I wouldn't improvise">
        <Callout label="The argument">
          Password storage, session handling, token expiry and account recovery are all easy to get almost right and
          genuinely damaging to get wrong. On this timeline, with no security review available, writing our own auth
          meant shipping something I could not honestly call secure. So I argued for Firebase.
        </Callout>
        <Prose>
          The trade-off I accepted was a vendor dependency and an external service that has to be reachable before
          anyone can sign in. Against the alternative that was cheap. It also brought Google sign-in for close to
          nothing, which took a password out of the signup flow entirely, so it was a setup-burden win as well as a
          security one.
        </Prose>
        <Prose>
          The backend verifies every request's token server side rather than trusting the client, so the property
          holds past the login screen instead of stopping there.
        </Prose>
      </Section>

      <Section heading="Then I watched people open it for the first time">
        <Prose>
          I sat with fifteen people and gave them the app. What I remember clearly is the shape of it rather than a
          tally: people did not struggle with budgeting, they struggled to work out where to start. I did not keep
          counts against each stumble, so I am not going to quote any.
        </Prose>
        <Figure
          src={emptyImg}
          alt="The PennyPal dashboard on a new account, every figure reading zero dollars and all three panels empty"
          caption="What a new account landed on: same route, same layout, nothing in it"
        />
        <Prose>
          A new account arrived at the same Overview page a returning user sees. Every figure read zero and all three
          panels sat in their empty state. Four things were wrong with it.
        </Prose>
        <CardGrid items={failures} />
        <div className="mt-10">
          <Prose>
            I had built a dashboard that only makes sense once it has data, and then left getting data into it as the
            thing the user had to work out alone. I cut the setup burden successfully and never asked what replaced
            it.
          </Prose>
          <Prose>
            That is an activation problem rather than an acquisition or a retention one. The person has already signed
            up, so I have their attention and their intent. They leave before the product produces anything, and not
            because the work is hard. It is that reaching the first useful number takes three non-obvious steps in a
            specific order, and the interface said so nowhere.
          </Prose>
        </div>
      </Section>

      <Section heading="Sixty seconds, six steps, an exit at every one">
        <Prose>
          I built a spotlight tour rather than rewriting the empty copy or forcing a setup wizard. The observed
          failure was spatial: people did not misunderstand budgeting, they did not know where things were or which
          to touch first. A tour is the only one of those options that teaches against the real interface, so you are
          looking at the actual sidebar while being told what it does.
        </Prose>
        <Gallery columns={3}>
          <Figure
            src={tourNavImg}
            alt="Tour step two spotlighting the whole sidebar navigation"
            caption="Step 2: the whole nav at once, because the problem was the map"
          />
          <Figure
            src={tourHeroImg}
            alt="Tour step four spotlighting the headline figure, which reads zero dollars"
            caption="Step 4: explains the derivation, and admits the number is zero"
          />
          <Figure
            src={tourFinishImg}
            alt="The final tour step, offering to set up a budget or to explore alone"
            caption="Step 6: ends by handing over the action, not congratulating"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            The constraint I set was that it had to be seamless rather than loud. A tour that feels like an obstacle
            is worse than no tour, because it delays the product at the one moment the user is most willing to leave.
            So skipping is available at every step and never buried, the flag is set on skip as well as on
            completion, and a replay button sits in the sidebar so skipping stays low-stakes. Escape exits, arrows
            navigate, and focus follows the card.
          </Prose>
          <Prose>
            Two decisions I would defend. Step four says outright that the number reads zero because there is nothing
            in the account yet, because narrating an empty dashboard as though it were full is how an interface loses
            trust in its first thirty seconds. And step six is not a congratulations. The user is not set up, they
            have an empty account, so the primary button goes straight to the income screen.
          </Prose>
        </div>
      </Section>

      <Section heading="Where it stands">
        <Stats
          items={[
            { figure: "4 of 5", label: "Brief features cut before building" },
            { figure: "3", label: "Screens in the shipped product" },
          ]}
        />
        <Prose>
          I have not measured whether the tour works. PennyPal is not running with live users and has no analytics, so
          I could put a number here and nobody could check it. What exists is the instrumentation: the funnel events
          are in the code ahead of the traffic rather than retrofitted after it.
        </Prose>
        <Prose>
          The number I would read is activation, the share of new signups with an income, a budget and one expense
          inside 24 hours. The one I would watch hardest is whether people who skip activate anyway. If they do, the
          tour is theatre and should be cut. A guided tour is exactly the kind of feature that survives because it
          looks like care.
        </Prose>
        <Prose>
          The thing I would do differently is smaller and worse than either half of this. I designed every screen
          against realistic data, which is precisely why the zero state was the weakest part of the product. I would
          design the empty state first now. It is the only screen every single user sees.
        </Prose>
      </Section>

      <CaseStudyFoot
        text="Another project where the interesting part was what got cut."
        nextLabel="Next: Schedaddle"
        nextTo="/work/schedaddle"
      />
    </main>
  );
}
