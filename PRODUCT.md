# Product

## Register

brand

## Platform

web

## Users

The primary reader is a recruiter screening applicants for early-career APM programs. They arrive with a stack of near-identical CS-student portfolios, they are often on a phone, and they are deciding in well under a minute whether this person moves forward. They are not reading; they are triaging.

A secondary reader is the hiring manager who opens the site *after* the recruiter passes it along. That person will actually read a case study and check whether the reasoning holds up. The site has to survive the skim to ever reach them.

## Product Purpose

Prove that a computer science student can do product reasoning. The case studies are the evidence, not the résumé; the résumé only records that the work happened. Success is a recruiter closing the tab convinced that the thinking is real, and passing it on.

The site's central design problem follows directly from its readers: the person who decides is skimming, and the thing being proved takes reading. **The skim itself has to carry the argument.** Depth is available for whoever wants it, but nothing load-bearing may be buried inside it.

## Positioning

She ships real things that real people depend on. Not coursework, not hypotheticals — live publications with actual readers and actual editors whose work stops when the site breaks.

## Conversion & proof

- Primary CTA: download the résumé. Secondary: read a case study — for the recruiter who is interested but not yet ready to file her anywhere.
- The line a visitor remembers after 10 seconds: *"She runs real websites that real people depend on."*
- Belief ladder — what the visitor must accept, in order, before downloading:
  1. This person is technically real. (The site itself is the first exhibit.)
  2. She ships things other people depend on, not class projects.
  3. She makes the call about *what* gets built, not just how.
  4. She is worth twenty minutes of a phone screen.
- Proof on hand: the live publication sites she runs (Long Beach Current, DIG, ENYE) and the Schedaddle product spec (`Schedaddle_Product_Spec.pdf`) — a real PM artifact rather than a claim about one.

## Brand Personality

Curious, rigorous, warm. Asks the extra question, backs the claim with evidence, and is still someone you would want in the room.

The visual identity is editorial and structural. A cream ground, Barlow Condensed set large and uppercase for display, Barlow light for reading, DM Mono for the few labels that are genuinely labels, and the near-black ink used as a committed *surface* rather than only as type. Hairlines and one-pixel grid gaps do the separating. No shadows, no rounded corners, `--radius: 0`.

The organising idea is **structure made visible**. The most credible thing on this site is that the claims are labelled — "that was a judgment call, not a finding from a study." The design should read like a specification rather than a magazine spread: strict, sectioned, unafraid of a plain rule between two ideas.

A previous version of this site was a committed Windows XP revival. It is archived at `/v1/`, and the argument it made still holds: in a stack of interchangeable portfolios, being remembered is a strategy. This version pursues the same end through restraint rather than costume. That trade is deliberate, and the risk it accepts is blandness — which is what the anti-references below exist to police.

## Anti-references

- **The generic AI-generated portfolio.** Not the cream ground itself, which this site uses deliberately, but the scaffolding that normally arrives with it: a small uppercase tracked eyebrow above every section, `01 / 02 / 03` markers on things that are not a sequence, endless identical cards, gradient text. Every one of those was present in an earlier pass of this design and was removed on purpose. The test: if a section needs a label above it to explain what it is, the heading underneath is not doing its job. One kicker per case study page, naming what the page is, is a system; a kicker on every section is a tic.
- **The corporate SaaS landing page.** Hero metric, three feature cards, stock gradients, a "Let's chat" button. Reads as a product nobody can buy.
- **The dense résumé dump.** Walls of bullets and responsibilities. Says everything, communicates nothing, impossible to skim — and skimming is the whole job.

Notably *not* an anti-reference: warmth. The footer's "don't leave too soon, say hi!" is in her voice and earns its place. The failure mode to avoid is decoration with nothing underneath it, not personality.

## Design Principles

1. **The skim carries the argument.** The decisive reader never scrolls to the bottom. If a claim only lands for someone who reads every word, it does not land.
2. **Show the work; label the judgment.** State plainly which claims are measured and which are opinion. The existing case-study copy already does this ("that was a judgment call, not a finding from a study") and it is the most PM-credible move on the site. Protect it.
3. **Evidence over responsibility.** "Here is what shipped and who depends on it" beats "responsible for platform management." Every section earns its place with an artifact, not a duty.
4. **Commit the surface.** One saturated field beats an accent colour sprinkled at under ten percent. The ink footer, on every page, is that commitment. Hedging it back into another cream band would leave the site with no second visual world at all, and restraint without a committed move is just beige.
5. **Memorability is strategy.** Being distinctive is not vanity here; it is the only defense against being the ninth identical portfolio of the morning.

## Accessibility & Inclusion

WCAG AA. Body text at 4.5:1 or better, keyboard navigable throughout, `prefers-reduced-motion` honored, semantic HTML. The XP aesthetic is no excuse for period-accurate inaccessibility — 2001 chrome, 2026 standards.
