import type { Metadata } from 'next'
import './globals.css'
import { NotificationBanner } from '@/components/notification-banner'

export const metadata: Metadata = {
  title: 'Javan Wang - Portfolio',
  description: 'Designer & Engineer - 5+ years reducing system complexity at Shopify, Clio, and high-growth startups',
  generator: 'Next.js',
  openGraph: {
    title: 'Javan Wang - Portfolio',
    description: 'Designer & Engineer - 5+ years reducing system complexity at Shopify, Clio, and high-growth startups',
    url: 'https://javanwang.com',
    siteName: 'Javan Wang Portfolio',
    images: [
      {
        url: 'https://javanwang.com/app/img/meta.png',
        width: 1200,
        height: 630,
        alt: 'Javan Wang Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Javan Wang - Portfolio',
    description: 'Designer & Engineer - 5+ years reducing system complexity at Shopify, Clio, and high-growth startups',
    images: ['https://javanwang.com/app/img/meta.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className="dark bg-[rgb(15,5,34)] text-white">
        <NotificationBanner />
        {children}
      </body>
    </html>
  )
}
