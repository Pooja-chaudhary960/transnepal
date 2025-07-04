'use client'
import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/header';
import { usePathname } from 'next/navigation';
import Footer from '../components/Footer/Footer';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname=usePathname();
  return (
    <html>
      <body>
        <Navbar />
        {pathname === '/' && <Header/>}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
