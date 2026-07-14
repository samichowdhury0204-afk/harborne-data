import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Harborne Data — B2B Data & Pipeline Growth',
  description: 'We help established firms with their outbound, B2B data & pipeline growth.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Harborne Data',
    description: 'B2B Data & Pipeline Growth for Established Firms',
    url: 'https://harborne-data.com',
    siteName: 'Harborne Data',
    images: [
      {
        url: '/logo-rounded.webp',
        width: 400,
        height: 400,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink">
        {children}
      </body>
    </html>
  )
}
