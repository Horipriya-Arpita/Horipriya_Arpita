import type React from "react"
// import "./globals.css"
import "@/app/globals.css"; // Adjust path if needed
import type { Metadata } from "next"
import { Inter } from "next/font/google"
//import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Horipriya Arpita | Portfolio",
  description: "Full Stack Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
