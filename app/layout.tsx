import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Isdor Develops',
  description: 'Travel Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentBannerIndex = 0; // Define the default or dynamic value for the current banner index

  return (
    <html lang="en">
      <body>
        <Navbar currentBannerIndex={currentBannerIndex} /> {/* Pass the prop here */}
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
