import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function NotificationBanner() {
  return (
    <div className="w-full bg-[rgb(15,5,34)] px-4 pt-4">
      <div className="max-w-7xl mx-auto">
        <Alert className={cn(
          "relative overflow-hidden border-0 rounded-xl",
          "bg-gradient-to-br from-[#ff6b6b] via-[#ee5a24] to-[#ff9ff3]", // Warm gradient like bento cards
          "h-16 flex items-center px-5", // Match bento card padding
          "transition-all duration-200 ease-out hover:shadow-xl hover:-translate-y-0.5"
        )}>
          {/* Alpha mask texture overlay */}
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
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="relative flex items-center gap-3 w-full">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-black/20 backdrop-blur-sm border border-white/10 flex-shrink-0">
              <Info className="h-4 w-4 text-amber-400" />
            </div>
            <AlertDescription className="text-white/85 text-sm leading-relaxed font-normal">
              This page is currently work in progress, content and links are placeholders
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  )
} 