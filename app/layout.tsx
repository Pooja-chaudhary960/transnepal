import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
