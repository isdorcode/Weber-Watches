import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isdor Develops',
  description: 'Travel Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en">
      <body>
       <Navbar />
       <main className='relative overflow-hidden'>
         {children}
       </main>
        <Footer />
      </body>
    </html>
  )
}
