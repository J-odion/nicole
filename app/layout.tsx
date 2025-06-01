import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicole Hendah',
  description: 'Created with v0Recent Graduate | Aspiring Professional | Passionate Learner',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
