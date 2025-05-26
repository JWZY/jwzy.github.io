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
}

interface BentoGridProps {
  items: BentoItem[]
}

const itemsSample: BentoItem[] = [
  // Priority 1: Hero/Featured (Top)
  {
    title: "About Javan",
    description: "5+ years reducing system complexity at Microsoft, Intel, Shopify, and high-growth startups with HCI and engineering background.",
    icon: <User className="w-4 h-4 text-amber-500" />,
    meta: "Toronto",
    tags: ["Designer", "Engineer"],
    colSpan: 2,
    href: "/about",
  },
  // Social Links - Desktop Version (hidden on mobile)
  {
    title: "Connect & Follow",
    description: "Find me on social platforms, view my code, or get in touch for collaboration opportunities.",
    icon: <Linkedin className="w-4 h-4 text-blue-600" />,
    meta: "Social",
    tags: ["LinkedIn", "GitHub", "Email"],
    href: "https://www.linkedin.com/in/javanwang/",
    customClassName: "hidden md:block",
  },
  
  // Priority 2: Current Work (Shopify)
  {
    title: "Revolutionary TikTok Checkout",
    meta: "Shopify",
    description: "Launched in-app checkout experience that eliminates transaction fees and maximizes merchant ROI with seamless Shop Pay integration.",
    icon: <ShoppingCart className="w-4 h-4 text-emerald-500" />,
    status: "Live",
    tags: ["E-commerce", "Mobile", "Integration"],
    colSpan: 2,
    href: "https://www.shopify.com/checkout",
  },
  {
    title: "Shopify Collective Search",
    description: "Revolutionized supplier discovery through enhanced search experience that streamlines retailer-supplier connections.",
    icon: <Search className="w-4 h-4 text-purple-500" />,
    status: "Current",
    tags: ["B2B", "Search", "Discovery"],
    href: "https://www.shopify.com/collective",
  },

  // Priority 3: Major Achievements
  {
    title: "Boosted New User Enablement by 400%",
    meta: "12 months",
    description:
      "Led foundational research with 12 users across 10 firms, transforming app discovery and reducing customer acquisition friction for Canada's leading legal software platform.",
    icon: <Briefcase className="w-4 h-4 text-blue-500" />,
    status: "Featured",
    tags: ["B2B SaaS", "Research", "Growth"],
    colSpan: 2,
    href: "https://www.clio.com/partnerships/developers/",
  },
  {
    title: "Rescued Failing Product Launch",
    meta: "8 months",
    description: "Transformed confusing prioritization workflow into intuitive PM tool by conducting usability research and eliminating friction points.",
    icon: <Lightbulb className="w-4 h-4 text-red-500" />,
    status: "Success",
    tags: ["Product Management", "UX Research"],
    href: "https://roadmunk.com",
  },

  // Priority 4: Technical/Partnership Work
  {
    title: "AI-Powered Windows Feature",
    description: "19-week Intel partnership creating personalized virtual workspace that automatically organizes applications and files.",
    icon: <Eye className="w-4 h-4 text-indigo-500" />,
    status: "Partnership",
    tags: ["AI", "Windows", "Intel"],
    href: "https://www.intel.com",
  },
  {
    title: "Accelerated Development by 60%",
    description: "Created atomic design system and React component library for 15+ screen sizes, enabling rapid B2B healthcare deployment.",
    icon: <Smartphone className="w-4 h-4 text-teal-500" />,
    meta: "15+ screens",
    tags: ["Design System", "Mobile"],
    href: "https://www.noom.com",
    customClassName: "hidden",
  },
  {
    title: "$4 Physics Education Kit",
    description: "10-week Microsoft partnership creating trebuchet kit with Arduino sensors and P5.js visualization for 4th grade classrooms.",
    icon: <GraduationCap className="w-4 h-4 text-orange-500" />,
    meta: "Microsoft",
    tags: ["Education", "STEM"],
    href: "https://www.microsoft.com/en-us/education",
  },

  // Priority 5: Research & Creative
  {
    title: "HoloLens Film Industry Research",
    meta: "5 months",
    description: "Led ethnographic research with major motion picture experts, identifying 3 market-ready opportunities for Mixed Reality.",
    icon: <Eye className="w-4 h-4 text-sky-500" />,
    status: "Research",
    tags: ["Mixed Reality", "Film"],
    href: "https://www.microsoft.com/en-us/hololens",
    customClassName: "hidden",
  },
  {
    title: "Mobile RPG User Experience",
    meta: "40+ players",
    description:
      "Designed core game systems and conducted longitudinal diary studies with 171 feedback entries, balancing player satisfaction with technical constraints.",
    icon: <Gamepad2 className="w-4 h-4 text-violet-500" />,
    status: "Alpha Test",
    tags: ["Gaming", "Mobile", "UX Research"],
    href: "https://uken.com",
    customClassName: "hidden",
  },
  {
    title: "Playground Projects",
    meta: "Side Projects",
    description: "Experimental designs, creative coding projects, and fun explorations outside of client work.",
    icon: <Palette className="w-4 h-4 text-pink-500" />,
    status: "Creative",
    tags: ["Experiments", "Creative", "Fun"],
    href: "/playground",
  },
  
  // Social Links - Mobile Version (hidden on desktop)
  {
    title: "Connect & Follow",
    description: "Find me on social platforms, view my code, or get in touch for collaboration opportunities.",
    icon: <Linkedin className="w-4 h-4 text-blue-600" />,
    meta: "Social",
    tags: ["LinkedIn", "GitHub", "Email"],
    href: "https://www.linkedin.com/in/javanwang/",
    customClassName: "mobile-only",
  },
]

export default function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
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
              "group relative h-full transition-all duration-300 hover:shadow-lg",
              "hover:-translate-y-0.5 will-change-transform",
              "overflow-hidden",
              {
                "shadow-md -translate-y-0.5": item.hasPersistentHover,
              },
            )}
          >
            <div
              className={cn(
                "absolute inset-0",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <CardHeader className="relative space-y-0 p-4">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                  {item.icon}
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                  {item.status || "Active"}
                </span>
              </div>
            </CardHeader>

            <CardContent className="relative space-y-2 p-4 pt-0">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
                {item.title}
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">{item.meta}</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">{item.description}</p>
            </CardContent>

            <CardFooter className="relative p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  {item.tags?.map((tag) => (
                    <span
                      key={`${item.title}-${tag}`}
                      className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-xs transition-all duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.cta || "View Project →"}
                </span>
              </div>
            </CardFooter>

            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl p-px bg-linear-to-br from-transparent via-gray-200/70 to-transparent dark:via-white/10",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300",
              )}
            />
          </Card>
        </Link>
      ))}
    </div>
  )
}
