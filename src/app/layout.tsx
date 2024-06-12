import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Steven's Portfolio - Front end Developer",
  description: 'TODO'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="dark" lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <div className="background absolute inset-0 -z-20 size-full bg-background bg-[size:8rem_10rem]">
          <div className="background-shadow  absolute inset-0 -z-10"></div>
        </div>
        {children}
        <Toaster richColors/>
      </body>
    </html>
  )
}
