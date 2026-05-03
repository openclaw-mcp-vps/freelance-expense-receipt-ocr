import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReceiptScan — OCR Receipts into Tax Deductions',
  description: 'Scan receipts, extract data via OCR, categorize expenses for tax deductions, and generate reports. Built for freelancers, consultants, and gig workers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="65a6e8be-92d1-4d15-88df-81b9a5bbfc34"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
