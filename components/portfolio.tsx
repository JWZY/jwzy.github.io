// Strictly black & white. ONE font, ONE size, ONE weight, ONE colour, ONE style.
// Type styling lives globally in globals.css — do not add font/size/weight/colour
// utility classes here. Everything inherits #000 Inter 13px/400.
//
// Layout (the /grid skill — Samara, "Making and Breaking the Grid"):
// With one type size there's no scale-contrast or imagery to fill the page, so the
// editorial feel comes entirely from STRUCTURE:
//   - Spine: name, section labels, items and colophon all hang off one left line.
//   - Anchored corners: name top-left, colophon bottom-right → the negative space is
//     FRAMED (a composed void), and a top-left→bottom-right diagonal adds tension.
//   - Capped measure: items sit in a defined column; the right side is a deliberate,
//     shaped margin — active whitespace, not leftover.
//   - Top-aligned, not centred (centering is the usual cause of "empty").
// Adapts per context (/adapt): on mobile it collapses to a single flush-left column.

interface Item {
  label: string
  href: string
  external?: boolean
}

interface Section {
  label: string
  items: Item[]
}

const sections: Section[] = [
  {
    label: "Works",
    items: [
      {
        label: "Checkout inside TikTok",
        href: "https://ads.tiktok.com/help/article/about-in-app-shopify-checkout-experience-tiktok",
        external: true,
      },
    ],
  },
  {
    label: "Playground",
    items: [
      { label: "Holographic cards", href: "https://javanwang.com/cards/", external: true },
      { label: "Weather generator", href: "https://javanwang.com/rpg-weather/", external: true },
      { label: "Cozy Glade", href: "https://javanwang.com/cozy-glade/#campaign_overview.md", external: true },
    ],
  },
]

export default function Portfolio() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-[1100px] flex-col px-[clamp(20px,5vw,72px)] py-[clamp(28px,5vw,56px)]">
        {/* Masthead — top-left anchor; start of the diagonal */}
        <header>
          <span>Javan</span>
        </header>

        {/* Index — editorial contents block on the left spine; top-aligned, not centred.
            The flowline gap below the masthead is intentional breathing room. */}
        <div className="flex flex-1 flex-col items-start justify-start gap-12 pt-[clamp(48px,14vh,160px)] md:gap-16">
          {sections.map((section) => (
            <section
              key={section.label}
              className="grid w-full grid-cols-1 gap-2 md:grid-cols-[7rem_minmax(0,24rem)] md:gap-10"
            >
              <h2>{section.label}</h2>
              <ul className="-mt-2 flex flex-col items-start gap-2 md:-mt-1 md:gap-3">
                {section.items.map((item) => {
                  const linkProps = item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}
                  return (
                    <li key={item.href}>
                      {/* py gives a ~44px touch target on mobile without changing type */}
                      <a
                        href={item.href}
                        {...linkProps}
                        className="inline-block py-2 underline underline-offset-4 hover:no-underline md:py-1"
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* Colophon — bottom-right on desktop (closes the diagonal), flush-left on mobile */}
        <footer className="md:text-right">
          <span>Updated 2026</span>
        </footer>
      </div>
    </main>
  )
}
