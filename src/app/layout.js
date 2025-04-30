import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '800', variable: '--font-montserrat' });

export const metadata = {
  title: 'Studio Aeronef',
  description: "Studio d'enregistrement Aeronef",
  charSet: 'UTF-8',
}

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}