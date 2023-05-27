import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Newsletter',
  description: 'Stay updated!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} bg-navy`}>{children}</body>
    </html>
  )
}
