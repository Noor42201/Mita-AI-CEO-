import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Mita AI CEO - Digital Leader System',
  description: 'Advanced artificial intelligence system designed to function as a digital leader, combining architectural thinking, legal framework expertise, and strategic technology implementation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
