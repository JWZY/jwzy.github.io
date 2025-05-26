import type React from "react"
import { cn } from "@/lib/utils"
import { Briefcase, Users, Lightbulb, Smartphone, GraduationCap, Eye, Gamepad2, ShoppingCart, Search, User, Github, Linkedin, Mail, Palette } from "lucide-react"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

interface BentoItem {
  title: string
  description: string
  icon: React.ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  colSpan?: number
  hasPersistentHover?: boolean
  href: string
  customClassName?: string
  gradientVariant?: 'primary' | 'warm' | 'cool' | 'accent'
}

interface BentoGridProps {
  items: BentoItem[]
}

const itemsSample: BentoItem[] = [
  // Priority 1: Hero/Featured (Top)
  {
    title: "About Javan",
    description: "5+ years of experience reducing friction from high complexity systems at Shopify, Clio, and high-growth startups.",
    icon: <User className="w-4 h-4 text-amber-400" />,
    // meta: "Toronto",
    // status: "🇨🇦",
    tags: ["Designer", "Engineer"],
    colSpan: 2,
    href: "/about",
    gradientVariant: 'primary',
  },
  // Social Links - Desktop Version (hidden on mobile)
  {
    title: "Connect & Follow",
    description: "Find me on social platforms, view my code, or get in touch for collaboration opportunities.",
    icon: <Linkedin className="w-4 h-4 text-rose-400" />,
    meta: "Social",
    tags: ["LinkedIn", "GitHub", "Email"],
    href: "https://www.linkedin.com/in/javanwang/",
    customClassName: "hidden md:block",
    gradientVariant: 'accent',
  },
  
  // Priority 2: Current Work (Shopify)
  {
    title: "Collective",
    description: "Supplier discovery through enhanced search experience that streamlines retailer-supplier connections.",
    icon: <Search className="w-4 h-4 text-cyan-300" />,
    status: "Current",
    colSpan: 2,
    tags: ["B2B", "Search", "Discovery"],
    href: "https://www.shopify.com/collective",
    gradientVariant: 'warm',
  },

  {
    title: "TikTok Checkout Integration",
    // meta: "Shopify",
    description: "Launched in-app checkout experience that eliminates transaction fees and maximizes merchant ROI with seamless Shop Pay integration.",
    icon: <ShoppingCart className="w-4 h-4 text-amber-400" />,
    status: "Beta release",
    tags: ["E-commerce", "Mobile", "Integration"],
    colSpan: 1,
    href: "https://www.shopify.com/checkout",
    gradientVariant: 'cool',
  },

  // Priority 3: Major Achievements
  {
    title: "Redesign Boosted Installation by 260%",
    meta: "12 months",
    description:
      "Led research and design to transform app discovery and reduce customer acquisition friction for Canada's leading legal software platform.",
    icon: <Briefcase className="w-4 h-4 text-rose-400" />,
    // status: "Featured",
    tags: ["B2B SaaS", "Research", "Growth"],
    colSpan: 1,
    href: "https://www.clio.com/partnerships/developers/",
    gradientVariant: 'accent',
  },

  {
    title: "$4 Physics Education Kit",
    description: "10-week Microsoft partnership creating trebuchet kit with Arduino sensors and P5.js visualization for 4th grade classrooms.",
    icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
    meta: "Microsoft",
    tags: ["Education", "STEM"],
    href: "https://www.microsoft.com/en-us/education",
    gradientVariant: 'primary',
  },

  {
    title: "Playground Projects",
    meta: "Side Projects",
    description: "Experimental designs, creative coding projects, and fun explorations outside of client and professional work.",
    icon: <Palette className="w-4 h-4 text-rose-400" />,
    // status: "Creative",
    tags: ["Experiments", "Creative", "Fun"],
    href: "/playground",
    gradientVariant: 'accent',
  },
  
  // Social Links - Mobile Version (hidden on desktop)
  {
    title: "Connect & Follow",
    description: "Find me on social platforms, view my code, or get in touch for collaboration opportunities.",
    icon: <Linkedin className="w-4 h-4 text-blue-400" />,
    meta: "Social",
    tags: ["LinkedIn", "GitHub", "Email"],
    href: "https://www.linkedin.com/in/javanwang/",
    customClassName: "mobile-only",
    gradientVariant: 'cool',
  },
]

// Gradient variants based on Shopify Editions style
const getGradientClasses = (variant: string = 'primary') => {
  const gradients = {
    primary: 'from-[#5564ec] via-[#5564ec] to-[#6632ce]', // Main Shopify gradient
    warm: 'from-[#ff6b6b] via-[#ee5a24] to-[#ff9ff3]', // Orange to pink
    cool: 'from-[#5E1628] to-[#ff0050]', // TikTok: Black to neon cyan to neon pink
    accent: 'from-[#00b894] via-[#00cec9] to-[#74b9ff]', // Green to blue
  }
  return gradients[variant as keyof typeof gradients] || gradients.primary
}

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="min-h-screen bg-[rgb(15,5,34)] p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <Link
            href={item.href}
            key={`${item.title}-${item.status || item.meta}-${index}`}
            className={cn(
              item.colSpan || "col-span-1", 
              item.colSpan === 2 ? "md:col-span-2" : "",
              item.customClassName
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              className={cn(
                "group relative h-full transition-all duration-200 ease-out hover:shadow-2xl",
                "hover:-translate-y-1 will-change-transform",
                "overflow-hidden border-0",
                "bg-gradient-to-br", getGradientClasses(item.gradientVariant),
                "card-noise-overlay",
                "flex flex-col",
                {
                  "shadow-xl -translate-y-1": item.hasPersistentHover,
                },
              )}
            >
              {/* Alpha mask texture overlay in top-left corner */}
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.15] pointer-events-none">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/Alpha_mask.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top left',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>

              {/* Noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/noise.avif)',
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'repeat',
                  }}
                />
              </div>

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-150" />

              {/* Subtle border glow */}
              <div
                className={cn(
                  "absolute inset-0 rounded-xl",
                  "bg-gradient-to-br from-white/20 via-transparent to-transparent",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                )}
              />

              <CardHeader className="relative space-y-0 p-5">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/10">
                    {item.icon}
                  </div>
                  {item.status && (
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 text-white/90">
                      {item.status}
                    </span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-3 p-5 pt-0 flex-grow">
                <h3 className="font-semibold text-white tracking-tight text-base leading-tight">
                  {item.title}
                  {item.meta && (
                    <span className="ml-2 text-xs text-white/70 font-normal">
                      {item.meta}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-white/85 leading-relaxed font-normal">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter className="relative p-5 mt-auto">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    {item.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 transition-all duration-150 hover:bg-black/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {item.cta || "View Project →"}
                  </span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
