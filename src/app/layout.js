import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BootstrapProvider from '../components/BootstrapProvider';
import { Noto_Serif_Devanagari } from 'next/font/google';

const devanagariFont = Noto_Serif_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
});

export const metadata = {
  title: 'Royal Website',
  description: 'Figma to Next.js with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${devanagariFont.variable}`}>
        <BootstrapProvider>
          <Navbar />
          {children}
          <Footer />
        </BootstrapProvider>
      </body>
    </html>
  );
}
