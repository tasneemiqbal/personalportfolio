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
          ["Timeline", "March to May 2025"],
          ["Tools", "React, Flask, Firebase, Chart.js"],
        ]}
        links={[{ label: "Try the live demo", href: DEMO }]}
      />

      <Section heading="The brief was five features long. The timeline wasn't.">
        <Prose>
          PennyPal is a budget app. You tell it what you earn and what you want to cap yourself at, you log expenses
          as they happen, and it tells you what's left and where the rest went. I led the whole thing: scope, design,
          build.
        </Prose>
        <Prose>
          The brief asked for per-category budgets, receipts photographed and read automatically, budget periods you
          could reset on whatever day you liked, and alerts at a percentage threshold. Seven weeks. So the question
          was never how to build all of it. It was which parts were the product and which were decoration nobody
          would finish.
        </Prose>
      </Section>

      <Section heading="I cut four of the five features in the brief">
        <Prose>
          I looked hard at the apps that already do this. They all ask for a pile of setup before they give you
          anything back, and that's where they lose people. That's desk research, not a study, and I won't dress it up
          as one. But it pointed the same way the calendar did, and that's what made the cut a product decision rather
          than a schedule concession.
        </Prose>
        <ComparisonTable headings={["From the brief", "Shipped", "Why"]} rows={cuts} />
        <div className="mt-10">
          <Prose>
            What the cut bought: first-run setup is one income figure and one budget figure. Everything else added
            cost before the app gave anything back.
          </Prose>
          <Prose>
            What it cost: someone genuinely budgeting across categories can't do it in PennyPal. That's a real person
            I chose not to serve. Give me a second month and it's the first thing I build, on top of the global budget
            rather than in place of it, so the simple path survives.
          </Prose>
        </div>
      </Section>

      <Section heading="The cuts are in the paperwork, not the retelling">
        <Prose>
          It's easy to narrate a scope cut afterwards as though you meant it all along. Here the paperwork settles it.
          The user stories were written in March and revised in May, both versions are on file, and four of the ten
          changed. The first row is the one that matters.
        </Prose>
        <ComparisonTable headings={["User story", "March", "May"]} rows={stories} />
      </Section>

      <Section heading="Financial data was the one place I wouldn't improvise">
        <Callout label="The argument">
          Password storage, sessions, token expiry, account recovery. All easy to get almost right and genuinely
          damaging to get wrong. On this timeline, with no security review available, writing our own auth meant
          shipping something I couldn't honestly call secure. So I argued for Firebase.
        </Callout>
        <Prose>
          The trade was a vendor dependency and a service that has to be reachable before anyone can sign in. Cheap,
          against the alternative. It also brought Google sign-in for almost nothing, which took a password out of
          signup entirely: a setup-burden win as well as a security one.
        </Prose>
        <Prose>
          The backend verifies every request's token server side rather than trusting the client, so the property
          holds past the login screen instead of stopping there.
        </Prose>
      </Section>

      <Section heading="Then I watched people open it for the first time">
        <Prose>
          I sat with fifteen people and handed them the app. What I remember is the shape of it rather than a tally:
          nobody struggled with budgeting, they struggled to work out where to start. I didn't count stumbles, so I
          won't quote numbers.
        </Prose>
        <Gallery>
          <Figure
            src={dashboardImg}
            alt="The PennyPal dashboard showing available balance, a budget bar, a spending chart and recent transactions"
            caption="The shipped Overview: what is left, what it went on, and what you logged"
          />
          <Figure
            src={emptyImg}
            alt="The PennyPal dashboard on a new account, every figure reading zero dollars and all three panels empty"
            caption="What a new account landed on: same route, same layout, nothing in it"
          />
        </Gallery>
        <Prose>
          A new account landed on the same Overview a returning user sees. Every figure read zero, all three panels
          sat empty. Four things were wrong with it.
        </Prose>
        <CardGrid items={failures} />
        <div className="mt-10">
          <Prose>
            I'd built a dashboard that only makes sense once it has data, then left getting data into it as the thing
            you had to work out alone. I cut the setup burden and never asked what replaced it.
          </Prose>
          <Prose>
            That's an activation problem, not acquisition or retention. They've already signed up, so I have their
            attention and their intent, and they leave before the product produces anything. Not because the work is
            hard. Reaching the first useful number takes three non-obvious steps in a specific order, and nothing in
            the interface said so.
          </Prose>
        </div>
      </Section>

      <Section heading="Sixty seconds, six steps, an exit at every one">
        <Prose>
          I built a spotlight tour instead of rewriting the empty copy or forcing a setup wizard. The failure I
          watched was spatial: people didn't misunderstand budgeting, they didn't know where anything was or what to
          touch first. A tour is the only one of those options that teaches against the real interface, so you're
          looking at your actual sidebar while being told what it does.
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
            It had to be seamless rather than loud. A tour that feels like an obstacle is worse than no tour, because
            it stalls the product at the moment someone is most willing to leave. So skip is on every step and never
            buried, the flag is set on skip as well as completion, and a replay button sits in the sidebar so skipping
            stays low-stakes. Escape exits, arrows navigate, focus follows the card.
          </Prose>
          <Prose>
            Two decisions I'd defend. Step four says outright that the number reads zero because there's nothing in
            the account yet, because narrating an empty dashboard as though it were full is how an interface loses
            trust in its first thirty seconds. And step six isn't a congratulations. You're not set up, you have an
            empty account, so the primary button goes straight to the income screen.
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
          I haven't measured whether the tour works. No live users, no analytics, so I could put a number here and
          nobody could check it. What exists is the instrumentation: the funnel events are in the code ahead of the
          traffic, not retrofitted after it.
        </Prose>
        <Prose>
          The number I'd read is activation, the share of new signups with an income, a budget and one expense inside
          24 hours. The one I'd watch hardest is whether people who skip activate anyway. If they do, the tour is
          theatre and should be cut. A guided tour is exactly the kind of feature that survives because it looks like
          care.
        </Prose>
        <Prose>
          What I'd do differently is smaller than either half of this. I designed every screen against realistic
          data, which is exactly why the zero state was the weakest part of the product. I'd design the empty state
          first now. It's the only screen every single user sees.
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
