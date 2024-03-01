import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk, Questrial } from 'next/font/google'
import Navbar from './_components/navbar/Navbar'
import BookCard from './_components/bookCard/BookCard'

const spaceGrotesk = Space_Grotesk({
  weight: ['700', '600', '500', '400', '300'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const questrial = Questrial({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Postbox Library',
  description: 'Community library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${questrial.variable} ${spaceGrotesk.variable}`}
    >
      <body className={questrial.className}>
        <Navbar />
        <BookCard />
        {children}
      </body>
    </html>
  )
}
