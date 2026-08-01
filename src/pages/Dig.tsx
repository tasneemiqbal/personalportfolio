import {
  CardGrid,
  CaseStudyFoot,
  CaseStudyHero,
  Figure,
  Prose,
  Section,
  Stats,
} from "../components/case-study";

import digImg from "../assets/digmag.jpg";

const problems = [
  { title: "Deep navigation", text: "Key content sat up to three clicks away." },
  { title: "Cognitive load", text: "Unclear structure made the site hard to scan." },
  {
    title: "Muted identity",
    text: "A safe, minimal look for a magazine whose whole appeal is that it isn't safe or minimal.",
  },
];

export function Dig() {
  return (
    <main>
      <CaseStudyHero
        kicker="Case study · Web redesign"
        title="DIG Magazine"
        lede="Leading the redesign of the student magazine site, making content faster to reach and giving it a bold, color-forward identity that matches how its readers actually want to read."
        meta={[
          ["My role", "Product & engineering lead"],
          ["Team", "4-person design & faculty advisory"],
          ["Timeline", "Jun 2026 to present"],
          ["Tools", "Figma, HTML, CSS"],
          ["Context", "Beach Media"],
        ]}
        links={[{ label: "Visit the live site", href: "https://www.digmaglb.com/" }]}
      />

      <Section heading="The stories were good. Getting to them wasn't.">
        <Figure src={digImg} alt="DIG Magazine site preview" caption="The DIG Magazine site" />
        <Prose>
          DIG is a student-run arts and culture magazine. As product and engineering lead on the redesign, I
          reworked how readers move through the site, and I'm now building the approved Figma design into a
          responsive one.
        </Prose>
      </Section>

      <Section heading="What was wrong with the old site">
        <Prose>
          I clicked through the existing navigation the way a reader would, counting steps to the things people
          actually come for. It took too many.
        </Prose>
        <CardGrid items={problems} />
      </Section>

      <Section heading="What I changed">
        <Prose>
          I led the navigation rework, cutting key content from three clicks to one across six of eight sections. The
          argument I made to the team was simple: our readers are students, they are reading on a phone between
          classes, and every click is a chance for them to leave. Nobody browses a student magazine patiently.
        </Prose>
        <Prose>
          With the design and faculty group, I helped push for a maximalist, color-forward direction. That was a
          judgment call about who reads DIG, not a finding from a study, and I want to be straight about which is
          which.
        </Prose>
      </Section>

      <Section heading="Where it stands">
        <Stats
          items={[
            { figure: "3 → 1", label: "Clicks to reach key content" },
            { figure: "6 / 8", label: "Sections with a shortened path" },
          ]}
        />
        <Prose>
          The navigation numbers come from walking the old site and counting, not from a usability study with
          readers. That study is the thing I'd do next if I had the time. Build is in progress; the current site is
          at{" "}
          <a
            href="https://www.digmaglb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand border-b border-brand/40 hover:border-brand transition-colors"
          >
            digmaglb.com
          </a>
          .
        </Prose>
      </Section>

      <CaseStudyFoot
        text="More product thinking next door."
        nextLabel="Next: Schedaddle"
        nextTo="/work/schedaddle"
      />
    </main>
  );
}
