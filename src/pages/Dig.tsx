import {
  BARLOW_CONDENSED,
  MONO,
  Callout,
  CardGrid,
  CaseStudyFoot,
  CaseStudyHero,
  ComparisonTable,
  Figure,
  Gallery,
  Prose,
  Section,
  Stats,
} from "../components/case-study";

import menuImg from "../assets/dig-menu.jpg";
import homeImg from "../assets/dig-home.jpg";
import sectionsImg from "../assets/dig-sections.jpg";
import categoryImg from "../assets/dig-category.jpg";
import oldNav1 from "../assets/dig-old-nav-1.jpg";
import oldNav2 from "../assets/dig-old-nav-2.jpg";
import oldNav3 from "../assets/dig-old-nav-3.jpg";
import oldSectionsImg from "../assets/dig-old-sections.jpg";
import oldHomeImg from "../assets/dig-old-home.jpg";

const problems = [
  {
    title: "Buried categories",
    text: "Fashion was three taps down: menu, then Categories, then the section itself.",
  },
  {
    title: "Homepage firehose",
    text: "The alternative to the menu was scrolling past every section in order. Neither one is navigation.",
  },
  {
    title: "Content behind arrows",
    text: "Each section showed four articles and hid the rest inside a carousel.",
  },
  {
    title: "Color without a system",
    text: "Art got coral, Fashion olive, Music orange. The other four got nothing, and none of it meant anything.",
  },
];

// The seven categories all sat one level below Categories. Magazine and Podcasts
// were already top level, which is why they are the rows that do not move.
const nav: string[][] = [
  ["Fashion", "Menu → Categories → Fashion", "Categories → Fashion"],
  ["Community", "Menu → Categories → Community", "Categories → Community"],
  ["Art", "Menu → Categories → Art", "Categories → Art"],
  ["Essays", "Menu → Categories → Essays", "Categories → Essays"],
  ["Food", "Menu → Categories → Food", "Categories → Food"],
  ["Music", "Menu → Categories → Music", "Categories → Music"],
  ["Sponsored", "Menu → Categories → Sponsored Content", "Homepage section, out of the category menu"],
  ["Magazine", "Menu → Magazine", "Magazine, unchanged"],
  ["Podcasts", "Menu → Podcasts", "Podcasts, unchanged"],
];

