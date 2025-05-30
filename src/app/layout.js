import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });

export const metadata = {
  title: 'Studio Aeronef',
  description: "Studio d'enregistrement Aeronef",
  charSet: 'UTF-8',
}

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}