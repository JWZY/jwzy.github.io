// Strictly black & white. ONE font, ONE size, ONE colour, ONE style — and ONE
// weight (400) everywhere except the bold "Javan" masthead (a deliberate, by-
// request exception). Type styling otherwise lives in globals.css; don't add
// font/size/weight/colour utility classes to the index items.
//
// Layout (the /grid skill — Samara, "Making and Breaking the Grid"):
// With one type size there's no scale-contrast or imagery to fill the page, so the
// editorial feel comes entirely from STRUCTURE — here, a left SPINE:
//   - Spine: name, section labels, items and colophon ALL hang off one left edge.
//   - Section label sits ABOVE its items; each item is a year │ label row, with
//     tabular figures so the year digits stay equal-width and line up (figures
//     only — same font/size/weight/colour).
//   - Two columns on desktop (Works │ Playground) sharing one top flowline; they
//     stack into a single column on mobile, where two would be too cramped.
//   - Capped measure, CENTERED: the content block is held to a narrow measure and
//     centered in the viewport (mx-auto), so the left/right margins are symmetric.
//     Inside the block everything still hangs off ONE left edge (the spine), so the
//     index reads as a tidy contained unit — not marooned on one side. (Earlier
//     iterations tried a name-TL → colophon-BR diagonal, then a left-pinned open
//     margin; with content this sparse both read as lopsided/empty. Centering the
//     spine block is what finally balanced it.)
//   - Even vertical rhythm: one consistent flowline gap, name → columns → colophon,
//     and the whole block is centered in the viewport so the leftover height frames
//     it (balanced space above and below) rather than pooling as a void at the bottom.

interface Item {
  year?: string
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
        year: "2025",
        label: "Collective goes international",
        href: "https://www.shopify.com/ca/editions/winter2026#b2b",
        external: true,
      },
      {
        year: "2025",
        label: "TikTok x Shopify Checkout",
        href: "https://ads.tiktok.com/help/article/about-in-app-shopify-checkout-experience-tiktok",
        external: true,
      },
    ],
  },
  {
    label: "Playground",
    items: [
      { year: "2026", label: "Cards", href: "https://javanwang.com/cards/", external: true },
      { year: "2026", label: "RPG weather visualizer", href: "https://javanwang.com/rpg-weather/", external: true },
      { year: "2026", label: "Tabletop Wiki", href: "https://javanwang.com/cozy-glade/#campaign_overview.md", external: true },
    ],
  },
]

export default function Portfolio() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-[680px] flex-col justify-center px-[clamp(20px,5vw,40px)] py-[clamp(28px,5vw,56px)]">
        {/* Masthead — top of the left spine.
            Bold by request: the one weight exception (everything else is 400). */}
        <header>
          <span className="font-bold">Javan</span>
        </header>

        {/* Index — two columns on desktop (stacked on mobile). The whole block is
            centered by the container (max-w + mx-auto), so this just fills the
            measure. One flowline gap below the masthead. */}
        <div className="mt-14 grid grid-cols-1 gap-14 md:mt-16 md:grid-cols-2 md:gap-16">
          {sections.map((section) => (
            <section key={section.label} className="flex flex-col items-start">
              <h2>{section.label}</h2>
              <ul className="mt-6 flex flex-col items-start gap-2 md:gap-3">
                {section.items.map((item) => {
                  const linkProps = item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}
                  return (
                    <li
                      key={item.href}
                      className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3 md:gap-4"
                    >
                      {/* tabular-nums sets font-variant-numeric only — same Inter
                          13px/400/#000, just equal-width digits so the year column
                          lines up. Not a type change; figures only. */}
                      <span className="tabular-nums">{item.year}</span>
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

        {/* Colophon — stays on the left spine, one flowline gap below the index,
            closing the column (not pinned to the bottom-right corner). */}
        <footer className="mt-14 md:mt-16">
          <span>June 2026</span>
        </footer>
      </div>
    </main>
  )
}