// The click table proves the claim but takes reading. This shows the same thing
// at a glance: two levels of menu collapsing into one. Indentation and a left
// rule carry the hierarchy, which keeps it in the same hairline vocabulary as
// the rest of the page rather than importing a chart library for two trees.
function NavTree({
  label,
  sublabel,
  opens,
  rows,
}: {
  label: string;
  sublabel: string;
  opens: string;
  rows: { depth: number; text: string; note?: string }[];
}) {
  return (
    <div className="bg-background p-6 sm:p-8 h-full flex flex-col">
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60" style={MONO}>
        {label}
      </p>
      <p className="text-sm text-foreground/60 mt-2 mb-7" style={{ fontWeight: 300 }}>
        {sublabel}
      </p>

      <ul>
        {rows.map((r) => (
          <li
            key={`${r.depth}-${r.text}`}
            // Indent is the whole point of the diagram, so it is measured rather
            // than left to a utility class: one step per level of menu.
            style={{ paddingLeft: `${r.depth * 22}px` }}
            className={r.depth > 0 ? "border-l border-border" : undefined}
          >
            <span
              className={`block py-1.5 ${r.depth === 0 ? "text-base text-foreground" : "text-sm text-foreground/60"}`}
              style={{ fontWeight: 300 }}
            >
              {r.text}
              {r.note && (
                <span className="text-xs uppercase tracking-[0.15em] text-foreground/40 ml-3" style={MONO}>
                  {r.note}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* mt-auto so both panels land their count on the same line despite the
          before tree carrying two extra rows. */}
      <p
        className="text-xs uppercase tracking-[0.2em] text-brand mt-auto pt-5 border-t border-border"
        style={MONO}
      >
        {opens}
      </p>
    </div>
  );
}

const OLD_NAV_TREE = [
  { depth: 0, text: "Menu", note: "closed" },
  { depth: 1, text: "Categories", note: "opens again" },
  { depth: 2, text: "Fashion" },
  { depth: 2, text: "Community" },
  { depth: 2, text: "Art" },
  { depth: 2, text: "Essays" },
  { depth: 2, text: "Food" },
  { depth: 2, text: "Music" },
  { depth: 2, text: "Sponsored Content" },
  { depth: 1, text: "Magazine" },
  { depth: 1, text: "Podcasts" },
];

const NEW_NAV_TREE = [
  { depth: 0, text: "Categories" },
  { depth: 1, text: "Art" },
  { depth: 1, text: "Community" },
  { depth: 1, text: "Essays" },
  { depth: 1, text: "Fashion" },
  { depth: 1, text: "Food" },
  { depth: 1, text: "Music" },
  { depth: 0, text: "Magazine" },
  { depth: 0, text: "Podcasts" },
];

// Seven old sections, three of which happened to carry a color, versus six that
// each own one. The swatches are the argument; the copy only names it.
function ColorSystem({
  label,
  items,
}: {
  label: string;
  items: { name: string; color: string | null }[];
}) {
  return (
    <div className="bg-background p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6" style={MONO}>
        {label}
      </p>
      <ul className="flex flex-col gap-px">
        {items.map((s) => (
          <li key={s.name} className="flex items-center gap-4">
            {/* An unfilled swatch would just read as the page ground, so absence
                gets hatched rather than left blank. */}
            <span
              aria-hidden
              className="w-14 h-9 shrink-0 border border-border"
              style={
                s.color
                  ? { background: s.color }
                  : {
                      backgroundImage:
                        "repeating-linear-gradient(45deg, transparent 0 5px, rgba(12,11,9,0.12) 5px 6px)",
                    }
              }
            />
            <span className="text-sm text-foreground/80" style={{ fontWeight: 300 }}>
              {s.name}
            </span>
            {!s.color && (
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 ml-auto" style={MONO}>
                none
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Sampled from the walkthrough recording of the old site and from the redesign
// frames, so the swatches are the actual colours rather than an impression.
const OLD_COLORS = [
  { name: "Art", color: "#D9695A" },
  { name: "Fashion", color: "#B5B24A" },
  { name: "Music", color: "#E8762C" },
  { name: "Community", color: null },
  { name: "Essays", color: null },
  { name: "Food", color: null },
  { name: "Sponsored", color: null },
];

const NEW_COLORS = [
  { name: "Art", color: "#F7E4D2" },
  { name: "Community", color: "#E3DEF0" },
  { name: "Essays", color: "#E2EADB" },
  { name: "Fashion", color: "#F8DED8" },
  { name: "Food", color: "#DDE1F2" },
  { name: "Music", color: "#D8EAE4" },
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
          ["Timeline", "Jun 2026 to present"],
          ["Tools", "Figma, HTML, CSS"],
        ]}
        links={[{ label: "Visit the current site", href: "https://www.digmaglb.com/" }]}
      />

      <Section heading="The stories were good. Getting to them wasn't.">
        <Figure
          src={homeImg}
          alt="The redesigned DIG Magazine homepage"
          caption="The redesigned homepage, currently being built"
        />
        <Prose>
          DIG is a student-run arts and culture magazine at Cal State Long Beach, part of the university's student
          media group. It publishes across six categories, and the writing is genuinely good. The site was not the
          problem people complained about, which is usually a sign that it is the problem nobody has looked at.
        </Prose>
        <Prose>
          I came in as product and engineering lead on the redesign. My job was to decide what was actually wrong
          before anyone opened Figma, then to build the approved design into a responsive site.
        </Prose>
      </Section>

      <Section heading="What was wrong with the old site">
        <Figure
          src={oldHomeImg}
          alt="The old DIG Magazine homepage"
          caption="The old homepage. A photo, an issue label, and a hamburger where the navigation should be"
        />
        <Prose>
          I clicked through the existing navigation the way a reader would, on a phone, counting taps to the things
          people actually come for. It took too many.
        </Prose>
        <CardGrid items={problems} />
      </Section>

      <Section heading="Three taps to get to Fashion">
        <Prose>
          Every category on the old site sat behind the same nested path: open the menu, open Categories, then pick
          one. Magazine and Podcasts were already top level, so the nesting only punished the sections people
          actually browse for.
        </Prose>
        <Gallery columns={3}>
          <Figure src={oldNav1} alt="The old DIG site with the menu closed" caption="One. Open the menu" />
          <Figure
            src={oldNav2}
            alt="The old menu showing Categories, Magazine, Podcasts, Contribute"
            caption="Two. Open Categories"
          />
          <Figure
            src={oldNav3}
            alt="The old menu's category submenu, showing Fashion, Community, Art, Essays"
            caption="Three. Finally, Fashion"
          />
        </Gallery>
        <div className="mt-10">
          <Prose>
            The argument I made to the team was simple: our readers are students, they are reading on a phone between
            classes, and every click is a chance for them to leave. Nobody browses a student magazine patiently.
          </Prose>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-10">
          <NavTree
            label="Before"
            sublabel="Everything lived behind a hamburger, so the menu itself was the first thing you had to open."
            opens="Two things to open before a category"
            rows={OLD_NAV_TREE}
          />
          <NavTree
            label="After"
            sublabel="The bar is always on screen, so nothing has to be opened to reach it."
            opens="One thing to open before a category"
            rows={NEW_NAV_TREE}
          />
        </div>

        <div className="mt-10">
          <Prose>
            The new menu opens on hover, so looking inside Categories costs nothing on a desktop. But hover does not
            exist on a phone, and a phone is the whole reason I made the argument. So the number I would actually
            defend is the one that holds on any device: every category is one level from the top now instead of two.
          </Prose>
        </div>
        <ComparisonTable headings={["Destination", "Old path", "New path"]} rows={nav} />
        <div className="mt-10">
          <Figure
            src={menuImg}
            alt="The redesigned Categories menu showing all six categories as tiles"
            caption="The new Categories menu. Six sections at once, from a bar that is always on screen"
          />
        </div>
      </Section>

      <Section heading="The old site had color. It just didn't mean anything.">
        <Prose>
          The word everyone reached for was dull, and that is how it felt, but it is not quite what was wrong. There
          was color on the old site. Art sat on a coral field, Fashion on olive, Music on orange. Community, Food,
          and Sponsored Content got nothing. Three sections out of seven carried a color, and not one of those
          colors told a reader anything they could use.
        </Prose>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border mt-8">
          <ColorSystem label="Before, 3 of 7" items={OLD_COLORS} />
          <ColorSystem label="After, 6 of 6" items={NEW_COLORS} />
        </div>
        <div className="mt-10">
          <Prose>
            That is the failure mode of a half-measure: enough color to look decorated, not enough to look decided,
            and no relationship between a color and the thing sitting on it. It reads as dull because nothing was
            committed, not because nothing was bright.
          </Prose>
        </div>
        <Prose>
          The pushback was that it would be too loud for a publication doing real journalism. That is a fair worry
          and I did not dismiss it, but I think it mistakes seriousness for restraint. DIG is not a paper of record.
          It is an arts and culture magazine read by students who found it through Instagram, and the writing inside
          it is already loud. A website that undersells the work is not more serious, it is just quieter.
        </Prose>
        <Callout label="The argument">
          A magazine whose whole appeal is that it isn't safe should not have a website that is. But the answer was
          never more color. It was making the color mean something.
        </Callout>
        <Prose>
          I won that argument, and the version we landed on is maximalism with a rule attached: every category owns a
          hue and keeps it everywhere, from the menu tile to the homepage band to the landing page. A reader learns
          where they are before they read the label. The identity work and the navigation work turn out to be the
          same work, which is the part of this I would defend hardest.
        </Prose>
        <Gallery>
          <Figure
            src={oldSectionsImg}
            alt="A section of the old DIG homepage on an olive background"
            caption="Before. Color on some sections, none on others, four articles visible and the rest behind an arrow"
          />
          <Figure
            src={sectionsImg}
            alt="Redesigned category sections on the homepage"
            caption="After. Every category owns a field, and the articles are all on the page"
          />
        </Gallery>
        <Prose>
          That was a judgment call about who reads DIG, not a finding from a study, and I want to be straight about
          which is which.
        </Prose>
        <Figure
          src={categoryImg}
          alt="Redesigned Art category landing page"
          caption="A category landing page, carrying the same hue as its tile in the menu"
        />
        <Prose>
          Design by Jennifer Salceda. I set the direction and the structure, and I am building it.
        </Prose>
      </Section>

      <Section heading="Where it stands">
        <Stats
          items={[
            { figure: "2 → 1", label: "Menu levels to any category" },
            { figure: "6 / 7", label: "Categories promoted into the main menu" },
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
