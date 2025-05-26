import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javan Wang - Portfolio',
  description: 'Designer & Engineer - 5+ years reducing system complexity at Shopify, Clio, and high-growth startups',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className="dark bg-[rgb(15,5,34)] text-white">
        {children}
      </body>
    </html>
  )
}
