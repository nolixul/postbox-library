import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { Montserrat, Asap } from 'next/font/google'
import Navbar from './_components/navbar/Navbar'
import Container from './Container'

const spaceGrotesk = Space_Grotesk({
  weight: ['700', '600', '500', '400', '300'],
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const asap = Asap({
  subsets: ['latin'],
  variable: '--font-heading',
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
      className={`${montserrat.variable} ${asap.variable} ${spaceGrotesk.variable}`}
    >
      <body className={montserrat.className}>
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
