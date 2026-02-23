import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DbCraft - AI Database Schema Generator',
  description: 'Generate production-ready database schemas in seconds. Describe your app, get SQL, diagrams, and migrations instantly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
