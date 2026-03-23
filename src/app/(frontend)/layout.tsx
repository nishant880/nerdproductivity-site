import React from 'react'
import '@/app/globals.css'

export const metadata = {
  title: 'Nerd Productivity | Productivity, AI & Business Growth',
  description:
    'Double your revenue while working the same or fewer hours. Proven productivity system + AI-powered execution for business owners.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-grey font-body antialiased">{children}</body>
    </html>
  )
}
